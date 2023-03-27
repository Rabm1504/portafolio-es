import logo from "../assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footerIcon" />
      <p>Copyright 2023. Derechos reservados</p>
    </footer>
  )
}
