import React from 'react';

class TeamMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.member.name,
            commits: this.props.member.commits,
            issues: 0
        }
    }
    componentDidMount(){
        this.countIssues()
    }
    countIssues(){
        issuesClosed = 0
        for (issue in this.props.issues) {
            console.log(issue.closed_by)
        }
    }
    render() {
        return (
        // Use React.Fragment because there are multiple HTML top-level elements
        <React.Fragment>
            <h2>this.state.name</h2>

            <ul>
            {this.state.team.map(function(member, index){
                
                // Return a single team member object
                return (
                <li>
                    <h3>{member.name}</h3>
                    <p>Commits: {member.commits}</p>
                </li>
                );
            })}
            </ul>
        </React.Fragment>
        );
    }
    }

export default TeamMember;
