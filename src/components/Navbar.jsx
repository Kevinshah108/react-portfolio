import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src="" alt=""/> */}
                <h1 className="mx-2 text-2xl">KS</h1>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/kevinshah108/"><FaLinkedin/></a>
                <a href="https://github.com/Kevinshah108"><FaGithub/></a>
                <a href="https://www.instagram.com/kevin_shah_108/"><FaInstagram/></a>
                <a href="https://x.com/Kevinshah_108"><FaSquareXTwitter/></a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar