import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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
/*Styling Material UI components*/
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    background:'white',
    color:theme.palette.text.primary,
    boxShadow:"0px 0px 1px 0px",
    overflow:"hidden",
  },
  imageIcon: {
    height: '100%',
  },
  space:{
    marginLeft:theme.spacing(5),
  },
 menuButton: {
    borderRadius:"0px",
    minHeight:"64px",
    '&:hover':{
      backgroundColor:'#EBECED',
      
    }
  },
  title: {
    flexGrow: 1,
    minWidth:"260px",
    
    
  },
  customizeToolbar: {
    minHeight: "50px",
  },
  logo:{
    visibility:"visible",
  },
  menuLarge:{
    minWidth:'230px',
  }
});

export default withWidth()( withStyles(styles)(class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  setPage=()=>{//render toolbar based on which page it is
    if(this.props.page=="main"){
        this.appBarHeight=64;
      }
      else{
        this.appBarHeight=54;
      }
  }
  
  leftb=(m)=>{//render left set of buttons
    const {classes}=this.props;
    return(
      <Box mx={m} className={classes.title}>
            <Button color="inherit" className={`${classes.menuButton} ${classes.space}`} >
              <SearchIcon/>
              <Typography variant="button" color="textPrimary"> Hotel Search</Typography>
            </Button>
            <Button color="inherit" className={classes.menuButton} >
              <RoomOutlinedIcon/>
              <Typography variant="button" style={{paddingLeft:"5px"}}color="textPrimary">Discover</Typography>
            </Button>
          </Box>
    );
  }
  render(){  
    const {classes}=this.props;
    this.setPage();
    return (
    
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>

        <Toolbar className={classes.customizeToolbar} style={{height:this.appBarHeight}}>
            {/* Logo */}
            <Hidden mdUp>
              <Box mx={-2}width='75px' style={{flexGrow:this.props.width=='xs'?1:0 }}>
              <img src={Logo} alt="logo" width="100px" className={classes.logo} visible={false}/>
              </Box>
            </Hidden>
            
            {/*Render Left set of buttons*/}
            <Hidden xsDown>
              {this.leftb(this.props.width=='lg'?-8:0)}
          </Hidden>
          
          {/*Render Right set of buttons(Log In,Menu,INR etc.) for larger screens*/}
          <Hidden className={classes.menuLarge} smDown>
              <Button color="inherit" className={classes.menuButton}>Log In</Button>
              
              <Button color="inherit" className={classes.menuButton}>
                
                <Typography variant="button" color="textPrimary">Menu</Typography>
                <ExpandMore/>
              
              </Button>
              
              <Button className={classes.menuButton}>
               
                <Typography variant="button" color="textPrimary">INR</Typography>
                <ExpandMore/>
              
              </Button>
        </Hidden>
        
        {/*Render Right set of buttons(Log In,Menu,INR etc.) for smaller screens*/}
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
      
      {/*In small screen left set of buttons are found here*/}
        </AppBar>
        <Hidden smUp>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.customizeToolbar} style={{height:this.appBarHeight}}>
              {this.leftb(-4)}
            </Toolbar>
          </AppBar>
        </Hidden>
        <br/>
        <div>{`Current width: ${this.props.width}`}</div>
      </div>
    );
  }}));


