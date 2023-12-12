import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail, IoCallSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
    const menus = [
        { menuname: 'services', pathname: 'services' },
        { menuname: 'about', pathname: 'about' },
        { menuname: 'works', pathname: 'works' },
        { menuname: 'contact', pathname: 'contact' },
      ];
    return (
        <div className="flex justify-around text-[16] fixed top-0 z-10 bg-white w-full">
            <div id="right-side" className="flex-1 bg-[#12141c] p-6">
                <ul className="flex gap-10 text-white justify-center">
                    {menus.map(menu => (
                        <li key={menu.menuname}>
 {/* <a className="hover:text-[#e51681] hover:font-semibold" href={menu.pathname}>{menu.menuname.toUpperCase()}</a> */}
                            <Link
                                className="hover:text-[#e51681] hover:font-semibold"
                                to={menu.pathname}
                                spy={true}
                                smooth={true}
                                offset={-70} // Adjust offset based on your layout
                                duration={500}
                                style={{ cursor: 'pointer' }}
                            >
                                {menu.menuname.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-evenly gap-4 flex-1 font-semibold">
                <div>
                    <a className="flex gap-2 items-center" href="mailto:developer.badrul@gmail.com">
                        <span><IoMail /></span>
                        <span className="hover:text-[#e51681]">developer.badrul@gmail.com</span>
                    </a>
                </div>
                <div className="border-r-2 border-l-2 border-gray-500 p-2">
                    <a className="flex gap-2 items-center" href="tel:+8801516781817">
                        <span><IoCallSharp /></span>
                        <span className="hover:text-[#e51681]">+88015 1678 1817</span>
                    </a>
                </div>
                <div className="flex gap-3">
                    <span>
                        <a className="hover:text-[#e51681]" href="https://www.facebook.com/dev.badrul" target="_blank">
                            <FaFacebookSquare />
                        </a>
                    </span>
                    <span>  <a className="hover:text-[#e51681]" href="https://www.linkedin.com/in/badrulalamhridoy" target="_blank">
                        <FaLinkedin />
                    </a></span>
                    <span>  <a className="hover:text-[#e51681]" href="https://github.com/developerbadrul" target="_blank">
                        <FaGithub />
                    </a></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;