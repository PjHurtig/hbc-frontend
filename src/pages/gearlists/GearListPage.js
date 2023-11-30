import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/GearListPage.module.css"
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import GearList from "./GearList";
import GearItem from "../gearitems/GearItem";

import GearItemCreateForm from "../gearitems/GearItemCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";
import { Button, Modal } from "react-bootstrap";

function GearListPage() {
  const { id } = useParams();
  const [gearList, setGearList] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [gearItems, setGearItems] = useState({ results: [] });

  // add gear item modal usestates
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let isMounted = true;

    const handleMount = async () => {
      try {
        const [{ data: gearList }, { data: gearItems }] = await Promise.all([
          axiosReq.get(`/gearlists/${id}`),
          axiosReq.get(`/gearitems/?gearlist=${id}`),
        ]);
        if (isMounted) {
          setGearList({ results: [gearList] });

          if (gearItems.results && Array.isArray(gearItems.results)) {
            setGearItems(gearItems);
          } else {
            setGearItems({ results: [] });
          }
        }
      } catch (err) {
        console.log(err);
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
        <p>Popular profiles for mobile</p>
        <GearList {...gearList.results[0]} setGearLists={setGearList} gearListPage />
        <Container className={appStyles.Content}>
        {currentUser && gearList.results[0]?.owner === currentUser.username ? (
          <>
          <div className={styles.AddButton}>
            <Button 
              variant="info"
              onClick={handleShow}
            >
             <i className="far fa-plus-square"></i> Add Gear
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add gear items</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <GearItemCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                gearList={id}
                setGearList={setGearList}
                setGearItems={setGearItems}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          </>
          ) : gearItems.results.length ? (
            <h3 className={styles.H3}>Gear Items</h3>
          ) : null}
          {gearItems.results.length ? (
            <InfiniteScroll
              children={gearItems.results.map((gearItem) => (
                <GearItem
                  key={gearItem.id}
                  {...gearItem}
                  setGearList={setGearList}
                  setGearItems={setGearItems}
                />
              ))}
              dataLength={gearItems.results.length}
              loader={<Asset spinner />}
              hasMore={!!gearItems.next}
              next={() => fetchMoreData(gearItems, setGearItems)}
            />
          ) : currentUser && gearList.results[0]?.owner === currentUser.username ? (
            <div className="text-center">No items... yet, add one!</div>
          ) : (
            <div className="text-center">No items... yet</div>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default GearListPage;