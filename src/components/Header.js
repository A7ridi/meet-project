import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    color: "#333",
    display: "flex",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navlinks: {
    display: "flex",
    color: "#333",
  },
  logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    margin: "0 18px",
    "&:hover": {
      color: "#14967b",
    },
  },
  linkBox: {
    textDecoration: "none",
    fontSize: "15px",
    margin: "0 18px",
    color: "#14967b",
  },
  rightLink1: {
    textDecoration: "none",
    color: "#14967b",
    borderRadius: "20px",
  },
  rightLink2: {
    textDecoration: "none",
    borderRadius: "20px",
  },
  box1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "17px",
    cursor: "pointer",
    color: "#5BC2A8",
    borderBottom: "3px solid #5BC2A8",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "17px",
    cursor: "pointer",
    "&:hover": {
      color: "#5BC2A8",
      borderBottom: "3px solid #5BC2A8",
    },
  },
}));

const SignInButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#14967b",
  textTransform: "initial",
  "&:hover": {
    backgroundColor: "#18b495",
  },
}));

const PostButton = styled(Button)(({ theme }) => ({
  color: "#14967b",
  borderColor: "#bcf6ea",
  textTransform: "initial",
  "&:hover": {
    borderColor: "#14967b",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        {/* <Typography variant="h5" className={classes.logo}>
          Logo
        </Typography> */}
        <img src="../../assets/logo.png" alt="logo" />
        <div className={classes.navlinks}>
          <div className={classes.box1}>
            <ExploreIcon />
            <Link to="/" className={classes.linkBox}>
              Discovery
            </Link>
          </div>
          <div className={classes.box}>
            <PeopleOutlineIcon />
            <Link to="/" className={classes.link}>
              Invited
            </Link>
          </div>
          <div className={classes.box}>
            <SupportAgentIcon />
            <Link to="/" className={classes.link}>
              Support
            </Link>
          </div>
        </div>
        <div className={classes.navlinks}>
          <Stack spacing={2} direction="row">
            <Link to="/" className={classes.rightLink1}>
              <PostButton variant="outlined">Post Job</PostButton>
            </Link>
            <Link to="/" className={classes.rightLink2}>
              <SignInButton variant="contained">Sign In</SignInButton>
            </Link>
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
