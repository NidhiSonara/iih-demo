import "../CSS/sidebar.css";
import React from "react";

class Sidebar extends React.Component{
render() {
    return (
      <Sidebar width={300} height={"100vh"}>
            <h1>1. Free technical consultation </h1>
            <h3>Detailed tech plan includes things like what tech stack to use,
                 tech architecture, timeline, and budget for your project.</h3>
            <h1>2. Connect with the tech team</h1>
            <h3>Over a series of calls, our tech team discusses how different 
                technologies and frameworks will bring your vision to life.</h3>
            <h1>3. Onboarding the team</h1>
            <h3>As soon as you sign-off on the team, they’ll be ready to integrate 
                into your team—just like in-house employees.</h3>
          </Sidebar>
      )
  }
}
export default Sidebar;