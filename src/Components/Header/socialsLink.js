import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import fb from '../../Assets/images/icons8-facebook.svg';
import ig from '../../Assets/images/icons8-instagram.svg';
import tw from '../../Assets/images/icons8-twitter.svg';
import wa from '../../Assets/images/icons8-whatsapp.svg';
import ln from '../../Assets/images/icons8-linkedin.svg';

export default function socialsLink() {
  return (
      <div className="socials">
        <a href="https://www.facebook.com/tranetechsoftwaresolutions">
          <img src={fb} alt="" width={'60'} height={'50'}/> 
        </a>
        <a href="https://www.instagram.com/tranetech.com_/">
          <img src={ig} alt="" width={'60'} height={'50'}/> 
        </a>
        <a href="https://www.linkedin.com/company/tranetech-software-solutions">
          <img src={ln} alt="" width={'60'} height={'50'}/> 
        </a>
        <a href="https://web.whatsapp.com/">
          <img src={wa} alt="" width={'60'} height={'50'}/> 
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftranetech_uae">
          <img src={tw} alt="" width={'60'} height={'50'}/> 
        </a>
      </div>
  );
}
