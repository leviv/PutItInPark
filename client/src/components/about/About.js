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

const GITLAB_COMMIT_ENDPOINT =
  "https://gitlab.com/api/v4/projects/14563233/repository/commits?per_page=1000&page=1";
const GITLAB_ISSUES_ENDPOINT =
  "https://gitlab.com/api/v4/projects/14563233/issues?per_page=1000&page=1";

// Gitlab issues/commit retrieval inspired by shub95/foodmeonce
class About extends React.Component {
  constructor(props) {
    super(props);
    var Billy = {
      commits: 0,
      issuesClosed: 0,
      tests: 0,
    };
    var Ella = {
      commits: 0,
      issuesClosed: 0,
      tests: 0,
    };
    var Joseph = {
      commits: 0,
      issuesClosed: 0,
      tests: 0,
    };
    var Levi = {
      commits: 0,
      issuesClosed: 0,
      tests: 24, // Hardcoding this because we don't track it in GitLab
    };
    var Miles = {
      commits: 0,
      issuesClosed: 0,
      tests: 0,
    };

    this.state = {
      Billy: Billy,
      Ella: Ella,
      Joseph: Joseph,
      Levi: Levi,
      Miles: Miles,
      totalCommits: 0,
      totalIssues: 0,
      issuesClosed: 0,
    };
  }

  componentDidMount() {
    this.grabCommits();
    this.grabIssues();
  }

