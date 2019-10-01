import React from 'react';

class TeamMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.member.name,
            commits: this.props.member.commits,
            issues: this.props.issues,
            issuesClosed: 0
        }
    }

    componentDidMount() {
        this.countIssues()
    }
    
    countIssues(){
        var closedIssues = 0
        this.state.issues.forEach(issue => {
            if (issue.closed_by) {
                if (issue.closed_by.name === this.state.name){
                    closedIssues++
                }
            }
        });
        this.setState({
            issuesClosed: closedIssues
        })
    }
    render() {
        return (
        <React.Fragment>
            <h3>{this.state.name}</h3>
            <p>Commits: {this.state.commits}</p>
            <p>Issues: {this.state.issuesClosed}</p>
        </React.Fragment>
        );
    }
    }

export default TeamMember;
