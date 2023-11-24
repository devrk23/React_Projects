import React from "react";
import {
  MobileFilled,
  MailFilled,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import {} from "antd";
import "../../Assets/css files/ContactsLink.css";

export default function Contact() {
  return (
    <div className="container">
      <div className="contactinfo" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
          <p style={{paddingLeft:'15px',paddingRight:'15px'}}>
            <MobileFilled />
            +971 2 443 3113
          </p>
          <p style={{paddingLeft:'15px',paddingRight:'15px'}}>
            <MobileFilled />
            +971 4 514 9922
          </p>
          <p style={{paddingLeft:'15px',paddingRight:'15px'}}>
            <MailFilled />
            <a href="mailto:info@tranetech.com"></a>info@tranetech.com
          </p>
          <p style={{paddingLeft:'15px',paddingRight:'15px'}}>
            <MailFilled />
            <a href="mailto:infodxb@tranetech.com"></a>infodxb@tranetech.com
          </p>
      </div>
      <div className="socials">
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
  );
}
