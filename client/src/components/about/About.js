import React from "react";
import TeamMember from "./TeamMember";
import ToolCard from "./ToolCard";
import BillyPhoto from "../../assets/img/Billy.png";
import EllaPhoto from "../../assets/img/Ella.png";
import JosephPhoto from "../../assets/img/Joseph.png";
import LeviPhoto from "../../assets/img/Levi.png";
import MilesPhoto from "../../assets/img/Miles.png";
import ReactPhoto from "../../assets/img/tools/react.png";
import NodePhoto from "../../assets/img/tools/node.jpeg";
import ExpressPhoto from "../../assets/img/tools/express.jpeg";
import GCPPhoto from "../../assets/img/tools/gcp.png";
import BootstrapPhoto from "../../assets/img/tools/bootstrap.png";
import PostmanPhoto from "../../assets/img/tools/postman.png";
import GitlabPhoto from "../../assets/img/tools/gitlab.png";
import PixabayPhoto from "../../assets/img/tools/pixabay.png";
import NamecheapPhoto from "../../assets/img/tools/namecheap.png";
import MochaPhoto from "../../assets/img/tools/mocha.png";
import EnzymePhoto from "../../assets/img/tools/enzyme.png";
import SeleniumPhoto from "../../assets/img/tools/selenium.png";
import ChromePhoto from "../../assets/img/tools/chrome.jpeg";
import SCSSPhoto from "../../assets/img/tools/scss.png";
import DockerPhoto from "../../assets/img/tools/docker.jpeg";
import CloudPhoto from "../../assets/img/tools/cloudsqlproxy.jpeg";
import FlaskPhoto from "../../assets/img/tools/flask.jpeg";
import MySQLPhoto from "../../assets/img/tools/mysql.png";
import D3Photo from "../../assets/img/tools/d3.png";

// Gitlab issues/commit retrieval inspired by shub95/foodmeonce
class About extends React.Component {
  constructor(props) {
    super(props);
    var Billy = [0, 0, 0];
    var Ella = [0, 0, 0];
    var Joseph = [0, 0, 0];
    var Levi = [0, 0, 24];
    var Miles = [0, 0, 0];
    var totalCommits = 0;
    var closedIssues = 0;

    this.state = {
      Billy: Billy,
      Ella: Ella,
      Joseph: Joseph,
      Levi: Levi,
      Miles: Miles,
      totalCommits: totalCommits,
      closedIssues: closedIssues,
    };
  }

  componentDidMount() {
    this.grabCommits();
    this.grabIssues();
  }

