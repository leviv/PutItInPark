import React from 'react';

class TeamMember extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.member.name,
            commits: this.props.member.commits,
            issues: this.props.issues,
            issuesClosed: 0,
            imgURL: this.props.member.avatar_url
        }
    }

    componentDidMount() {
        this.countIssues()
        this.setState({
            name:this.props.member.name,
            commits: this.props.member.commits,
            issues: this.props.issues,
            imgURL:this.props.member.avatar_url
        })
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
        var alt = 'https://cdn.imgbin.com/5/19/23/imgbin-monterey-bay-aquarium-gary-park-ranger-forest-ranger-s-vhPH4MdLUQsTuFtSvF9QiFkmy.jpg'
        return (
        <div className="container">
            <h3>{this.state.name}</h3>
            <img src={this.state.imgURL} alt={alt}></img>
            <p>Commits: {this.state.commits}</p>
            <p>Issues: {this.state.issuesClosed}</p>
        </div>
        );
    }
    }

export default TeamMember;
