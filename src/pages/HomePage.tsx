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
      name: "Sarah Johnson",
      role: "Bride",
      text: "Mouchie absolutely killed it at our wedding! Our guests couldn't stop dancing and we've received so many compliments about the music. Truly made our special day unforgettable.",
      image: getImageUrl('testimonial-1.jpg')
    },
    {
      name: "Michael Chen",
      role: "Corporate Event Manager",
      text: "We've hired Mouchie for multiple company events and he never disappoints. Professional, punctual, and knows exactly how to read the room. Our team always has a blast!",
      image: getImageUrl('testimonial-2.jpg')
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
            Mouchie GoodLeaf
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Professional DJ Services for Unforgettable Events
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-block mr-4 transition duration-300">
              Book Now
            </Link>
            <Link to="/services" className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full inline-block border-2 border-white transition duration-300">
              Services
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <img 
                src={getImageUrl('dj-about.jpg')} 
                alt="DJ Mouchie in action" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Mouchie</h2>
              <p className="text-lg text-gray-300 mb-6">
                With over a decade of experience, Mouchie GoodLeaf has established himself as one of the most sought-after DJs, bringing exceptional music curation and unmatched energy to events across the region.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Specializing in weddings, corporate events, and private parties, Mouchie blends technical expertise with an intuitive understanding of what makes a dance floor come alive.
              </p>
              <Link to="/about" className="text-blue-500 font-semibold hover:text-blue-400 flex items-center">
                Learn more about Mouchie
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Services Offered</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From intimate gatherings to large-scale events, Mouchie provides tailored DJ services to meet your specific needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                description: "Create unforgettable memories with personalized music that reflects your love story.",
                icon: "💍",
                image: getImageUrl('service-wedding.jpg')
              },
              {
                title: "Corporate Events",
                description: "Professional DJ services that align with your company culture and event objectives.",
                icon: "🏢",
                image: getImageUrl('service-corporate.jpg')
              },
              {
                title: "Private Parties",
                description: "Turn your celebration into an epic experience with music that keeps the party going.",
                icon: "🎉",
                image: getImageUrl('service-party.jpg')
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link to="/services" className="text-blue-500 hover:text-blue-400 font-semibold inline-block">
                    Learn more
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-block transition duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Gallery</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Take a look at some of the amazing events Mouchie has brought to life.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: getImageUrl('gallery-1.jpg'), alt: "Wedding reception dance floor" },
              { src: getImageUrl('gallery-2.jpg'), alt: "Corporate event setup" },
              { src: getImageUrl('gallery-3.jpg'), alt: "Birthday party" },
              { src: getImageUrl('gallery-4.jpg'), alt: "Festival performance" },
              { src: getImageUrl('gallery-5.jpg'), alt: "DJ equipment setup" },
              { src: getImageUrl('gallery-6.jpg'), alt: "Crowd enjoying music" },
              { src: getImageUrl('gallery-7.jpg'), alt: "Nightclub performance" },
              { src: getImageUrl('gallery-8.jpg'), alt: "Outdoor event" }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-48 md:h-64 object-cover transition duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full inline-block transition duration-300">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our clients have to say.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: selectedTestimonial === index ? 1 : 0,
                  x: selectedTestimonial === index ? 0 : selectedTestimonial > index ? -100 : 100
                }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 p-8 rounded-lg shadow-xl absolute inset-0"
                style={{ display: selectedTestimonial === index ? 'block' : 'none' }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-24 h-24 rounded-full object-cover mx-auto"
                    />
                  </div>
                  <div className="md:w-3/4 md:pl-8">
                    <p className="text-lg text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="text-white font-bold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${selectedTestimonial === index ? 'bg-blue-500' : 'bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Make Your Event Unforgettable?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how Mouchie can create the perfect soundtrack for your special occasion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full inline-block transition duration-300 text-lg">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage; 