import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Logo from "./assets/trivago.png"
import ExpandMore from '@material-ui/icons/ExpandMore'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    background:'white',
    color:theme.palette.text.primary,
    boxShadow:"0px 0px 1px 0px",
  },
  imageIcon: {
    height: '100%',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    minWidth:"260px",
    
  },
  logo:{
    visibility:"visible",
  },
  menuLarge:{
    minWidth:'230px',
    
  }
}));

export default withWidth()(function ButtonAppBar(props) {
  const classes = useStyles();
  const leftb=function(m){
    return(
      <Box m={m} className={classes.title}>
            <Button color="inherit" className={classes.menuButton} >
              <SearchIcon/>
              <Typography variant="button" color="textPrimary"> Hotel Search</Typography>
            </Button>
            <Button color="inherit"  >
              <RoomOutlinedIcon/>
              <Typography variant="button" style={{paddingLeft:"5px"}}color="textPrimary">Discover</Typography>
            </Button>
          </Box>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        
          <Hidden mdUp>
            <Box width='75px' style={{flexGrow:props.width=='xs'?1:0 }}>
            <img src={Logo} alt="logo" width="100px" className={classes.logo} visible={false}/>
            </Box>
          </Hidden>
          
          <Hidden xsDown>
            {leftb(props.width=='lg'?-4:0)}
        </Hidden>
        
        <Hidden className={classes.menuLarge} smDown>
            <Button color="inherit">Log In</Button>
            <IconButton aria-label="" >
              <Typography variant="button" color="textPrimary">Menu</Typography>
              <ExpandMore/>
            </IconButton>
            <IconButton aria-label="" >
              <Typography variant="button" color="textPrimary">INR</Typography>
              <ExpandMore/>
            </IconButton>
       </Hidden>
       
       <Hidden mdUp>
        <Button color="inherit" className={classes.menuButton} >
              <PersonOutlineOutlinedIcon/>
              <Typography variant="button" color="textPrimary"> Log In</Typography>
        </Button>
        <Button color="inherit" className={classes.menuButton} >
              <MenuIcon/>
              <Typography variant="button" color="textPrimary"> Menu</Typography>
        </Button>
      </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            {leftb(-4)}
          </Toolbar>
        </AppBar>
      </Hidden>
      <br/>
      <div>{`Current width: ${props.width}`}</div>
    </div>
  );
});


