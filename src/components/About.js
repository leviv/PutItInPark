import React from 'react';
import TeamMember from './TeamMember'

class About extends React.Component {
  state = {
    team: [],
    issues: []
  }

  aggregateDuplicates(data) {
    // if we have duplicate names just combine their total commits
    var dict = {}
    var aggedData = []
    //console.log('data', data[0].name)
    let i;
    for (i = 0; i < data.length; i++) {
      var member = data[i]
      if (dict[member.name]){
        dict[member.name] += member.commits
      } else {
        dict[member.name] = member.commits
      }
    }
    aggedData = []
    for (var key in dict) {
      var teamMember = {
        name: key,
        commits: dict[key]
      }
      aggedData.push(teamMember)
    }
    this.setState({
      team: aggedData
    })
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
      this.aggregateDuplicates(data)
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
