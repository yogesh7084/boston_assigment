import SectionTitle from "./SectionTitle";

// const serviceData = [
//   {
//     id: 1,
//     name: "Web Design",
//     icon: "bi bi-phone",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 2,
//     name: "Development",
//     icon: "bi bi-laptop",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 3,
//     name: "SEO Marketing",
//     icon: "bi bi-triangle",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 4,
//     name: "Web Design",
//     icon: "bi bi-columns",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 5,
//     name: "Development",
//     icon: "bi bi-distribute-vertical",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     id: 6,
//     name: "SEO Marketing",
//     icon: "bi bi-globe2",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
// ];
const Services = ({servicesData}) => {
  // for displaying only services which has enabled = true 
  const enabledServicesData = servicesData?.filter((service)=> service.enabled )
  // console.log(enabledServicesData)
// console.log("servicesData",enabledServicesData, servicesData)
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {enabledServicesData?.map((service, index) => (
            <div className="col-sm-6 col-lg-4" key={service._id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>{index+1}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    {/* <i className={service.icon} /> */}
                    <img style={{borderRadius: "50%"}} src={service?.image?.url} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
