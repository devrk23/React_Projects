import img1 from "../../Assets/images/analyse.webp";
import img2 from "../../Assets/images//deliver.webp";
import img3 from "../../Assets/images/innovate.webp";
import { useState } from "react";
import { Carousel } from "antd";

function WhoAreWeCarousel() {
    return (
    <div className="container-box" style={{width:'30%'}}>
      <Carousel autplay>
        <div className="slide-one">
          <img src={img1} width={"300px"} text="First slide" />
          <div style={{ maxWidth: "300px" }}>
            <h3>We Innovate</h3>
            <p style={{ textAlign: "justify" }}>
              As the Best Software Development company Abu Dhabi, we innovate
              our concepts by creating and executing new plans linked to
              decisive changes in performance, productivity & quality in your
              business.
            </p>
          </div>
        </div>
        <div className="slide-two">
          <img src={img2} width={"300px"} text="Second slide" />
          <div style={{ maxWidth: "300px" }}>
            <h4>We Deliver</h4>
            <p>
              We offer our deliverables with certainty and high quality that
              matches global standards & principally aimed at impeccable
              customer satisfaction, growth & reliability.
            </p>
          </div>
        </div>
        <div className="slide-three">
          <img src={img3} width={"300px"} text="Third slide" />
          <div style={{ maxWidth: "300px" }}>
            <h4>We Analyze</h4>
            <p>
              We analyze business for identifying the crucial needs and discover
              solutions to your company intricacies, providing an essential
              factor for decisive planning & development.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default WhoAreWeCarousel;
