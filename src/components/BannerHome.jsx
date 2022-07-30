import React from "react";
import { MdOutlinePets } from 'react-icons/md';
import ButtonBlue from "./buttons/ButtonBlue";
import { Link } from "react-router-dom";

const BannerHome = ({ text }) => {
  return (

    <div className="w-screen h-screen max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 bg-cover bg-center bg-hero-home"></div>
            <div className="relative" id="relative">
                <header>
                    <div className="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-white bg-opacity-30">
                        <div className="flex items-center space-x-2 gap-2">
                            <button className="text-white text-4xl">
                                <MdOutlinePets />
                            </button>
                            <p className="text-white font-bold text-2xl flex items-center">Pets System</p>
                        </div>
                    <nav className="flex items-center space-x-1 text-sm gap-4 font-medium text-gray-800">
                        <Link to="/iniciar-sesion">
                            <ButtonBlue text="Ingresar"/>
                        </Link>
                        
                        <ButtonBlue text="Registro"/>
                    </nav>
                    </div>
                <div className="relative">
                    <div className="px-2 mx-2 py-2 sm:mx-auto my-auto max-w-7xl md:max-h-2xl md:py-6 text-center mt-32 ">
                        <h1 className="text-5xl text-sky-600 md:text-7xl font-bold">
                            PETS SYSTEM
                        </h1>
                        <p className="text-xl text-sky-600 font-bold pt-2">Software de Historia Clinica</p>
                </div>
            </div>
                </header>
        </div>
    </div>
  );
};

export default BannerHome;
