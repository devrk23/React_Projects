import React from "react";
import { Carousel } from "antd";
import img1 from "../../Assets/images/who-we-are.b197b0.webp";
import img2 from "../../Assets/images/about-history.d110a0.webp";

const contentStyle = {
  height: "260px",
  width: '900px',
  color:'black',
  fontSize:'150%',
  textAlign:'justify'
};

function AboutCarousel() {
  return (
    <div>
      <Carousel>
        <div
          className="about-carousels"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin:'10px',
          }}
        >
          <div><img src={img1} /></div>
          <div >
          <h4 style={{fontSize:'200%'}}>WHO WE ARE</h4>
          <p style={contentStyle}>
            Tranetech Software Solutions is a vital IT player in the
            business of providing software solutions. We adapt to evolving
            business needs by defining, designing, and developing applications
            tailored to meet dynamic business requirements. We commit to present
            our clients with innovative, customized, and cost-effective
            solutions of exceptional value and technical quality. Our dedicated
            team of experts with their hands-on knowledge and technical
            expertise strives to use technology to achieve specific business
            objectives. These objectives include end-to-end enterprise solutions
            such as ERP solutions, software product development, application
            development service, web design and development, digital marketing,
            branding, SEO, consulting, and several other services that cater to
            a global clientele.
          </p>
          </div>
        </div>     
        <div
          className="carousels"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin:'10px',
          }}
        >
          <img src={img2} />
          <div >
          <h4 style={{fontSize:'200%'}}>OUR HISTORY</h4>
          <p style={contentStyle}>
          Tranetech Software Solutions specializes in IT infrastructure, consultancy, and software development services. Since 2015 we help global companies and established brands reimagine their business by building impactful digital solutions powered by the latest technologies. An innovative idea/solution that transforms an organization from the inside out is the knowledge that drives us towards excellence.

          </p>
          </div>
        </div> 
      </Carousel>
    </div>
  );
}

export default AboutCarousel;
