import React, { useState } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Collapse,
  ListItem,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: "2px",
  },
  button: {
    color: "#707070",
    padding: "10px 0",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
  },
  buttonLeaf: {
    color: "#f5f7fac9",
    padding: "11px 8px",
    justifyContent: "flex-start",
    borderRadius:"10px",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontSize: "13px",
    "&:hover": {
      borderRadius:"10px",
      background: "#811dd2 ",
      color: "#fff",
      "& $icon": {
        color: "#fff",
      },
      "&.depth-0": {
        "& $title": {
          fontWeight: theme.typography.fontWeightMedium,
          color:"#fff",
        
        },
      },
    },
    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
        color:"#000",
        // whiteSpace:"pre",
      },
    },
    "& $icon": {
      color: "#000",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
  active: {
   borderRadius:"10px",
    fontWeight: theme.typography.fontWeightRegular,
    background: "#811dd2 ",
    "&.depth-0": {
      "& $title": {
        fontWeight: theme.typography.fontWeightMedium,
        color:"#fff",
      },
    },
    "& $icon": {
      color: "#fff",
    },
  },
}));

const NavItem = ({
  children,
  className,
  depth,
  href,
  icon: Icon,
  info: Info,
  open: openProp,
  title,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(openProp);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = { paddingLeft };

  if (children) {
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          className={classes.button}
          onClick={handleToggle}
          style={{ color: "#ccc" }}
        >
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <>
      <ListItem
        className={clsx(classes.itemLeaf, className)}
        disableGutters
        key={title}
        {...rest}
      >
        <Button
          activeClassName={classes.active}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          component={RouterLink}
          exact
          style={style}
          to={href}
        >
          {Icon && <Icon className={classes.icon} size="20" />}
          <span className={classes.title}>{title}</span>
          {Info && <Info />}
        </Button>
      </ListItem>
    </>
  );
};

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  info: PropTypes.elementType,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  open: false,
};

export default NavItem;
