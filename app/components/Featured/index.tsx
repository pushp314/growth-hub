"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// SERVICE DATA
interface ServiceType {
  heading: string;
  description: string;
  imgSrc: string;
}

const serviceData: ServiceType[] = [
  {
    heading: "English Coaching (Online & Offline)",
    description:
      "Master spoken and written English with our expert-led sessions available both online and offline. Perfect for students and professionals looking to boost confidence and fluency.",
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: "Job Placement Services",
    description:
      "Get career-ready with our professional job training, skill enhancement programs, and guaranteed placement assistance tailored to your goals.",
    imgSrc: "/images/featured/feat2.jpg",
  },
  {
    heading: "Career Counseling",
    description:
      "Find the right path with personalized career counseling sessions designed to help you make confident career choices for your future.",
    imgSrc: "/images/featured/feat4.webp",
  },
  {
    heading: "Corporate & Soft Skill Training",
    description:
      "Equip yourself with essential corporate skills and soft skills training to excel in the workplace and enhance your professional interactions.",
    imgSrc: "/images/featured/feat3.webp",
  },
];

// ARROW COMPONENTS
function SampleNextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

// MAIN COMPONENT
export default class ServicesCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-bgblue py-20 marginFeature bg-featured">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center pt-48 pb-10 md:pt-96">
            <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">
              Our Core Services
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">
              What We Offer
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">
              Learn, Train & Grow
            </h3>
          </div>

          <Slider {...settings}>
            {serviceData.map((service, i) => (
              <div key={i}>
                <div className="bg-transparent m-3 pb-12 my-10 rounded-3xl">
                  <Image
                    src={service.imgSrc}
                    alt={service.heading}
                    width={636}
                    height={420}
                    className="rounded-2xl"
                  />
                  <div className="w-345">
                    <h4 className="sm:text-4xl font-bold sm:pt-6 text-center sm:text-start mt-10 text-white">
                      {service.heading}
                    </h4>
                    <p className="text-white text-opacity-80 mt-4 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
