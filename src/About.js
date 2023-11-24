import "./App.css";
import Contact from "./Components/Header/ContactLinks";
import Logohead from "./Components/Header/Navbar";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import clogo from "./Assets/images/company_logo-removebg-preview.png";
import Footer from "./Components/Footer/footer";
import FooterBar from "./Components/Footer/end.js";
import { Carousel,Button} from "antd";
import img1 from "./Assets/images/who-we-are.b197b0.webp";
import img2 from "./Assets/images/about-history.d110a0.webp";
import img3 from "./Assets/images/about-why.d110a0.webp";
import img4 from "./Assets/images/about-vsion.b197b0.webp";

function App() {
  return (
    <>
      <div>
        <div>
          <Contact />
          <Logohead />
        </div>
        <div className="titlebox">
          <h2>About Us</h2>
        </div>
        <div>
          <Carousel autoplay>
            <div className="about-carousels" style={{display:'flex',}}>
              <div>
                <img src={img1} />
              </div>
              <div>
                <h4 style={{ fontSize: "200%" }}>WHO WE ARE</h4>
                <p
                  style={{
                    height: "260px",
                    width: "900px",
                    color: "black",
                    fontSize: "150%",
                    textAlign: "justify",
                  }}
                >
                  Tranetech Software Solutions is a vital IT player in the
                  business of providing software solutions. We adapt to evolving
                  business needs by defining, designing, and developing
                  applications tailored to meet dynamic business requirements.
                  We commit to present our clients with innovative, customized,
                  and cost-effective solutions of exceptional value and
                  technical quality. Our dedicated team of experts with their
                  hands-on knowledge and technical expertise strives to use
                  technology to achieve specific business objectives. These
                  objectives include end-to-end enterprise solutions such as ERP
                  solutions, software product development, application
                  development service, web design and development, digital
                  marketing, branding, SEO, consulting, and several other
                  services that cater to a global clientele.
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
                margin: "10px",
              }}
            >
              <img src={img2} />
              <div>
                <h4 style={{ fontSize: "200%" }}>OUR HISTORY</h4>
                <p
                  style={{
                    height: "260px",
                    width: "900px",
                    color: "black",
                    fontSize: "150%",
                    textAlign: "justify",
                  }}
                >
                  Tranetech Software Solutions specializes in IT infrastructure,
                  consultancy, and software development services. Since 2015 we
                  help global companies and established brands reimagine their
                  business by building impactful digital solutions powered by
                  the latest technologies. An innovative idea/solution that
                  transforms an organization from the inside out is the
                  knowledge that drives us towards excellence.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <div
            className="quotes"
            style={{
              marginTop: "40px",
              backgroundColor: "black",
              padding: "30px",
              textAlign: "center",
              fontSize: "180%",
            }}
          >
            <h3 style={{ color: "white", justifyContent: "center" }}>
              “Information technology and business are becoming inextricably
              interwoven.”
            </h3>
            <h5 style={{ color: "orange" }}>-Bill Gates</h5>
          </div>
        </div>

        <div
          style={{
            margin: "40px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="we-analyse">
            <div style={{ display: "flex", paddingBottom: "0" }}>
              <h1 style={{ fontSize: "550%" }}>01.</h1>
              <h4
                style={{ fontSize: "230%", padding: "20px", color: "darkgrey" }}
              >
                We <br /> analyse
              </h4>
            </div>
            <p
              style={{
                height: "260px",
                width: "450px",
                color: "black",
                fontSize: "150%",
                textAlign: "justify",
                paddingBottom: "0",
              }}
            >
              We analyze business for identifying the crucial needs and discover
              solutions to your company intricacies, providing an essential
              factor for decisive planning & development.
            </p>
          </div>
          <div className="we-innovate">
            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "550%" }}>02.</h1>
              <h4
                style={{ fontSize: "230%", padding: "20px", color: "darkgrey" }}
              >
                We <br /> Innovate
              </h4>
            </div>
            <p
              style={{
                height: "260px",
                width: "450px",
                color: "black",
                fontSize: "150%",
                textAlign: "justify",
              }}
            >
              As the best Software Development Company Abu Dhabi, we innovate
              our concepts by creating and executing new plans linked to
              decisive changes in performance, productivity & quality in your
              business.
            </p>
          </div>
          <div className="we-analyse">
            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "550%" }}>03.</h1>
              <h4
                style={{ fontSize: "230%", padding: "20px", color: "darkgrey" }}
              >
                We <br />
                Deliver
              </h4>
            </div>
            <p
              style={{
                height: "260px",
                width: "450px",
                color: "black",
                fontSize: "150%",
                textAlign: "justify",
              }}
            >
              We offer our deliverables with certainty and high quality that
              matches global standards & principally aimed at impeccable
              customer satisfaction, growth & reliability.
            </p>
          </div>
        </div>

        <section className="achievebox" id="equal-erp">
          <div className="container" style={{ marginTop: "15px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "0",
                  justifyContent: "space-around",
                }}
              >
                <h1
                  style={{ color: "white", fontSize: "250%", padding: "5px" }}
                >
                  ACHIEVE NEW HEIGHTS WITH IMPACTFUL DIGITAL SOLUTIONS
                </h1>
                <p
                  style={{
                    color: "whitesmoke",
                    fontSize: "150%",
                    width: "1000px",
                    paddingBottom: "0",
                  }}
                >
                  Tranetech Software Solutions started with a passion for its
                  industry to handle the most demanding workloads. As the best
                  Software Company Abu Dhabi, we aim to develop and deliver
                  solutions that enable our customers to achieve their
                  determined goals. We strive to build everything with a
                  client-centric approach and expect to have a long-term
                  relationship with our clients over profits.
                </p>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <ul style={{ color: "whitesmoke", flexDirection: "row" }}>
                    <li>Proficiency in diverse technologies & domains</li>
                    <li>Years of IT experience</li>
                    <li>Proper hierarchy and escalation path</li>
                    <li>Global exposure with diverse expertise</li>
                  </ul>
                  <ul style={{ color: "whitesmoke", flexDirection: "row" }}>
                    <li>Team mentoring & agile coaching</li>
                    <li>Long term relationship perspective</li>
                    <li>Delivering standard solutions</li>
                    <li>Dedicated support team</li>
                  </ul>
                </div>
              </div>
              <img
                src={img3}
                style={{
                  alignContent: "center",
                  paddingTop: "2%",
                  paddingBottom: "2%",
                  width: "30%",
                  height: "30%;",
                  marginLeft: "5%",
                }}
              />
            </div>
          </div>
        </section>

        <section className="vision">
          <div>
            <div
              className="vision-text"
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "30px",
                justifyContent:'space-evenly'
              }}
            >
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h3 style={{ fontSize: "250%" }}>OUR VISION & MISSION</h3>
                <p style={{ fontSize: "150%", width: "900px" }}>
                  In Tranetech Software Solutions, we envision emerging as a
                  globally recognized IT solution provider that provides the
                  best quality digital solutions and services. We aspire to
                  become the technology partner of choice for the progressive
                  customers and partners by collaboratively transforming
                  technology into business improvement.
                  <br />
                  <br />
                  Our mission is to provide innovative IT services for the
                  business process that create value and a relative competitive
                  advantage to our clientele. As the best ERP Software provider
                  in UAE, we leverage the latest technologies and leading-edge
                  strategies to build products that accelerate our clients’
                  business and help them achieve their goals.
                </p>
              </div>
              <img src={img4} />
            </div>
          </div>
        </section>

        <section style={{backgroundColor:'#f0efef',marginTop:'5%',marginBottom:'5%'}}>
            <div style={{display:'flex',fontSize:'150%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <div class="col">
                    <img src={img3} style={{padding:'40px'}}/>
                </div>
                <div style={{paddingTop:'10px'}}>
                    <h3 style={{fontSize:'250%',marginLeft:'15%'}}>OUR PROCESS</h3><br/>
                    <div class="box" style={{marginLeft:'10%'}}>
                        <div style={{display:"flex",flexDirection:'row'}}>
                            <div>
                              <div style={{padding:'0'}}><font color="#FFD523">01</font>&nbsp;&nbsp;&nbsp;&nbsp;Strategy</div>
                            <p>
                                We determine project goals and thoughtfully plan the course of action to achieve the best
                                results.
                            </p>
                            </div>
                            <div>
                               <div style={{padding:'0'}}><font color="#FFD523">02</font>&nbsp;&nbsp;&nbsp;&nbsp;Design</div>
                            <p>  
                                We develop detailed specifications that emphasize the physical solution to the requirements
                                of the client.
                            </p>
                            </div>
                        </div>
                        <div style={{display:"flex",flexDirection:'row'}}>
                            <div>
                              <div style={{padding:'0'}}><font color="#FFD523">03</font>&nbsp;&nbsp;&nbsp;&nbsp;Develop</div>
                            <p>
                                We determine project goals and thoughtfully plan the course of action to achieve the best
                                results.
                            </p>
                            </div>
                            <div>
                               <div style={{padding:'0'}}><font color="#FFD523">04</font>&nbsp;&nbsp;&nbsp;&nbsp;Test</div>
                            <p>  
                                We develop detailed specifications that emphasize the physical solution to the requirements
                                of the client.
                            </p>
                            </div>
                        </div>
                        <div style={{display:"flex",flexDirection:'row'}}>
                            <div>
                              <div style={{padding:'0'}}><font color="#FFD523">05</font>&nbsp;&nbsp;&nbsp;&nbsp;Deliver</div>
                            <p>
                                We determine project goals and thoughtfully plan the course of action to achieve the best
                                results.
                            </p>
                            </div>
                            <div>
                               <div style={{padding:'0'}}><font color="#FFD523">06</font>&nbsp;&nbsp;&nbsp;&nbsp;Support</div>
                            <p>  
                                We develop detailed specifications that emphasize the physical solution to the requirements
                                of the client.
                            </p>
                            </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </section>


        <section style={{marginTop: '5%', marginBottom: '5%'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <div style={{fontSize:'250%',paddingRight:'20px'}}>
                    We would love to hear about the start of your new project?
                </div>
                <div>
                <Button type="primary" shape="round" size={'large'}>Contact Us</Button>
                </div>
            </div>
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
              <h3 style={{ fontSize: "170%", paddingRight: "15px" }}>
                Connect with us:
              </h3>
              <a
                style={{ padding: "5px", fontSize: "200%" }}
                href="https://www.facebook.com/tranetechsoftwaresolutions"
              >
                <FacebookOutlined />
              </a>
              <a
                style={{ padding: "5px", fontSize: "200%" }}
                href="https://www.instagram.com/tranetech.com_/"
              >
                <InstagramOutlined />
              </a>
              <a
                style={{ padding: "5px", fontSize: "200%" }}
                href="https://www.linkedin.com/company/tranetech-software-solutions"
              >
                <LinkedinOutlined />
              </a>
              <a
                style={{ padding: "5px", fontSize: "200%" }}
                href="https://web.whatsapp.com/"
              >
                <WhatsAppOutlined />
              </a>
              <a
                style={{ padding: "5px", fontSize: "200%" }}
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftranetech_uae"
              >
                <TwitterOutlined />
              </a>
            </div>
          </div>
        </section>
        <div>
          <Footer />
        </div>
        <div>
          <FooterBar />
        </div>
      </div>
    </>
  );
}

export default App;