  async grabIssues() {
    fetch(
      "https://gitlab.com/api/v4/projects/14563233/issues?per_page=1000&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        res.forEach((issue) => {
          this.state.totalIssues += 1;
          if (issue.closed_by != null) {
            this.state.closedIssues += 1;
            issue.assignees.forEach((assignee) => {
              switch (assignee.name) {
                case "Ella Robertson":
                case "ellarobertson":
                  this.state.Ella[1] += 1;
                  break;
                case "Levi Villarreal":
                  this.state.Levi[1] += 1;
                  break;
                case "Joseph Engelhart":
                case "jengelhart":
                  this.state.Joseph[1] += 1;
                  break;
                case "Miles Chandler":
                  this.state.Miles[1] += 1;
                  break;
                case "Billy Vo":
                case "billyvo":
                  this.state.Billy[1] += 1;
                  break;
                default:
                  console.log(issue);
              }
            });
          }
        });
        this.setState(this.state);
      });
  }

  async grabCommits() {
    var page = 0;
    while (page < 4) {
      page += 1;
      fetch(
        "https://gitlab.com/api/v4/projects/14563233/repository/commits?per_page=100&page=" +
          page
      )
        .then((res) => res.json())
        .then((res) => {
          res.forEach((commit) => {
            this.state.totalCommits += 1;
            switch (commit.committer_name) {
              case "Ella Robertson":
              case "ellarobertson":
                this.state.Ella[0] += 1;
                break;
              case "Levi Villarreal":
                this.state.Levi[0] += 1;
                break;
              case "Joseph Engelhart":
              case "jengelhart":
                this.state.Joseph[0] += 1;
                break;
              case "Miles Chandler":
                this.state.Miles[0] += 1;
                break;
              case "Billy Vo":
              case "billyvo":
                this.state.Billy[0] += 1;
                break;
              default:
            }
          });
        });
    }
    this.setState(this.state);
  }

  render() {
    const {
      Billy,
      Ella,
      Joseph,
      Levi,
      Miles,
      totalCommits,
      closedIssues,
    } = this.state;

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>About</h2>
        </div>

        <div className="container">
          <p className="about-lead">
            Purpose: This website is meant to encourage Americans/tourists to go
            outdoors by highlighting National Parks and recreational activities
            in their area. Real beauty is found outside and we think more people
            should spend their time enjoying it.
          </p>

          <div className="about-buttons text-center">
            <a
              href="https://gitlab.com/leviv1/putitinpark/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button button-primary">Gitlab Repo</button>
            </a>
            <a
              href="https://documenter.getpostman.com/view/9011044/SVtR19mz?version=latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button button-secondary">API Docs</button>
            </a>
          </div>

          <br />

          <h1 className="text-center">
            <span>Total Stats</span>
          </h1>

          <h3 className="text-center">Total Commits: {totalCommits}</h3>
          <h3 className="text-center">Closed issues: {closedIssues}</h3>

          <div className="row">
            <TeamMember
              name="Miles Chandler"
              imageUrl={MilesPhoto}
              commits={Miles[0]}
              issuesClosed={Miles[1]}
              tests={Miles[2]}
            />
            <TeamMember
              name="Joseph Engelhart"
              imageUrl={JosephPhoto}
              commits={Joseph[0]}
              issuesClosed={Joseph[1]}
              tests={Joseph[2]}
            />
            <TeamMember
              name="Ella Robertson"
              imageUrl={EllaPhoto}
              commits={Ella[0]}
              issuesClosed={Ella[1]}
              tests={Ella[2]}
            />
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <TeamMember
              name="Levi Villarreal"
              imageUrl={LeviPhoto}
              commits={Levi[0]}
              issuesClosed={Levi[1]}
              tests={Levi[2]}
            />
            <TeamMember
              name="Billy Vo"
              imageUrl={BillyPhoto}
              commits={Billy[0]}
              issuesClosed={Billy[1]}
              tests={Billy[2]}
            />
            <div className="col-sm-2"></div>
          </div>

          <br />

          <h1 className="text-center">
            <span>Tools Used</span>
          </h1>

          <div className="row">
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={ReactPhoto}
                tool_name={"React JS"}
                description={"JavaScript library, namely using react routing"}
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={NodePhoto}
                tool_name={"Node"}
                description={
                  "JavaScript run-time environment that executes JavaScript code outside of a browser"
                }
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={ExpressPhoto}
                tool_name="Express"
                description="Web application framework for Node.js, designed for building web applications and APIs"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={GCPPhoto}
                tool_name="GCP"
                description="Used to deploy and host the web application"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={BootstrapPhoto}
                tool_name="Bootstrap"
                description="Free and open-source CSS framework directed at responsive, mobile-first front-end web development"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={PostmanPhoto}
                tool_name="Postman"
                description="Used to document our API and output in HTML format"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={GitlabPhoto}
                tool_name="GitLab"
                description="Used to host our code and provide CI/CD environments"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={PixabayPhoto}
                tool_name="Pixabay"
                description="Used to find royalty-free images for the static site"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={NamecheapPhoto}
                tool_name="NameCheap"
                description="Used to provide website URLs"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={MochaPhoto}
                tool_name="Mocha"
                description="Used as our JavaScript test framework"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={EnzymePhoto}
                tool_name="Enzyme"
                description="Used to more easily test our React components"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={SeleniumPhoto}
                tool_name="Selenium"
                description="Used to automate acceptance tests"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={ChromePhoto}
                tool_name="Chrome Webdriver"
                description="A controllable webdriver for Selenium"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={SCSSPhoto}
                tool_name="SCSS"
                description="Used to make styles more flexible and readable"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={DockerPhoto}
                tool_name="Docker"
                description="Used to provide images for frontend and backend development"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={MySQLPhoto}
                tool_name="MySQL"
                description="Relational database management system used to store our data"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={CloudPhoto}
                tool_name="Cloud SQL Proxy"
                description="Allowed to connect to the database locally using GCP"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={FlaskPhoto}
                tool_name="Flask"
                description="Lightweight python web framework, used for our backend API"
              />
            </div>
            <div className="col-md-4 instance-container">
              <ToolCard
                imageUrl={D3Photo}
                tool_name="D3.js"
                description="JavaScript Library to support data visualizations"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
