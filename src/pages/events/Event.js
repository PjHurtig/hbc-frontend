import React from "react";
import styles from "../../styles/Event.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Col, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";

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
  } = props;


  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/events/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Col lg={8} className="mx-auto mb-4">
      <Card className={styles.Event}>
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
              {owner}
            </Link>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            <div className="d-flex align-items-center">
              {is_owner && eventPage && (
                <MoreDropdown
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              )}
            </div>
          </Media>
        </Card.Body>
        
        <Card.Body>
          {description && <Card.Text>{description}</Card.Text>}
          <div className={styles.PostBar}>
          <Link to={`/events/${id}`}>
          <Card.Img src={image} alt={title} />
        </Link>
            <Link to={`/events/${id}`}>
              <i className="far fa-calendar" />
            </Link>
          </div>
          <span>{start_time}</span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Event;