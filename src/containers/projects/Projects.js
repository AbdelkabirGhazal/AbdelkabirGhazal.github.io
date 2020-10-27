import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { StyleConsumer } from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleConsumer);
  useEffect(() => {
   
  }, []);

 var projets =[{ 
  "name":"TIPE CPGE",
  "size":7969, 
  "desc":'I developed this project so that students can access alternative educational resources and be exposed to new forms of educational content.', 
  "link":'https://play.google.com/store/apps/details?id=com.akgh.tipe_cpge', 
  "languages":[{"name":"Java", "color":"#b07219"},{"name":"Firebase", "color":"#059BE5"},{"name":"Android Studio", "color":"green"},{"name":"Photoshop", "color":"blue"}],
  "forkCount":123, 
  "stargazers":1234, 
 }, { 
  "name":"X Prépa",
  "size":17408, 
  "desc":"'X Prépa' app is like 'TIPE CPGE' but with more general content and it's a native app that works on both Android and IOS platforms.", 
  "link":'https://play.google.com/store/apps/details?id=app.xprepa.x_prepa', 
  "languages":[{"name":"Dart", "color":"#00B4AB"},{"name":"Flutter", "color":"blue"},{"name":"Parse Server", "color":"grey"},{"name":"Google App Script", "color":"yellow"}],
  "forkCount":123, 
  "stargazers":1234, 
 }, { 
  "name":"Cinema Management System",
  "size":51450, 
  "desc":'A Cinema Management System is an all-in-one solution that can handle all ticket-related operations at the cinema such as Schedule showtimes and Manage Ticket Prices', 
  "link":'', 
  "languages":[{"name":"PHP", "color":"#4F5D95"},{"name":"Symfony ", "color":"black"},{"name":"OracleDB", "color":"red"},{"name":"Git", "color":"#3f2c00"}],
  "forkCount":123, 
  "stargazers":1234, 
 }, { 
  "name":"Concours Medecine",
  "size":33980, 
  "desc":"Beautifully simple and powerful websites for students interested in the medical field, it containts all the resources they need to succeed their exams.", 
  "link":'http://concoursmedecine.ma/', 
  "languages":[{"name":"PHP", "color":"#4F5D95"},{"name":"Bootstrap ", "color":"#7c14f7"},{"name":"MySql", "color":"#d67d36"},{"name":"PayPal SDKs", "color":"#blue"}],
  "forkCount":123, 
  "stargazers":1234, 
 } ];
  if (true) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 style={{textAlign: 'center'}} className="project-title">Projects I have worked on :</h1>
          <div className="repo-cards-div-main">

          <GithubRepoCard projects={projets[0]} languages={projets[0].languages} key={projets.name} isDark={isDark} />
           <GithubRepoCard projects={projets[1]} languages={projets[1].languages} key={projets.name} isDark={isDark} />
           
           <GithubRepoCard projects={projets[2]} languages={projets[2].languages} key={projets.name} isDark={isDark} />
           <GithubRepoCard projects={projets[3]} languages={projets[3].languages} key={projets.name} isDark={isDark} />
           

          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
