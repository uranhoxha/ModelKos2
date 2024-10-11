import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

function ImageHover(props) {
  return (
    <div className="image-hover">
      <h3>{props.name}</h3>
      <div className="image-hover-info">
        <p>Height: 5'10"</p>
        <p>Bust 34"A</p>
        <p>Waist 24"</p>
        <p>Hips 34"</p>
        <p>Dress 2 US</p>
        <p>Shoe 8 US</p>
        <p>Hair Dark Blonde</p>
        <p>Eyes Brown</p>
      </div>
      <div className="image-hover-socials">
        <FaFacebookF />
        <FaInstagram />
        <FaTiktok />
        <FaTwitter />
      </div>
    </div>
  );
}

export default ImageHover;
