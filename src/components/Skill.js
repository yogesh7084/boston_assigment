import SectionTitle from "./SectionTitle";

// const skillsData = [
//   { id: 1, name: "HTML", icon: "fab fa-html5" },
//   { id: 2, name: "CSS", icon: "fab fa-css3" },
//   { id: 3, name: "React JS", icon: "fab fa-react" },
//   { id: 4, name: "Angular", icon: "fab fa-angular" },
//   { id: 5, name: "iOs App", icon: "fab fa-apple" },
//   { id: 6, name: "App Dev", icon: "fab fa-android" },
// ];

// const experiencesData = [
//   {
//     id: 1,
//     date: "Jan 2021 - Present",
//     designation: "Creative Director",
//     company: "pxdraft Ltd, UK",
//   },
//   {
//     id: 2,
//     date: "Jan 2021 - Present",
//     designation: "Creative Director",
//     company: "pxdraft Ltd, UK",
//   },
//   {
//     id: 3,
//     date: "Jan 2021 - Present",
//     designation: "Creative Director",
//     company: "pxdraft Ltd, UK",
//   },
//   {
//     id: 4,
//     date: "Jan 2021 - Present",
//     designation: "Creative Director",
//     company: "pxdraft Ltd, UK",
//   },
// ];
const Skill = ({ skillsData, experiencesData, avatarUrl }) => {

  // for displaying only skills which has enabled = true 
  const enabledSkillsData = skillsData?.filter((skill) => skill?.enabled)

  // removing the experiences which has the enabled.
  const enabledExperiencesData = experiencesData?.filter((experience) => experience?.enabled)

  // Sorting experiences by there sequence in descending order, i.e. latest Job first.. 
  let sortedExperienceData = enabledExperiencesData?.sort((a, b) => b.sequence - a.sequence);

  // For changing the format of the date object to the month - year format
  const changeDateFormat = (date) => {
    const startDate = new Date(date)
    let fullStartDate = startDate.toLocaleString("default", { month: "short" }) + " " + startDate.getFullYear();

    return fullStartDate;

  }

  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={
                "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores."
              }
            />

            {enabledSkillsData && <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {enabledSkillsData?.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill._id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        {/* <i className={skill.icon} /> */}
                        <img src={skill.image.url} alt="skillImgae" />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>}
          </div>

          {sortedExperienceData && <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {sortedExperienceData?.map((experience) => (
                  <li key={experience._id}>
                    <div className="eb-right">
                      <h6>{changeDateFormat(experience.startDate) + " - " + changeDateFormat(experience.endDate)}</h6>
                      <span style={{ fontSize: "0.8rem" }}>{experience.forEducation ? "For Education" : ""}</span>

                    </div>
                    <div className="eb-right">
                      <h5>{experience.jobTitle}</h5>
                      <span>{experience.company_name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">

              {/* Below span is for the lines design */}
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>

              {/* For avtar of the user  */}
              <div className="avatar">
                {/* <img src="assets/img/avatar.png" alt="image" /> */}
                <img src={avatarUrl} alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>}

        </div>
      </div>
    </section>
  );
};
export default Skill;
