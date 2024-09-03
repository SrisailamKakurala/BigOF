import React, { useRef, useState } from 'react';
import '/src/index.css';
import Testimonial from './Testimonial';

const Testimonials = ({ testFrom }) => {
    const testimonialsRef = useRef(null);

    const dummyTestimonials = [
        {
            img: 'https://images.pexels.com/photos/27605413/pexels-photo-27605413/free-photo-of-jaipur.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'Kisaan Sathi ने हमारे खेती के तरीके को पूरी तरह से बदल दिया है। समर्थन और बाजार की जानकारी अमूल्य है!',
            fullname: 'Ravi Kumar',
            designation: 'Farmer',
            location: 'Punjab'
        },
        {
            img: 'https://images.pexels.com/photos/27603168/pexels-photo-27603168/free-photo-of-fashion-eastern-dresses-by-dhanno.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'The platform has helped me find fresh produce directly from farmers. Highly recommended for quality!',
            fullname: 'Anita Sharma',
            designation: 'Buyer',
            location: 'Delhi'
        },
        {
            img: 'https://images.pexels.com/photos/14431137/pexels-photo-14431137.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'With Kisaan Sathi, I can now connect with buyers easily and get fair prices for my crops. Great service!',
            fullname: 'Suresh Yadav',
            designation: 'Farmer',
            location: 'Haryana'
        },
        {
            img: 'https://images.pexels.com/photos/20527526/pexels-photo-20527526/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            content: 'एक शानदार प्लेटफॉर्म जो गुणवत्ता और दक्षता सुनिश्चित करता है। मेरी खरीदारी का अनुभव सुचारू और भरोसेमंद रहा है।',
            fullname: 'Pooja Gupta',
            designation: 'Buyer', 
            location: 'Mumbai'
        },
        {
            img: 'https://images.pexels.com/photos/5933419/pexels-photo-5933419.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'The insights and support provided by Kisaan Sathi are top-notch. It has made a significant difference in my farming!',
            fullname: 'Vikram Singh',
            designation: 'Farmer',
            location: 'Rajasthan'
        },
        {
            img: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'Kisaan Sathi has made it easier for us to find buyers and sell our produce efficiently. Excellent service!',
            fullname: 'Meera Patel',
            designation: 'Farmer',
            location: 'Gujarat'
        },
        {
            img: 'https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'I have been using Kisaan Sathi for months, and it has been a game-changer for sourcing high-quality produce.',
            fullname: 'Rajesh Kumar',
            designation: 'Buyer',
            location: 'Kolkata'
        },
        {
            img: 'https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'The platform’s user-friendly interface and customer support have made my experience very smooth.',
            fullname: 'Sunita Devi',
            designation: 'Buyer',
            location: 'Uttar Pradesh'
        },
        {
            img: 'https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'Kisaan Sathi provides valuable resources and support for farmers. I highly recommend it for anyone in agriculture.',
            fullname: 'Arun Singh',
            designation: 'Farmer',
            location: 'Madhya Pradesh'
        },
        {
            img: 'https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'As a buyer, I find Kisaan Sathi very reliable for purchasing fresh and organic produce directly from farmers.',
            fullname: 'Nisha Rani',
            designation: 'Buyer',
            location: 'Bihar'
        },
        {
            img: 'https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'Kisaan Sathi’s platform is very effective for connecting with buyers. It has improved my farming business significantly.',
            fullname: 'Deepak Sharma',
            designation: 'Farmer',
            location: 'Jharkhand'
        },
        {
            img: 'https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'The customer service and support from Kisaan Sathi are exceptional. It’s a must-use for anyone in the farming industry.',
            fullname: 'Rekha Verma',
            designation: 'Buyer',
            location: 'Himachal Pradesh'
        },
        {
            img: 'https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'I am very satisfied with Kisaan Sathi’s services. The platform is user-friendly and very helpful for managing farm sales.',
            fullname: 'Kiran Patel',
            designation: 'Farmer',
            location: 'Assam'
        },
        {
            img: 'https://images.pexels.com/photos/9012345/pexels-photo-9012345.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'Kisaan Sathi is a fantastic resource for buyers looking to get fresh and quality produce from local farmers.',
            fullname: 'Rajveer Singh',
            designation: 'Buyer',
            location: 'Odisha'
        },
        {
            img: 'https://images.pexels.com/photos/1234568/pexels-photo-1234568.jpeg?auto=compress&cs=tinysrgb&w=600', 
            content: 'The platform has simplified the selling process for us. It’s a great tool for both farmers and buyers.',
            fullname: 'Jaya Devi',
            designation: 'Farmer',
            location: 'Kerala'
        }
    ];
    
    

    return (
        <section id='testimonials' className="text-gray-600 body-font py-20 px-20">
            <div className="flex flex-col text-center w-full mb-3">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">KISAAN SATHI</h2>
                <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">Testimonials from {testFrom}</h1>
            </div>
            <div className="container px-0 py-24 mx-auto overflow-hidden">
                <div className="flex gap-10 overflow-x-scroll scrollbar-hide" ref={testimonialsRef}>
                
                    {dummyTestimonials.filter((testimonial)=>testimonial.designation==testFrom)
                    .map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            img={testimonial.img}
                            content={testimonial.content}
                            fullname={testimonial.fullname}
                            location={testimonial.location}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
