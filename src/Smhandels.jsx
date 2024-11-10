import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Smhandels() {
  return (
    <div className="flex gap-5 mt-10">
      <a target="" href="https://www.linkedin.com/company/kabs-digital/">
        <FaLinkedin size="2.5em" className="text-white cursor-pointer" />
      </a>
      <a target="" href="https://www.instagram.com/kabsdigital/">
        <FaSquareInstagram
          size="2.5em"
          className="text-white cursor-pointer"
        />
      </a>
      <a target="" href="https://www.youtube.com/@KabsDigital/">
        <FaYoutube size="2.5em" className="text-white cursor-pointer" />
      </a>
      <a target="" href="https://www.facebook.com/kabsdigital/">
        <FaSquareFacebook
          size="2.5em"
          className="text-white cursor-pointer"
        />
      </a>
      <a target="" href="https://x.com/KabsDigital">
        <FaSquareXTwitter
          size="2.5em"
          className="text-white cursor-pointer"
        />
      </a>
    </div>
  );
}

export default Smhandels;
