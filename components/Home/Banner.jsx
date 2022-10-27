import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaSpeed: 3000,
      slidesToScroll: 1,
    };
    return (
      <>
        <div className="pt-[140px]">
          <div className="max-w-[90%] mx-auto ">
            <Slider {...settings}>
              <div className="lg:h-[600px]">
                <img src="Banner_images/1.jpg" alt="" />
              </div>
              <div className="lg:h-[600px]">
                <img src="Banner_images/2.jpg" alt="" />
              </div>
              <div className="lg:h-[600px]">
                <img src="Banner_images/3.jpg" alt="" />
              </div>
            </Slider>
          </div>
          {/* welcome to biztek app heading */}
          <div className="max-w-[70%]  relative m-auto mt-[-12%] lg:mt-[-10%] xl:mt-[-4%]  bg-[#fefefe] shadow-lg shadow-orange-200 p-6 ">
            <div>
              <p className="text-2xl lg:text-4xl p-2 font-bold">
                {" "}
                <span className="">Welcome to</span>{" "}
                <span className="text-orange-500">BiztekApps</span>{" "}
              </p>
              <p className="p-2 text-[14px] lg:text-[16px] hidden md:block">
                At BiztekApps, we develop innovative and creative products and
                services that provide total communication and information
                solutions. Among a plethora of services, web design and
                development, ERPs, CRMs, e-commerce solutions,
                business-to-business applications, business-to-client
                applications and managed hosting are few that we offer.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
