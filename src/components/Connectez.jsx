/* eslint-disable react/no-unescaped-entities */
import Images from "../assets/Subnav.jpg";
import { FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
export default function Connectez() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src={Images}
                  className="absolute inset-0 h-full w-full object-cover rounded-md " // Added filter class for blur effect
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Connectez vous à votre Espace Moritsoft
                </h2>

                <p className="mt-4 pt-8 pb-8 text-gray-600">
                  Nouvel espace client conçu spécialement pour vous aider à
                  visualiser les différentes informations relatives à vos
                  solutions Atlas.
                </p>

                <a
                  href="#_"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                  <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <Link to="ContactUs">
                    <span className="relative w-full text-left text-black transition-colors duration-300  ease-in-out group-hover:text-white">
                      Button Text
                    </span>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* / */}

        <>
          <div className="bg-blue-900 text-white p-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold">
                  VOUS SOUHAITEZ EN SAVOIR PLUS ?
                </h2>
                <p className="mt-2 lg:mt-4">
                  Prenez contact avec notre conseiller commercial pour une
                  démonstration gratuite
                </p>
              </div>
              <button className="mt-4 lg:mt-0 bg-red-500 text-white py-2 px-4 rounded-lg">
                CONTACTEZ-NOUS
              </button>
            </div>
          </div>
          <div className="bg-blue-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center mb-8">
                <FaChartBar className="mr-4 text-blue-900" size={50} />{" "}
                {/* Replaced the image with an icon */}
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    NOS CHIFFRES CLÉS EN 2022
                  </h3>
                  <p className="text-blue-700">NOS ACCOMPLISSEMENTS</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <CountUp
                    end={20}
                    duration={5}
                    className="text-3xl font-bold text-blue-900"
                  />{" "}
                  <p className="text-blue-700">Secteurs d'activité</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <CountUp
                    end={80}
                    duration={5}
                    className="text-3xl font-bold text-blue-900"
                  />
                  <p className="text-blue-700">% de satisfaction</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <CountUp
                    end={2500}
                    duration={5}
                    className="text-3xl font-bold text-blue-900"
                  />
                  <p className="text-blue-700">Contrats de maintenance</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <CountUp
                    end={4500}
                    duration={5}
                    className="text-3xl font-bold text-blue-900"
                  />
                  <p className="text-blue-700">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </>
      </section>
      {/* 
ss */}

      <div className="flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-blue-800 ">
          Témoignages
        </h1>
        <p className="text-sm md:text-lg text-blue-600 mt-2">
          Découvrez ce que pensent nos clients de nos prestations & de notre
          savoir-faire
        </p>
      </div>
      {/* 
< */}
    </>
  );
}
