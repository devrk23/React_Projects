import React from "react";
import img1 from "../../Assets/images/designing.jpg";
import { Carousel, Card } from "antd";
import "../../Assets/css files/Carousel.css";
export default function CarouselOne() {
  return (
    <>
      <Carousel>
        <div>
          <div id="slide1" className="carousal-slide">
            <Card id="card1" className="carousal-card">
              <h1>LEADING ENTERPRISE ERP SOLUTIONS</h1>
              <h2>
                Facility
                <br />
                <strong>Management</strong>
              </h2>
              <button type="button">Know More</button>
            </Card>
          </div>
        </div>
        <div>
          <div id="slide2" className="carousal-slide">
            <Card id="card2" className="carousal-card">
              <h1>LEADING ENTERPRISE ERP SOLUTIONS</h1>
              <h2>
                HRMS
                <br />
                <strong>Management</strong>
              </h2>
              <button type="button">Know More</button>
            </Card>
          </div>
        </div>
        <div>
          <div id="slide3" className="carousal-slide">
            <Card id="card3" className="carousal-card">
              <h1>LEADING ENTERPRISE ERP SOLUTIONS</h1>
              <h2>
                Finance
                <br />
                <strong>Management</strong>
              </h2>
              <button type="button">Know More</button>
            </Card>
          </div>
        </div>
        <div>
          <div id="slide4" className="carousal-slide">
            <Card id="card4" className="carousal-card">
              <h1>LEADING ENTERPRISE ERP SOLUTIONS</h1>
              <h2>
                Accounts
                <br />
                <strong>Management</strong>
              </h2>
              <button type="button">Know More</button>
            </Card>
          </div>
        </div>
      </Carousel>
    </>
  );
}

/*export default function CarouselOne() {
  return(
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={car1} className="d-block w-100"></img>
        </div>
        <div className="carousel-item">
          <img src={car1} className="d-block w-100"></img>
        </div>
        <div className="carousel-item">
          <img src={car1} className="d-block w-100"></img>
        </div>
      </div>
      <Button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </Button>
      <Button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </Button>
    </div>
  )

}*/
