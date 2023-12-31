import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import GearList from "./GearList";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

function GearListsPage({ message, filter = "" }) {
  const [gearLists, setGearLists] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  const currentUser = useCurrentUser();

  useEffect(() => {
    let isMounted = true;

    const fetchGearLists = async () => {
      try {
        const { data } = await axiosReq.get(`/gearlists/?${filter}search=${query}`);
        if (isMounted) {
          setGearLists(data);
          setHasLoaded(true);
        }
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchGearLists();
    }, 1000);

    return () => {
      clearTimeout(timer);
      isMounted = false;
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            name="gearlist-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search gear lists"
          />
        </Form>

        {hasLoaded ? (
          <>
            {gearLists.results.length ? (
              <InfiniteScroll
                children={gearLists.results.map((gearList) => (
                  <GearList key={gearList.id} {...gearList} setGearLists={setGearLists} />
                ))}
                dataLength={gearLists.results.length}
                loader={<Asset spinner />}
                hasMore={!!gearLists.next}
                next={() => fetchMoreData(gearLists, setGearLists)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default GearListsPage;