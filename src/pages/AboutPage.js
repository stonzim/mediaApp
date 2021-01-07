import React from "react";
import "../App.scss";

function AboutPage() {
  return (
    <div className="container">
      <h3>About Us</h3>
      <h4>
        This project is a not-for-profit excercise for the purposes of improving
        existing full-stack skills
      </h4>
      {/* <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" role="tab" data-toggle="tab" href="#a">
            AAA
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" role="tab" data-toggle="tab" href="#b">
            BBB
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" role="tab" data-toggle="tab" href="#c">
            CCC
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="a" className="tab-pane active show" role="tabpanel">
          <p>AAA</p>
        </div>
        <div id="b" className="tab-pane" role="tabpanel">
          <p>BBB</p>
        </div>
        <div id="c" className="tab-pane" role="tabpanel">
          <p>CCC</p>
        </div>
      </div> */}
      {/* <Tabnav
        tabs={["Home", "Settings", "Profile"]}
        selected={selected}
        setSelected={setSelected("Home")}
      >
        <Tab isSelected={setSelected()}>
          <p>Home</p>
        </Tab>
        <Tab isSelected={setSelected("Settings")}>
          <p>Settings</p>
        </Tab>
        <Tab isSelected={setSelected("Profile")}>
          <p>Profile</p>
        </Tab>
      </Tabnav> */}
    </div>
  );
}

export default AboutPage;
