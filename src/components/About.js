import React from 'react';
import TeamMember from './TeamMember'
import BillyPhoto from '../assets/img/Billy.png'
import EllaPhoto from '../assets/img/Ella.png'
import JosephPhoto from '../assets/img/Joseph.png'
import LeviPhoto from '../assets/img/Levi.png'
import MilesPhoto from '../assets/img/Miles.png'

// Gitlab issues/commit retrieval inspired by shub95/foodmeonce
class About extends React.Component {
  constructor(props) {
    super(props)
    var Billy = [0,0,0]
    var Ella = [0,0,0]
    var Joseph = [0,0,0]
    var Levi = [0,0,14]
    var Miles = [0,0,0]
    var totalCommits = 0
    var closedIssues = 0

    this.state = {
      Billy: Billy,
      Ella: Ella,
      Joseph: Joseph,
      Levi: Levi,
      Miles: Miles,
      totalCommits: totalCommits,
      closedIssues: closedIssues
    }
  }

  componentDidMount() {
    this.grabCommits();
    this.grabIssues();
  }

  async grabIssues(){
    fetch("https://gitlab.com/api/v4/projects/14563233/issues?per_page=1000&page=1")
      .then(res => res.json())
      .then(res => {
        res.forEach(issue => {
          this.state.totalIssues +=1
          if(issue.closed_by != null){
            this.state.closedIssues +=1
            issue.assignees.forEach(assignee => {
              switch (assignee.name){
                case "Ella Robertson":
                case "ellarobertson":
                  this.state.Ella[1] +=1
                  break;
                case "Levi Villarreal":
                  this.state.Levi[1]+=1
                  break;
                case "Joseph Engelhart":
                case "jengelhart":
                    this.state.Joseph[1]+=1
                    break;
                case "Miles Chandler":
                    this.state.Miles[1]+=1
                    break;
                case "Billy Vo":
                case "billyvo":
                  this.state.Billy[1]+=1
                  break;
                default:
                  console.log(issue)
              }
            })
          }
        });
        this.setState(this.state)
      })
  }

  async grabCommits(){
    var page = 0
    while(page < 4){
    page+=1
    fetch("https://gitlab.com/api/v4/projects/14563233/repository/commits?per_page=100&page=" + page)
        .then(res => res.json())
        .then(res => {

          res.forEach(commit => {
            this.state.totalCommits += 1
            switch (commit.committer_name){
              case "Ella Robertson":
              case "ellarobertson":
                this.state.Ella[0] +=1
                break;
              case "Levi Villarreal":
                this.state.Levi[0]+=1
                break;
              case "Joseph Engelhart":
              case "jengelhart":
                  this.state.Joseph[0]+=1
                  break;
              case "Miles Chandler":
                  this.state.Miles[0]+=1
                  break;
              case "Billy Vo":
              case "billyvo":
                this.state.Billy[0]+=1
                break;
              default:
            }
          });
        })
      }
      this.setState(this.state)
  }

  render() {
    const {
      Billy,
      Ella,
      Joseph,
      Levi,
      Miles,
      totalCommits,
      closedIssues
    } = this.state

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>About</h2>
        </div>

        <div className="container">

          <p class="about-lead">Purpose: This website is meant to encourage Americans/tourists to go outdoors by highlighting National Parks and recreational activities in their area. Real beauty is found outside and we think more people should spend their time enjoying it.</p>

          <div className="about-buttons text-center">
            <a href="https://gitlab.com/leviv1/putitinpark/" target="_blank" rel="noopener noreferrer"><button className="button button-primary">Gitlab Repo</button></a>
            <a href="https://documenter.getpostman.com/view/9011044/SVtR19mz?version=latest" target="_blank" rel="noopener noreferrer"><button className="button button-secondary">API Docs</button></a>
          </div>

          <br/>

          <h1 className="text-center"><span>Total Stats</span></h1>

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
          <p className="about-lead">About this site: This site is supported by Google Cloud serving a Flask backend and React frontend.</p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
