import { makeStyles } from '@material-ui/styles'
import { DIMENSIONS, URL_IMAGES } from '../../constants';

import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import breakpoints from '../../theme/breakpoints'

const themeBreakpoints = createBreakpoints(breakpoints)

const useStyles = makeStyles( theme => ({
    nabarWrapper:{
        backgroundColor: 'rgba(255,255,255,0.9)',
        transition: '0.5s',
        position: 'fixed',
        top:0,
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '50'
    },
    nabarWrapperWhite:{
        backgroundColor: 'rgba(255,255,255 ,0)',
        transition: '0.5s',
        position: 'fixed',
        top:0,
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '50'
    },
    nabarContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '30px 0 30px  0',
        [themeBreakpoints.down('md')]: {
            padding: '20px 0 20px  0',

        },
    },
    navbarLinkWrapper:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%'
    },
    navbarItemWhite:{
        color: '#fff',
        cursor: 'pointer',
        paddingLeft: '20px',
        transition: '0.5s',
        '&:hover': {
            opacity: '0.8'
        },
    },
    navbarItemColor:{
        color: '#0C4160',
        cursor: 'pointer',
        paddingLeft: '20px',
        transition: '0.5s',
        '&:hover': {
            opacity: '0.8'
        },
    },
    logoWrapper:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
          [themeBreakpoints.up('md')]: {
              width: '250px',
        },
    },
    logo:{
        width: '50%',
        [themeBreakpoints.up('sm')]: {
            width: '30%',
        },
        [themeBreakpoints.up('md')]: {
          width: '100%',
      },
    },
    headerWrapper:{
        paddingTop: '100px',
        paddingBottom: '200px',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${URL_IMAGES.URL_IMG_LANDINGPAGE_HEADER})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        position: 'relative',
        [themeBreakpoints.down('md')]: {
            paddingBottom: '100px',
        },
    },
    headerContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '90px 0 90px  0',
        [themeBreakpoints.down('md')]: {
            padding: '40px 25px 40px  25px',
        },
    },
    mainHerderTitle:{
        color: '#fff',
    },
    mainHederText:{
        color: '#fff',
        width: '70%',
        [themeBreakpoints.down('md')]: {
            width: '100%',
            textAlign: 'justify'
        },
    },
    primaryButtonWhite:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        marginRight: '20px',
        padding: '15px 35px',
        borderRadius: '5px',
        border: 'solid 2px white',
        backgroundColor: 'white',
        color: '#21B6A8',

        fontFamily: [
            'Montserrat',
          ].join(','),
        fontSize:'20px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255 ,0)',
            border: 'solid 2px WHITE',
            color: 'white',
        },
        [themeBreakpoints.down('md')]: {
            fontSize:'15px',
            padding: '10px 20px',
        },
    },
    secundaryButtonWhite:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        padding: '15px 35px',
        borderRadius: '5px',
        border: 'solid 2px white',
        backgroundColor: 'rgba(255,255,255 ,0)',
        color: 'white',
        fontFamily: [
            'Montserrat',
          ].join(','),
        fontSize:'20px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'white',
            border: 'solid 2px WHITE',
            color: '#21B6A8',
        },
        [themeBreakpoints.down('md')]: {
            fontSize:'15px',
            padding: '10px 20px',
        },
    },
    aboutWrapper:{
        paddingTop: '100px',
        paddingBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
    },
    aboutContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '90px 0 90px  0',
        [themeBreakpoints.down('md')]: {
            padding: '0px 25px 40px  25px',
        },
    },
    callToActionWrapper:{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${URL_IMAGES.URL_IMG_CALLTOACTION})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        position: 'relative'
    },
    callToActionContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '90px 0 90px  0',
    },
    mainTextCallToAction:{
        width:'50%',
        color: '#fff',
        [themeBreakpoints.down('md')]: {
            width:'100%',
            textAlign: 'justify'
        },
    },
    primaryButton2White:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        marginRight: '20px',
        padding: '15px 35px',
        borderRadius: '5px',
        border: 'solid 2px white',
        backgroundColor: 'white',
        color: '#0C4160',
        fontFamily: [
            'Montserrat',
          ].join(','),
        fontSize:'20px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255 ,0)',
            border: 'solid 2px WHITE',
            color: 'white',
        },
        [themeBreakpoints.down('md')]: {
            fontSize:'15px',
            padding: '10px 20px',
        },
    },
    secundaryButton2White:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        padding: '15px 35px',
        borderRadius: '5px',
        border: 'solid 2px white',
        backgroundColor: 'rgba(255,255,255 ,0)',
        color: 'white',
        fontFamily: [
            'Montserrat',
          ].join(','),
        fontSize:'20px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'white',
            border: 'solid 2px WHITE',
            color: '#0C4160',
        },
        [themeBreakpoints.down('md')]: {
            fontSize:'15px',
            padding: '10px 20px',
        },
    },
    boxIcons:{
        width: '100%',
        height:'150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [themeBreakpoints.down('md')]: {
            height:'100px',
        },
    },
    icons:{
        transform: 'scale(3)',
        fontSize: '200px',
        [themeBreakpoints.down('md')]: {
            transform: 'scale(1.5)',
        },
    },
    techWrapper:{
        paddingBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
    },
    techContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '90px 0 90px  0',
        [themeBreakpoints.down('md')]: {
            padding: '0px 25px 40px  25px',
        },
    },
    boxTech:{
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    logoTech:{
        width:'50%',
        [themeBreakpoints.down('md')]: {
            width:'25%',
        },
    },
    workWithUsWrapper:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F0F2F2',
        position: 'relative'
    },
    workWithUsContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '90px 0 90px  0',
        [themeBreakpoints.down('md')]: {
            padding: '40px 25px 40px  25px',
        },
    },
    primaryButtonBlue:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        marginRight: '20px',
        padding: '15px 35px',
        borderRadius: '5px',
        border: 'solid 2px #0C4160',
        backgroundColor: '#0C4160',
        color: 'white',
        fontFamily: [
            'Montserrat',
          ].join(','),
        fontSize:'20px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255 ,0)',
            border: 'solid 2px #0C4160',
            color: '#0C4160',
        },
        [themeBreakpoints.down('md')]: {
            fontSize:'15px',
            padding: '10px 20px',
        },
    },
    secundaryButtonBlue:{
        textDecoration: 'none',
        cursor: 'pointer',
        transition: '0.3s',
        marginTop: '25px',
        padding: '15px 35px',
        borderRadius: '5px',
        border: 'solid 2px #0C4160',
        backgroundColor: 'rgba(255,255,255 ,0)',
        color: '#0C4160',
        fontFamily: [
            'Montserrat',
          ].join(','),
        fontSize:'20px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: '#0C4160',
            border: 'solid 2px #0C4160',
            color: 'white',
        },
        [themeBreakpoints.down('md')]: {
            fontSize:'15px',
            padding: '10px 20px',
        },
    },
    workButtonsWrapper:{
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        [themeBreakpoints.down('md')]: {
            justifyContent: 'flex-start',
        },
    },
    footerWrapper:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#0C4160',
        position: 'relative'
    },
    footerContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '90px 0 90px  0',
        [themeBreakpoints.down('md')]: {
            padding: '40px 25px 40px  25px',
        },
    },
    copyrightWrapper:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'relative'
    },
    copyrightContentWrapper:{
        width: DIMENSIONS.MAIN_WRAPPER,
        padding: '10px 0 10px  0',
        [themeBreakpoints.down('md')]: {
            padding: '10px 25px 10px  25px',
        },
    },
    footerLinks:{
        color: '#fff',
        cursor: 'pointer',
        '&:hover': {
            opacity: '0.8'
        },
    },
    iconButtonWrapper:{
        paddingTop: '20px',
    }
    
}))

export default useStyles;