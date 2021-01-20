import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Thumbnail from "../components/Thumbnail";
import Photo from "../components/Photo";
import Post from "../components/Post";
import { fetchFriends } from "../actions/friendActions";
import { fetchPhotos } from "../actions/photoActions";
import { fetchPosts } from "../actions/postActions";
import "react-tabs/style/react-tabs.css";

function UserPage() {
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.friends);
  const photos = useSelector((state) => state.photos.photos);
  const posts = useSelector((state) => state.posts.posts);
  const friendsPreview = friends.slice(0, 5);

  function getAge() {
    const today = new Date();
    const bd = new Date(loggedInUser.birthdate);
    let age = (today.getTime() - bd.getTime()) / 1000;
    age /= 60 * 60 * 24;
    return Math.abs(Math.round(age / 365.25));
  }

  const displayPosts = (
    // onSelect={(index) => console.log(index)}
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab>About</Tab>
        <Tab>Posts</Tab>
        <Tab>Friends</Tab>
        <Tab>Photos</Tab>
      </TabList>
      <TabPanel>
        <div className="container">
          <div className="row">
            <div className="col-6 info-block">
              <h3>Bio</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="table-header">Name:</th>
                    <td className="table-data">
                      {loggedInUser.firstname + " " + loggedInUser.lastname}
                    </td>
                  </tr>
                  <tr>
                    <th className="table-header">Age:</th>
                    <td className="table-data">{getAge()}</td>
                  </tr>
                  <tr>
                    <th className="table-header">Email:</th>
                    <td className="table-data">{loggedInUser.email}</td>
                  </tr>
                  <tr>
                    <th className="table-header">University:</th>
                    <td className="table-data">{loggedInUser.university}</td>
                  </tr>
                  <tr>
                    <th className="table-header">Work:</th>
                    <td className="table-data">{loggedInUser.work}</td>
                  </tr>
                  <tr>
                    <th className="table-header">Nationality:</th>
                    <td className="table-data">{loggedInUser.nationality}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <h3>Interests</h3>
              <table>
                <tbody>
                  <tr>
                    <th className="table-header">Sport:</th>
                    <td className="table-data">Jiu-jitsu</td>
                  </tr>
                  <tr>
                    <th className="table-header">Music:</th>
                    <td className="table-data">Hip-hop</td>
                  </tr>
                  <tr>
                    <th className="table-header">Hobbies:</th>
                    <td className="table-data">Chess</td>
                  </tr>
                  <tr>
                    <th className="table-header">Languages:</th>
                    <td className="table-data">English, German</td>
                  </tr>
                  <tr>
                    <th className="table-header">Books:</th>
                    <td className="table-data">Non-fiction</td>
                  </tr>
                  <tr>
                    <th className="table-header">Politics:</th>
                    <td className="table-data">Liberal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="posts-block">
          {posts.map((p) => (
            <Post
              className="thumb"
              pic={p.piclocation}
              name={p.username}
              date={p.date}
              post={p.post}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="friends-tab">
          {friends.map((u) => (
            <Thumbnail
              className="thumb"
              name={u.username}
              pic={u.piclocation}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="photos-tab">
          {photos.map((p) => (
            <Photo pic={p.pic_location} />
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );

  useEffect(() => {
    dispatch(fetchFriends(loggedInUser.id));
  }, [dispatch, loggedInUser.id]);
  useEffect(() => {
    dispatch(fetchPhotos(loggedInUser.id));
  }, [dispatch, loggedInUser.id]);
  useEffect(() => {
    dispatch(fetchPosts(loggedInUser.id));
  }, [dispatch, loggedInUser.id]);

  return (
    <div id="userpage">
      {/* <div className="banner-wrapper"> */}
      <div className="container">
        <div className="row">
          {/* <div className="row"> */}
          <div className="col-1"></div>
          {/* <div className="col-1"></div> */}
          <div className="col-10 profile-banner default-background">
            {/* <div className="col-10 profile-banner default-background"> */}
            <div className="profile-pic">
              <img
                className="border border-white"
                src={loggedInUser.piclocation}
                alt=""
                width="150px"
                height="150px"
              ></img>
            </div>
            <h3 className="username">
              {loggedInUser.username.charAt(0).toUpperCase() +
                loggedInUser.username.slice(1)}
            </h3>
            <div className="overlay"></div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4 friends-block">
            <div className="row friends-header">
              <div className="col-3">
                {" "}
                <p>Friends</p>
              </div>
              <div className="col-9"></div>
            </div>
            <div className="row thumbnails">
              {friendsPreview.map((u) => (
                <Thumbnail
                  className="thumb"
                  name={u.username}
                  pic={u.piclocation}
                />
              ))}
              <div className="friends-btn-wrapper">
                <button className="friends-btn">See all...</button>
              </div>
            </div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 friends-button"> </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="col-6 misc-block">{displayPosts}</div>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 footer">
            <p>Application made as a non-commercial exercise</p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
