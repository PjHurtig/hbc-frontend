import React, { useState } from "react";
import { Alert, Card } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/GearItemCreateEditForm.module.css";

import { useSuccessMessage } from "../../contexts/SuccessMessageContext";

function GearItemEditForm(props) {
  const { id, name, about, setShowEditForm, setGearItems, image } = props;

  const [errors, setErrors] = useState({});
  
  const [formAbout, setFormAbout] = useState(about);
  const [formName, setFormName] = useState(name);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(image);

  const { triggerSuccessMessage } = useSuccessMessage();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

    const handleNameChange = (event) => {
    setFormName(event.target.value);
  };

  const handleAboutChange = (event) => {
    setFormAbout(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("about", formAbout.trim());
    formData.append("name", formName.trim());
  
    if (selectedImage) {
      formData.append("image", selectedImage);
    }
  
    try {
      const { data } = await axiosRes.put(`/gearitems/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setGearItems((prevGearItems) => ({
        ...prevGearItems,
        results: prevGearItems.results.map((gearItem) => {
          if (gearItem.id === id) {
            return {
              ...gearItem,
              about: data.about,
              name: data.name,
              image: data.image, 
              updated_at: data.updated_at,
            };
          }
          return gearItem;
        }),
      }));
      triggerSuccessMessage(`"${data.name}" successfully updated!`);
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form 
    onSubmit={handleSubmit}
    className={styles.FormHeader}
    >
      <Form.Group className="pr-1">
      <Form.Label>Name:</Form.Label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formName}
          onChange={handleNameChange}
          name="name"
          rows={1}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
        ))}

      <Form.Group className="pr-1">
      <Form.Label>About:</Form.Label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formAbout}
          onChange={handleAboutChange}
          name="about"
          rows={2}
        />
      </Form.Group>
      {errors?.about?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
        ))}
      <Form.Group>
        <Form.Label htmlFor="image-upload" className="btn btn-primary">
          Change Image
        </Form.Label>
        <Form.File
          id="image-upload"
          name="image"
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
        />
        {imagePreview && (
          <Card.Img 
            variant="top" 
            src={imagePreview} 
            className={styles.Img} 
          />
        )}
      </Form.Group>
      {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>{message}</Alert>
      ))}

      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!about.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default GearItemEditForm;