  async grabCommits() {
    fetch(GITLAB_COMMIT_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        // Clone the state so we can set it only once
        var intermediateState = JSON.parse(JSON.stringify(this.state));

        res.forEach((commit) => {
          intermediateState.totalCommits++;
          switch (commit.committer_name) {
            case "Ella Robertson":
            case "ellarobertson":
              intermediateState.Ella.commits++;
              break;
            case "Levi Villarreal":
              intermediateState.Levi.commits++;
              break;
            case "Joseph Engelhart":
            case "jengelhart":
              intermediateState.Joseph.commits++;
              break;
            case "Miles Chandler":
              intermediateState.Miles.commits++;
              break;
            case "Billy Vo":
            case "billyvo":
              intermediateState.Billy.commits++;
              break;
            default:
          }
        });

        this.setState({
          Billy: intermediateState.Billy,
          Ella: intermediateState.Ella,
          Joseph: intermediateState.Joseph,
          Levi: intermediateState.Levi,
          Miles: intermediateState.Miles,
          totalCommits: intermediateState.totalCommits,
        });
      })
      .catch((err) => {
        console.error("Problem fetching Gitlab commits");
        console.error(err);
      });
  }

  async grabIssues() {
    fetch(GITLAB_ISSUES_ENDPOINT)
      .then((res) => res.json())
      .then((res) => {
        // Clone the state so we can set it only once
        var intermediateState = JSON.parse(JSON.stringify(this.state));

        res.forEach((issue) => {
          intermediateState.totalIssues++;
          if (issue.closed_by != null) {
            intermediateState.issuesClosed++;
            issue.assignees.forEach((assignee) => {
              switch (assignee.name) {
                case "Ella Robertson":
                case "ellarobertson":
                  intermediateState.Ella.issuesClosed++;
                  break;
                case "Levi Villarreal":
                  intermediateState.Levi.issuesClosed++;
                  break;
                case "Joseph Engelhart":
                case "jengelhart":
                  intermediateState.Joseph.issuesClosed++;
                  break;
                case "Miles Chandler":
                  intermediateState.Miles.issuesClosed++;
                  break;
                case "Billy Vo":
                case "billyvo":
                  intermediateState.Billy.issuesClosed++;
                  break;
                default:
                  console.log(issue);
              }
            });
          }
        });
        this.setState({
          Billy: intermediateState.Billy,
          Ella: intermediateState.Ella,
          Joseph: intermediateState.Joseph,
          Levi: intermediateState.Levi,
          Miles: intermediateState.Miles,
          totalIssues: intermediateState.totalIssues,
          issuesClosed: intermediateState.issuesClosed,
        });
      })
      .catch((err) => {
        console.error("Problem fetching Gitlab issues");
        console.error(err);
      });
  }

  render() {
    const { Billy, Ella, Joseph, Levi, Miles, totalCommits, issuesClosed } =
      this.state;

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>About</h2>
        </div>

        <div className="container">
          <p className="about-lead">
            Purpose: This website is meant to encourage Americans/tourists to go
            outdoors by highlighting National Parks and recreational activities
            in their area.
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
          <h3 className="text-center">Closed issues: {issuesClosed}</h3>

          <div className="row">
            <TeamMember
              name="Miles Chandler"
              imageUrl={MilesPhoto}
              commits={Miles.commits}
              issuesClosed={Miles.issuesClosed}
              tests={Miles.tests}
            />
            <TeamMember
              name="Joseph Engelhart"
              imageUrl={JosephPhoto}
              commits={Joseph.commits}
              issuesClosed={Joseph.issuesClosed}
              tests={Joseph.tests}
            />
            <TeamMember
              name="Ella Robertson"
              imageUrl={EllaPhoto}
              commits={Ella.commits}
              issuesClosed={Ella.issuesClosed}
              tests={Ella.tests}
            />
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <TeamMember
              name="Levi Villarreal"
              imageUrl={LeviPhoto}
              commits={Levi.commits}
              issuesClosed={Levi.issuesClosed}
              tests={Levi.tests}
            />
            <TeamMember
              name="Billy Vo"
              imageUrl={BillyPhoto}
              commits={Billy.commits}
              issuesClosed={Billy.issuesClosed}
              tests={Billy.tests}
            />
            <div className="col-sm-2"></div>
          </div>

          <br />

          <h1 className="text-center">
            <span>Tools Used</span>
          </h1>

          <div className="row">
            <ToolCard
              imageUrl={ReactPhoto}
              tool_name={"React JS"}
              description={"JavaScript library, namely using react routing"}
            />
            <ToolCard
              imageUrl={NodePhoto}
              tool_name={"Node"}
              description={
                "JavaScript run-time environment that executes JavaScript code outside of a browser"
              }
            />
            <ToolCard
              imageUrl={ExpressPhoto}
              tool_name="Express"
              description="Web application framework for Node.js, designed for building web applications and APIs"
            />
            <ToolCard
              imageUrl={GCPPhoto}
              tool_name="GCP"
              description="Used to deploy and host the web application"
            />
            <ToolCard
              imageUrl={BootstrapPhoto}
              tool_name="Bootstrap"
              description="Free and open-source CSS framework directed at responsive, mobile-first front-end web development"
            />
            <ToolCard
              imageUrl={PostmanPhoto}
              tool_name="Postman"
              description="Used to document our API and output in HTML format"
            />
            <ToolCard
              imageUrl={GitlabPhoto}
              tool_name="GitLab"
              description="Used to host our code and provide CI/CD environments"
            />
            <ToolCard
              imageUrl={PixabayPhoto}
              tool_name="Pixabay"
              description="Used to find royalty-free images for the static site"
            />
            <ToolCard
              imageUrl={NamecheapPhoto}
              tool_name="NameCheap"
              description="Used to provide website URLs"
            />
            <ToolCard
              imageUrl={MochaPhoto}
              tool_name="Mocha"
              description="Used as our JavaScript test framework"
            />
            <ToolCard
              imageUrl={EnzymePhoto}
              tool_name="Enzyme"
              description="Used to more easily test our React components"
            />
            <ToolCard
              imageUrl={SeleniumPhoto}
              tool_name="Selenium"
              description="Used to automate acceptance tests"
            />
            <ToolCard
              imageUrl={ChromePhoto}
              tool_name="Chrome Webdriver"
              description="A controllable webdriver for Selenium"
            />
            <ToolCard
              imageUrl={SCSSPhoto}
              tool_name="SCSS"
              description="Used to make styles more flexible and readable"
            />
            <ToolCard
              imageUrl={DockerPhoto}
              tool_name="Docker"
              description="Used to provide images for frontend and backend development"
            />
            <ToolCard
              imageUrl={MySQLPhoto}
              tool_name="MySQL"
              description="Relational database management system used to store our data"
            />
            <ToolCard
              imageUrl={CloudPhoto}
              tool_name="Cloud SQL Proxy"
              description="Allowed to connect to the database locally using GCP"
            />
            <ToolCard
              imageUrl={FlaskPhoto}
              tool_name="Flask"
              description="Lightweight python web framework, used for our backend API"
            />
            <ToolCard
              imageUrl={D3Photo}
              tool_name="D3.js"
              description="JavaScript Library to support data visualizations"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
