const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="contact-container">
          <a>Contact</a>
          <a href="mailto:cj.chen@longbowmaterial.com">
            cj.chen@longbowmaterial.com
          </a>
          <a>(949)-562-8469</a>
        </div>
      </div>
      <style jsx>{`
        .footer-container {
          display: flex;
          height: 200px;
          width: 100%;
          align-items: center;
        }

        .contact-container {
          display: flex;
          flex-direction: column;
          height: 200px;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .contact-container a:link {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
export default Footer;
