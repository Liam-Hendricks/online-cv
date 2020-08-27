//Import the Link API to support client-side navigation
import Layout from "../components/MyLayout";


const contact = () => (
  <Layout>
    <div className="contact-Card">
     <div className="contact-statement">
      <p>Feel free to contact my on LinkedIn or Email me</p>
     </div>
     <div className="statement-button">
        <a className="btn btn1" href="/static/CurrentCV.pdf" download="CV of Liam Hendricks.pdf">Download CV</a>
        <a className="btn btn2" href="mailto:liamkeatonhendricks@gmail.com">Contact</a>
     </div>
    
    </div>
  </Layout>
);
export default contact;
