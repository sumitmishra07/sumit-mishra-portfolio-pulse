import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1TN3ALUDhPsfmsrw_ggikRQHFaUVOIxjP/view?usp=sharing', '_blank');
  };

  const openYouTube = () => {
    window.open('http://www.youtube.com/@SumitMishra77', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Much Darker Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/90 via-slate-950/70 to-indigo-950/95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/40 to-slate-950/70"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-700/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-indigo-800/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 animate-fade-in tracking-tight leading-tight" 
              style={{ fontFamily: 'Moderne Sans, sans-serif', letterSpacing: '0.1em' }}>
            SUMIT MISHRA
          </h1>
          
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200 mb-6 sm:mb-8 font-medium animate-fade-in delay-200 px-2"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Front-End Developer | Digital Marketer | Tech Creator | GATE CS 2025 Qualified
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto animate-fade-in delay-300 leading-relaxed px-2"
             style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            "Building user-first platforms and scaling them with content, code, and creativity."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 animate-fade-in delay-500 px-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden border border-blue-600/30 hover:border-blue-400/50 rounded-lg w-full sm:w-auto"
            >
              <span className="relative z-10">HIRE ME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button 
              onClick={openResume}
              className="group relative border-2 border-blue-400/60 hover:border-blue-300/80 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 font-bold text-base sm:text-lg transition-all duration-500 hover:bg-blue-900/40 backdrop-blur-sm overflow-hidden rounded-lg w-full sm:w-auto"
            >
              <span className="relative z-10">VIEW RESUME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            
            <button 
              onClick={openYouTube}
              className="group relative bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 overflow-hidden border border-blue-600/30 hover:border-blue-400/50 rounded-lg w-full sm:w-auto"
            >
              <span className="relative z-10">CHECK MY YOUTUBE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-blue-300/60 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-blue-300/80 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
