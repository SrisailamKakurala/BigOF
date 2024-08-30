import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Testimonials = ({testFrom}) => {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        const testimonialsContainer = testimonialsRef.current;

        // GSAP animation for infinite scrolling
        gsap.to(testimonialsContainer, {
            xPercent: -100,
            ease: "none",
            duration: 20,
            repeat: 100,
        });
    }, []);

    return (
        <section className="text-gray-600 body-font py-20">
            <div className="flex flex-col text-center w-full mb-3">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">BIGOF</h2>
                <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">Testimonials from {testFrom}</h1>
            </div>
            <div className="container px-0 py-24 mx-auto overflow-hidden">
                <div className="flex flex-nowrap" ref={testimonialsRef}>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-500">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/300x300"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                            <p className="text-gray-500">UI Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/305x305"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                            <p className="text-gray-500">CTO</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JANE DOE</h2>
                            <p className="text-gray-500">Product Manager</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/300x300"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JOHN SMITH</h2>
                            <p className="text-gray-500">Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JANE DOE</h2>
                            <p className="text-gray-500">Product Manager</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/300x300"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JOHN SMITH</h2>
                            <p className="text-gray-500">Developer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JANE DOE</h2>
                            <p className="text-gray-500">Product Manager</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full p-4 flex-shrink-0">
                        <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/300x300"
                            />
                            <p className="leading-relaxed">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JOHN SMITH</h2>
                            <p className="text-gray-500">Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
