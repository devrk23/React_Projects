import "./App.css";
import Contact from "./Components/Header/ContactLinks";
import Logohead from "./Components/Header/Navbar";
import CarouselOne from "./Components/Carousels/Homepage";
import { Col, Divider, Row } from "antd";
import WhoAreWeCarousel from "./Components/Carousels/Whoarewe";
import img2 from "./Assets/images/blackscreen.webp";
import ServicesSlides from "./Components/Carousels/Services-Slider";
import { Progress } from "antd";
import { Carousel } from "antd";
import socialsLink from "./Components/Header/socialsLink";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import test1 from "./Assets/images/test01.webp";
import test2 from "./Assets/images/test02.webp";
import test3 from "./Assets/images/test03.webp";
import clogo from "./Assets/images/company_logo-removebg-preview.png";
import Footer from "./Components/Footer/footer";
import FooterBar from "./Components/Footer/end.js";
// import WhoAreWeCarousel from "./Components/Carousels/Whoarewe";

function App() {
  return (
    <>
      <div>
        <div>
          <Contact />
          <Logohead />
        </div>
        <div>
          <CarouselOne />
        </div>
        <Divider orientation="left"></Divider>
        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "5rem",
            alignItems: "center",
            marginLeft: "25%",
          }}
        >
          <Col flex={2}>
            <h3
              style={{
                color: "orange",
                marginLeft: "5%",
                marginTop: "5%",
                fontWeight: "500",
              }}
            >
              WHO ARE WE
            </h3>
            <h2 style={{ marginLeft: "5%", marginTop: "0", fontWeight: "500" }}>
              We are the effective solution providers for you.
            </h2>
            <p
              style={{
                width: "450px",
                margin: "20px",
                marginLeft: "5%",
                paddingRight: "10px",
                textAlign: "justify",
              }}
            >
              Exploring the possibilities of technology to foster business
              development,we at Tranetech Software Solutions consistently strive
              to apply new thoughts to create more explicit,valuable, and better
              experiences with technological advancement, however continuously
              improving the way our clients work. As the Best ERP software
              company Abu Dhabi, we spawn great innovation with new, powerful
              programming languages and methodologies to transform how
              organizations, businesses, and even people coordinate and work.
              With our production sector based in Abu Dhabi, we are committed to
              offering our clients - innovative, customized ,cost-effective
              solutions having outstanding value and technical excellence.
            </p>
          </Col>
          <Col flex={4}>
            <WhoAreWeCarousel />
          </Col>
        </Row>
        <section className="AboutEqual">
          <div>
            <div
              className="equal-textbox"
              style={{
                marginTop: "5%",
                paddingTop: "5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 style={{ fontWeight: "500", fontSize: "250%" }}>
                EQUAL the integrated ERP solutions <br /> build to meet the
                needs of businesses.
              </h2>
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "150%",
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                EQUAL is a scalable and fully integrated enterprise resource
                planning system to manage your entire business procedures in an
                organization. As the Best ERP Software in UAE, EQUAL available
                on the cloud and as an on-premise solution. EQUAL unites
                standard business disciplines with modern marketing strategies
                and technology, empowering users to streamline processes, track
                resources and manage data with ease.
              </p>
              <img src={img2} style={{ width: "45%" }} />
            </div>
          </div>
        </section>
        <section>
          <div></div>
        </section>
        <section>
          <div>
            <div
              className="services"
              style={{
                marginTop: "5%",
                paddingTop: "1%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h5>OUR SERVCES</h5>
              <h2>
                Innovative solutions to enhance and <br /> manage business
                better.
              </h2>
            </div>
            <div
              style={{
                marginLeft: "35%",
                marginRight: "35%",
                paddingBottom: "1%",
                paddingTop: "3%",
              }}
            >
              <ServicesSlides />
            </div>
          </div>
        </section>
        <section className="skills">
          <div
            className="box"
            style={{
              display: "flex",
              paddingLeft: "3%",
              justifyContent: "space-around",
            }}
          >
            <div
              className="heading"
              style={{
                paddingTop: "4%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4
                style={{
                  color: "orange",
                  textDecoration: "underline",
                  paddingTop: "0%",
                }}
              >
                OUR SKILLS
              </h4>
              <h2 style={{ fontSize: "200%" }}>
                Optimal Integration of Information,
                <br /> Design, & Technology
              </h2>
            </div>
            <div className="progress-bar" style={{ paddingTop: "4%" }}>
              <h6 style={{ margin: "0%" }}>DEVELOPMENT</h6>
              <Progress
                percent={90}
                strokeColor={"orange"}
                trailColor={"grey"}
                style={{ color: "white", marginBottom: "0%" }}
              />
              <h5 style={{ marginTop: "0%" }}>
                Website, Application, ERP, Software
              </h5>
              <h6 style={{ margin: "0%" }}>DESIGN</h6>
              <Progress
                percent={80}
                strokeColor={"orange"}
                trailColor={"grey"}
                style={{ color: "white", marginBlockStart: "0%" }}
              />
              <h5 style={{ marginTop: "0%" }}>
                Branding, Brochure, Digital Media Assets
              </h5>
              <h6 style={{ margin: "0%" }}>MARKETING</h6>
              <Progress
                percent={90}
                strokeColor={"orange"}
                trailColor={"grey"}
                style={{ color: "white", marginBottom: "0%" }}
              />
              <h5 style={{ marginTop: "0%" }}>
                Email, Digital Media, Social Media
              </h5>
              <h6 style={{ margin: "0%" }}>SEO</h6>
              <Progress
                percent={90}
                strokeColor={"orange"}
                trailColor={"grey"}
                style={{ color: "white", marginBottom: "0%" }}
              />
              <h5 style={{ marginTop: "0%" }}>Analytics, Content, Links</h5>
            </div>
          </div>
        </section>

        <section>
          <div className="box">
            <h6
              style={{
                textAlign: "center",
                fontWeight: "700",
                paddingTop: "4%",
                color: "peachpuff",
                fontSize: "100%",
              }}
            >
              OUR TESTIMONIALS
            </h6>
            <h3
              style={{
                textAlign: "center",
                fontWeight: "500",
                paddingTop: "1%",
                color: "black",
              }}
            >
              Our Clients are our biggest supporters. Hear what they have to say
              about us
            </h3>
          </div>
          <Carousel
            autoplay
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <div style={{ alignItems: "center", marginLeft: "25%" }}>
              <img src={test1} />
            </div>
            <div>
              <img src={test2} />
            </div>
            <div>
              <img src={test3} />
            </div>
          </Carousel>
        </section>

        <section>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgrey",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div style={{ alignItems: "center" }}>
              <h3>
                Empowering Business Through Wide-Ranging Software Development
                Expertise.
              </h3>
            </div>
            <div>
              <img src={clogo} width={300} height={100} />
            </div>
            <div className="socials">
                <h3 style={{fontSize:'170%',paddingRight:'15px'}}>Connect with us:</h3>
                <a style={{padding:'5px',fontSize:'200%'}} href="https://www.facebook.com/tranetechsoftwaresolutions">
                  <FacebookOutlined />
                </a>
                <a style={{padding:'5px',fontSize:'200%'}} href="https://www.instagram.com/tranetech.com_/">
                  <InstagramOutlined />
                </a>
                <a style={{padding:'5px',fontSize:'200%'}} href="https://www.linkedin.com/company/tranetech-software-solutions">
                  <LinkedinOutlined />
                </a>
                <a style={{padding:'5px',fontSize:'200%'}} href="https://web.whatsapp.com/">
                  <WhatsAppOutlined />
                </a>
                <a style={{padding:'5px',fontSize:'200%'}} href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftranetech_uae">
                  <TwitterOutlined />
                </a>
              </div>
          </div>
        </section>
        <div><Footer/></div>
        <div><FooterBar/></div> 
     </div>
    </>
  );
}

export default App;
