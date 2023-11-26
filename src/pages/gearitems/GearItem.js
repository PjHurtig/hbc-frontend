import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

import { MoreDropdown } from "../../components/MoreDropdown";
import GearItemEditForm from "./GearItemEditForm";

import styles from "../../styles/GearItem.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from "../../api/axiosDefaults";

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


  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/gearitems/${id}/`);
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
  
  return (
    <>
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
                  handleDelete={handleDelete}
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