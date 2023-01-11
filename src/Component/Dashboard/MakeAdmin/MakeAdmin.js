import { applyActionCode } from "@firebase/auth";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    const user = { email };
    e.target.value = "";
    axios
      .put("https://action-shark-api.onrender.com/users/admin", user)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          alert("Operation successfull");
        } else {
          alert("Sorry Something Went wrong");
        }
      });
    e.target.email.value = "";
    e.preventDefault();
  };
  return (
    <div>
      <h3> Make an Admin</h3>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs={12} md={12}>
            <img
              style={{ height: "250px", width: "250" }}
              src="https://i.ibb.co/C6tjFzf/adminimg-ai.png"
              alt=""
              srcset=""
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <form onSubmit={handleOnSubmit}>
              <TextField
                color="success"
                style={{ width: "60%" }}
                onBlur={handleOnBlur}
                type="email"
                label="Email"
                name="email"
                variant="standard"
              />
              <Box sx={{ m: 2 }}>
                <Button type="submit" variant="contained">
                  Make Admin
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MakeAdmin;
