import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewNotificationFormComponent
    from "../../components/home_page/NewNotificationFormComponent/NewNotificationFormComponent";

function HomePage() {
  return (
    <Container>
        <Row>
            <Col className={"col-12"}>
              <h1>Welcome to the Notification App</h1>
              <p>Select the category and enter the notification text you want to send.</p>
            </Col>

            <Col className={"col-4"}>
              <NewNotificationFormComponent />
            </Col>
        </Row>
    </Container>
  );
}

export default HomePage;