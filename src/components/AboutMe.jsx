import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function AboutMe() {
    return (
        <div className=" h-screen md:w-2/3 m-auto flex items-center justify-center xxs:flex-col gap-10 px-4 xxs:w-full p-10 xxs:h-max sm:flex-col ">
            <div className="flex flex-col gap-6 w-1/2 xxs:w-3/4  xxs:gap-6 ">
                <h3 className="text-blue-700 text-3xl ">About me</h3>
                <p className="text-base">Hi there! My name is Matias Bustamante, I'm a frontend developer based in Argentina. My strongest skills are HTML, CSS and JavaScript. I'am constantly expanding my knowledge with new technologies and tools. Also I'm comfortable working whit frameworks like React</p>
            </div>
            <div className="flex flex-row gap-10 xxs:flex-col md:flex-row ">
                <div className="flex flex-col gap-6 w-1/2 xxs:w-full xxs:items-center xxs:gap-6 ">
                    <h3 className="text-xl font-medium">Education</h3>

                    <div className="flex flex-col gap-4 xxs:gap-8">

                        <div>
                            <div className="flex flex-row gap-1 items-center text-blue-400 text-lx">
                                <FontAwesomeIcon icon={faLandmark} className="" />
                                <h4 className="text-lg">Software Development</h4>
                            </div>
                            <span className="font-light pl-5 text-lg">Argentine National University</span>
                            <p className="font-extralight pl-5 text-base">Present</p>
                        </div>

                        <div>
                            <div className="flex flex-row gap-1 items-center text-blue-400 text-lx">
                                <FontAwesomeIcon icon={faLandmark} className="" />
                                <h4 className="text-xl">FullStack Development</h4>
                            </div>
                            <span className="font-light pl-5 text-lg">National Technological University</span>
                            <p className="font-extralight pl-5 text-base">August 2023 - Present</p>
                        </div>

                        <div>
                            <div className="flex flex-row gap-1 items-center text-blue-400 text-lx">
                                <FontAwesomeIcon icon={faLandmark} className="" />
                                <h4 className="text-lg">FullStack Development</h4>
                            </div>
                            <span className="font-light pl-5 text-lg">Henry Bootcamp</span>
                            <p className="font-extralight  pl-5 text-base">Junary 2023 - May 2023</p>
                        </div>
                    </div>


                </div>

                <div className="flex flex-col gap-4 w-1/2 xxs:w-full xxs:items-center">
                    <h3 className="text-xl font-medium">Tech stack</h3>
                    <div className="flex flex-row p-2 mb-10 items-center justify-center flex-wrap gap-4">

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center gap-2 ">
                            <img src="https://cdn-icons-png.flaticon.com/256/174/174854.png" alt="html_icon" className="w-full sm:w-2/4 md:w-2/4" />
                            <p className="font-base text-xl">HTML</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-center gap-2">
                            <img src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png" alt="css_icon" className="w-full sm:w-2/4 md:w-2/4" />
                            <p className="font-base text-xl">CSS</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript.icon" />
                            <p className="font-base text-xl">JavaScript</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react_icon" />
                            <p className="font-base text-xl">React</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="nodejs_icon" />
                            <p className="font-base text-xl">Node js</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://itproger.com/intensive/img/express.png" alt="express_icon" />
                            <p className="font-base text-xl">Express</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png" alt="mongoDb" />
                            <p className="font-base text-xl">MongoDB</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git_icon" />
                            <p className="font-base text-xl">Git</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4 rounded-full" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="github_icon" />
                            <p className="font-base text-xl">GitHub</p>
                        </div>

                        <div className="w-3/12 p-2 h-1/4  flex flex-col items-center justify-evenly gap-2">
                            <img  className="w-full sm:w-2/4 md:w-2/4" src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" alt="tailwind_icon" />
                            <p className="font-base text-xl">Tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
