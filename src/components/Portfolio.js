import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-1.jpg",
  },
  {
    id: 2,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-2.jpg",
  },
  {
    id: 3,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-3.jpg",
  },
  {
    id: 4,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-4.jpg",
  },
  {
    id: 5,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-5.jpg",
  },
  {
    id: 6,
    title: "Agency Landing page",
    subtitle: "Web/WordPress",
    image: "assets/img/project-6.jpg",
  },
];

const Portfolio = ({ projectsData }) => {
  // Sorting projects by there sequence in ascending order 
  const projectsSorted = projectsData?.sort((a, b) => a.sequence - b.sequence);
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {projectsSorted?.map((project) => (
            <div className="col-sm-6 col-lg-4" key={project._id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={project.image.url} className="gallery-link">
                    <img src={project.image.url} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{project.title}</h6>
                  <span>{project.description}</span>
                  <a href={project.liveurl} >
                    <i className="fas fa-arrow-right" />
                  </a>

                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0 20px", marginBottom:"10px" }}>
                  <h6>Github link</h6>
                  <a href={project.githuburl} className="gallery-link"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "#5c64cf",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
