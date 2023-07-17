import React from 'react';
import { Container } from "react-bootstrap";
import LatestLogsComponents from "../../components/logs_page/LatestLogsComponents/LatestLogsComponents";

function OtherPage() {
  return (
    <Container>
      <h1>Latest logs</h1>
      <LatestLogsComponents />
    </Container>
  );
}

export default OtherPage;
