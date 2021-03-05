import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { connect } from "react-redux";
import { chooseModel } from "../../redux-store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    background: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  iconButton: {},
  menuIcon: {
    background: "white",
    borderRadius: "20px",
  },
  menu: {},
  menuItem: {},
}));

function NavBar(props) {
  const { dispatch } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuLabel, setMenuLabel] = useState("Choose an option on the left");

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenMenuItem = () => {
    setAnchorEl(null);
  };

  const handleSelectedMenuOption = (target) => {
    if (!target) {
      return;
    }
    setMenuLabel(target);
    dispatch(chooseModel(target));

    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            className={classes.iconButton}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleOpenMenuItem}
            className={classes.menu}
          >
            <MenuItem
              onClick={() => handleSelectedMenuOption("Mercedes")}
              className={classes.menuItem}
            >
              Mercedes
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectedMenuOption("Bmw")}
              className={classes.menuItem}
            >
              BMW
            </MenuItem>
            <MenuItem
              onClick={() => handleSelectedMenuOption("Porche")}
              className={classes.menuItem}
            >
              Porche
            </MenuItem>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            {menuLabel}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  onChooseModel: state.chooseModel,
});

export default connect(mapStateToProps)(NavBar);
