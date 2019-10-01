import React from 'react';
import TeamMember from './TeamMember'

class About extends React.Component {
  state = {
    team: [],
    issues: []
  }
  componentDidMount() {
    fetch('https://gitlab.com/api/v4/projects/14563233/repository/contributors')
    .then(res => res.json())
    .then((data) => {
      this.setState({team:data})
    })
    fetch('https://gitlab.com/api/v4/projects/14563233/issues')
    .then(res => res.json())
    .then((data) => {
      this.setState({issues:data})
    })
  }
  render() {
    return (
      // Use React.Fragment because there are multiple HTML top-level elements
      <React.Fragment>
        <h2>About</h2>

        <ul>
          {this.state.team.map(function(member, index){
            
            // Return a single team member object
            return (
              <TeamMember member={member} issues={this.state.issues}/>
              /*
              <li>
                <h3>{member.name}</h3>
                <p>Commits: {member.commits}</p>
              </li>
              */
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default About;
