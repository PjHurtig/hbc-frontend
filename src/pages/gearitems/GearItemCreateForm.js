import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Upload from "../../assets/upload.png";
import Image from "react-bootstrap/Image";
import styles from "../../styles/GearItemCreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { Alert } from "react-bootstrap";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

function GearItemCreateForm(props) {
  useRedirect('loggedOut')
  const [errors, setErrors] = useState({});
  const { gearList, setGearList, setGearItems } = props;
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    gearlist: "",
    name: "",
    about: "",
    image: "",
  });
  const { name, about, image } = formData;
  const imageInput = useRef(null);
  const timeoutId = useRef();

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setFormData({
        ...formData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  
  const clearErrors = () => {
    setErrors({});
  };

  useEffect(() => {
    const currentTimeoutId = timeoutId.current;
    return () => {
      clearTimeout(currentTimeoutId);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("name", name);
    formDataToSend.append("about", about);
    formDataToSend.append("gearlist", gearList); 

    if (imageInput.current.files[0]) {
      formDataToSend.append("image", imageInput.current.files[0]);
   }

    try {
      const { data } = await axiosRes.post(`/gearitems/`, formDataToSend);

      setGearItems((prevGearItems) => ({
        ...prevGearItems,
        results: [data, ...prevGearItems.results],
      }));

      setGearList((prevGearList) => ({
        results: [
          {
            ...prevGearList.results[0],
          },
        ],
      }));
      setSuccessMessage("Gear item successfully created!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setFormData({
        name: "",
        about: "",
        image: "",
      });
    } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          timeoutId.current = setTimeout(clearErrors, 3000);
        }
      }
  };

  return (
    <Form 
      onSubmit={handleSubmit}
      className={styles.FormHead}
      encType="multipart/form-data"
    >
      {successMessage && (
        <Alert variant="success">
          {successMessage}
        </Alert>
      )}

      <Form.Group>
        <Form.Label className="d-none">Name</Form.Label>
        <Form.Control 
          placeholder="Item name..."
          name="name"
          value={name}
          onChange={handleInputChange} 
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
  
      <Form.Group>
        <Form.Label className="d-none">About</Form.Label>
          <Form.Control 
            placeholder="About the item..."
            name="about"
            value={about}
            onChange={handleInputChange}
            as="textarea" 
            rows={3} 
          />
      </Form.Group>
      {errors?.about?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group className="text-center">
        {image ? (
          <>
            <figure>
              <Image className={appStyles.Image} src={image} rounded />
            </figure>
            <div>
              <Form.Label
                className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                htmlFor="image-upload"
              >
                Change the image
              </Form.Label>
            </div>
          </>
        ) : (
          <Form.Label
            className="d-flex justify-content-center"
            htmlFor="image-upload"
          >
            <Asset
              src={Upload}
              message="Click or tap to upload an image"
            />
          </Form.Label>
        )}

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

      <button
        className={`${styles.Button} btn d-block ml-auto`}
        type="submit"
      >
        Add
      </button>
    </Form>
  );
}

export default GearItemCreateForm;