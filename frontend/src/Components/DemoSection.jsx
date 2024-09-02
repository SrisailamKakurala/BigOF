import React, { useState } from "react";

function DemoSection() {
  const [language, setLanguage] = useState("English")  
  return (
    <div id="demo" className="flex flex-col items-center bg-gray-200 p-4 sm:p-8 rounded-md">
      <h2 className="text-black text-3xl sm:text-2xl mb-4 font-semibold">DEMO</h2>
      
      <div className="w-full sm:w-auto mb-8  md:flex md:gap-5 flex-col items-center mt-12">
        
        <div className="relative mt-2 w-full sm:w-auto mb-2">
          <select
            className="block appearance-none w-full sm:w-auto bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e)=>{setLanguage(e.target.value)}}
          >
            <option value="default">Select Demo Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        {/* <button className="bg-blue-700 text-white py-2 px-4 rounded-md w-full sm:w-auto">
          Get Demo
        </button> */}
      </div>
      
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 mb-16">
          {(language=="English" || language=="default") && 
          <iframe
          className="w-full h-full rounded-md shadow-md"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>  
        }
        {language=="Hindi" && 
          <iframe className="w-full h-full rounded-md shadow-md" src="https://www.youtube.com/embed/jMfvlh0tjyo?si=-ng0sflYJGr4n3sb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        }
        {language=="Spanish" && 
          <iframe className="w-full h-full rounded-md shadow-md" src="https://www.youtube.com/embed/kJQP7kiw5Fk?si=96DJdbPFyj7uxDj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        }
        {language=="French" && 
          <iframe className="w-full h-full rounded-md shadow-md" src="https://www.youtube.com/embed/K5KAc5CoCuk?si=2ZYuDdX50-C4SEMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        }
        {language=="German" && 
          <iframe className="w-full h-full rounded-md shadow-md" src="https://www.youtube.com/embed/HKxALQvzpF0?si=QeaT8mRpPExC3rGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
        }
        
      </div>
    </div>
  );
}

export default DemoSection;
