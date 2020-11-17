import React, { useState } from 'react';
import NavBar from './navbar.js';
import {Container,Box} from '@material-ui/core/' ; 
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Logo from "./assets/trivago.png"
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';


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
    },
    infoheader:{
        marginBottom:10,
        fontWeight:"700",
        color:"#007FAD",
    },
    infobody:{
        textAlign:"justified",
        fontSize:14,
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
            <Paper variant="outlined" className={classes.paper}>
                <Typography className={classes.textBold}>Know before you go.</Typography><Typography className={classes.alertText}>The restrictions surrounding COVID-19 change often. Please stay informed before traveling. Stay safe. To help you further, we have put together a travel restrictions overview for each country
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
const InfoTile=withStyles(styles)(function(props){
    const {classes}=props;
    return(
       
          <Grid item md={6} xs={12} >
            <Typography variant="h6" className={classes.infoheader}>{props.header}</Typography>
            <Typography variant="body1" className={classes.infobody}>{props.children}</Typography>
          </Grid>
    )
});
function Info(props){
    const {classes}=props;
    return (
        <React.Fragment>
        <Grid container spacing={5}>
        <InfoTile header="trivago's global hotel search">trivago’s hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for 1.8 million+ hotels in over 190 countries. With 1.4 billion visits annually to our site, travellers regularly use the hotel comparison to compare deals in the same city. Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel on trivago quickly and easily. Delhi and its surrounding area are great for trips that are a week or longer with the numerous hotels available.</InfoTile>
        <InfoTile header="Find cheap hotels on trivago">With trivago you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, trivago makes it easy to book online. You can search from a large variety of rooms and locations across India, like Shimla and Jaipur to popular cities and holiday destinations abroad!</InfoTile>
        </Grid>
        <Grid container spacing={5}>
        <InfoTile header="Hotel reviews help you find your ideal hotel">Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, trivago shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. trivago makes it easy for you to find information about your trip to Dubai, including the ideal hotel for you.</InfoTile>
        
        <InfoTile header="How to book">trivago is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on trivago which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on trivago.<br/><br/>

        Let trivago help you to find the right price from over 300 booking sites!</InfoTile></Grid>
        </React.Fragment>
    );
    }

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
                    <Info/>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(App);