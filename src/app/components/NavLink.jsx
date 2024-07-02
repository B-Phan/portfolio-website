import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
    return (
        <ScrollLink
            activeClass="active" // Optional: Add an 'active' class when link is scrolled to
            to={href}
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500} // Duration of the scroll animation
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
        >
            {title}
        </ScrollLink>
    );
};

export default NavLink;



