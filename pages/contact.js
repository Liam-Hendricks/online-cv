//Import the Link API to support client-side navigation
import Layout from "../components/MyLayout";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const contact = () => (
  <Layout>
    <Card style={{ width: "35rem" }}>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <i className=" medium material-icons left ">contact_mail</i>
          <h5>
            <a href="mailto:liamkeatonhendricks@gmail.com">
              liamkeatonhendricks@gmail.com
            </a>
          </h5>
        </ListGroupItem>
       
        <ListGroupItem>
          {" "}
          <i className="medium material-icons left">location_on</i>
          <h5>Cape Town,South Africa</h5>
        </ListGroupItem>
      </ListGroup>
    </Card>
  </Layout>
);
export default contact;
/* <ListGroupItem>
{" "}
<i className="medium material-icons left">local_phone</i>
<h5>+27 76 571 8985</h5>
</ListGroupItem> */