import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

import { useSuccessMessage } from "../../contexts/SuccessMessageContext";

import ConfirmDelete from "../../components/ConfirmDelete";

import { categoryColors } from "../../components/CategoryColors";


const Event = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    description,
    image,
    eventPage,
    start_time,
    updated_at,
    category,
  } = props;


  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const { triggerSuccessMessage } = useSuccessMessage();

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const openConfirmDelete = () => setShowConfirmDelete(true);
  const closeConfirmDelete = () => setShowConfirmDelete(false);

  const categoryColor = categoryColors[category] || categoryColors.other;

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      triggerSuccessMessage('Event successfully deleted!');
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <>
    <ConfirmDelete
      show={showConfirmDelete}
      handleClose={closeConfirmDelete}
      handleDelete={handleDelete}
      itemName={title}
    />
    <Card className={styles.Post}>
      <Card.Body>
        <div className={styles.Category} style={{ backgroundColor: categoryColor }}>
        {category} Event
        </div>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          {title && <Card.Title className="text-center">{title}</Card.Title>}
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={openConfirmDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/events/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {description && <Card.Text>{description}</Card.Text>}
        <div className={styles.PostBar}>
        <Link to={`/events/${id}`}>
              <i className="far fa-calendar" />
            </Link>
          <span>{start_time}</span>
        </div>
      </Card.Body>
    </Card>
  </>
  );
};

export default Event;