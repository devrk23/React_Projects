<>
<div>
  <div>
    <Contact />
    <Logohead />
  </div>
  <section>
    <div className="ContactUs">
      <h2>Contact Us</h2>
    </div>
  </section>
  <section>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h5
        style={{
          fontWeight: "400",
          fontSize: "130%",
          color: "grey",
          marginBottom: "0",
        }}
      >
        WE WOULD LOVE TO WORK WITH YOU
      </h5>
      <h3 style={{ fontSize: "350%", color: "black", marginTop: "0" }}>
        How we can help
      </h3>
    </div>
  </section>

  <section>
    <Row>
      <Col span={8}></Col>
      <Col
        span={8}
        style={{
          backgroundColor: "#383838",
          color: "white",
          textAlign: "center",
          padding: "100px",
          borderRadius: "1px",
        }}
      >
        <img src={img1} width={"70px"} />
        <h3>GLOBAL HEAD QUARTERS</h3>
        <p>
          30 N Gould St Ste R Sheridan, WY 82801, United States Phone:
          (307)317-2754, (757)919-3242 Phone: (307)316-6320
          info@tranetech.com
        </p>
      </Col>
      <Col
        span={8}
        style={{
          backgroundColor: "#383838",
          color: "white",
          textAlign: "center",
          padding: "100px",
        }}
      >
        <img src={img1} width={"70px"} />
        <h3>CORPORATE OFFICE</h3>
        <h4>Tranetech Software Solutions</h4>
        <p>
          Al Masaood Tower-604, Hamdan Bin Mohammed Street, Abu Dhabi,
          United Arab Emirates, P.O. Box: 35546 Phone: +971 2 443 3113
          info@tranetech.com
        </p>
        <br />
        <h4>Tranetech Information Technology LLC</h4>
        <p>
          Churchill Tower-3410, Business Bay Dubai, United Arab Emirates
          Phone: 04 514 9922 infodxb@tranetech.com
        </p>
      </Col>
    </Row>
    <Row>
      <Col span={8}></Col>
      <Col
        span={8}
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "100px",
        }}
      >
        <img src={img1} width={"70px"} />
        <h3>REGIONAL OFFICE</h3>
        <p>
          1. Software Development Building 1, UL Cyberpark Fifth Floor,
          ULCCS LTD Special Economic Zone, Nellikode Village, Kozhikode,
          Kerala, 673016
        </p>
        <br />
        <p>2. Infocity-Gandhinagar, Gujarat, India</p>
      </Col>
      <Col
        span={8}
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "100px",
        }}
      >
        <img src={img1} width={"70px"} />
        <h3>SALES OFFICE</h3>
        <p>1. Doha, Qatar, P.O. Box : 31799 info@tranetech.com</p>
      </Col>
    </Row>
  </section>

  <section className="FORM">
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "350%" }}>TELL US ABOUT YOUR PROJECT</h2>
      <ContactForm />
      
    </div>
  </section>

  <section>
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize:'250%',
        fontFamily:"sans-serif",
       }}
    >
      <h1>ON SOCIAL NETWORKS</h1>
      <div className="socials" style={{justifyContent:'center'}}>
        <a
          style={{padding: "15%",fontSize: "200%" }}
          href="https://www.facebook.com/tranetechsoftwaresolutions"
        >
          <FacebookOutlined />
        </a>
        <a
          style={{ padding: "15%", fontSize: "200%" }}
          href="https://www.instagram.com/tranetech.com_/"
        >
          <InstagramOutlined />
        </a>
        <a
          style={{ padding: "15%", fontSize: "200%" }}
          href="https://www.linkedin.com/company/tranetech-software-solutions"
        >
          <LinkedinOutlined />
        </a>
        <a
          style={{ padding: "15%", fontSize: "200%" }}
          href="https://web.whatsapp.com/"
        >
          <WhatsAppOutlined />
        </a>
        <a
          style={{ padding: "15%", fontSize: "200%" }}
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftranetech_uae"
        >
          <TwitterOutlined />
        </a>
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