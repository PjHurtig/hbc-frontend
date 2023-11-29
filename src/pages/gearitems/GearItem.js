import React, { useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";

import { MoreDropdown } from "../../components/MoreDropdown";
import GearItemEditForm from "./GearItemEditForm";

import styles from "../../styles/GearItem.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

import { useSuccessMessage } from "../../contexts/SuccessMessageContext";

const GearItem = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    about,
    name,
    image,
    id,
    setGearList,
    setGearItems,
  } = props;

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { triggerSuccessMessage } = useSuccessMessage();


  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/gearitems/${id}/`);
      triggerSuccessMessage(`"${name}" successfully deleted!`);
      setGearList((prevGearList) => ({
        results: [
          {
            ...prevGearList.results[0],
            gearitems_count: prevGearList.results[0].gearitems_count - 1,
          },
        ],
      }));
  
      setGearItems((prevGearItems) => ({
        results: prevGearItems.results.filter((gearitem) => gearitem.id !== id),
      }));
    } catch (err) {

    }
  };
  
  const openConfirmDelete = () => setShowConfirmDelete(true);
  const closeConfirmDelete = () => setShowConfirmDelete(false);

  return (
    <>
      <Modal show={showConfirmDelete} onHide={closeConfirmDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete "{name}" from the gear list?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeConfirmDelete}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => { handleDelete(); closeConfirmDelete(); }}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle 
            as={Card.Header} 
            eventKey="0"
            className={styles.Header}
            >
          <i className="fa-solid fa-chevron-down"></i>
          <span className={styles.Name}>{name}</span>
          <span className={styles.Date}>{updated_at}</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.Body}>
              
                {showEditForm ? (
                  <GearItemEditForm
                    id={id}
                    profile_id={profile_id}
                    about={about}
                    name={name}
                    profileImage={profile_image}
                    setGearItems={setGearItems}
                    setShowEditForm={setShowEditForm}
                    image={image}
                  />
                ) : (
                  <>
                    <Card.Text>
                      {about}
                    </Card.Text>
                    
                    <Card.Img 
                    variant="top" 
                    src={image} 
                    className={styles.Img}
                    />
                  </>
                )}
              

              {is_owner && !showEditForm && (
                <MoreDropdown
                  handleEdit={() => setShowEditForm(true)}
                  handleDelete={openConfirmDelete}
                />
              )}

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default GearItem;