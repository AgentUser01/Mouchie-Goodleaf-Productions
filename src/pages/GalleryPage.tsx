import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '../utils/images';

// Gallery images data with updated references to real images
const galleryImages = [
  {
    id: 1,
    src: getImageUrl('Garth_Brooks.jpeg'),
    alt: 'Garth Brooks - Country music superstar',
    category: 'contemporary',
    featured: true
  },
  {
    id: 2,
    src: getImageUrl('Eric_Church.jpeg'),
    alt: 'Eric Church in concert',
    category: 'contemporary',
    featured: false
  },
  {
    id: 3,
    src: getImageUrl('Keith_Urban.jpeg'),
    alt: 'Keith Urban performing live',
    category: 'contemporary',
    featured: false
  },
  {
    id: 4,
    src: getImageUrl('Faith_Hill-Tim_McGraw.jpeg'),
    alt: 'Faith Hill and Tim McGraw - Country power couple',
    category: 'contemporary',
    featured: true
  },
  {
    id: 5,
    src: getImageUrl('Brad_Paisley.jpeg'),
    alt: 'Brad Paisley with his guitar',
    category: 'contemporary',
    featured: false
  },
  {
    id: 6,
    src: getImageUrl('Luke_Bryan.jpeg'),
    alt: 'Luke Bryan on stage',
    category: 'contemporary',
    featured: false
  },
  {
    id: 7,
    src: getImageUrl('Kenny_Chesney.jpeg'),
    alt: 'Kenny Chesney concert experience',
    category: 'contemporary',
    featured: false
  },
  {
    id: 8,
    src: getImageUrl('Brett_Kissel.jpeg'),
    alt: 'Brett Kissel - Canadian country star',
    category: 'canadian',
    featured: true
  },
  {
    id: 9,
    src: getImageUrl('Dierks_Bentley.jpeg'),
    alt: 'Dierks Bentley performing',
    category: 'contemporary',
    featured: false
  },
  {
    id: 10,
    src: getImageUrl('Little_Big_Town.jpeg'),
    alt: 'Little Big Town - Award-winning country group',
    category: 'groups',
    featured: false
  },
  {
    id: 11,
    src: getImageUrl('Thompson_Square.jpeg'),
    alt: 'Thompson Square duo',
    category: 'groups',
    featured: false
  },
  {
    id: 12,
    src: getImageUrl('Brooks_&_Dunn.jpeg'),
    alt: 'Brooks & Dunn - Legendary country duo',
    category: 'groups',
    featured: true
  },
  {
    id: 13,
    src: getImageUrl('George_Jones.jpeg'),
    alt: 'George Jones - Country music legend',
    category: 'classic',
    featured: true
  },
  {
    id: 14,
    src: getImageUrl('Tammy_Wynette.jpeg'),
    alt: 'Tammy Wynette - First Lady of Country Music',
    category: 'classic',
    featured: false
  },
  {
    id: 15,
    src: getImageUrl('Merle_Haggard.jpeg'),
    alt: 'Merle Haggard - Country music icon',
    category: 'classic',
    featured: false
  },
  {
    id: 16,
    src: getImageUrl('Marty_Haggard.jpeg'),
    alt: 'Marty Haggard performing',
    category: 'classic',
    featured: false
  },
  {
    id: 17,
    src: getImageUrl('Georgette_Jones.jpeg'),
    alt: 'Georgette Jones - Daughter of George Jones and Tammy Wynette',
    category: 'classic',
    featured: false
  },
  {
    id: 18,
    src: getImageUrl('Dwight_Yoakum.jpeg'),
    alt: 'Dwight Yoakam - Country star with distinctive style',
    category: 'classic',
    featured: false
  },
  {
    id: 19,
    src: getImageUrl('The_Kentucky_Headhunters.jpeg'),
    alt: 'The Kentucky Headhunters - Southern rock and country group',
    category: 'groups',
    featured: false
  },
  {
    id: 20,
    src: getImageUrl('Randy_Travis.jpeg'),
    alt: 'Randy Travis - Influential country artist',
    category: 'classic',
    featured: false
  },
  {
    id: 21,
    src: getImageUrl('Charlie_Daniels.jpeg'),
    alt: 'Charlie Daniels - Southern rock legend',
    category: 'classic',
    featured: false
  },
  {
    id: 22,
    src: getImageUrl('Dan_Rather.jpeg'),
    alt: 'Dan Rather - Celebrated news anchor',
    category: 'other',
    featured: false
  },
  {
    id: 23,
    src: getImageUrl('Travis_Tritt.jpeg'),
    alt: 'Travis Tritt performing',
    category: 'contemporary',
    featured: false
  },
  {
    id: 24,
    src: getImageUrl('Storm_Warren.jpeg'),
    alt: 'Storm Warren - NBA player',
    category: 'other',
    featured: false
  }
];

const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filters = [
    { id: 'all', label: 'All Stars' },
    { id: 'contemporary', label: 'Contemporary Country' },
    { id: 'classic', label: 'Classic Country' },
    { id: 'groups', label: 'Groups & Duos' },
    { id: 'canadian', label: 'Canadian Artists' },
    { id: 'other', label: 'Other Celebrities' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Country Music Stars</h1>
            <p className="text-xl text-gray-300">
              Browse through photos of country music legends and stars I've had the pleasure to meet
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
          
          <div className="relative max-w-5xl max-h-full overflow-hidden">
            {filteredImages.map(image => (
              image.id === selectedImage && (
                <div key={image.id} className="text-center">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="max-w-full max-h-[80vh] mx-auto" 
                  />
                  <div className="mt-4 text-white text-xl font-medium">
                    <p>{image.alt}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage; 