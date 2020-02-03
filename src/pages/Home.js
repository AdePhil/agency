/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./home.scss";
const Home = () => {
  const [show, setShow] = useState(false);
  const toggleClick = () => {
    setShow(previousShow => {
      return !previousShow;
    });
  };
  return (
    <div className="agency">
      <div className="agency__home">
        <header className="agency__header">
          <div className="agency__header-container container">
            <div className="logo">
              <img src="/logo.svg" alt="Agency Logo" />
            </div>
            <nav className={show ? "agency__nav show" : "agency__nav"}>
              <a href="#" className="agency__nav-item">
                Home
              </a>
              <a href="#" className="agency__nav-item">
                Services
              </a>
              <a href="#" className="agency__nav-item">
                Project
              </a>
              <a href="#" className="agency__nav-item">
                About Us
              </a>
              <a href="#" className="agency__nav-item">
                Contact
              </a>
              <button className="btn btn--blue btn--radius project-btn">
                my project
              </button>
              <button
                aria-label="Close Account Info Modal Box"
                className="btn close"
                onClick={toggleClick}
              >
                &times;
              </button>
            </nav>
            <button className="mobile-hamburger" onClick={toggleClick}>
              &#x2630;
            </button>
          </div>
        </header>
        <img src="/business_man.webp" alt="Business man" className="hero-img" />
        <div className="container agency__home-text">
          <h1 className="agency__home-text-heading">
            creative <br /> agency
          </h1>
          <div className="agency__home-text-sub-heading">
            <button className="play-btn btn btn--blue">
              <img src="/play.svg" alt="play button" />
            </button>
            <p>watch a video intro</p>
          </div>
        </div>
        <div className="agency__home-bg-text">Creative</div>
      </div>
      <div className="agency__services">
        <div className="container agency__services-container override">
          <h2 className="agency__services-heading">
            services <br /> & portfolio
          </h2>

          <div className="agency__service">
            <img
              src="/web_design.svg"
              alt="Web Design"
              className="agency__service-icon"
            />
            <div className="agency__service-text">
              <p className="agency__service-heading">web Design</p>
              <p>modern web design services with new trends and direction.</p>
            </div>
          </div>
          <div className="agency__service">
            <img
              src="/branding.svg"
              alt="Branding"
              className="agency__service-icon"
            />
            <div className="agency__service-text">
              <p className="agency__service-heading">Branding</p>
              <p>highly professional branding and logo design work.</p>
            </div>
          </div>
          <div className="agency__service">
            <img
              src="/motion_graphics.svg"
              alt="Motion Graphics"
              className="agency__service-icon"
            />
            <div className="agency__service-text">
              <p className="agency__service-heading">Motion graphics</p>
              <p>modern motion graphics and animation for businesses.</p>
            </div>
          </div>
          <div className="agency__service">
            <img
              src="/ui_ux.svg"
              alt="UI/Ux"
              className="agency__service-icon"
            />
            <div className="agency__service-text">
              <p className="agency__service-heading">ui/ux design</p>
              <p>Standard screen generation and design for all devices.</p>
            </div>
          </div>

          <div className="agency__service">
            <img src="/web_dev.svg" alt="" className="agency__service-icon" />
            <div className="agency__service-text">
              <p className="agency__service-heading">Web Development</p>
              <p>website development is something we are best in.</p>
            </div>
          </div>
          <div className="agency__service">
            <img
              src="/app_testing.svg"
              alt="App testing"
              className="agency__service-icon"
            />
            <div className="agency__service-text">
              <p className="agency__service-heading">App testing</p>
              <p>we test app for better user experience and results.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="agency__team">
        <p className="agency__team-sub-heading">Meet The Team</p>
        <h3 className="agency__team-heading">
          great outcome always relay on the great foundation
        </h3>
        <div className="agency__team-container container">
          <div className="agency__team-member">
            <div className="agency__team-member-img agency__team-member-img-1">
              <img src="/user1.png" alt="Team member: Jam potrick" />
            </div>
            <p className="agency__team-member-name">jam potrick</p>
            <p className="agency__team-member-desc">
              Standard screen generation and design for all.
            </p>
            <div className="socials">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.945"
                  height="27.801"
                  viewBox="0 0 11.945 27.801"
                >
                  <path
                    id="Facebook"
                    d="M1388.857,7479.965h-5.3v-13.9h-2.647v-4.792h2.647V7458.4c0-3.909,1.494-6.232,5.739-6.232h3.534v4.79h-2.208c-1.653,0-1.762.672-1.762,1.921l-.006,2.4h4l-.468,4.792h-3.534Z"
                    transform="translate(-1380.915 -7452.164)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.815"
                  height="21.864"
                  viewBox="0 0 27.815 21.864"
                >
                  <path
                    id="Twitter"
                    d="M1446.569,7457.343a11.807,11.807,0,0,1-3.278.868,5.569,5.569,0,0,0,2.51-3.056,11.6,11.6,0,0,1-3.624,1.342,5.785,5.785,0,0,0-4.165-1.744,5.617,5.617,0,0,0-5.707,5.521,5.375,5.375,0,0,0,.148,1.259,16.4,16.4,0,0,1-11.762-5.769,5.363,5.363,0,0,0-.773,2.776,5.472,5.472,0,0,0,2.539,4.593,5.842,5.842,0,0,1-2.585-.689c0,.022,0,.046,0,.068a5.568,5.568,0,0,0,4.578,5.41,5.82,5.82,0,0,1-1.5.2,5.635,5.635,0,0,1-1.073-.1,5.688,5.688,0,0,0,5.331,3.833,11.843,11.843,0,0,1-8.448,2.286,16.539,16.539,0,0,0,8.748,2.48,15.849,15.849,0,0,0,16.236-15.7q0-.362-.016-.715A11.422,11.422,0,0,0,1446.569,7457.343Z"
                    transform="translate(-1418.754 -7454.753)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.816"
                  height="27.784"
                  viewBox="0 0 27.816 27.784"
                >
                  <path
                    id="Dribbble"
                    d="M1480.186,7452.174a13.892,13.892,0,1,0,13.908,13.894A13.9,13.9,0,0,0,1480.186,7452.174Zm8.825,6.4a11.5,11.5,0,0,1,2.73,6.721,58.287,58.287,0,0,0-7.913.1c-.3-.768-.615-1.521-.952-2.242A14.005,14.005,0,0,0,1489.011,7458.576Zm-8.825-4.083a11.551,11.551,0,0,1,7.394,2.662,14.331,14.331,0,0,1-5.7,4.022,28.485,28.485,0,0,0-4.548-6.319A11.49,11.49,0,0,1,1480.186,7454.493Zm-5.243,1.259a27.9,27.9,0,0,1,4.62,6.266,30.532,30.532,0,0,1-8.814,1.253c-.605,0-1.2-.025-1.79-.057A11.609,11.609,0,0,1,1474.943,7455.752Zm-6.327,9.763c.659.029,1.325.041,2,.033a34.3,34.3,0,0,0,9.967-1.546c.272.571.534,1.156.783,1.76a6.41,6.41,0,0,0-1.036.312,17.3,17.3,0,0,0-8.839,7.634,11.515,11.515,0,0,1-2.9-7.64C1468.6,7465.88,1468.608,7465.7,1468.616,7465.515Zm11.57,12.131a11.53,11.53,0,0,1-7.1-2.443,15.952,15.952,0,0,1,7.766-7.148,6.827,6.827,0,0,1,1.26-.38c.411,1.146.785,2.332,1.107,3.561a41.483,41.483,0,0,1,1.072,5.65A11.509,11.509,0,0,1,1480.186,7477.646Zm6.264-1.847a41.7,41.7,0,0,0-1.08-5.707c-.246-.94-.53-1.852-.831-2.745a49.949,49.949,0,0,1,7.163,0A11.572,11.572,0,0,1,1486.45,7475.8Z"
                    transform="translate(-1466.278 -7452.174)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.841"
                  height="23.838"
                  viewBox="0 0 23.841 23.838"
                >
                  <path
                    id="LinkIn"
                    d="M18.728,23.838V15.233c0-2.163-.74-3.636-2.59-3.636a2.81,2.81,0,0,0-2.618,1.955,3.752,3.752,0,0,0-.169,1.3v8.984H8.242s.066-14.577,0-16.085h5.11v2.278a5.041,5.041,0,0,1,4.605-2.657c3.361,0,5.884,2.3,5.884,7.241v9.223ZM.3,23.838V7.754H5.411V23.838ZM2.822,5.561A2.7,2.7,0,0,1,0,2.782,2.722,2.722,0,0,1,2.891,0,2.711,2.711,0,0,1,5.747,2.782a2.72,2.72,0,0,1-2.89,2.779Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="agency__team-member">
            <div className="agency__team-member-img agency__team-member-img-2">
              <img src="/user2.png" alt="Team member: ema jonas" />
            </div>
            <p className="agency__team-member-name">ema jonas</p>
            <p className="agency__team-member-desc">
              Standard screen generation and design for all.
            </p>
            <div className="socials">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.945"
                  height="27.801"
                  viewBox="0 0 11.945 27.801"
                >
                  <path
                    id="Facebook"
                    d="M1388.857,7479.965h-5.3v-13.9h-2.647v-4.792h2.647V7458.4c0-3.909,1.494-6.232,5.739-6.232h3.534v4.79h-2.208c-1.653,0-1.762.672-1.762,1.921l-.006,2.4h4l-.468,4.792h-3.534Z"
                    transform="translate(-1380.915 -7452.164)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.815"
                  height="21.864"
                  viewBox="0 0 27.815 21.864"
                >
                  <path
                    id="Twitter"
                    d="M1446.569,7457.343a11.807,11.807,0,0,1-3.278.868,5.569,5.569,0,0,0,2.51-3.056,11.6,11.6,0,0,1-3.624,1.342,5.785,5.785,0,0,0-4.165-1.744,5.617,5.617,0,0,0-5.707,5.521,5.375,5.375,0,0,0,.148,1.259,16.4,16.4,0,0,1-11.762-5.769,5.363,5.363,0,0,0-.773,2.776,5.472,5.472,0,0,0,2.539,4.593,5.842,5.842,0,0,1-2.585-.689c0,.022,0,.046,0,.068a5.568,5.568,0,0,0,4.578,5.41,5.82,5.82,0,0,1-1.5.2,5.635,5.635,0,0,1-1.073-.1,5.688,5.688,0,0,0,5.331,3.833,11.843,11.843,0,0,1-8.448,2.286,16.539,16.539,0,0,0,8.748,2.48,15.849,15.849,0,0,0,16.236-15.7q0-.362-.016-.715A11.422,11.422,0,0,0,1446.569,7457.343Z"
                    transform="translate(-1418.754 -7454.753)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.816"
                  height="27.784"
                  viewBox="0 0 27.816 27.784"
                >
                  <path
                    id="Dribbble"
                    d="M1480.186,7452.174a13.892,13.892,0,1,0,13.908,13.894A13.9,13.9,0,0,0,1480.186,7452.174Zm8.825,6.4a11.5,11.5,0,0,1,2.73,6.721,58.287,58.287,0,0,0-7.913.1c-.3-.768-.615-1.521-.952-2.242A14.005,14.005,0,0,0,1489.011,7458.576Zm-8.825-4.083a11.551,11.551,0,0,1,7.394,2.662,14.331,14.331,0,0,1-5.7,4.022,28.485,28.485,0,0,0-4.548-6.319A11.49,11.49,0,0,1,1480.186,7454.493Zm-5.243,1.259a27.9,27.9,0,0,1,4.62,6.266,30.532,30.532,0,0,1-8.814,1.253c-.605,0-1.2-.025-1.79-.057A11.609,11.609,0,0,1,1474.943,7455.752Zm-6.327,9.763c.659.029,1.325.041,2,.033a34.3,34.3,0,0,0,9.967-1.546c.272.571.534,1.156.783,1.76a6.41,6.41,0,0,0-1.036.312,17.3,17.3,0,0,0-8.839,7.634,11.515,11.515,0,0,1-2.9-7.64C1468.6,7465.88,1468.608,7465.7,1468.616,7465.515Zm11.57,12.131a11.53,11.53,0,0,1-7.1-2.443,15.952,15.952,0,0,1,7.766-7.148,6.827,6.827,0,0,1,1.26-.38c.411,1.146.785,2.332,1.107,3.561a41.483,41.483,0,0,1,1.072,5.65A11.509,11.509,0,0,1,1480.186,7477.646Zm6.264-1.847a41.7,41.7,0,0,0-1.08-5.707c-.246-.94-.53-1.852-.831-2.745a49.949,49.949,0,0,1,7.163,0A11.572,11.572,0,0,1,1486.45,7475.8Z"
                    transform="translate(-1466.278 -7452.174)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.841"
                  height="23.838"
                  viewBox="0 0 23.841 23.838"
                >
                  <path
                    id="LinkIn"
                    d="M18.728,23.838V15.233c0-2.163-.74-3.636-2.59-3.636a2.81,2.81,0,0,0-2.618,1.955,3.752,3.752,0,0,0-.169,1.3v8.984H8.242s.066-14.577,0-16.085h5.11v2.278a5.041,5.041,0,0,1,4.605-2.657c3.361,0,5.884,2.3,5.884,7.241v9.223ZM.3,23.838V7.754H5.411V23.838ZM2.822,5.561A2.7,2.7,0,0,1,0,2.782,2.722,2.722,0,0,1,2.891,0,2.711,2.711,0,0,1,5.747,2.782a2.72,2.72,0,0,1-2.89,2.779Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="agency__team-member">
            <div className="agency__team-member-img agency__team-member-img-3">
              <img src="/user3.png" alt="Team member: mike pens" />
            </div>
            <p className="agency__team-member-name">mike pens</p>
            <p className="agency__team-member-desc">
              Standard screen generation and design for all.
            </p>
            <div className="socials">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.945"
                  height="27.801"
                  viewBox="0 0 11.945 27.801"
                >
                  <path
                    id="Facebook"
                    d="M1388.857,7479.965h-5.3v-13.9h-2.647v-4.792h2.647V7458.4c0-3.909,1.494-6.232,5.739-6.232h3.534v4.79h-2.208c-1.653,0-1.762.672-1.762,1.921l-.006,2.4h4l-.468,4.792h-3.534Z"
                    transform="translate(-1380.915 -7452.164)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.815"
                  height="21.864"
                  viewBox="0 0 27.815 21.864"
                >
                  <path
                    id="Twitter"
                    d="M1446.569,7457.343a11.807,11.807,0,0,1-3.278.868,5.569,5.569,0,0,0,2.51-3.056,11.6,11.6,0,0,1-3.624,1.342,5.785,5.785,0,0,0-4.165-1.744,5.617,5.617,0,0,0-5.707,5.521,5.375,5.375,0,0,0,.148,1.259,16.4,16.4,0,0,1-11.762-5.769,5.363,5.363,0,0,0-.773,2.776,5.472,5.472,0,0,0,2.539,4.593,5.842,5.842,0,0,1-2.585-.689c0,.022,0,.046,0,.068a5.568,5.568,0,0,0,4.578,5.41,5.82,5.82,0,0,1-1.5.2,5.635,5.635,0,0,1-1.073-.1,5.688,5.688,0,0,0,5.331,3.833,11.843,11.843,0,0,1-8.448,2.286,16.539,16.539,0,0,0,8.748,2.48,15.849,15.849,0,0,0,16.236-15.7q0-.362-.016-.715A11.422,11.422,0,0,0,1446.569,7457.343Z"
                    transform="translate(-1418.754 -7454.753)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.816"
                  height="27.784"
                  viewBox="0 0 27.816 27.784"
                >
                  <path
                    id="Dribbble"
                    d="M1480.186,7452.174a13.892,13.892,0,1,0,13.908,13.894A13.9,13.9,0,0,0,1480.186,7452.174Zm8.825,6.4a11.5,11.5,0,0,1,2.73,6.721,58.287,58.287,0,0,0-7.913.1c-.3-.768-.615-1.521-.952-2.242A14.005,14.005,0,0,0,1489.011,7458.576Zm-8.825-4.083a11.551,11.551,0,0,1,7.394,2.662,14.331,14.331,0,0,1-5.7,4.022,28.485,28.485,0,0,0-4.548-6.319A11.49,11.49,0,0,1,1480.186,7454.493Zm-5.243,1.259a27.9,27.9,0,0,1,4.62,6.266,30.532,30.532,0,0,1-8.814,1.253c-.605,0-1.2-.025-1.79-.057A11.609,11.609,0,0,1,1474.943,7455.752Zm-6.327,9.763c.659.029,1.325.041,2,.033a34.3,34.3,0,0,0,9.967-1.546c.272.571.534,1.156.783,1.76a6.41,6.41,0,0,0-1.036.312,17.3,17.3,0,0,0-8.839,7.634,11.515,11.515,0,0,1-2.9-7.64C1468.6,7465.88,1468.608,7465.7,1468.616,7465.515Zm11.57,12.131a11.53,11.53,0,0,1-7.1-2.443,15.952,15.952,0,0,1,7.766-7.148,6.827,6.827,0,0,1,1.26-.38c.411,1.146.785,2.332,1.107,3.561a41.483,41.483,0,0,1,1.072,5.65A11.509,11.509,0,0,1,1480.186,7477.646Zm6.264-1.847a41.7,41.7,0,0,0-1.08-5.707c-.246-.94-.53-1.852-.831-2.745a49.949,49.949,0,0,1,7.163,0A11.572,11.572,0,0,1,1486.45,7475.8Z"
                    transform="translate(-1466.278 -7452.174)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.841"
                  height="23.838"
                  viewBox="0 0 23.841 23.838"
                >
                  <path
                    id="LinkIn"
                    d="M18.728,23.838V15.233c0-2.163-.74-3.636-2.59-3.636a2.81,2.81,0,0,0-2.618,1.955,3.752,3.752,0,0,0-.169,1.3v8.984H8.242s.066-14.577,0-16.085h5.11v2.278a5.041,5.041,0,0,1,4.605-2.657c3.361,0,5.884,2.3,5.884,7.241v9.223ZM.3,23.838V7.754H5.411V23.838ZM2.822,5.561A2.7,2.7,0,0,1,0,2.782,2.722,2.722,0,0,1,2.891,0,2.711,2.711,0,0,1,5.747,2.782a2.72,2.72,0,0,1-2.89,2.779Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="agency__team-bg-team-text">team</div>
          <img src="/big_dots.svg" alt="Big dots" className="team-big-dots" />
        </div>
        <div className="btn-wrapper">
          <button className="btn btn--blue btn--radius team-btn">
            Let's catch all
          </button>
        </div>
      </div>
      <div className="agency__contact">
        <div className="container agency__contact-container override">
          <p className="agency__contact-sub-heading">contact us</p>
          <h3 className="agency__contact-heading">
            Have an awesome idea in your mind? <br /> we would love to hear
          </h3>
          <div className="center-form">
            <div className="input-wrapper">
              <input type="text" placeholder="enter your email" />
              <button className="btn--blue btn--radius">start</button>
            </div>
          </div>
        </div>
      </div>
      <div className="agency__footer">
        <div className="agency__footer-container container">
          <div className="agency__footer-group">
            <img src="/logo.svg" alt="logo" />
            <p>
              A design agency shaping ideas into products. We help startups and
              enterprises invent, build and launch their next project.
            </p>
          </div>
          <div className="agency__footer-group">
            <h4 className="agency__footer-group-heading">Services</h4>
            <p>Web Design </p>
            <p>App Design</p>
            <p>Photography</p>
            <p>Videography</p>
            <p>Web development</p>
          </div>

          <div className="agency__footer-group">
            <h4 className="agency__footer-group-heading">Support</h4>
            <p>Web Design </p>
            <p>App Design</p>
            <p>Photography</p>
            <p>Videography</p>
            <p>Web development</p>
          </div>
          <div className="agency__footer-group">
            <h4 className="agency__footer-group-heading">Social</h4>
            <div className="socials">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.945"
                  height="27.801"
                  viewBox="0 0 11.945 27.801"
                >
                  <path
                    id="Facebook"
                    d="M1388.857,7479.965h-5.3v-13.9h-2.647v-4.792h2.647V7458.4c0-3.909,1.494-6.232,5.739-6.232h3.534v4.79h-2.208c-1.653,0-1.762.672-1.762,1.921l-.006,2.4h4l-.468,4.792h-3.534Z"
                    transform="translate(-1380.915 -7452.164)"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.815"
                  height="21.864"
                  viewBox="0 0 27.815 21.864"
                >
                  <path
                    id="Twitter"
                    d="M1446.569,7457.343a11.807,11.807,0,0,1-3.278.868,5.569,5.569,0,0,0,2.51-3.056,11.6,11.6,0,0,1-3.624,1.342,5.785,5.785,0,0,0-4.165-1.744,5.617,5.617,0,0,0-5.707,5.521,5.375,5.375,0,0,0,.148,1.259,16.4,16.4,0,0,1-11.762-5.769,5.363,5.363,0,0,0-.773,2.776,5.472,5.472,0,0,0,2.539,4.593,5.842,5.842,0,0,1-2.585-.689c0,.022,0,.046,0,.068a5.568,5.568,0,0,0,4.578,5.41,5.82,5.82,0,0,1-1.5.2,5.635,5.635,0,0,1-1.073-.1,5.688,5.688,0,0,0,5.331,3.833,11.843,11.843,0,0,1-8.448,2.286,16.539,16.539,0,0,0,8.748,2.48,15.849,15.849,0,0,0,16.236-15.7q0-.362-.016-.715A11.422,11.422,0,0,0,1446.569,7457.343Z"
                    transform="translate(-1418.754 -7454.753)"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.816"
                  height="27.784"
                  viewBox="0 0 27.816 27.784"
                >
                  <path
                    id="Dribbble"
                    d="M1480.186,7452.174a13.892,13.892,0,1,0,13.908,13.894A13.9,13.9,0,0,0,1480.186,7452.174Zm8.825,6.4a11.5,11.5,0,0,1,2.73,6.721,58.287,58.287,0,0,0-7.913.1c-.3-.768-.615-1.521-.952-2.242A14.005,14.005,0,0,0,1489.011,7458.576Zm-8.825-4.083a11.551,11.551,0,0,1,7.394,2.662,14.331,14.331,0,0,1-5.7,4.022,28.485,28.485,0,0,0-4.548-6.319A11.49,11.49,0,0,1,1480.186,7454.493Zm-5.243,1.259a27.9,27.9,0,0,1,4.62,6.266,30.532,30.532,0,0,1-8.814,1.253c-.605,0-1.2-.025-1.79-.057A11.609,11.609,0,0,1,1474.943,7455.752Zm-6.327,9.763c.659.029,1.325.041,2,.033a34.3,34.3,0,0,0,9.967-1.546c.272.571.534,1.156.783,1.76a6.41,6.41,0,0,0-1.036.312,17.3,17.3,0,0,0-8.839,7.634,11.515,11.515,0,0,1-2.9-7.64C1468.6,7465.88,1468.608,7465.7,1468.616,7465.515Zm11.57,12.131a11.53,11.53,0,0,1-7.1-2.443,15.952,15.952,0,0,1,7.766-7.148,6.827,6.827,0,0,1,1.26-.38c.411,1.146.785,2.332,1.107,3.561a41.483,41.483,0,0,1,1.072,5.65A11.509,11.509,0,0,1,1480.186,7477.646Zm6.264-1.847a41.7,41.7,0,0,0-1.08-5.707c-.246-.94-.53-1.852-.831-2.745a49.949,49.949,0,0,1,7.163,0A11.572,11.572,0,0,1,1486.45,7475.8Z"
                    transform="translate(-1466.278 -7452.174)"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.841"
                  height="23.838"
                  viewBox="0 0 23.841 23.838"
                >
                  <path
                    id="LinkIn"
                    d="M18.728,23.838V15.233c0-2.163-.74-3.636-2.59-3.636a2.81,2.81,0,0,0-2.618,1.955,3.752,3.752,0,0,0-.169,1.3v8.984H8.242s.066-14.577,0-16.085h5.11v2.278a5.041,5.041,0,0,1,4.605-2.657c3.361,0,5.884,2.3,5.884,7.241v9.223ZM.3,23.838V7.754H5.411V23.838ZM2.822,5.561A2.7,2.7,0,0,1,0,2.782,2.722,2.722,0,0,1,2.891,0,2.711,2.711,0,0,1,5.747,2.782a2.72,2.72,0,0,1-2.89,2.779Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
