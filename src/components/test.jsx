import { FaCheck } from 'react-icons/fa';

export default function Widget() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-4">
                    <div className="rounded-t-lg">
                        <FaCheck className="text-green-500 text-4xl mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Pack spécial PARA</h3>
                    <ul className="mt-2 space-y-2">
                        <li className="flex items-start">
                            <FaCheck className="text-green-500 mr-2" />
                            <span>Gestion commerciale complète</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="text-green-500 mr-2" />
                            <span>Gestion de compte avec système de fidélité et de promotions</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="text-green-500 mr-2" />
                            <span>Gestion des commandes clients, des livraisons, et des expéditions</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="text-green-500 mr-2" />
                            <span>Livraison de commandes en stock pour éviter les erreurs et les délais supplémentaires</span>
                        </li>
                        <li className="flex items-start">
                            <FaCheck className="text-green-500 mr-2" />
                            <span>Interface de caisse française et arabe</span>
                        </li>
                    </ul>
                </div>
                {/* Repeat the above structure for other packs */}
            </div>
        </div>
    )
}
