import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
    const scrollTo = (element) => {
        scroll.scrollTo(element, {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

    const [contact, setContact] = useState(false);

    const handleClickContact = () => {
        // Cambia el estado al hacer clic
        setContact(!contact);
        setHomeclick(false);
        setAboutMeClick(false);
        setProjectsClick(false);
    };

    const [homeClick, setHomeclick] = useState(false);

    const handleClickHome = () => {
        // Cambia el estado al hacer clic
        setHomeclick(!homeClick);
        setContact(false);
        setAboutMeClick(false);
        setProjectsClick(false);
    };
    const [aboutMeClick, setAboutMeClick] = useState(false);

    const handleClickAboutMeClick = () => {
        // Cambia el estado al hacer clic
        setAboutMeClick(!aboutMeClick);
        setContact(false)
        setHomeclick(false)
        setProjectsClick(false)
    };

    const [projectsClick, setProjectsClick] = useState(false);

    const handleClickProjectsClick = () => {
        // Cambia el estado al hacer clic
        setProjectsClick(!projectsClick);
        setAboutMeClick(false);
        setContact(false)
        setHomeclick(false)
    };

    const [showMenu, setShowMenu] = useState(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <div className="w-full m-auto flex fixed xxs:bg-black xxs:pb-4 xxs:flex-row xxs:gap0">
            <FontAwesomeIcon icon={faBars} className='xxs:flex sm:hidden text-4xl xxs:mt-10 xxs:ml-10' onClick={handleShowMenu} />

            {
                showMenu && (
                    <div className="m-auto flex justify-center items-center xxs:gap-4 xxs:justify-normal xxs:h-auto lg:text-center lg:flex-row lg:gap-20 lg:h-20 sm:flex-row sm:h-20 xxs:flex-col xxs:item xxs:w-1/3 xxs:mt-10 ">
                        <Link
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}
                            onClick={handleClickHome}
                            className={`text-lg ${homeClick ? 'text-blue-600 border-b-2 border-blue-600' : 'text-white'} hover:text-blue-600 hover:cursor-pointer transition delay-100 duration-200 ease-in-out`}
                            activeClass="active"
                        >
                            Home
                        </Link>
                        <Link
                            to="aboutme"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={800}
                            onClick={handleClickAboutMeClick}
                            className={`text-lg ${aboutMeClick ? 'text-blue-600 border-b-2 border-blue-600' : 'text-white'} hover:text-blue-600 hover:cursor-pointer transition delay-100 duration-200 ease-in-out`}
                            activeClass="active"
                        >
                            About me
                        </Link>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-140}
                            duration={800}
                            onClick={handleClickProjectsClick}
                            className={`text-lg ${projectsClick ? 'text-blue-600 border-b-2 border-blue-600' : 'text-white'} hover:text-blue-600 hover:cursor-pointer transition delay-100 duration-200 ease-in-out`}
                            activeClass="active"
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={800}
                            onClick={handleClickContact}
                            className={`text-lg ${contact ? 'text-blue-600 border-b-2 border-blue-600' : 'text-white'} hover:text-blue-600 hover:cursor-pointer transition delay-100 duration-200 ease-in-out`}
                            activeClass="active"
                        >
                            Contact me!
                        </Link>
                    </div>
                )
            }



        </div>
    );
}
