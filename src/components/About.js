import React from 'react';
import TeamMember from './TeamMember'

// Gitlab issues/commit retrieval inspired by shub95/foodmeonce
class About extends React.Component {
  constructor(props) {
    super(props)
    var Billy = [0,0,0]
    var Ella = [0,0,0]
    var Joseph = [0,0,0]
    var Levi = [0,0,1]
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
      <div className="container">
        <h2>About</h2>
        <div className="row">
          <div className="col-sm-4">
            <TeamMember
              name="Miles Chandler"
              imageUrl="https://gitlab.com/uploads/-/system/user/avatar/4575643/avatar.png?width=400"
              commits={Miles[0]}
              issuesClosed={Miles[1]}
              tests={Miles[2]}
            />
          </div>
          <div className="col-sm-4">
            <TeamMember
              name="Joseph Engelhart"
              imageUrl="https://gitlab.com/uploads/-/system/user/avatar/4629720/avatar.png?width=400"
              commits={Joseph[0]}
              issuesClosed={Joseph[1]}
              tests={Joseph[2]}
            />
          </div>
          <div className="col-sm-4">
            <TeamMember
              name="Ella Robertson"
              imageUrl="https://gitlab.com/uploads/-/system/user/avatar/4532084/avatar.png?width=400"
              commits={Ella[0]}
              issuesClosed={Ella[1]}
              tests={Ella[2]}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-4">
            <TeamMember
              name="Levi Villarreal"
              imageUrl="https://gitlab.com/uploads/-/system/user/avatar/4584789/avatar.png?width=400"
              commits={Levi[0]}
              issuesClosed={Levi[1]}
              tests={Levi[2]}
            />
          </div>
          <div className="col-sm-4">
            <TeamMember
              name="Billy Vo"
              imageUrl="https://gitlab.com/uploads/-/system/user/avatar/4597292/avatar.png?width=400"
              commits={Billy[0]}
              issuesClosed={Billy[1]}
              tests={Billy[2]}
            />
          </div>
        </div>

        <p>Total Commits: {totalCommits}</p>
        <p>Closed issues: {closedIssues}</p>

        <h3>Postman Documentation</h3>
        <p><a href="https://documenter.getpostman.com/view/9011044/SVtR19mz?version=latest">Link to postman documentation</a></p>
      </div>
    );
  }
}

export default About;
