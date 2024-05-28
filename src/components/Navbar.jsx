import logo from "../assets/moritlogo.png"; // Import the logo image

export default function Navbar() {
    return (
      <nav className="bg-blue-50 p-4 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              {/* Replace the placeholder image with the imported logo */}
              <img src={logo} alt="Logo" className="h-10" />
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-blue-700 hover:text-blue-900">Accueil</a>
              <div className="relative group">
                <button className="text-black hover:text-zinc-700 flex items-center">
                  Nos Solutions
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block z-50 bg-white shadow-lg mt-2 py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100">Solution 1</a>
                  <a href="#" className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100">Solution 2</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-black hover:text-zinc-700 flex items-center">
                  Matériel point de vente
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block bg-white z-50 shadow-lg mt-2 py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100">Option 1</a>
                  <a href="#" className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100">Option 2</a>
                </div>
              </div>
              <a href="#" className="text-black hover:text-zinc-700">Infogérance</a>
              <div className="relative group">
                <button className="text-black hover:text-zinc-700 flex items-center">
                  Ressources
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block z-50 bg-white shadow-lg mt-2 py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100">Resource 1</a>
                  <a href="#" className="block px-4 py-2 text-zinc-800 hover:bg-zinc-100">Resource 2</a>
                </div>
              </div>
            </div>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">DEMANDER UN DEVIS</a>
            <button className="md:hidden text-black">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </nav>
    )
}
