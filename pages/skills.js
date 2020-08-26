import Layout from "../components/MyLayout";

const skills=()=>{
  return(
  <Layout>
      <div className="skills-container">
      <div className="skills-grid">
        <sec className="skill html">
          <div className="icon">
            <i className="fab fa-html5"/>
          </div>
        </sec>
        <sec className="skill css">
          <div className="icon">
            <i className="fab fa-css3-alt"/>
          </div>
        </sec>
        <sec className="skill js">
          <div className="icon">
            <i className="fab fa-js-square"/>
          </div>
        </sec>
        <sec className="skill react">
          <div className="icon">
            <i className="fab fa-react"/>
          </div>
        </sec>
        <sec className="skill node">
          <div className="icon">
            <div className="icon-holder">
            < i className="fab fa-node"/>  
            </div>
            
          </div>
        </sec>
        <sec className="skill git">
          <div className="icon">
            <i className="fab fa-github-square"/>
          </div>
        </sec>
      </div>
      </div>
    

  </Layout>);

}

export default skills;