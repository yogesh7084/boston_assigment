const Footer = ({ socialmediaDetails }) => {
  console.log(socialmediaDetails)
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 py-2">
            <div className="nav justify-content-center justify-content-md-start">
              {socialmediaDetails?.map((socialMedia) => {

                return <a href={socialMedia.url}>
                  {/* <h1>{socialMedia.platform}</h1> */}
                  <img style={{width: "25px"}} src={socialMedia.image?.url} alt="social-img" />
                  {/* <i className="fab fa-facebook-f" /> */}
                </a>
              })}

              {/* <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a> */}
            </div>
          </div>
          <div className="col-md-6 py-2 text-center text-md-end">
            <p className="m-0">
              © {new Date().getFullYear()} copyright all right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
