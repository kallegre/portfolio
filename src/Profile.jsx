import React from "react";
import "./css/Profile.css";
import ProfilePic from "./assets/IMG_3627 2.jpg";
import DownloadIcon from "./assets/download-icon.svg";
import Resume from "./assets/resume.pdf";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left-section">
        <div className="welcome-text">Hi, i'm Kenzo,</div>
        <div className="job-title">Frontend Developer</div>
        <div className="about-me">
          Motivated and ambitious software engineer from France with a passion
          for learning and mastering new technologies. After graduating, I moved
          to Australia to improve my English and immerse myself in a diverse,
          international environment. I am eager to take on new challenges and
          continuously grow both personally and professionally, with a strong
          focus on problem-solving and innovation.
        </div>
        <div className="btn-section">
          <div className="primary-btn">Contact me</div>
          <a className="secondary-btn" href={Resume}>
            Download CV
            <div className="download-icon">
              <img
                src={DownloadIcon}
                alt="download-icon"
                style={{ height: 24 }}
              />
            </div>
          </a>
        </div>
        <div className="social-links"></div>
      </div>
      <div className="profile-pic">
        <img src={ProfilePic} alt="profile-pic" />
        <div className="profile-pic-overlay"></div>
      </div>
    </div>
  );
};

export default Profile;
