"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'English Communication Trainer',
        name: 'Priya Sharma',
        imgSrc: '/images/wework/avatar0.png', // done
    },
    {
        profession: 'Career Counselor',
        name: 'Rohit Verma',
        imgSrc: '/images/wework/avatar.png', // done
    },
    {
        profession: 'Placement Coordinator',
        name: 'Sneha Patel',
        imgSrc: '/images/wework/avatar7.png', // done
    },
    {
        profession: 'Corporate Trainer',
        name: 'Ankit Tiwari',
        imgSrc: '/images/wework/avatar2.png', //. done
    },
    {
        profession: 'Soft Skills Expert',
        name: 'Neha Gupta',
        imgSrc: '/images/wework/avatar3.png', // done
    },
    {
        profession: 'Student Success Coach',
        name: 'Vikas Yadav',
        imgSrc: '/images/wework/avatar4.png', // done
    },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-wework py-32">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 '>

                    {/* ✅ Updated Section Heading */}
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
                            We specialize in multiple training verticals.
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
                            We specialize in multiple training verticals.
                        </h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
                            We specialize in multiple training verticals.
                        </h3>
                    </div>

                </div>

                {/* ✅ Unchanged UI – only content updated */}
                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl'>
                                <div className='relative'>
                                    <Image 
                                        src={items.imgSrc} 
                                        alt={items.name} 
                                        width={182} 
                                        height={182} 
                                        className="inline-block m-auto" 
                                    />
                                    <Image 
                                        src={'/images/wework/linkedin.svg'} 
                                        alt="linkedin icon" 
                                        width={120} 
                                        height={120} 
                                        className="absolute inline-block position-linkedin" 
                                    />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        );
    }
}
