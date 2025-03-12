import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils/images';

// Removed imports for components that don't exist yet
// import ServiceCard from '../components/ServiceCard';
// import TestimonialSlider from '../components/TestimonialSlider';
// import GalleryGrid from '../components/GalleryGrid';

const HomePage: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const testimonials = [
    {
      name: "George Jones",
      role: "Country Music Legend",
      text: "Mouchie's knowledge of classic country is incredible. He's keeping the spirit of traditional country music alive with his collection and presentations.",
      image: getImageUrl('George_Jones.jpeg')
    },
    {
      name: "Tammy Wynette",
      role: "First Lady of Country Music",
      text: "I've been impressed by Mouchie's dedication to preserving country music history while creating modern entertainment experiences.",
      image: getImageUrl('Tammy_Wynette.jpeg')
    },
    {
      name: "Merle Haggard",
      role: "Country Music Icon",
      text: "Working with Mouchie was a pleasure. His passion for authentic country music shows in everything he does.",
      image: getImageUrl('Merle_Haggard.jpeg')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Mouchie GoodLeaf Productions
          </motion.h1>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-md mx-auto"
          >
            <img 
              src={getImageUrl('Mouchies_Mobile_Music_Logo.jpeg')} 
              alt="Mouchie GoodLeaf Productions Logo" 
              className="rounded-full w-40 h-40 mx-auto mb-6 border-4 border-primary-500"
            />
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Country Music Entertainment Specialist
            </p>
          </motion.div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/services" 
              className="btn bg-primary-500 hover:bg-primary-600 text-white"
            >
              Our Services
            </Link>
            <Link 
              to="/gallery" 
              className="btn bg-white hover:bg-gray-200 text-primary-700"
            >
              View Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src={getImageUrl('About_me.jpeg')} 
                alt="Mouchie GoodLeaf" 
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Your Country Music Entertainment Specialist</h2>
              <p className="text-lg text-gray-300 mb-6">
                With over 25 years in the music industry and connections to many country music legends, Mouchie GoodLeaf brings authentic country music entertainment to your events.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                From classic country to modern hits, I provide personalized music experiences that create lasting memories.
              </p>
              <Link 
                to="/about" 
                className="btn bg-primary-500 hover:bg-primary-600 text-white"
              >
                Learn More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Country Music Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From weddings to corporate events, I'll bring authentic country music to create the perfect atmosphere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings & Events",
                description: "Create unforgettable moments with personalized country music selections for your special day.",
                icon: "🎵",
                image: getImageUrl('Randy_Travis.jpeg')
              },
              {
                title: "Corporate Functions",
                description: "Professional entertainment for company events, tailored to your audience and objectives.",
                icon: "🎸",
                image: getImageUrl('Dan_Rather.jpeg')
              },
              {
                title: "Private Parties",
                description: "Turn your celebration into a memorable country music experience with custom playlists.",
                icon: "🎧",
                image: getImageUrl('Travis_Tritt.jpeg')
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-50 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link to="/services" className="text-primary-500 hover:text-primary-400 font-medium inline-flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in">
            <Link to="/services" className="btn bg-primary-500 hover:bg-primary-600 text-white">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Country Music Connections</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I've had the privilege of meeting some of country music's greatest legends
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative h-80 fade-in">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === selectedTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-dark-100 rounded-2xl p-8 shadow-xl h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-primary-500"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-primary-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 italic flex-grow">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === selectedTestimonial ? 'bg-primary-500' : 'bg-gray-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Country Music Stars</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a look at some of the country music stars I've had the privilege to meet
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              getImageUrl('Garth_Brooks.jpeg'),
              getImageUrl('George_Jones.jpeg'),
              getImageUrl('Faith_Hill-Tim_McGraw.jpeg'),
              getImageUrl('Brooks_&_Dunn.jpeg')
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl aspect-square"
              >
                <img 
                  src={image} 
                  alt="Gallery preview" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in">
            <Link to="/gallery" className="btn bg-primary-500 hover:bg-primary-600 text-white">
              View Full Gallery
            </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready for Country Music Entertainment?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact me today to discuss your event and create a customized country music experience
              </p>
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-700 hover:bg-white/90"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage; 