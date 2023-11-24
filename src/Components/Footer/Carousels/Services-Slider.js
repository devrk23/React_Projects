import React from "react";
import { Carousel } from "antd";
import { Avatar, Card } from "antd";
import img1 from "../../Assets/images/services-app.d110a0.webp";
import img2 from "../../Assets/images/services-designing.d110a0.webp";
import img3 from "../../Assets/images/services-digital.d110a0.webp";
import img4 from "../../Assets/images/services-erp.webp";
import img5 from "../../Assets/images/services-seo.d110a0.webp";
import img6 from "../../Assets/images/services-web.d110a0.webp";

const { Meta } = Card;

const ServicesSlides = () => (
  <Carousel autoplay style={{display:'flex',}}>
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={img1} />}>
        <Meta title="Application Development" description="Determined tech support throughout the entire mobile app development strategy..." />
      </Card>
    </div>
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={img3} />}>
        <Meta title="Branding & Digital Marketing" description="We are the creative and full-service digital agency providing sharper ideas for..." />
      </Card>
    </div>
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={img2} />}>
        <Meta title="Creative Designing" description="We create stunning yet affordable designs for all your projects..." />
      </Card>
    </div>
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={img4} />}>
        <Meta title="ERP Solutions" description="Drive your business from one place with our single, scalable, and fully integrated..." />
      </Card>
    </div>
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={img5} />}>
        <Meta title="Search Engine Optimization" description="Team of experts creating tailor-made online marketing strategies to help..." />
      </Card>
    </div>
    <div>
      <Card style={{ width: 300 }} cover={<img alt="example" src={img6} />}>
        <Meta title="Web Designing & Development" description="We turn ideas into digital solutions with our result-oriented web design..." />
      </Card>
    </div>
  </Carousel>
);
export default ServicesSlides;
