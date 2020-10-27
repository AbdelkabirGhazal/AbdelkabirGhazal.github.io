import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ projects,languages, isDark }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div>
        <div
          className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
          key={projects.name}
          onClick={() => openRepoinNewTab(projects.link)}
        >
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
              className="repo-svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name">{projects.name}</p>
          </div>
          <p className="repo-description">{projects.desc}</p>
          <div className="repo-stats">
            <div className="repo-left-stat">
              {projects!== null && (
                
                  <span>
                  <div
                    className="language-color"
                    style={{ backgroundColor: languages[0].color }}
                  ></div>
                  <p>{languages[0].name}</p>
                  </span>

                
                  
                  
                  
                 
                
              )}
              <span>
              <div
                    className="language-color"
                    style={{ backgroundColor: languages[1].color }}
                  ></div>
                  <p>{languages[1].name}</p>
              </span>

              <span>
              <div
                    className="language-color"
                    style={{ backgroundColor: languages[2].color }}
                  ></div>
                  <p>{languages[2].name}</p>
              </span>

              <span>
              <div
                    className="language-color"
                    style={{ backgroundColor: languages[3].color }}
                  ></div>
                  <p>{languages[3].name}</p>
              </span>


            </div>
            <div className="repo-right-stat">
              <p>{projects.size} KB</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
