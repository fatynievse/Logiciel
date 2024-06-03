import R1 from '../assets/Untitled1.jpg';
import R2 from '../assets/Untitled3.jpg';
import R4 from '../assets/Untitled4.png';
import R6 from '../assets/librarie.jpeg';
import R7 from '../assets/work.jpg';
import R5 from '../assets/Untitled5.png';


import { FaCheckCircle } from 'react-icons/fa';
export default function Specificites2() {
    const iconStyles = { fontSize: '1.5rem', color: '#2b10b1', borderRadius: '9999px' };
    return (
        <div className="container mx-auto p-4">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white  rounded-lg shadow-lg p-4">
            <img src={R4} alt="Pack spécial PARA" className="rounded-t-lg w-full" />
            <h3 className="text-xl font-semibold mt-4">Pack spécial PARA</h3>
            <ul className="mt-2 space-y-2">
      <li className="flex items-start">
        <FaCheckCircle className="mr-2 " style={iconStyles} />
        <span>Gestion commerciale complète</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion de compte avec fidélité et promotions</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion des commandes, livraisons et expéditions</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Livraison rapide pour éviter erreurs et délais supplémentaires</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Interface de caisse française et arabe</span>
      </li>
    </ul>
          </div>
          <div className="bg-white  rounded-lg shadow-lg p-4">
            <img src={R6} alt="Pack spécial Librairie" className="rounded-t-lg w-full" />
            <h3 className="text-xl font-semibold mt-4">Pack spécial Librairie</h3>
            <ul className="mt-2 space-y-2">
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion de la rentrée scolaire</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion des Stocks par code barre et code supplémentaire</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion des achats, des commandes, des livraisons, et des expéditions</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Localisation des articles par rayon, ligne, caisse, et étagère</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Interface de caisse française et arabe</span>
      </li>
    </ul>
          </div>
          <div className="bg-white  rounded-lg shadow-lg p-4">
            <img src={R1} alt="Pack spécial Boutique" className="rounded-t-lg w-full" />
            <h3 className="text-xl font-semibold mt-4">Pack spécial Boutique</h3>
            <ul className="mt-2 space-y-2">
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Suivi des ventes rapides par scan de code à barres</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion des prix par code barre, taille, couleur, et saison</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Multi dépôt, multi magasins</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Gestion des paiements par carte, chèque, et espèces</span>
      </li>
      <li className="flex items-start">
        <FaCheckCircle className="mr-2" style={iconStyles} />
        <span>Interface de caisse française et arabe</span>
      </li>
    </ul>
          </div>
          <div className="bg-white  rounded-lg shadow-lg p-4">
            <img src={R2} alt="Pack spécial Restaurant, Snack & Boulangerie" className="rounded-t-lg w-full " />
            <h3 className="text-xl font-semibold mt-4">Pack spécial Restaurant, Snack & Boulangerie</h3>
            <ul className="mt-2 space-y-2">
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Suivi des ventes Textiles & des services avec Clé USB</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Gestion des stocks, des services avec Clé USB</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Gestion des achats, des commandes, des livraisons, et des expéditions</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Gestion des articles par rayon, ligne, caisse, et étagère</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Interface de caisse française et arabe</span>
          </li>
        </ul>
      </div>
      <div className="bg-white  rounded-lg shadow-lg p-4">
        <img src={R7} alt="Fidupack - Spécial Fiduciaire" className="rounded-t-lg w-full" />
        <h3 className="text-xl font-semibold mt-4">Fidupack - Spécial Fiduciaire</h3>
        <ul className="mt-2 space-y-2">
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Logiciel pour les normes fiscales</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Edition des journaux comptables</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Traitement complet de la paie</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Pack EDI intégré</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Gestion des alertes de factures et de TVA</span>
          </li>
        </ul>
      </div>
      <div className="bg-white  rounded-lg shadow-lg p-4">
        <img src={R5} alt="Pack EDI - Télédeclarations" className="rounded-t-lg w-full" />
        <h3 className="text-xl font-semibold mt-4">Pack EDI - Télédeclarations</h3>
        <ul className="mt-2 space-y-2">
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Atlas EDI - TVA</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Atlas EDI - Liasse</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Atlas EDI - IR</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Une Demi-Journée de formation offerte</span>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="mr-2" style={iconStyles} />
            <span>Assistance technique est assurée</span>
          </li>
        </ul>
      </div>
      </div>   
       </div>
  );
}

  