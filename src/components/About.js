import React from 'react';
import TeamMember from './TeamMember'

class About extends React.Component {
  state = {
    team: [],
    issues: []
  }
  async componentDidMount() {
    
    await fetch('https://gitlab.com/api/v4/projects/14563233/issues')
    .then(res => res.json())
    .then((data) => {
      this.setState({issues:data})
    })
    
    await fetch('https://gitlab.com/api/v4/projects/14563233/repository/contributors')
    .then(res => res.json())
    .then((data) => {
      this.setState({team:data})
    })
    
  }
  render() {
    var issueStats = this.state.issues
    return (
      // Use React.Fragment because there are multiple HTML top-level elements
      <React.Fragment>
        <h2>About</h2>

        <ul>
          {this.state.team.map(function(member, index){
            // Return a single team member component
            return (
              <li>
                <TeamMember member={member} issues={issueStats}/>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default About;
