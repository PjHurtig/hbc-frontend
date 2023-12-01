import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";

import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "./Event";

import PopularProfiles from "../profiles/PopularProfiles";


function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState({ results: [] });

  useEffect(() => {
    let isMounted = true;
    
    const handleMount = async () => {
      try {
        const [{ data: event }] = await Promise.all([
          axiosReq.get(`/events/${id}`),
        ]);
        if (isMounted) {
          setEvent({ results: [event] });
        }
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
        <Event {...event.results[0]} setEvents={setEvent} eventPage />
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default EventPage;