import 'react-multi-carousel/lib/styles.css';
import PerfilCircular from '../assets/img/renny.svg'
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { BrowserRouter } from 'react-router-dom';

export const Bio = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 901 },
      items: 3
    },
    bigmobile: {
      breakpoint: { max: 800, min: 0 },
      items: 2
    },
    smallmobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="bio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <BrowserRouter>
                <Container>
                  <Row className="aligh-items-center">
                    <h2>Bio</h2>
                    <Col xs={12} md={6} xl={5}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={PerfilCircular} alt="Header Img" />
                          </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                      <TrackVisibility>
                        {({ isVisible }) =>
                          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <p>Desarrollador full-stack con nivel intermedio de inglés, especializado en el stack MERN (MongoDB, Express.js, React, y Node.js) y familiarizado con la metodología SCRUM. Mi foco principal es el desarrollo de aplicaciones web robustas y escalables. Puedo trabajar tanto en el lado del cliente como del servidor, utilizando lenguajes como JavaScript para crear una experiencia de usuario fluida y dinámica. Tengo experiencia creando APIs RESTful y he trabajado con bases de datos relacionales y no relacionales. 
                              <br></br>
                              <br></br> 
                              Tengo una fuerte ética de trabajo y soy un solucionador de problemas creativo y encuentro soluciones innovadoras a los desafíos técnicos. Manejo el MERN Stack (Mongo, Express, React y Node) así como SQL y Responsive Design con CSS, Material UI, Bootstrap y Tailwind.</p>
                            <a href="https://www.canva.com/design/" target="_blank" style={{ color: "white" }}><button style={{ color: "white" }} className="cv_arrow">Obtenga mi CV  <ArrowRightCircle size={25} style={{ color: "white" }} /></button></a>
                          </div>}
                      </TrackVisibility>
                    </Col>
                  </Row>
                </Container>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp2} alt="Image" /> */}
    </section>
  )
}
