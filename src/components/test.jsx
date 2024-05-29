export default function Widget() {
    return (
      <>
        <div className="bg-blue-900 text-white p-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold">VOUS SOUHAITEZ EN SAVOIR PLUS ?</h2>
              <p className="mt-2 lg:mt-4">Prenez contact avec notre conseiller commercial pour une démonstration gratuite</p>
            </div>
            <button className="mt-4 lg:mt-0 bg-red-500 text-white py-2 px-4 rounded-lg">CONTACTEZ-NOUS</button>
          </div>
        </div>
        <div className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center mb-8">
              <img src="https://placehold.co/50x50" alt="icon" className="mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-blue-900">NOS CHIFFRES CLÉS EN 2022</h3>
                <p className="text-blue-700">NOS ACCOMPLISSEMENTS</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-3xl font-bold text-blue-900">20</h4>
                <p className="text-blue-700">Secteurs d'activité</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-3xl font-bold text-blue-900">80</h4>
                <p className="text-blue-700">% de satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-3xl font-bold text-blue-900">2,500</h4>
                <p className="text-blue-700">Contrats de maintenance</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h4 className="text-3xl font-bold text-blue-900">4,500</h4>
                <p className="text-blue-700">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  