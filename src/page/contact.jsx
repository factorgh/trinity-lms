import { Fragment } from "react";
import Footer2 from "../component/layout/footer-2";
import Header from "../component/layout/header";
import GoogleMap from "../component/sidebar/googlemap";

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
  "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
  {
    imgUrl: "assets/images/icon/01.png",
    imgAlt: "contact icon",
    title: " No.5 Spintex RoadNext to Cassa",
    desc: "Trassaco GL-155-6183 Accra, Ghana",
  },

  {
    imgUrl: "assets/images/icon/02.png",
    imgAlt: "contact icon",
    title: "Phone number",
    desc: "+233 20 957 4338,+233 24 397 3435",
  },
  {
    imgUrl: "assets/images/icon/03.png",
    imgAlt: "contact icon",
    title: "Send email",
    desc: "info@creationconsult.com",
  },
];

const ContactPage = () => {
  return (
    <Fragment>
      <Header />
      <div className="banner-section style"></div>

      {/* Map and Contact Info Section */}
      <div className="map-address-section py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="section-header text-center mb-12">
            <span className="text-lg font-semibold text-green-500">
              {subTitle}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
              {title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-1/3 w-full px-4 mb-8 lg:mb-0">
              <div className="space-y-8">
                {contactList.map((val, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <img
                      src={val.imgUrl}
                      alt={val.imgAlt}
                      className="w-8 h-8"
                    />
                    <div>
                      <h6 className="text-lg font-semibold text-gray-800">
                        {val.title}
                      </h6>
                      <p className="text-gray-600">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 w-full px-4">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-section py-16">
        <div className="container mx-auto">
          <div className="section-header text-center mb-12">
            <span className="text-lg font-semibold text-green-500">
              {conSubTitle}
            </span>
            <h2 className="text-3xl font-extrabold text-gray-800 mt-2">
              {conTitle}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-8">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your mobile number"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Enter your message here"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer2 />
    </Fragment>
  );
};

export default ContactPage;
