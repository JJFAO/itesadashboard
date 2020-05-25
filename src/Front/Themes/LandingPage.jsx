import { makeStyles } from "@material-ui/core/styles";
import pointsfeatures from "../Features/pointsfeatures.png";
import medioelipse from "../HowWorks/medioelipse.png"
import circle from "../HowWorks/circle.png"


const LandingPage = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  logfondo: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#665EFF',
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
    },

  },
  logimage: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#665EFF',
      paddingBottom: '0px',
      width: '100%',
      height: '16rem',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#665EFF',
      borderRadius: '0px 18% 18% 0px',
      paddingBottom: '20px',
      width: '730px',
      height: '100%',
    },
  },

  loglogo: {
    [theme.breakpoints.down('sm')]: {
      width: '110px',
      marginLeft: '4%',
      marginTop: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '110px',
      marginLeft: '12%',
      marginTop: '35px',
    },
  },

  logtitle: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '95%',
      top: '100px',
      left: '5%',
      color: 'white',
      fontSize: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '650px',
      top: '220px',
      left: '2%',
      color: 'white',
      fontSize: '45px',
    },
  },
  logtitle1: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '95%',
      top: '135px',
      left: '5%',
      fontWeight: 700,
      color: 'white',
      fontSize: '22px',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '45%',
      top: '300px',
      left: '2%',
      fontWeight: 700,
      color: 'white',
      fontSize: '45px',
    },
  },

  loglabel: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '95%',
      top: '210px',
      left: '5%',
      color: 'white',
      fontSize: '15px',
      fontWeight: 200,
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '40%',
      top: '400px',
      left: '2%',
      color: 'white',
      fontSize: '25px',
      fontWeight: 200,
    },

  },
  imglog1: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '120px',
      bottom: '47%',
      left: '33%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '150px',
      bottom: '230px',
      left: '350px',
    },

  },
  imglog2: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100px',
      bottom: '30%',
      left: '68%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '120px',
      bottom: '70px',
      left: '520px',
    },

  },
  imglog3: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100px',
      bottom: '30%',
      left: '16%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '120px',
      bottom: '70px',
      left: '250px',
    },

  },

  paper: {
    margin: theme.spacing(6, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperlog: {
    margin: theme.spacing(6, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    [theme.breakpoints.down('sm')]: {
      width: "100%",
      marginTop: '15px',
    },
    [theme.breakpoints.up('sm')]: {
      width: "100%",
      marginTop: theme.spacing(1),
    },

  },
  submit: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      padding: 12,
      backgroundColor: "#6C63FF",
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(3, 0, 2),
      padding: 12,
      backgroundColor: "#6C63FF",
    },
  },
  submitlog: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '20px',
      padding: 12,
      backgroundColor: "#6C63FF",
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '120px',
      padding: 12,
      backgroundColor: "#6C63FF",
    },

  },
  flexcenter: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: "#665EFF",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },

  },
  roundedlog: {
    [theme.breakpoints.down('sm')]: {
      height: "100%",
      maxWidth: "100%",
      minWidth: "360px",
      border: "8px solid white",
      padding: "0px",
      borderRadius: " 55px 55px 0 0",
    },
    [theme.breakpoints.up('sm')]: {
      height: "80%",
      maxWidth: "48%",
      minWidth: "360px",
      border: "8px solid white",
      padding: "30px 8px ",
      borderRadius: "55px",
    },
  },
  rounded: {
    [theme.breakpoints.down('sm')]: {
      height: "100%",
      maxWidth: "100%",
      minWidth: "360px",
      border: "8px solid white",
      padding: "0px",
      borderRadius: " 55px 55px 0 0",
    },
    [theme.breakpoints.up('sm')]: {
      height: "80%",
      maxWidth: "48%",
      minWidth: "360px",
      border: "8px solid white",
      padding: "30px 8px ",
      borderRadius: "55px",
    },
  },
  introImage: {
    height: "100vh",
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: "0px"
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: "80px"
    },
  },
  titlelog: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: "10px"
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: "80px"
    },
  },
  linkprimary: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: "10px",
      color: "#6C63FF",
      textDecoration: "none",
      fontWeight: "bold"
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: "10px",
      color: "#6C63FF",
      textDecoration: "none",
      fontWeight: "bold"
    },
  },
  linklogin: {
    marginRight: "30px",
    color: "white",
    textDecoration: "none",
  },
  linklogin1: {
    marginRight: "100px",
    color: "white",
    textDecoration: "none",
  },
  margintop: {
    [theme.breakpoints.down('sm')]: {
      marginTop: "25px",
      marginBottom: "0px",
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: "50px"
    },
  },
  margintoplog: {
    marginTop: "2%"
  },
  margintopreset: {
    [theme.breakpoints.down('sm')]: {
      marginTop: "120px"
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: "80px"
    },
  },
  navstyle: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: "0px",
      backgroundColor: "#665EFF",
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexGrow: 1,
      paddingTop: "15px",
      backgroundColor: "#665EFF",
    },

  },
  navmenu: {
    flexGrow: 1,
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: '110px',
      marginLeft: '2%',
      marginTop: '10px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '110px',
      marginLeft: '10%',
      marginTop: '10px',
    },

  },
  circle: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#665EFF',
      borderRadius: '0px 0px 12% 12%',
      paddingBottom: '20px',
      width: '100%',
      height: '45rem',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#665EFF',
      borderRadius: '0px 0px 26% 26%',
      paddingBottom: '20px',
      width: '100%',
      height: '45rem',
    },

  },



  labeltitle: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '95%',
      top: '100px',
      left: '5%',
      color: 'white',
      fontSize: '22px',
      letterSpacing: '1px',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '90%',
      top: '320px',
      left: '10%',
      color: 'white',
      fontSize: '55px',
      letterSpacing: '1px',
    },

  },
  labeltitle1: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '95%',
      top: '135px',
      left: '5%',
      fontWeight: 700,
      color: 'white',
      fontSize: '22px',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      position: 'absolute',
      width: '85%',
      top: '400px',
      left: '10%',
      fontWeight: 700,
      color: 'white',
      fontSize: '60px',
    },


  },
  hoylabel: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '95%',
      top: '210px',
      left: '5%',
      color: 'white',
      fontSize: '15px',
      fontWeight: 200,
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '80%',
      top: '500px',
      left: '10%',
      color: 'white',
      fontSize: '25px',
      fontWeight: 200,
    },

  },
  submitsingupwhite: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      top: '650px',
      left: '25%',
      textTransform: 'none',
      backgroundColor: 'white',
      color: '#665EFF',
      fontSize: '16px',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      top: '600px',
      left: '10%',
      textTransform: 'none',
      backgroundColor: 'white',
      color: '#665EFF',
      fontSize: '16px',
    },
  },
  submitsworks: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '300px',
      top: '600px',
      left: '23%',
      textTransform: 'none',
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      fontSize: '18px',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '200px',
      top: '600px',
      left: '26%',
      textTransform: 'none',
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      fontSize: '18px',
    },
  },
  linkreg: {
    textDecoration: 'none',
    textTransform: 'none',
    backgroundColor: 'transparent',
    color: '#665EFF',
    fontSize: '16px',
  },
  imgfondopoints1: {
    position: 'absolute',
    width: '12%',
    bottom: '20rem',
    left: '70%',
  },
  img1: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '120px',
      bottom: '47%',
      left: '33%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '150px',
      bottom: '280px',
      left: '70%',
    },

  },
  img2: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100px',
      bottom: '30%',
      left: '68%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '130px',
      bottom: '90px',
      left: '77%',
    },

  },
  img3: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      width: '100px',
      bottom: '30%',
      left: '16%',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '130px',
      bottom: '90px',
      left: '60%',
    },

  },
  eclipse: {
    position: 'absolute',
    width: '5%',
    bottom: '8rem',
    left: '1%'
  },
  eclipse1: {
    position: 'absolute',
    width: '2%',
    bottom: '4rem',
    left: '30%'
  },
  points: {
    position: 'absolute',
    width: '50%',
    bottom: '32rem',
    left: '40%'
  },
  sponsors: {
    marginTop: '15%',
    flexWrap: 'wrap',
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  logosponsor: {
    position: 'absolute',
    width: '2%',
    bottom: '1rem',
    left: '30%'
  },
  labeltitlefeatures: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      marginTop: '5rem',
      marginBottom: '5rem',
      color: 'black',
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      marginTop: '10rem',
      marginBottom: '5rem',
      color: 'black',
      fontSize: '31px',
      display: 'flex',
      justifyContent: 'center',
    },

  },
  features: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
      paddingRight: '9%',
      paddingLeft: '9%',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '5%',
      paddingRight: '5%',
      paddingLeft: '5%',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '5%',
      paddingRight: '5%',
      paddingLeft: '5%',
    },
  },
  featuresitem: {
    [theme.breakpoints.down('sm')]: {
      width: '40rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '28rem',
    },
  },
  papercard: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "90%",
      border: "8px solid white",
      margin: "0% 0% 5% 0% ",
      padding: "1%",
      borderRadius: "25px",
    },
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "90%",
      border: "8px solid white",
      margin: "0% 8% 10% 8% ",
      padding: "3%",
      borderRadius: "25px",
    },
  },

  logosfeatures: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10%',
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: '10%',
    },

  },

  cardtitlefeatures: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      color: 'black',
      fontSize: '16px',
      marginBottom: '8%',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      color: 'black',
      fontSize: '18px',
      marginBottom: '8%',
    },
  },
  carddescripfeatures: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 300,
      color: 'black',
      fontSize: '15px',
      marginTop: '2%',
      wordSpacing: "2px",
      lineHeight: "25px",
      margin: "0 3% 20% 3%",
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '15px',
      marginTop: '2%',
      wordSpacing: "2px",
      lineHeight: "20px",
      margin: "0 3% 20% 3%",
    },

  },
  submitregb1: {
    [theme.breakpoints.down('sm')]: {
      margin: "5% 0% 5% 0%",
      padding: "1rem 5rem",
      color: 'white',
      textTransform: 'none',
      backgroundColor: "#6C63FF",
    },
    [theme.breakpoints.up('sm')]: {
      margin: "5% 0% 5% 0%",
      padding: "1rem 9rem",
      color: 'white',
      textTransform: 'none',
      backgroundColor: "#6C63FF",
    },
    margin: "5% 0% 5% 0%",
    padding: "1rem 9rem",
    color: 'white',
    textTransform: 'none',
    backgroundColor: "#6C63FF",
  },
  linklogin2: {
    textTransform: 'none',
    color: 'white',
    padding: 12,
    fontFamily: 'Segoe UI',
    fontSize: '17px',
    textDecoration: 'none',
  },
  imgfondopoints: {
    backgroundImage: `url(${pointsfeatures})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    width: "100",
  },


  labeltitlePricing: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      marginTop: '5rem',
      color: 'black',
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      marginTop: '10rem',
      color: 'black',
      fontSize: '31px',
      display: 'flex',
      justifyContent: 'center',
    },

  },
  Pricing: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
      paddingRight: '5%',
      paddingLeft: '5%',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '5%',
      paddingRight: '9%',
      paddingLeft: '9%',
    },



  },
  Pricingitem: {
    width: '32rem',
  },
  Pricingitem1: {
    [theme.breakpoints.down('sm')]: {
      width: '22rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '32rem',
    },

  },
  paperpricing: {
    [theme.breakpoints.down('sm')]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "90%",
      margin: "0% 0% 10% 0% ",
      padding: "0% % 2% 0%",

    },
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "90%",
      border: "8px solid white",
      margin: "0% 16% 10% 16% ",
      padding: "5% 5% 2% 5%",
      borderRadius: "25px",
    },

  },

  logosPricing: {
    width: "100%",
    marginBottom: '10%',
  },

  cardtitlePricing: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '25px',
      marginTop: '10%',
      marginBottom: '10%',
      marginLeft: '30%',
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '28px',
      marginBottom: '20%',
    },


  },
  carddescripPricing: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '16px',
      textAlign: "center",
      marginTop: '2%',
      wordSpacing: "3px",
      margin: "0 3% 10% 3%",
      lineHeight: "35px",
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '16px',
      textAlign: "center",
      marginTop: '2%',
      wordSpacing: "2px",
      margin: "0 3% 15% 3%",
      lineHeight: "20px",
    },
  },
  cardivaPricing: {
    fontFamily: 'Segoe UI',
    fontWeight: 700,
    color: '#1000FF',
    textAlign: "center",
    fontSize: '30px',
  },
  submitregb: {
    margin: "20% 0% 10% 0%",
    padding: "13px 70px 13px 70px",
    color: 'white',
    textTransform: 'none',
    backgroundColor: "#6C63FF",
  },
  eclipsepric: {
    position: 'absolute',
    width: '5%',
    left: '27%',
  },
  eclipse1pric: {
    position: 'relative',
    width: '2%',
    paddingTop: '3rem',
    left: '42%'
  },
  eclipsephone: {
    position: 'relative',
    width: '0.5%',
    paddingTop: '3rem',
    left: '60%'
  },
  eclipsephone1: {
    position: 'relative',
    width: '0.5%',
    paddingTop: '3rem',
    left: '60.5%'
  },
  eclipsephone2: {
    position: 'relative',
    width: '0.7%',
    color: "#6C63FF",
    paddingTop: '3rem',
    left: '61%'
  },
  HowWorksitem: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingBottom: '6%',
      paddingRight: '0%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '33%',
      paddingBottom: '6%',
      paddingRight: '5%',
    },
  },

  HowWorksitem1: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingBottom: '6%',
      marginLeft: '0%',
      paddingRight: '0%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '33%',
      paddingBottom: '6%',
      marginLeft: '10%',
      paddingRight: '5%',
    },
  },

  logoHowWorks: {
    marginBottom: '10%',
  },
  logoHowWorks1: {
    marginBottom: '10%',
  },
  logoHowWorkscel: {
    width: "100%",
    marginBottom: '10%',
  },
  logoHowWorksnote: {
    width: "100%",
    marginBottom: '10%',
  },


  cardtitleHowWorks: {
    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      color: 'black',
      fontSize: '24px',
      marginBottom: '10%',
      textAlign: "center",
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 700,
      color: 'black',
      fontSize: '41px',
      marginBottom: '5%',
    },


  },
  cardescriHowWorks: {
    [theme.breakpoints.down('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '16px',
      textAlign: "center",
      marginTop: '2%',
      wordSpacing: '5px',
      margin: "0 3% 15% 3%",
      lineHeight: "30px",
    },
    [theme.breakpoints.up('sm')]: {
      fontFamily: 'Segoe UI',
      fontWeight: 100,
      color: 'black',
      fontSize: '16px',
      textAlign: "left",
      marginTop: '2%',
      wordSpacing: "2px",
      margin: "0% 1% 15% 1%",
      lineHeight: "20px",
    },

  },
  HowWorks: {
    marginTop: '20%',
    paddingBottom: '10%'
  },

  imgfondocirclecel: {

    backgroundImage: `url(${circle})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1350px',
    backgroundPosition: 'bottom',
  },

  imgfondocircle: {

    backgroundImage: `url(${medioelipse})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'absolute',
    backgroundSize: "54%",
    backgroundPositionY: 'bottom',
    backgroundPositionX: 'right',
  },
  footer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: "15%",
      fontSize: '12px',
      fontFamily: 'Segoe UI',
      textAlign: "center",
      color: 'white',
      backgroundColor: "#6C63FF",
      paddingTop: '5%',
      paddingBottom: '5%',
      width: "100%",
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: "15%",
      fontSize: '12px',
      fontFamily: 'Segoe UI',
      textAlign: "center",
      color: 'white',
      backgroundColor: "#6C63FF",
      paddingTop: '1%',
      paddingBottom: '1%',
      width: "100%",
    },

  },
  linkcreating:{
    textDecoration: 'none',
    
  }

}));

export default LandingPage;