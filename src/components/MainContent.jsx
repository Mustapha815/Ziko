import React from 'react';
import { Sparkles, Zap, Target } from 'lucide-react';

const MainContent = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto text-blue-600 mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionize Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Productivity
            </span>
          </h1>
        </div>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          This app helps users manage their tasks efficiently with AI-powered suggestions. 
          Experience seamless workflow optimization, intelligent task prioritization, and 
          personalized productivity insights that adapt to your unique working style.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center 
                          mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered</h3>
            <p className="text-gray-600 leading-relaxed">
              Smart algorithms analyze your patterns and suggest optimal task scheduling
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center 
                          mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Target className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Goal-Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Stay aligned with your objectives through intelligent priority management
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                        transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center 
                          mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intuitive</h3>
            <p className="text-gray-600 leading-relaxed">
              Beautiful interface that adapts to your workflow and preferences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;