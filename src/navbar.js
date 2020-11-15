import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import {Menu,MenuItem} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Logo from "./assets/trivago.png"
import ExpandMore from '@material-ui/icons/ExpandMore'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {Dialog,ListItem,List,ListItemText,Divider} from '@material-ui/core/'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Slide from '@material-ui/core/Slide';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ArrowBackIos } from '@material-ui/icons';
import { Link } from 'react-router-dom';
/*Styling Material UI components*/
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    background:'white',
    color:theme.palette.text.primary,
    boxShadow:"0px 0px 1px 0px",
    overflow:"hidden",
    position:'relative',
  },
  imageIcon: {
    height: '100%',
  },
  space:{
    marginLeft:theme.spacing(5),
  },
 menuButton: {
    border:0,
    borderRadius:"0px",
    minHeight:"64px",
    backgroundColor:"white",
    '&:hover':{
      backgroundColor:'#EBECED',
      
    }
  },
  title: {
    flexGrow: 1,
    minWidth:"260px",
    
    
  },
  dialogTitle:{
    flexGrow:1,
    textAlign:'center',
    fontSize:"20px",
    fontWeight:900,
  },
  customizeToolbar: {
    minHeight: "50px",
  },
  logo:{
    visibility:"visible",
  },
  menuLarge:{
    minWidth:'230px',
  },
  menuWithArrow:{
    marginBottom:"50px",
  },
  smallButtons:{
    borderBottom:"1px solid black"
  }
});

export default withWidth()( withStyles(styles)(class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      anchorMenu:null,
      open:false,
    }
  }
  setPage=()=>{//render toolbar based on which page it is
    if(this.props.page=="main"){
        this.appBarHeight=64;
      }
      else{
        this.appBarHeight=54;
      }
  }
  
  handleMenuClick=(event)=>this.setState({anchorMenu:event.currentTarget});
  
  handleMenuClose=()=>this.setState({anchorMenu:null});

  leftb=(m)=>{//render left set of buttons
    const {classes}=this.props;
    return(
      <Box mx={m} className={classes.title}>
        <Link to='/'>
            <Button color="inherit" className={`${classes.menuButton} ${classes.space}`} style={{borderBottom:this.props.page=="main"?"3px solid #2792B9":'0'}}>
              <SearchIcon/>
              <Typography variant="button" color="textPrimary"> Hotel Search</Typography>
            </Button>
        </Link>
        <Link to='/discover'>
            <Button color="inherit" className={classes.menuButton} style={{borderBottom:this.props.page=="discover"?"3px solid #007FAD":'0',minHeight:this.props.page=="main"?64:54}}>
              <RoomOutlinedIcon/>
              <Typography variant="button" style={{paddingLeft:"5px"}}color="textPrimary">Discover</Typography>
            </Button>
        </Link>
          </Box>
    );
  }

  rightb(){//displays menu and login only if in main page
    const {classes}=this.props;
    if(this.props.page=="main"){
      return(
        <div>
              <Button color="white" className={classes.menuButton}>Log In</Button>
              
              <Button  className={classes.menuButton} aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleMenuClick}>
                
                <Typography variant="button" color="textPrimary">Menu</Typography>
                <ExpandMore/>
              
              </Button>
              <Menu 
                id="simple-menu"
                anchorEl={this.state.anchorMenu}
                keepMounted
                open={Boolean(this.state.anchorMenu)}
                onClose={this.handleMenuClose}
                getContentAnchorEl={null}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
            >
              
              <MenuItem onClick={this.handleMenuClose}>Recently Viewed</MenuItem>
              <MenuItem onClick={this.handleMenuClose}>Help and Support</MenuItem>
</Menu>

              </div>
      )
    }
  }

  rightsmall(){
    const {classes}=this.props;
    if(this.props.page=="main"){
      return(<Button color="inherit" className={classes.menuButton} >
          <PersonOutlineOutlinedIcon/>
      </Button>)
    }
  }

  logo(){//displays logo all time only if in discover page
    const {classes}=this.props;
    if(this.props.page=="main"){
      return(
        <Hidden mdUp>
              <Box mx={-2}width='75px' style={{flexGrow:this.props.width=='xs'?1:0 }}>
              <img src={Logo} alt="logo" width="100px" className={classes.logo} visible={false}/>
              </Box>
        </Hidden>
      )
    }
    else{
      return(
        <Box mx={-2} mr={this.props.width=='lg'?5:0}width='75px' style={{flexGrow:this.props.width=='xs'?1:0 }}>
              <img src={Logo} alt="logo" width="100px" className={classes.logo} visible={false}/>
              </Box>
      )
    }
    

  }
  handleClose=()=>(this.setState({open:false}))
  openDialog=()=>{this.setState({open:true})}
  dialog=()=>{
    const {classes}=this.props;
    return(

      <Dialog fullScreen open={this.state.open} onClose={this.handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
            <ArrowBackIcon />
          </IconButton>
          <Typography size={20}variant="h2" className={classes.dialogTitle}>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <List style={{marginTop:30}}>
        <ListItem button>
          <ListItemText primary="Recently Viewed"/>
          <ArrowForwardIosIcon/>
        </ListItem>
        <Divider />
        <ListItem button>
        <ListItemText primary="Help and Support"/>
          <ArrowForwardIosIcon/>
        </ListItem>
      </List>
    </Dialog>
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
            {this.logo()}
            
            {/*Render Left set of buttons*/}
            <Hidden xsDown>
              {this.leftb(this.props.width=='md'?-8:0)}
          </Hidden>
          
          {/*Render Right set of buttons(Log In,Menu,INR etc.) for larger screens*/}
          <Hidden className={classes.menuLarge} smDown>
              {this.rightb()}{/*displays menu and login only if in main page*/} 
              
              <Button className={classes.menuButton}>
               
                <Typography variant="button" color="textPrimary">INR</Typography>
                <ExpandMore/>
              
              </Button>
        </Hidden>
        
        {/*Render Right set of buttons(Log In,Menu etc.) for smaller screens*/}
        <Hidden mdUp>
          <Box className={classes.smallButtons}>
          {this.rightsmall()}
          <Button color="inherit" className={classes.menuButton} onClick={this.openDialog}>
             <MenuIcon/>          
          </Button>
          </Box>
        </Hidden>
        {this.dialog()}
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


