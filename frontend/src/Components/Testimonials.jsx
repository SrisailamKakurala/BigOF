import React, { useRef } from 'react';
import '../index.css'

const Testimonials = ({ testFrom }) => {
    const testimonialsRef = useRef(null);

    return (
        <section className="text-gray-600 body-font py-20">
            <div className="flex flex-col text-center w-full mb-3">
                <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">BIGOF</h2>
                <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">Testimonials from {testFrom}</h1>
            </div>
            <div className="container px-0 py-24 mx-auto overflow-hidden">
                <div className="flex gap-10 overflow-x-scroll scrollbar-hide" ref={testimonialsRef}>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] ml-5 flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-[90%] flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src="https://dummyimage.com/302x302"
                            />
                            <p className="leading-relaxed text-white">
                                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                            <p className="text-gray-200">Senior Product Designer</p>
                        </div>
                    </div>
                    {/* Repeat similar blocks for other testimonials */}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
