import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Thumbnail from "../components/Thumbnail";
import Post from "../components/Post";
import { fetchFriends } from "../actions/friendActions";
import { fetchPhotos } from "../actions/photoActions";
import { fetchPosts, addLike } from "../actions/postActions";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "react-tabs/style/react-tabs.css";
import { getProfile } from "../actions/otherActions";
import { useHistory } from "react-router-dom";

function OtherPage() {
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const otherUser = useSelector((state) => state.other.otherUser);
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.friends);
  const photos = useSelector((state) => state.photos.photos);
  const posts = useSelector((state) => state.posts.posts);
  const friendsPreview = friends.slice(0, 5);
  const [change, setChange] = useState();
  const [tabIndex, setTabIndex] = useState(0);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchFriends(otherUser.id));
  }, [dispatch, otherUser.id]);
  useEffect(() => {
    dispatch(fetchPhotos(otherUser.id));
  }, [dispatch, otherUser.id]);
  useEffect(() => {
    dispatch(fetchPosts(otherUser.id));
  }, [dispatch, otherUser.id, change]);

  function getAge() {
    const today = new Date();
    const bd = new Date(otherUser.birthdate);
    let age = (today.getTime() - bd.getTime()) / 1000;
    age /= 60 * 60 * 24;
    return Math.abs(Math.round(age / 365.25));
  }

  function like(id) {
    addLike(id);
    setChange(change + 1);
  }

  function push(user) {
    if (user.username === loggedInUser.username) {
      history.push("/profile");
    } else {
      dispatch(getProfile(user.username));
      history.push("/other");
    }
  }

  function selectFriendsTab() {
    setTabIndex(2);
  }

  const displayPosts = (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => {
        setTabIndex(index);
        setChange(index);
      }}
    >
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
                      {otherUser.firstname + " " + otherUser.lastname}
                    </td>
                  </tr>
                  <tr>
                    <th className="table-header">Age:</th>
                    <td className="table-data">{getAge()}</td>
                  </tr>
                  <tr>
                    <th className="table-header">Email:</th>
                    <td className="table-data">{otherUser.email}</td>
                  </tr>
                  <tr>
                    <th className="table-header">University:</th>
                    <td className="table-data">{otherUser.university}</td>
                  </tr>
                  <tr>
                    <th className="table-header">Work:</th>
                    <td className="table-data">{otherUser.work}</td>
                  </tr>
                  <tr>
                    <th className="table-header">Nationality:</th>
                    <td className="table-data">{otherUser.nationality}</td>
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
              reply={p.reply}
              likes={p.likes}
              function={() => like(p.id)}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="friends-tab">
          {friends.map((u) => (
            <Thumbnail
              name={u.username}
              pic={u.piclocation}
              function={() => push(u)}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="friends-tab">
          {photos.map((p) => (
            <Popup
              trigger={
                <div className="photos-tab">
                  <img src={p.pic_location} alt="" width="80px" height="80px" />
                </div>
              }
              modal
            >
              <div>
                <img src={p.pic_location} alt="" />
              </div>
            </Popup>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );

  return (
    <div id="userpage">
      <div className="container">
        <div className="row header">
          <div className="col-1"></div>
          <div className="col-10 profile-banner default-background">
            <div className="profile-pic">
              <img
                className="border border-white"
                src={otherUser.piclocation}
                alt=""
                width="150px"
                height="150px"
              ></img>
            </div>
            <h3 className="username">
              {otherUser.username.charAt(0).toUpperCase() +
                otherUser.username.slice(1)}
            </h3>
            <div className="overlay"></div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row body">
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
                  function={() => push(u)}
                />
              ))}
              <div
                className={
                  friendsPreview.length <= 4
                    ? "disappear"
                    : "friends-btn-wrapper"
                }
              >
                <button className="friends-btn" onClick={selectFriendsTab}>
                  See all...
                </button>
              </div>
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

export default OtherPage;
