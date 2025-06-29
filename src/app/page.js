
import React from "react";
import LeftSection from "@/components/home/LeftSection";
import RightSection from "@/components/home/RightSection";
import { Col, Container, Row } from "react-bootstrap";

const Mayank = () => {
  return (
    <Container fluid className="bg-dark text-white min-vh-100">
      <Row>
        <Col md={3} className="p-0">
          <LeftSection />
        </Col>
        <Col md={9} className="d-flex align-items-center justify-content-center">
          <RightSection />
        </Col>
      </Row>
    </Container>
  );
};

export default Mayank;
