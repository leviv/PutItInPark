import React from 'react';
import TeamMember from './TeamMember'

class About extends React.Component {
  state = {
    team: [],
    issues: [],
    load: false
  }

  removeCustomers(data) {
    var teamMembers = []
    let i;
    for(i = 0; i < data.length; ++i) {
      var member = data[i]
      if (member.access_level === 40) {
        teamMembers.push(member)
      }
    }
    this.setState({
      team:teamMembers
    })
  }

  transformName(name){
    return name.toLowerCase().replace(/\s/g, '');
  }
  aggregateDuplicates(data) {
    // if we have duplicate names just combine their total commits
    var dict = {}
    let i;
    for (i = 0; i < data.length; i++) {
      var member = data[i]
      var name = this.transformName(member.committer_name)
      if (dict[name]){
        dict[name] += 1
      } else {
        dict[name] = 1
      }
    }
    var teamWithCommits = []
    let j;
    for (j = 0; j < this.state.team.length; ++j) {
      member = this.state.team[j]
      name = this.transformName(member.name)
      var numCommits = dict[name]
      var memberWithCommits = {
        ...member,
        commits: numCommits
      }
      teamWithCommits.push(memberWithCommits)
    }
    this.setState({
      team:teamWithCommits
    })
  }
  async componentDidMount() {
    await fetch('https://gitlab.com/api/v4/projects/14563233/members',
    {headers:{'PRIVATE-TOKEN': 'wbRqCM6kGxhr5x98_dHj'}})
    .then(res => res.json())
    .then((data) => {
      this.removeCustomers(data)
    })

    await fetch('https://gitlab.com/api/v4/projects/14563233/repository/commits')
    .then(res => res.json())
    .then((data) => {
      this.aggregateDuplicates(data)
    })
    await fetch('https://gitlab.com/api/v4/projects/14563233/issues')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        issues:data,
        load: true
      })
    })
    console.log(this.state)
  }

  render() {
    var issueStats = this.state.issues
    return (
      // Use React.Fragment because there are multiple HTML top-level elements
      <div className="container">
        <h2>About</h2>
        {this.state.load &&(<div className="row">
          {this.state.team.map(function(member){
            // Return a single team member component
            return (
              <div className="col-md">
                <TeamMember member={member} issues={issueStats}/>
              </div>
            );
          })}
        </div>)}
      </div>
    );
  }
}

export default About;
