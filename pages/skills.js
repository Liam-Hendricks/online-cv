import Layout from "../components/MyLayout";

const skills = () => {
  return (
    <Layout>
      <div className="skills-container">
        <div className="skills-grid">
          <sec className="skill html">
            <div className="icon">
              <i className="fab fa-html5" />
            </div>
            <div className="skill-name">
              <h3>HTML</h3>
            </div>
          </sec>
          <sec className="skill css">
            <div className="icon">
              <i className="fab fa-css3-alt" />
            </div>
            <div className="skill-name">
              <h3>CSS</h3>
            </div>
          </sec>
          <sec className="skill js">
            <div className="icon">
              <i className="fab fa-js-square" />
            </div>
            <div className="skill-name">
              <h3>JavaScript</h3>
            </div>
          </sec>
          <sec className="skill react">
            <div className="icon">
              <i className="fab fa-react" />
            </div>
            <div className="skill-name">
              <h3>React.js</h3>
            </div>
          </sec>
          <sec className="skill node">
            <div className="icon">
              <i className="fab fa-node" />
            </div>
            <div className="skill-name">
              <h3>Node.js</h3>
            </div>
          </sec>
          <sec className="skill git">
            <div className="icon">
              <i className="fab fa-github-square" />
            </div>
            <div className="skill-name">
              <h3>GitHub</h3>
            </div>
          </sec>
        </div>
      </div>
    </Layout>
  );
};

export default skills;
