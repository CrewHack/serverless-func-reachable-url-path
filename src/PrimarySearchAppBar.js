import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//import InputBase from '@material-ui/core/InputBase';
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import MenuIcon from "@material-ui/icons/Menu";
//import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
//import PowerIcon from '@material-ui/icons/Power';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import InboxIcon from "@material-ui/icons/MoveToInbox";

//import Button from '@material-ui/core/Button';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Router from "next/router";
import Link from "../src/Link";

import { signIn, signOut, useSession } from "next-auth/client";

import HomeIcon from "@material-ui/icons/Home";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import InfoIcon from "@material-ui/icons/Info";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  menuTitle: {
    top: "10px",
    position: "absolute",
    left: "100px",
  },

  drawerPaper: {
    width: "250px",
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //display: 'none',
    //[theme.breakpoints.up('sm')]: {
    display: "block",
    //},
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [session, loading] = useSession();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [isDrawerOpen, handleDrawerOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const doDrawerOpen = () => {
    handleDrawerOpen(true);
  };

  const doDrawerClose = () => {
    handleDrawerOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfile = (event) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    //var picoWidget = document.getElementById("pico-widget-container");
    //picoWidget.style.visibility = "visible";
    //picoWidget.style.display = "block";
    Router.push("/members");
  };

  const handleAccount = (event) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    //var picoWidget = document.getElementById("pico-widget-container");
    //picoWidget.style.visibility = "visible";
    //picoWidget.style.display = "block";
    Router.push("/members");
  };

  const handleListClick = (index) => {
    console.log(index);

    if (index === 0) {
      // Home
      handleDrawerOpen(false);
      Router.push("/");
    }

    /*if (index === 1) // 
    {
      handleDrawerOpen(false);
      //Router.push('/');
      //let deferredPrompt = localStorage.getItem("deferredPrompt");
      //deferredPrompt.prompt();
    }*/

    if (index === 1) {
      // Members
      handleDrawerOpen(false);
      Router.push("/members");
    }

    if (index === 2) {
      // About
      handleDrawerOpen(false);
      Router.push("/about");
    }
  };

  const handleDividerListClick = (index) => {
    console.log(index);

    if (index === 0) {
      // Call
      handleDrawerOpen(false);
      document.location.href = "tel:" + "8086312029";
    }

    if (index === 1) {
      // Email
      handleDrawerOpen(false);
      document.location.href = "mailto:" + "support@acceptbtc.co";
    }

    if (index === 2) {
      // Chat
      handleDrawerOpen(false);
      window.open("https://m.me/acceptbtc");
    }
  };

  const handleMailClick = (event) => {
    console.log("Mail click");
    handleMobileMenuClose();
    Router.push("/members");
  };

  const handleNotificationClick = (event) => {
    console.log("Handle notification click");
    handleMobileMenuClose();
    Router.push("/members");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleProfile} className="PicoEditProfile">
        Manage Profile
      </MenuItem>
      <MenuItem onClick={handleAccount} className="PicoManageAccount">
        Manage Account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMailClick}>
        <IconButton aria-label="show 2 new mails" color="inherit">
          <Badge badgeContent={2} color="default" style={{ color: "#FF9900" }}>
            <MailIcon style={{ color: "black" }} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleNotificationClick}>
        <IconButton aria-label="show 3 new notifications" color="inherit">
          <Badge badgeContent={3} color="default" style={{ color: "#FF9900" }}>
            <NotificationsIcon style={{ color: "black" }} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const listArray = ["Home", "Members Area", "About"];

  const list = (
    <div
      className={classes.list}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listArray.map((text, index) => (
          <ListItem button key={text} onClick={() => handleListClick(index)}>
            <ListItemIcon>
              {index === 0 ? (
                <HomeIcon />
              ) : index === 1 ? (
                <RecentActorsIcon />
              ) : index === 2 ? (
                <InfoIcon />
              ) : index === 3 ? (
                <InboxIcon />
              ) : index === 4 ? (
                <InboxIcon />
              ) : (
                <InboxIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Call", "Email", "Chat"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => handleDividerListClick(index)}
          >
            <ListItemIcon>
              {index === 0 ? (
                <CallIcon />
              ) : index === 1 ? (
                <EmailIcon />
              ) : index === 2 ? (
                <ChatIcon />
              ) : index === 3 ? (
                <InboxIcon />
              ) : (
                <InboxIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        {" "}
        {/*style={{backgroundColor: "#676666", color: "#FFFFFF"}}*/}
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={doDrawerOpen}
          >
            <MenuIcon style={{ color: "#FFFFFF" }} />
          </IconButton>
          <Link style={{ color: "#FFFFFF" }} href="/">
            <Typography
              style={{ color: "#FFFFFF" }}
              className={classes.title}
              variant="h6"
            >
              <AccountBalanceWalletOutlinedIcon style={{ color: "#FFFFFF" }} />
              acceptBTC
            </Typography>
          </Link>
          {/*<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter URL to measure power"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            </div> style={{backgroundColor: "#ffeb3b"}}*/}
          <div className={classes.grow} />

          {!session && (
            <div>
              <>
                <div className={classes.sectionDesktop}>
                  <IconButton
                    aria-label="show 2 new mails"
                    color="inherit"
                    onClick={handleMailClick}
                  >
                    <Badge badgeContent={2} style={{ color: "#ffeb3b" }}>
                      <MailIcon style={{ color: "#FFFFFF" }} />
                    </Badge>
                  </IconButton>
                  <IconButton
                    aria-label="show 3 new notifications"
                    color="inherit"
                    onClick={handleNotificationClick}
                  >
                    <Badge badgeContent={3} style={{ color: "#ffeb3b" }}>
                      <NotificationsIcon style={{ color: "#FFFFFF" }} />
                    </Badge>
                  </IconButton>
                  <IconButton
                    style={{ color: "#FFFFFF" }}
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    style={{ color: "#FFFFFF" }}
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}

      <Drawer
        //variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isDrawerOpen}
      >
        <div>
          <IconButton onClick={doDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>

          <Link color="inherit" onClick={doDrawerClose} href="/">
            <div className={classes.menuTitle}>
              <Typography variant="h6">
                <AccountBalanceWalletOutlinedIcon />
                acceptBTC
              </Typography>
            </div>
          </Link>
        </div>
        <div className={classes.drawerInner}>{list}</div>
      </Drawer>
    </div>
  );
}
