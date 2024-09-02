import React from 'react'

const Testimonial = ({img,content,fullname,location}) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-[90%] ml-5 flex-shrink-0 p-4 bg-green-500 rounded-lg">
                        <div className="h-full text-center p-6">
                            <img
                                alt="testimonial"
                                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src={`${img}`}
                            />
                            <p className="leading-relaxed text-white">
                                {content}
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm uppercase">{fullname}</h2>
                            <p className="text-gray-200">{location}</p>
                        </div>
                    </div>
  )
}

export default Testimonial