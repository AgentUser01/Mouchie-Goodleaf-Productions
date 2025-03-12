import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils/images';

const AboutPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mouchie GoodLeaf</h1>
              <p className="text-xl text-gray-300 mb-8">Professional DJ and country music enthusiast with a passion for creating unforgettable musical experiences.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img 
                src={getImageUrl('About_me.jpeg')} 
                alt="Mouchie GoodLeaf - Professional DJ" 
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DJ Bio Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="relative">
                <img 
                  src={getImageUrl('me-Stanley-Cup.jpeg')} 
                  alt="Mouchie with the Stanley Cup" 
                  className="rounded-xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-500 w-24 h-24 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-xl font-bold">25+</span>
                  <span className="text-sm ml-1">Years<br/>Experience</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-lg mb-4">
                Welcome to Mouchie GoodLeaf Productions! I've been deeply involved in the music industry for over 25 years, specializing in country music and delivering exceptional entertainment experiences across various venues and events.
              </p>
              <p className="text-lg mb-4">
                My journey in music has allowed me to meet and work with some of the biggest names in country music, creating connections that enhance the authenticity of every event I'm part of.
              </p>
              <p className="text-lg mb-6">
                Whether you're planning a wedding, corporate event, or private party, I bring professional equipment, an extensive music library, and the expertise to read any crowd and keep your guests entertained.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="px-6 py-3 bg-dark-50 rounded-lg">
                  <span className="text-primary-500 font-bold">Personalized Service</span>
                </div>
                <div className="px-6 py-3 bg-dark-50 rounded-lg">
                  <span className="text-primary-500 font-bold">Country Expertise</span>
                </div>
                <div className="px-6 py-3 bg-dark-50 rounded-lg">
                  <span className="text-primary-500 font-bold">Professional Equipment</span>
                </div>
              </div>
              
              <Link to="/contact" className="btn bg-primary-500 hover:bg-primary-600 text-white">
                Let's Talk About Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Country Music Connections</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Throughout my career, I've had the honor of meeting some of country music's greatest legends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-in bg-dark-100 rounded-xl p-8">
              <div className="mb-4 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Classic Country</h3>
              <p className="text-gray-400">
                I've had the privilege of meeting legends like George Jones, Tammy Wynette, and Merle Haggard, carrying their musical legacy into my performances.
              </p>
            </div>
            
            <div className="fade-in bg-dark-100 rounded-xl p-8" style={{ animationDelay: '0.2s' }}>
              <div className="mb-4 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Contemporary Stars</h3>
              <p className="text-gray-400">
                From Garth Brooks to Keith Urban and Eric Church, I've connected with today's biggest stars, keeping my finger on the pulse of current country music trends.
              </p>
            </div>
            
            <div className="fade-in bg-dark-100 rounded-xl p-8" style={{ animationDelay: '0.4s' }}>
              <div className="mb-4 text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Event Planning</h3>
              <p className="text-gray-400">
                With extensive experience and industry connections, I can create custom music packages featuring your favorite country artists for any event.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Music Expertise */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-dark-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-2">Country Classics</h4>
                  <p className="text-gray-400">From Johnny Cash to Dolly Parton</p>
                </div>
                <div className="bg-dark-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-2">Modern Country</h4>
                  <p className="text-gray-400">Luke Combs to Miranda Lambert</p>
                </div>
                <div className="bg-dark-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-2">Country Rock</h4>
                  <p className="text-gray-400">Eagles to Zac Brown Band</p>
                </div>
                <div className="bg-dark-50 p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-2">Crossover Hits</h4>
                  <p className="text-gray-400">Popular music with country influence</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 fade-in">
              <h2 className="text-3xl font-bold mb-6">Music Expertise</h2>
              <p className="text-lg mb-6">
                With a deep love for country music and a vast collection spanning decades, I can create the perfect musical atmosphere for your event. From line dancing classics to modern country hits, I've got you covered.
              </p>
              <p className="text-lg mb-6">
                My knowledge of country music history and connections with artists ensures an authentic experience that goes beyond just playing tracks. I bring stories, context, and genuine passion to every performance.
              </p>
              
              <Link to="/services" className="btn bg-primary-500 hover:bg-primary-600 text-white">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M19 10.20l-1.8-2.4L19 5.40V1.5l-2.5.5L15 4.2l-1.5-2.2L11 1.5v3.9l1.8 2.4L11 10.20v3.9l2.5-.5L15 11.4l1.5 2.2 2.5.5v-3.9zM10 1.5L8 7 2 8.5l5 4.3-1.5 6.3L10 16l4.5 3.1-1.5-6.3 5-4.3L12 7l-2-5.5z" />
              </svg>
            </div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Book Your Event?</h2>
              <p className="text-xl text-white/90 mb-8">
                Get in touch to check availability and discuss how I can make your event unforgettable with the perfect country music experience.
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-700 hover:bg-white/90"
              >
                Contact Me Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage; 