import { Link } from "react-router-dom";

const newsTitle = "Want Us To Email You About Special Offers And Updates?";
const siteTitle = "Site Map";
const useTitle = "Useful Links";
const socialTitle = "Social Contact";
const supportTitle = "Our Support";

const siteList = [
  {
    text: "Documentation",
    link: "#",
  },
  {
    text: "Feedback",
    link: "#",
  },
  {
    text: "Plugins",
    link: "#",
  },
];

const useList = [
  {
    text: "About Us",
    link: "#",
  },
  {
    text: "Terms & Conditions",
    link: "#",
  },
  {
    text: "Contact Us",
    link: "#",
  },
];

const socialList = [
  {
    text: "Facebook",
    link: "#",
  },
  {
    text: "Twitter",
    link: "#",
  },
  {
    text: "Instagram",
    link: "#",
  },
];

const supportList = [
  {
    text: "Help Center",
    link: "#",
  },
  {
    text: "Contact Support",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="news-letter mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-100">
              {newsTitle}
            </h3>
          </div>
          <div className="flex justify-center">
            <form action="/" className="flex max-w-md w-full space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer Sections */}
        <footer>
          <div className="footer-top mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Site Map */}
              <div className="footer-item">
                <h4 className="text-lg font-semibold mb-4 text-gray-200">
                  {siteTitle}
                </h4>
                <ul>
                  {siteList.map((val, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={val.link}
                        className="text-gray-400 hover:text-green-500 transition duration-200"
                      >
                        {val.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div className="footer-item">
                <h4 className="text-lg font-semibold mb-4 text-gray-200">
                  {useTitle}
                </h4>
                <ul>
                  {useList.map((val, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={val.link}
                        className="text-gray-400 hover:text-green-500 transition duration-200"
                      >
                        {val.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="footer-item">
                <h4 className="text-lg font-semibold mb-4 text-gray-200">
                  {socialTitle}
                </h4>
                <ul>
                  {socialList.map((val, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={val.link}
                        className="text-gray-200 hover:text-green-500 transition duration-200"
                      >
                        {val.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div className="footer-item">
                <h4 className="text-lg font-semibold mb-4 text-gray-200">
                  {supportTitle}
                </h4>
                <ul>
                  {supportList.map((val, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={val.link}
                        className="text-gray-400 hover:text-green-500 transition duration-200"
                      >
                        {val.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom border-t border-gray-700 pt-6">
            <div className="container mx-auto text-center">
              <p className="text-sm text-gray-400">
                &copy; 2022{" "}
                <Link
                  to="/"
                  className="text-green-500 hover:text-green-600 transition duration-300"
                >
                  Edukon
                </Link>{" "}
                Designed by{" "}
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-500 hover:text-green-600 transition duration-300"
                >
                  Factor GH
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
