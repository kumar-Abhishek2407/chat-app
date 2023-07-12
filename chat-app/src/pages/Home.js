import React from 'react';
import { Col, Grid, Row } from 'rsuite';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Grid fluid className="h-100">
      <Row>
        <Col>
          <Sidebar />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
