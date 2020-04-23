import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#d63447',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: 'Roboto Slab',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            KEEPSAKE
          </Typography>
          <Link href="../Pages/list" to={"../Pages/list"}>
            Logout
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// <Link to={'../Pages/List'}>
// // <Button variant="outlined">Logout</Button>
// </Link>

// import React from "react";
//
// function Header() {
// 	return (
// 		<header>
// 			<h1>
// 				My Notes
// 			</h1>
// 		</header>
// 	);
// }
//
// export default Header;
