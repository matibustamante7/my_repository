import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CVModal from "./ModalCv";
import { useState } from "react";
import imageMatiasBustamante from '../../public/matiasbustamante.png'

export default function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className=" 
        flex flex-row gap-4 items-center justify-between h-screen m-auto p-10 xxs:flex-col xxs:w-full xxs:justify-evenly sm:flex-row md:w-2/3">

            <div className="flex flex-col gap-4 items-start xxs:items-end sx:items-start md:items-start">

                <h3 className="text-2xl font-medium text-white">Hello, I'm Matias</h3>

                <h3 className="text-4xl font-bold text-blue-700 xxs:items-right">Frontend Developer</h3>

                <p className="font-light text-sm text-blu-800">That love create web apps</p>

                <button onClick={openModal}
                    className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 ">Resume <FontAwesomeIcon icon={faFile} /></button>
                <CVModal isOpen={isModalOpen} onRequestClose={closeModal} />
            </div>
            <div>
                <img className="border-4 border-blue-800 rounded-full" src={imageMatiasBustamante} alt="Matias Bustamante" />
            </div>
        </div>
    )
}