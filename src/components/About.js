import React from 'react';

// Team member data
const team = [
  {
    firstName: "Miles",
    lastName: "Chandler",
    bio: "Miles Chandler Bio"
  },
  {
    firstName: "Joseph",
    lastName: "Engelhart",
    bio: "Joseph Engelhart Bio"
  },
  {
    firstName: "Ella",
    lastName: "Robertson",
    bio: "Ella Robertson Bio"
  },
  {
    firstName: "Billy",
    lastName: "Vo",
    bio: "Billy Vo Bio"
  },
  {
    firstName: "Levi",
    lastName: "Villarreal",
    bio: "Levi Villarral Bio"
  },
];

class About extends React.Component {
  render() {
    return (
      // Use React.Fragment because there are multiple HTML top-level elements
      <React.Fragment>
        <h2>About</h2>

        <ul>
          {team.map(function(member, index){
            
            // Return a single team member object
            return (
              <li>
                <h3>{member.firstName} {member.lastName}</h3>
                <p>{member.bio}</p>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default About;
