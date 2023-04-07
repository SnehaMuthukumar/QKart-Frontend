import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import {Link, useHistory} from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  const username=localStorage.getItem("username");
  
  const logout = () => {
    localStorage.clear();window.location.reload();history.push("/");
  }

  const redirectProduct = () => {
    history.push("/");
  }

  const redirectLogin = () => {
    history.push("/login");
  }

  const redirectRegister = () => {
    history.push("/register");
  }
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {hasHiddenAuthButtons ? 
          <Button onClick={() => redirectProduct()}
            className="explore-button"
            startIcon={<ArrowBackIcon />}
            variant="text"
          >
            <Link to="/" className="link">
            Back to explore
            </Link>
          </Button>:
          <>
            <div>{children}</div>
            {localStorage.getItem("username")===""||localStorage.getItem("username")===null ? 
              <Stack direction="row" spacing={2}>
                <Button onClick={() => redirectLogin()}
                  variant="text"
                >
                  LOGIN
                </Button>
                <Button onClick={()=>redirectRegister()}
                  variant="contained"
                >
                  REGISTER
                </Button>
              </Stack>: 
              <Stack direction="row" spacing={2}>
                <Avatar alt={username} src="avatar.png"/>
                <span style={{margin:"auto", paddingLeft:"0.5rem"}} className="username-text">{username}</span>
                <Button onClick={() => logout()}
                  variant="text"
                >
                  LOGOUT
                </Button>
              </Stack>
            }
          </>
        }
      </Box>
    );
};

export default Header;
