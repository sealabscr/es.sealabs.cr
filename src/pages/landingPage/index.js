import React, { useEffect, useRef, useState } from 'react'

import Box from '@mui/material/Box'
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import { URL_IMAGES } from '../../constants'
import Waves from '../../components/waves/inedx'
import useStyles from './styles'

const LandingPage = () => {
  const classes = useStyles()

  const refHome = useRef(null)
  const refAbout = useRef(null)
  const refServices = useRef(null)
  const refContact = useRef(null)

  const goToHome = () => refHome.current.scrollIntoView({block: "start", behavior: "smooth"})
  const goToAbout = () => refAbout.current.scrollIntoView({block: "start", behavior: "smooth"})
  const goToServices = () => refServices.current.scrollIntoView({block: "start", behavior: "smooth"})
  const goToContact = () => refContact.current.scrollIntoView({block: "start", behavior: "smooth"})

  const Navbar = () => {
    const [navbarActive, setNavbar] = useState(false)

    const changeBackground = () => {
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }

    useEffect(() => {
      changeBackground()
      window.addEventListener("scroll", changeBackground)
    })

    return (
      <Box className={navbarActive? classes.nabarWrapper: classes.nabarWrapperWhite}>
          <Box className={classes.nabarContentWrapper}>
              <Grid container >
                <Grid xs={12} md={6}>
                  <Box className={classes.logoWrapper}>
                    {!navbarActive && 
                      <img className={classes.logo} src={URL_IMAGES.URL_LOGO_SEALABS_WHITE} alt ="sealabs logo" />
                    }
                    {navbarActive && 
                      <img className={classes.logo} src={URL_IMAGES.URL_LOGO_SEALABS} alt ="sealabs logo" />
                    }
                  </Box>
                </Grid>
                <Grid md={6} display={{ xs: "none", sm: 'none',  md: "block" }}>
                  <Box className={classes.navbarLinkWrapper}>
                    <Typography onClick={goToHome} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Inicio</Typography>
                    <Typography  onClick={goToAbout} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Sobre nosotros</Typography>
                    <Typography  onClick={goToServices} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Servicios</Typography>
                    <Typography  onClick={goToContact} variant="h3" component="span" className={navbarActive? classes.navbarItemColor: classes.navbarItemWhite}>Contacto</Typography>
                  </Box>
                </Grid>
              </Grid>
          </Box>
      </Box>
    )
  }

  const Header = () => {
    return (
      <Box className={classes.headerWrapper} ref={refHome}>
          <Box className={classes.headerContentWrapper}>
            <Typography variant="h1" component="h1" gutterBottom className={classes.mainHerderTitle}>
              Mejora tu negocio <br /> a través de la transformación digital 
            </Typography>
            <Typography variant="h1" component="h1" gutterBottom style={{color: '#fff'}}>
               
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={classes.mainHederText} >
              Construimos soluciones de software personalizadas para satisfacer las necesidades de su negocio asegurando calidad y transparencia.  
            </Typography>
            <Box>
                <button onClick={goToServices} className={classes.primaryButtonWhite}>Servicios</button>
                <button onClick={goToContact}className={classes.secundaryButtonWhite}>Contacto</button>
            </Box>
          </Box>
          <Waves />
      </Box>
    )
  }

  const AboutUs = () => {
    return (
      <Box className={classes.aboutWrapper} ref={refAbout}>
          <Box className={classes.aboutContentWrapper}>
            <Typography variant="h1" component="h1"  color="primary">
              Sobre nosotros 
            </Typography>
            <Box style={{marginTop: '50px'}}>
              <Grid container rowSpacing={8} columnSpacing={{ xs:12,  sm: 12, md: 12 }}>
                <Grid item xs={12} md={12}>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px'}}>Quienes somos</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify'}}>
                    Somos una startup de desarrollo de software ubicada en Limón, Costa Rica. Nuestro objetivo es posicionarnos en la industria de la tecnología y esforzarnos por ser reconocidos por brindar servicios de calidad de manera transparente y eficiente.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px'}}>Misión</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify'}}>
                    Nos apasiona el crecimiento local, para que a través de un servicio excepcional en desarrollo de software podamos ampliar y facilitar las tareas de nuestros clientes de manera eficiente, segura y confiable. 
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" component="h2" color="secondary" style={{marginBottom: '30px'}}>Visión</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify'}}>
                    Queremos impulsar el crecimiento de la provincia de Limón a través de las nuevas tecnologías involucrando a las empresas para mejorar y agilizar procesos. 
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    )
  }

  const CallToAction1 = () => {
    return (
      <Box className={classes.callToActionWrapper}>
          <Box className={classes.headerContentWrapper}>
            <Typography variant="h1" component="h1" gutterBottom style={{color: '#fff'}}>
              ¿Qué podemos hacer por usted?
            </Typography>
            <Typography variant="body1" component="p" gutterBottom className={classes.mainTextCallToAction} >
              Ayudaremos a que su negocio crezca creando software personalizable y de alta calidad para una eficiente agilización de procesos. 
            </Typography>
            <Box>
                <button onClick={goToContact} className={classes.primaryButton2White} >Contáctenos</button>
                <button onClick={goToServices} className={classes.secundaryButton2White}>Servicios</button>
            </Box>
          </Box>
      </Box>
    )
  }

  const Services = () => {
    return (
      <Box className={classes.aboutWrapper} ref={refServices}>
          <Box className={classes.aboutContentWrapper}>
            <Typography variant="h1" component="h1"  color="primary">
                Servicios
            </Typography>
            <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify', marginTop: '50px'}}>
              Los servicios en los que nos especializamos son los siguientes:
            </Typography>
            <Box style={{marginTop: '10px'}}>
              <Grid container rowSpacing={3} columnSpacing={{ xs:12,  sm: 12, md: 12 }}>
                <Grid item xs={12} md={4}>
                  <Box className={classes.boxIcons}>
                    <CodeIcon color='secondary' className={classes.icons} />
                  </Box>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px', textAlign: 'center'}}>Desarrollo </Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'center'}}>
                    Desarrollo de software a la medida según los requerimientos del cliente
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={classes.boxIcons}>
                    <BuildIcon color='secondary' className={classes.icons} />
                  </Box>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px', textAlign: 'center'}}>Mantenimiento</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'center'}}>
                    Mantenimiento y soporte de sus aplicaciones
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className={classes.boxIcons}>
                    <CompareArrowsIcon color='secondary' className={classes.icons} />
                  </Box>
                  <Typography variant="h2" component="h2" color="secondary"  style={{marginBottom: '30px', textAlign: 'center'}}>Migración</Typography>
                  <Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'center'}}>
                    Le ayudamos a realizar la migración de su aplicación a nuevo ambiente de producción
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    )
  }

  const Technologies = () => {
    return (
      <Box className={classes.techWrapper}>
          <Box className={classes.techContentWrapper}>
            <Typography variant="h1" component="h1"  color="primary">
              Tecnologías
            </Typography><Typography variant="body1" component="p" style={{color: '#98A4B0', textAlign: 'justify', marginTop: '50px'}}>
              Nuestro equipo tiene experiencia utilizando las siguientes tecnologías:
            </Typography>
            <Box style={{marginTop: '50px'}}>
              <Grid container rowSpacing={3} columnSpacing={{ xs:12,  sm: 12, md: 12 }}>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                    <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_REACT} alt ="sealabs logo" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                    <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_MAGENTO} alt ="sealabs logo" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                    <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_JS} alt ="sealabs logo" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box className={classes.boxTech}>
                   <img className={classes.logoTech} src={URL_IMAGES.VECTOR_LOGO_POSTGRESQL} alt ="sealabs logo" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Box>
    )
  }

  const WorkWithUs = () => {
    return (
      <Box className={classes.workWithUsWrapper} ref={refContact}>
          <Box className={classes.workWithUsContentWrapper}>
            <Grid container >
              <Grid xs={12} md={6}>
                <Typography variant="h1" component="h1" color="secondary" gutterBottom>
                  Comienza a trabajar con nosotros
                </Typography>
                <Typography variant="body1" component="p"  color="secondary" >
                  Nuestro principal objetivo es brindar a nuestros clientes el mejor desempeño en el servicio y generar soluciones para su transformación digital. 
                </Typography>
              </Grid>
              <Grid xs={12} md={6}>
                <Box className={classes.workButtonsWrapper}>
                  <a href={"mailto:hello@sealabs.cr?subject=Hola, !Hablemos!"}>
                    <button  className={classes.primaryButtonBlue} >Email</button>
                  </a>
                  <a href={"https://www.linkedin.com/company/sealabscr"}  target="_blank">
                    <button  className={classes.secundaryButtonBlue}>Linkedin</button>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
      </Box>
    )
  }

  const Footer = () => {
    return (
      <Box className={classes.footerWrapper}>
          <Box className={classes.footerContentWrapper}>
            <Grid container >
              <Grid xs={12} md={6} style={{marginBottom: '20px'}}>
                <Box className={classes.logoWrapper}>
                      <img className={classes.logo} src={URL_IMAGES.URL_LOGO_SEALABS_WHITE} alt ="sealabs logo" />
                  </Box>
              </Grid>
              <Grid xs={12} md={3} style={{marginBottom: '20px'}}>
                <Typography variant="h2" component="h2" style={{color: '#fff', marginBottom: '20px'}} >
                  Navegación
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToHome}>
                  Inicio
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToAbout}>
                  Sobre Nosotros
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToServices} >
                  Servicios
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} onClick={goToContact} >
                  Contacto
                </Typography>
              </Grid>
              <Grid xs={12} md={3} style={{marginBottom: '20px'}}>
                <Typography variant="h2" component="h2" style={{color: '#fff', marginBottom: '20px'}} >
                  Contacto
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}}>
                  Puerto Limón , Costa Rica
                </Typography> 
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}}>
                  <a href={"tel:+50687202621"} style={{textDecoration: 'none', color: '#fff'}}>+506 87202621</a>
                </Typography>
                <Typography variant="body1" component="p" className={classes.footerLinks} style={{marginBottom: '8px'}} >
                  <a href={"mailto:hello@sealabs.cr?subject=Hola, !Hablemos!"} style={{textDecoration: 'none', color: '#fff'}}>hello@sealabs.cr</a>
                </Typography>
                <Box className={classes.iconButtonWrapper}>
                    <IconButton size="large">
                      <a href={"https://github.com/sealabscr/sealabs.cr"} target="_blank">
                        <GitHubIcon style={{color: '#fff', fontSize: '40px'}}/>
                      </a>
                    </IconButton>
                    <IconButton size="large">
                      <a href={"https://www.linkedin.com/company/sealabscr"} target="_blank">
                        <LinkedInIcon style={{color: '#fff', fontSize: '40px'}}/>
                      </a>
                    </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
      </Box>
    )
  }

  const FooterCopyright = () => {
    return (
      <Box className={classes.copyrightWrapper}>
          <Box className={classes.copyrightContentWrapper}>
            <Typography variant="body1" component="p" color="secondary">
              Todos los derechos reservados Sealabs Technologies
            </Typography>
          </Box>
      </Box>
    )
  }


  
  return (    
    <Box>
        <Navbar />
        <Header />
        <AboutUs />
        <CallToAction1 /> 
        <Services /> 
        <Technologies />  
        <WorkWithUs />
        <Footer />
        <FooterCopyright />
    </Box>
  );
}

export default LandingPage;