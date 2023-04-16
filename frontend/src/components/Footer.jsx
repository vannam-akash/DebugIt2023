import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-center text-white mt-5">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"><FaFacebookF size={20} /></Link>
          <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"><FaTwitter size={20} /></Link>
          <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"><FaGoogle size={20} /></Link>
          <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"><FaInstagram size={20} /></Link>
          <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"><FaLinkedinIn size={20} /></Link>
          <Link to="/" className="btn btn-outline-light btn-floating m-1" role="button"><FaGithub size={20} /></Link>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Akash Solutions Pvt. Ltd.
      </div>
    </footer>
  );
}

export default Footer;