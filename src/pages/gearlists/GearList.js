import React, { useState } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

import { useSuccessMessage } from "../../contexts/SuccessMessageContext";

import ConfirmDelete from "../../components/ConfirmDelete";

import { categoryColors } from "../../components/CategoryColors";

const GearList = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    title,
    description,
    image,
    updated_at,
    gearListPage,
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
    history.push(`/gearlists/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/gearlists/${id}/`);
      triggerSuccessMessage('Gear list successfully deleted!');
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
          {category} Gear List
          </div>
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
              {owner}
            </Link>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            <div className="d-flex align-items-center">
              <span>{updated_at}</span>
              {is_owner && gearListPage && (
                <MoreDropdown
                  handleEdit={handleEdit}
                  handleDelete={openConfirmDelete}
                />
              )}
            </div>
          </Media>
        </Card.Body>
        <Link to={`/gearlists/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
          {description && <Card.Text>{description}</Card.Text>}

        </Card.Body>
      </Card>
    </>
  );
};

export default GearList;