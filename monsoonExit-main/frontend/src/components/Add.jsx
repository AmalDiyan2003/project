import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // You can add some basic validation here, like checking if the fields are filled
    if (!inputs.title || !inputs.content || !inputs.img_url) {
      alert("All fields are required.");
      return;
    }

    // Sending the data to the backend
    axios
      .post("http://localhost:3001/add", inputs)
      .then((res) => {
        alert(res.data.message); // Assuming backend sends a message back
        navigate("/"); // Navigate to home page
      })
      .catch((err) => {
        console.error("Error occurred while submitting data:", err);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          onSubmit={addData} // Use onSubmit instead of onClick for form submission
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Title"
            onChange={inputHandler}
            name="title"
            value={inputs.title}
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            placeholder="Content"
            onChange={inputHandler}
            name="content"
            value={inputs.content}
            multiline
            rows={4} // Add 'rows' to define the size of the textarea
            required
          />
          <TextField
            variant="outlined"
            placeholder="Image URL"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
            required
          />
          <Button type="submit" variant="contained" color="secondary">
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;
