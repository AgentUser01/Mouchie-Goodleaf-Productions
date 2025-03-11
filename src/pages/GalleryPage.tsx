import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils/images';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: getImageUrl('gallery-1.jpg'),
    alt: 'Wedding reception with DJ setup',
    category: 'weddings',
    featured: true
  },
  {
    id: 2,
    src: getImageUrl('gallery-2.jpg'),
    alt: 'Corporate event with audience',
    category: 'corporate',
    featured: true
  },
  {
    id: 3,
    src: getImageUrl('gallery-3.jpg'),
    alt: 'Birthday party celebration',
    category: 'parties',
    featured: false
  },
  {
    id: 4,
    src: getImageUrl('gallery-4.jpg'),
    alt: 'DJ booth at nightclub',
    category: 'nightlife',
    featured: true
  },
  {
    id: 5,
    src: getImageUrl('gallery-5.jpg'),
    alt: 'Sound equipment setup',
    category: 'equipment',
    featured: false
  },
  {
    id: 6,
    src: getImageUrl('gallery-6.jpg'),
    alt: 'Wedding dance floor',
    category: 'weddings',
    featured: false
  },
  {
    id: 7,
    src: getImageUrl('gallery-7.jpg'),
    alt: 'Corporate award ceremony',
    category: 'corporate',
    featured: false
  },
  {
    id: 8,
    src: getImageUrl('gallery-8.jpg'),
    alt: 'Outdoor festival performance',
    category: 'festivals',
    featured: true
  },
  {
    id: 9,
    src: getImageUrl('gallery-9.jpg'),
    alt: 'DJ equipment close-up',
    category: 'equipment',
    featured: false
  },
  {
    id: 10,
    src: getImageUrl('gallery-10.jpg'),
    alt: 'Club lighting setup',
    category: 'nightlife',
    featured: false
  },
  {
    id: 11,
    src: getImageUrl('gallery-11.jpg'),
    alt: 'Private party event',
    category: 'parties',
    featured: false
  },
  {
    id: 12,
    src: getImageUrl('gallery-12.jpg'),
    alt: 'Music festival crowd',
    category: 'festivals',
    featured: false
  }
];

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'party', label: 'Parties' },
    { id: 'club', label: 'Club Nights' },
    { id: 'equipment', label: 'Equipment' }
  ];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  // Navigate through images in the modal
  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    
    if (direction === 'prev') {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    } else {
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative py-20 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Gallery</h1>
            <p className="text-xl text-gray-300">
              Browse through photos from our past events and performances
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-50 text-gray-300 hover:bg-dark-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`fade-in ${
                  // Larger images for featured items
                  image.featured ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="overflow-hidden rounded-2xl cursor-pointer h-full"
                  onClick={() => handleImageClick(image.id)}
                >
                  <div className="relative group h-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <p className="text-sm">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={closeModal}
              className="text-white hover:text-primary-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => navigateImage('prev')}
              className="text-white hover:text-primary-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={() => navigateImage('next')}
              className="text-white hover:text-primary-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="max-w-5xl max-h-full overflow-auto">
            {filteredImages.find(img => img.id === selectedImage) && (
              <>
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] mx-auto rounded-lg"
                />
                <div className="text-center mt-4 text-white">
                  <p className="text-xl">{filteredImages.find(img => img.id === selectedImage)?.alt}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Video Section */}
      <section className="py-16 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Performance Videos</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch Mouchie GoodLeaf in action at various events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* These would be embedded videos, using placeholders */}
            <div className="fade-in">
              <div className="rounded-2xl overflow-hidden bg-dark-100">
                <div className="aspect-video bg-dark-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wedding DJ Highlight Reel</h3>
                  <p className="text-gray-400">
                    A compilation of magical moments from recent weddings.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-2xl overflow-hidden bg-dark-100">
                <div className="aspect-video bg-dark-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Club Performance</h3>
                  <p className="text-gray-400">
                    Behind the decks at Velvet Nightclub's annual summer party.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="rounded-2xl overflow-hidden bg-dark-100">
                <div className="aspect-video bg-dark-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mix Session</h3>
                  <p className="text-gray-400">
                    Studio session showcasing transitions and mixing techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-700 to-primary-500 rounded-3xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Want to See More?</h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us for a personalized preview of events similar to the one you're planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40"
                >
                  Follow on Instagram
                </a>
                <a 
                  href="/contact" 
                  className="btn bg-white text-primary-700 hover:bg-white/90"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryPage; 