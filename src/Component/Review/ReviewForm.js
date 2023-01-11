import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useParams } from "react-router";
import axios from "axios";
import Rating from "@mui/material/Rating";

const ReviewForm = () => {
  const [value, setValue] = React.useState(1);
  const [reviewData, setReviewData] = useState({});
  const { isLoading, user, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newreviewdata = { ...reviewData };
    newreviewdata[field] = value;
    setReviewData(newreviewdata);
  };

  const handleOrderSubmit = (e) => {
    // console.log(placeorderdata);
    const reviewDataFinal = {
      ...reviewData,
      orderedby: user.displayName,
      rating: value,
    };
    console.log(reviewDataFinal);

    axios
      .post("https://action-shark-api.onrender.com/reviews", reviewDataFinal)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Review Sumitted SuccessFully");
        }
      });
    e.preventDefault();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: "auto", mb: "auto" }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Product Review
          </Typography>
          {/* {user.email && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="success">Account Created Succesfully!!!

                    </Alert>

                    </Container>} */}
          {/* {error && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="error">{error}</Alert>


                    </Container>} */}
          {!isLoading && (
            <form onSubmit={handleOrderSubmit}>
              <TextField
                color="secondary"
                type="text"
                name="name"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
                label=" Name"
                variant="outlined"
                value={user.displayName}
              />

              <TextField
                color="secondary"
                name="productname"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
                label="Product Name"
                type="text"
                variant="outlined"
              />
              <TextField
                color="secondary"
                name="reviewtext"
                onBlur={handleOnBlur}
                sx={{ width: "75%", m: 1 }}
                label="Your Comments"
                type="text"
                variant="outlined"
              />

              <Typography textAlign="">
                Rating
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Typography>

              <Button
                type="submit"
                color="success"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Submit Review
              </Button>
            </form>
          )}
          {isLoading && <CircularProgress />}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "80%" }}
            src="https://i.ibb.co/6B4NpQT/userreview-ai.png"
            alt=""
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;
