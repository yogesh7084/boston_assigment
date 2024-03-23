import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import Skill from "@/src/components/Skill";
import Testimonial from "@/src/components/Testimonial";
import ImageView from "@/src/components/popup/ImageView";
import { boston } from "@/src/utils";
import { Fragment, useEffect, useState } from "react";
const Index = () => {

  const [userData, setUserData] = useState({});
  useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");

      if (!res.ok) {
        // Checking if responce is ok or nott
        alert(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      // console.log("Data fetched");

      // console.log("Data", data.user);
      setUserData(data.user);
    } catch (error) {
      alert("Error fetching data");
    }
  };


  return (
    <Fragment>
      <ImageView />
      {/* End */}
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Main */}
      <main className="wrapper">
        {/* Home Section */}
        {userData?.about && <Home about={userData.about} />}
        {/* {console.log(userData.about)} */}
        {/* {console.log(userData.about)} */}
        {/* End Home Section */}

        {/* Services Section */}
        {userData?.services && <Services servicesData={userData?.services} />}
        {/* {console.log(userData.services)} */}

        {/* End Services Section */}
        {/* Skill Section */}
        <Skill skillsData={userData?.skills} experiencesData={userData?.timeline} avatarUrl={userData?.about?.avatar?.url} />
        {/* {console.log("Skills",userData.timeline)} */}
        {/* {console.log("url",userData?.about?.avatar?.url)} */}
        {/* End Skill Section */}

        {/* Work Section */}
        {userData?.projects && <Portfolio projectsData={userData?.projects} />}
        {/* {console.log(userData?.projects)} */}
        {/* End Work Section */}

        {/* testimonial Section */}
        {userData?.testimonials && <Testimonial testimonialsData={userData?.testimonials} />}
        {/* {console.log(userData?.testimonials)} */}
        {/* End testimonial Section */}

        {/* Contact Section */}
        <Contact contactDetails={userData?.about} userEmailId={userData?.email} />
        {/* {console.log(userData?.about)} */}
        {/* End Contact Section */}

        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
        {/* End Effect */}
      </main>
      {/* Main */}

      {/* Footer */}
      {userData?.social_handles && <Footer socialmediaDetails={userData?.social_handles} />}
      {/* End Footer */}

    </Fragment>
  );
};
export default Index;
