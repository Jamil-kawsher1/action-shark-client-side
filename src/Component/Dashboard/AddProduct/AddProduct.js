import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import useAuth from "../../../Hooks/useAuth";

const AddProduct = () => {
  const [productData, setProductdata] = useState({});

  const { isLoading, user, error } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;

    const value = e.target.value;

    // console.log(field, value);
    const newProductData = { ...productData };
    newProductData[field] = value;
    setProductdata(newProductData);
  };

  //tostify

  const handleProductdataSubmit = (e) => {
    //temporary error handiling for empty filed value
    console.log(Object.values(productData));
    if (Object.keys(productData).length < 5) {
      alert("Please Fill up all the field");
    } else if (
      Object.values(productData).includes("") ||
      Object.values(productData).includes(undefined)
    ) {
      alert("Invalid Input Type please Check");
    } else {
      axios
        .post("https://action-shark-api.onrender.com/products", productData)
        .then((res) => {
          if (res.data.insertedId) {
            alert("Added Successfully!!!");
          }
          e.target.aname.value = "";
          e.target.price.value = "";
          e.target.img.value = "";
          e.target.description.value = "";
        });
    }

    e.preventDefault();
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: "auto", mb: "auto" }} xs={12} md={6}>
            <Card sx={{ minWidth: 275, boxShadow: 3, padding: 5 }}>
              <Typography variant="body1" gutterBottom>
                Add Products
              </Typography>
              {/* {user.email && <Container sx={{ display: 'flex' }}><Alert sx={{ ml: 'auto', mr: 'auto' }} severity="success">Account Created Succesfully!!!

                            </Alert>

                            </Container>} */}
              {error && (
                <Container sx={{ display: "flex" }}>
                  <Alert sx={{ ml: "auto", mr: "auto" }} severity="error">
                    {error}
                  </Alert>
                </Container>
              )}
              {!isLoading && (
                <form onSubmit={handleProductdataSubmit}>
                  <TextField
                    type="text"
                    name="aname"
                    onBlur={handleOnBlur}
                    sx={{ width: "75%", m: 1 }}
                    label="Product Name"
                    variant="standard"
                  />
                  <TextField
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                    sx={{ width: "75%", m: 1 }}
                    label="Product Price"
                    variant="standard"
                  />
                  <TextField
                    type="number"
                    name="rating"
                    onBlur={handleOnBlur}
                    sx={{ width: "75%", m: 1 }}
                    label="Product Rating"
                    variant="standard"
                  />
                  <TextField
                    name="img"
                    onBlur={handleOnBlur}
                    sx={{ width: "75%", m: 1 }}
                    type="text"
                    label="Product Img Url"
                    variant="standard"
                  />
                  <TextField
                    name="description"
                    onBlur={handleOnBlur}
                    sx={{ width: "75%", m: 1 }}
                    type="text"
                    label="Product Description"
                    variant="standard"
                  />
                  <Button
                    type="submit"
                    sx={{ width: "40%", m: 1 }}
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    {" "}
                    Submit
                  </Button>
                </form>
              )}
              {isLoading && <CircularProgress />}
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "90%" }}
              src="https://i.ibb.co/CzKxT0K/undraw-product-teardown-elol.png"
              alt=""
            ></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddProduct;
