import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/landinPageComponents/Navbar_landingpage";
import Logo from "../assets/images/logo.png";
import Testimonials from "../Components/landinPageComponents/Testimonials";
import Footer from "../Components/landinPageComponents/Footer";
import DemoSection from "../Components/landinPageComponents/DemoSection";
import ContactUs from "../Components/landinPageComponents/ContactUs";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../Contexts/AuthContext';
import Cookies from 'js-cookie';
import Loader from '../utils/Loader.jsx'
import axios from 'axios'

const LandingPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // Loading state to prevent rendering until auth check is done

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = Cookies.get('accessToken');
      const refreshToken = Cookies.get('refreshToken');
      const user = JSON.stringify(localStorage.getItem('userData'))?.user;
      console.log(user)
      if (accessToken) {
        setIsAuthenticated(true);
      }

      if (!accessToken && refreshToken) {
        // refresh the access token if refresh token alone is there
        try {
          const response = JSON.stringify(localStorage.getItem('userData')).user == 'farmer' ? 
          await axios.post('http://localhost:8000/api/v1/farmers/refresh-token', refreshToken) : 
          await axios.post('http://localhost:8000/api/v1/buyers/refresh-token', refreshToken);
          if (response.data) {
            console.log(response.data);

            // Set the tokens in cookies
            const { accessToken, refreshToken } = response.data.data;
            Cookies.set('accessToken', accessToken, { expires: 1 / 24 });
            Cookies.set('refreshToken', refreshToken, { expires: 7 });

            console.log('accessToken: ' + accessToken);
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    checkAuth()
    setLoading(false); // Set loading to false once authentication check is done
  }, [setIsAuthenticated]);

  if (loading) {
    return <Loader />; // Show loader while checking authentication status
  }

  return (
    <div className="">
      <Navbar />

      {/* hero section */}
      <section className="text-gray-600 body-font lg:px-20 md:px-8 px-5">
        <div className="container mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Empowering Farmers,
              <br className="hidden lg:inline-block" />
              Strengthening Communities
            </h1>
            <p className="mb-8 leading-relaxed">
              <span className="text-green-600">Kisaan Sathi</span> is your trusted partner in sustainable farming. From providing expert guidance on crop selection and weather forecasting to connecting you with the best market prices, we're here to support your farming journey every step of the way.
            </p>
            <div className="flex justify-center gap-8">
              <Link
                to={'/register'}
                className="px-6 shadow-xl py-2 bg-green-600 hover:bg-green-500 duration-200 rounded-md text-white text-lg font-semibold"
              >
                Join Kisaan Sathi Today
                <i className="ml-2 fa-solid fa-arrow-right-long fa-lg"></i>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Logo} />
          </div>
        </div>
      </section>



      <div className="h-2 w-full bg-slate-200"></div>

      {/* featurs */}
      <section id="features" className="text-gray-600 body-font -mt-5 lg:px-20 md:px-8 px-5">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
              KISAAN SATHI
            </h2>
            <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">
              Features
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L12 22M2 12L22 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Connect with Communities
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Kisaan Sathi connects you with farming communities across India, providing valuable insights and support from fellow farmers.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L12 22M2 12L22 12"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Better MSP Prices
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Access fair Minimum Support Prices (MSPs) through our platform, ensuring that you get the best value for your crops.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L12 22M2 12L22 12"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Explore New Opportunities
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Discover new markets and opportunities for your produce, enhancing your business potential and growth.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits */}
      <section className="text-gray-600 body-font -mt-20 lg:px-20 md:px-8 px-5">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">
              KISAAN SATHI
            </h2>
            <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">
              Benefits
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L12 22M2 12L22 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    For Farmers: Fair Prices
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Kisaan Sathi ensures farmers get fair Minimum Support Prices (MSPs) for their crops, helping them to achieve better income and reduce financial stress.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L12 22M2 12L22 12"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    For Buyers: Quality Produce
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Buyers can access high-quality, fresh produce directly from farmers, ensuring better quality and fair prices for their purchase.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L12 22M2 12L22 12"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    For Both: Efficient Transactions
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Our platform streamlines transactions, making it easy for both farmers and buyers to connect, negotiate, and finalize deals efficiently.
                  </p>
                  <a className="mt-3 text-green-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="h-2 w-full bg-slate-200"></div>

      {/* Testimonials from Buyers */}
      <Testimonials testFrom="Buyer" />

      <div className="h-2 w-full bg-slate-200"></div>

      {/* Testimonials from Farmers */}
      <Testimonials testFrom="Farmer" />

      <div className="h-2 w-full bg-slate-200"></div>

      {/* Select Demo language */}
      <DemoSection />

      <div className="h-2 w-full bg-slate-200"></div>

      {/* contact us */}
      <ContactUs />

      <div className="h-2 w-full bg-slate-200"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
