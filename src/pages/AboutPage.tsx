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
              <p className="text-xl text-gray-300 mb-8">Professional DJ with a passion for creating unforgettable musical experiences for all types of events.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img 
                src={getImageUrl('dj-portrait.jpg')} 
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
                  src="/src/assets/images/dj-portrait.jpg" 
                  alt="DJ Mouchie" 
                  className="rounded-2xl w-full h-auto shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary-500 rounded-xl px-6 py-4 shadow-lg">
                  <div className="text-white text-lg font-bold">10+ Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary-500">Meet Mouchie,</span> Your Premier DJ
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                With over a decade of experience, Mouchie GoodLeaf has established himself as one of the most sought-after DJs in the industry. His journey began in small local clubs but quickly expanded to major venues, corporate events, and high-profile weddings.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Mouchie's unique talent lies in his ability to read the room and create the perfect atmosphere for any event. His extensive knowledge of music across all genres allows him to craft unforgettable experiences tailored to each client's vision.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-dark-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
                  <div className="text-white">Events</div>
                </div>
                <div className="bg-dark-50 rounded-xl p-6">
                  <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                  <div className="text-white">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
            
            <div className="space-y-8 fade-in">
              <p className="text-gray-300 text-lg">
                Mouchie GoodLeaf Productions was born from a passion for music and a desire to create unforgettable experiences. What started as a hobby quickly transformed into a full-time career as the demand for Mouchie's unique sound and professional approach grew.
              </p>
              <p className="text-gray-300 text-lg">
                Over the years, we've invested in top-of-the-line equipment, expanded our music library, and refined our craft to ensure we deliver exceptional service at every event. Our philosophy is simple: the right music at the right moment can transform any gathering into a memorable experience.
              </p>
              <p className="text-gray-300 text-lg">
                Today, Mouchie GoodLeaf Productions is proud to be one of the leading DJ services in the region, with a reputation for reliability, professionalism, and the ability to keep dance floors packed all night long.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-dark-100 p-6 rounded-xl fade-in">
                <div className="text-primary-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Passion for Music</h3>
                <p className="text-gray-400">
                  Our extensive music knowledge spans all genres, ensuring we can cater to any audience and event.
                </p>
              </div>
              
              <div className="bg-dark-100 p-6 rounded-xl fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-primary-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Attention to Detail</h3>
                <p className="text-gray-400">
                  We meticulously plan each event, ensuring everything from sound quality to timing is perfect.
                </p>
              </div>
              
              <div className="bg-dark-100 p-6 rounded-xl fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-primary-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
                <p className="text-gray-400">
                  We work closely with each client to understand their vision and deliver exactly what they want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Equipment</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Only the best sound and lighting equipment to ensure your event sounds amazing and looks spectacular.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sound Systems",
                description: "High-quality speakers and audio equipment delivering crystal-clear sound for venues of all sizes.",
                image: getImageUrl('equipment-sound.jpg')
              },
              {
                title: "DJ Equipment",
                description: "Professional mixers, controllers, and software to seamlessly blend tracks and create the perfect atmosphere.",
                image: getImageUrl('equipment-dj.jpg')
              },
              {
                title: "Lighting",
                description: "Dynamic lighting systems that transform any venue and enhance the mood of your event.",
                image: getImageUrl('equipment-lighting.jpg')
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our clients have to say about working with Mouchie.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Bride",
                quote: "Mouchie was the highlight of our wedding! Guests are still talking about how amazing the music was. He truly understood our vision and executed it perfectly.",
                image: getImageUrl('testimonial-1.jpg')
              },
              {
                name: "Michael Chen",
                role: "Corporate Event Manager",
                quote: "We've hired Mouchie for multiple company events and he never disappoints. Professional, punctual, and knows exactly how to read the room.",
                image: getImageUrl('testimonial-2.jpg')
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 rounded-3xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Book Your Event?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's create an unforgettable experience together. Contact us today to discuss your event.
              </p>
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-white/90 text-lg px-8 py-4">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage; 