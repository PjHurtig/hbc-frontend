import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import DatePicker from "react-datepicker";

import { useSuccessMessage } from "../../contexts/SuccessMessageContext";

function EventEditForm() {
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const { title, description, image } = eventData;
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  const { triggerSuccessMessage } = useSuccessMessage();

  useEffect(() => {
    let isMounted = true;

    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/events/${id}/`);
        const { title, description, category, start_time, image, is_owner } = data;

        if (isMounted) {
          if (is_owner) {
            setEventData({ title, description, image }) 
            setCategory(category);
            setStartDate(new Date(start_time));
          } else {
            history.push("/");
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
  }, [history, id]);

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("start_time", startDate.toISOString());

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/events/${id}/`, formData);
      triggerSuccessMessage('Event successfully updated!');
      history.push(`/events/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control 
          as="select"
          value={category}
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          >
          <option value="other">Other</option>
          <option value="hiking">Hiking</option>
          <option value="bike">Bike</option>
          <option value="climbing">Climbing</option>
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Date</Form.Label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeInput
          name="start_time"
          dateFormat="yyyy-MM-dd HH:mm:ss"
          timeFormat="HH:mm:ss"
        />
      </Form.Group>
      {errors?.start_time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className={appStyles.header}>
        Edit Event
      </h1>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <figure>
                <Image 
                  className={appStyles.Image} 
                  src={image} 
                  rounded 
                />
              </figure>
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div 
              className="d-md-none">
              {textFields}
            </div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container 
            className={appStyles.Content}>
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventEditForm;