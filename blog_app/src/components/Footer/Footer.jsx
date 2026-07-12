import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & About */}
          <div>
            <Logo width="90px" />
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Share your ideas, stories, and experiences with the world.
              Built with ❤️ using React and Appwrite.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-posts"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/add-post"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Write Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="hover:text-blue-400 transition duration-300">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition duration-300">Contact</Link>
              </li>
              <li><Link to="/faq" className="hover:text-blue-400 transition duration-300">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BlogSpace. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to="https://github.com/Surya-03461/Blogs-APP"
              className="hover:text-blue-400 transition duration-300"
            >
              GitHub
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;