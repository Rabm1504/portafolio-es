import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    
    
  ];

  const development = [
    {
      title: "Web Developer Portfolio",
      description: "Design & Development",
      github: "https://github.com/",
      deploy: "https://netlify.app/",
    },
    {
      title: "A & L E-Commerce",
      description: "Design & Development", 
      github: "https://github.com/",
      deploy: "https://netlify.app/",
    },
    {
      title: "Game: Wheel of Doom",
      description: "Game Design",
      github: "https://github.com/",
      deploy: "https://netlify.app/",
    },
  ];

  const single = [ 
    {
      title: "Spotify Clone",
      description: "Figma UI Design",
      github: "https://www.figma.com/",
      deploy: "https://www.figma.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projectos</h2>
                  <p>Los proyectos que he realizado van desde el desarrollo de Landing Pages, juegos con una interfaz sencilla, páginas web estáticas, páginas web dinámicas, portfolios y comercio electrónico sencillo vinculado a la API de WhatsApp. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Single Pages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Figma</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          development.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                          {
                            single.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
