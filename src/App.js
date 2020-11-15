import React, { useState } from 'react';
import NavBar from './navbar.js';
import {Container,Box} from '@material-ui/core/' ; 
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { withStyles ,useStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Logo from "./assets/trivago.png"
import Hidden from '@material-ui/core/Hidden';


const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper:{
        padding:10,
        borderRadius:3,
        display:"flex",
        overflow:"hidden",
        marginBottom:"30px",
    },
    alertText:{
        fontSize:14,
        textAlign:"justified",
        marginRight:"3px",
    },
    textBold:{
        display:"inline",
        fontWeight:'700',
        fontSize:"inherit",
    },
    closeButton:{
        marginTop:"-20px",
        '&:hover':{
            backgroundColor:'inherit',
            
          }
    },
    container:{
        maxWidth:"1020px",
    },
    logotitle:{
        flexGrow:1,
        border:0,
        marginTop:"10px",
    },
    logoMain:{
        display:"flex",
    },
    logo:{
        border:0,
        justifyContent:"center",
        borderRight:"1px solid #EBECED",
        paddingRight:"5px",
        marginRight:"25px",
    },
    logoprimary:{
        fontWeight:700,
        fontSize:24,
    },
    logosecondary:{
        fontWeight:400,
        fontSize:16,
    }
});
const Alert=withStyles(styles)(function(props){
    const {classes}=props;
    const [showAlert,setShowAlert]=useState(true);
    let handleAlertClose=()=>{
        setShowAlert(false);
    }
    if(showAlert)return(
        <Hidden xsDown>
            <Paper variant="outlined" className={classes.paper}><Typography className={classes.alertText}>
                <Typography className={classes.textBold}>Know before you go.</Typography>The restrictions surrounding COVID-19 change often. Please stay informed before traveling. Stay safe. To help you further, we have put together a travel restrictions overview for each country
                </Typography>
            <IconButton onClick={handleAlertClose} className={classes.closeButton}><CloseIcon/></IconButton>
            </Paper>
        </Hidden>
    );
    else return null;
});

const Title=withStyles(styles)(function(props){
    const {classes}=props;
    return(
        <Box className={classes.logoMain}>
            <Hidden smDown>
            <Box className={classes.logo}>
            <img src={Logo} alt="logo" width="180px"/>

            </Box>
            </Hidden>
            <Box className={classes.logotitle}>
                <Typography className={classes.logoprimary}>Deals from your favorite booking sites. All in one place.</Typography>
                <Typography className={classes.logosecondary}>Try searching for a city, a specific hotel, or even a landmark!</Typography>
            </Box>
        </Box>
    )
    });

class App extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const {classes}=this.props;
        return(
            <div className={classes.root}>
                <NavBar page="main"/>
                <Container className={classes.container}>
                    <Alert/>
                    <Title/>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(App);