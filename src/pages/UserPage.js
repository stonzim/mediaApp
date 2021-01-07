import React from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function UserPage() {
  const loggedInUser = useSelector((state) => state.login.loggedInUser);
  const displayPosts = (
    <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
      <TabList>
        <Tab>About</Tab>
        <Tab>Posts</Tab>
        <Tab>Friends</Tab>
        <Tab>Photos</Tab>
      </TabList>
      <TabPanel>
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{loggedInUser.firstname + " " + loggedInUser.lastname}</td>
            </tr>
            <tr>
              <th>Age:</th>
              <td></td>
            </tr>
            <tr>
              <th>Email:</th>
              <td></td>
            </tr>
            <tr>
              <th>University:</th>
              <td></td>
            </tr>
            <tr>
              <th>Work:</th>
              <td></td>
            </tr>
            <tr>
              <th>Nationality:</th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </TabPanel>
      <TabPanel>Posts</TabPanel>
      <TabPanel>Friends</TabPanel>
      <TabPanel>Photos</TabPanel>
    </Tabs>
  );
  return (
    <div id="userpage">
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="profile-banner col-8 default-background">
            <div className="picname">
              <img
                className="rounded-circle"
                src={loggedInUser.piclocation}
                alt=""
                width="100px"
                height="130px"
              ></img>
              <h3>{loggedInUser.username}</h3>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <hr />

        {/* <div className="row">
          <div className="col-12">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link active"
                  // role="tab"
                  data-toggle="tab"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#posts"
                  className="nav-link"
                  // role="tab"
                  data-toggle="tab"
                >
                  Posts
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#friends"
                  className="nav-link"
                  // role="tab"
                  data-toggle="tab"
                >
                  Friends
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#photos"
                  className="nav-link"
                  // role="tab"
                  data-toggle="tab"
                >
                  Photos
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="about" className="tab-pane active" role="tabpanel">
                {/* <table>
                  <tbody>
                    <tr>
                      <th>Name:</th>
                      <td>
                        {loggedInUser.firstname + " " + loggedInUser.lastname}
                      </td>
                    </tr>
                    <tr>
                      <th>Age:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>University:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Work:</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Nationality:</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div id="posts" className="tab-pane" role="tabpanel">
                <p>Posts Placeholder</p>
              </div>
              <div id="friends" className="tab-pane" role="tabpanel">
                <p>Friends Placeholder</p>
              </div>
              <div id="photos" className="tab-pane" role="tabpanel">
                <p>Photos Placeholder</p>
              </div>
            </div> 
          </div>
        </div>  */}
      </div>
      {displayPosts}
    </div>
  );
}

export default UserPage;
