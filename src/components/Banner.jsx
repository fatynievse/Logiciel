import { FaFacebook, FaYoutube, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; // Import the icons
import work from '../assets/work.jpg';
export default function Banner() {
    return (
        <div className="relative bg-light-blue-100 dark:bg-zinc-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-500 opacity-50 animate-pulse"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
            <div className="flex flex-col items-start space-y-4 md:space-y-6">
              <div className="flex space-x-2">
                <a href="#" className="bg-red-500 text-white px-2 py-1 rounded-md">Dyna Info</a>
              </div>
              <h1 className="text-6xl md:text-5xl font-bold text-blue-900 dark:text-white">Partenaire de votre transformation digitale</h1>
              <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-red-400 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-blue-500"></span>
<span class="relative text-black group-hover:text-white">Contactez Nous</span>
</a>
            </div>
            <div className="mt-6 md:mt-0">
              <img src={work}alt="Team working" className="rounded-full w-{500px} h-96 object-cover" />
              
            </div>
          </div>
          
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-2">
            {/* Replace the placeholder images with social media icons */}
            <a href="#" className="block bg-blue-700 text-white p-2 rounded-full"><FaLinkedin /></a>
            <a href="#" className="block bg-blue-600 text-white p-2 rounded-full"><FaFacebook /></a>
            <a href="#" className="block bg-red-600 text-white p-2 rounded-full"><FaYoutube /></a>
            <a href="#" className="block bg-green-500 text-white p-2 rounded-full"><FaWhatsapp /></a>
            
          </div>
          {/* Moved the style inside the component */}
          <style>
            {`
              @keyframes pulse {
                0%, 100% {
                  opacity: 0.5;
                }
                50% {
                  opacity: 1;
                }
              }
              .animate-pulse {
                animation: pulse 3s infinite;
              }
            `}
          </style>
        </div>
    );
}
