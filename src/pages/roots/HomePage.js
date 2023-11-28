import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import btnStyles from "../../styles/Button.module.css";
import axios from 'axios'; 
import EventsPage from '../events/EventsPage';
import PostsPage from '../posts/PostsPage';

import GearListsPage from '../gearlists/GearListsPage';


const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('posts');
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [gearlists, setGearlists] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/posts');
      setPosts(response.data);
    };

    const fetchEvents = async () => {
      const response = await axios.get('/events?ordering=start_time');
      setEvents(response.data);
    };

    const fetchGearlists = async () => {
      const response = await axios.get('/gearlists');
      setGearlists(response.data);
    };

    if (activeCategory === 'posts') {
      fetchPosts();
    } else if (activeCategory === 'events') {
      fetchEvents();
    } else if (activeCategory === 'gearlists') {
      fetchGearlists();
    }
  }, [activeCategory]);

  return (
    <Container>
      <Row >
        <Col lg={8} className={`${btnStyles.pagesButtons}`}>
          <Button 
            className={`${btnStyles.Button}`}
            onClick={() => setActiveCategory('posts')} 
            active={activeCategory === 'posts'}
          >
            Posts
          </Button>

          <Button 
            className={`${btnStyles.Button}`}
            onClick={() => setActiveCategory('events')} 
            active={activeCategory === 'events'}
          >
            Events
          </Button>

          <Button 
            className={`${btnStyles.Button}`}
            onClick={() => setActiveCategory('gearlists')} 
            active={activeCategory === 'gearlists'}
          >
            Gearlists
          </Button>

        </Col>
      </Row>
      <Row>
        <Col>
          {activeCategory === 'posts' && <PostsPage posts={posts} />}
          {activeCategory === 'events' && <EventsPage events={events} />}
          {activeCategory === 'gearlists' && <GearListsPage gearlists={gearlists} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;