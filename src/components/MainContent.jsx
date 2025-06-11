import React from 'react';
import { Sparkles, Zap, Target } from 'lucide-react';

const MainContent = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto text-blue-600 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Batier de l'avenier vesualiser
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}aujourd'hui
            </span>
          </h1>
        </div>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
         Notre langage visuel est une langue universelle qui traduit la vision de 
         l’architecte en une réalité compréhensible pour tous. Nous vous permettons de voir des détails invisibles
         à l’œil nu et d’explorer des formes innovantes avant même le début de la construction. Notre objectif est
         de repousser les limites de l’imagination et de transformer des concepts audacieux en réalités tangibles. 
         Nous renforçons ainsi la communication entre l’architecte, le client et les intervenants, en faisant de la représentation
          visuelle un outil plus puissant que des milliers de dessins
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center 
                          mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Réalisme 3D & Expériences Immersives</h3>
            <p className="text-gray-600 leading-relaxed">
              Nous donnons vie à vos projets architecturaux
              Images, vidéos 3D et visites virtuelles immersives (VR) 
              pour une visualisation complète, comme si vous y étiez. 
              Idéal pour convaincre vos clients et investisseurs
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center 
                          mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Conception Sur Mesure</h3>
            <p className="text-gray-600 leading-relaxed">
              Des rendus pensés pour répondre à vos objectifs
              Nous adaptons chaque visualisation à vos attentes : 
              style architectural, aménagement paysager, fonctionnalités, 
              et plus encore. Vous obtenez un résultat unique, fidèle à votre vision
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center 
                          mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expérience Fluide & Interactive</h3>
            <p className="text-gray-600 leading-relaxed">
              Un processus clair, rapide et collaboratif
              Interface intuitive, échanges simplifiés, suivis réguliers et rendus interactifs.
              Notre équipe reste à vos côtés à chaque étape, jusqu’à la livraison finale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;