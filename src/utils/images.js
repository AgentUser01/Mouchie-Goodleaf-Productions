// Function to import images from the assets directory
export const getImageUrl = (imageName) => {
  try {
    // If the imageName is already a path that includes '/' assume it's a direct path
    if (imageName.includes('/')) {
      return imageName;
    }
    
    // For legacy placeholders, use the actual images we have
    if (placeholderImages[imageName]) {
      return placeholderImages[imageName];
    }

    // Otherwise try to load from assets
    return `/src/assets/images/${imageName}`;
  } catch (error) {
    console.error('Error getting image URL:', error);
    return 'https://dummyimage.com/800x600/333/fff&text=Image';
  }
};

// Create a mapping of original placeholders to real images
export const placeholderImages = {
  // Hero and Main Sections
  'dj-hero-bg.jpg': '/src/assets/images/Mouchies_Mobile_Music_Logo.jpeg',
  'dj-about.jpg': '/src/assets/images/About_me.jpeg',
  'dj-portrait.jpg': '/src/assets/images/About_me.jpeg',
  
  // Gallery images of artists/celebrities
  'gallery-1.jpg': '/src/assets/images/Garth_Brooks.jpeg',
  'gallery-2.jpg': '/src/assets/images/Eric_Church.jpeg',
  'gallery-3.jpg': '/src/assets/images/Keith_Urban.jpeg',
  'gallery-4.jpg': '/src/assets/images/Faith_Hill-Tim_McGraw.jpeg',
  'gallery-5.jpg': '/src/assets/images/Brad_Paisley.jpeg',
  'gallery-6.jpg': '/src/assets/images/Luke_Bryan.jpeg',
  'gallery-7.jpg': '/src/assets/images/Kenny_Chesney.jpeg',
  'gallery-8.jpg': '/src/assets/images/Brett_Kissel.jpeg',
  'gallery-9.jpg': '/src/assets/images/Dierks_Bentley.jpeg',
  'gallery-10.jpg': '/src/assets/images/Little_Big_Town.jpeg',
  'gallery-11.jpg': '/src/assets/images/Thompson_Square.jpeg',
  'gallery-12.jpg': '/src/assets/images/Brooks_&_Dunn.jpeg',
  
  // Equipment
  'equipment-sound.jpg': '/src/assets/images/me-Stanley-Cup.jpeg',
  'equipment-dj.jpg': '/src/assets/images/Mouchies_Mobile_Music_Logo.jpeg',
  'equipment-lighting.jpg': '/src/assets/images/Storm_Warren.jpeg',
  
  // Services
  'service-wedding.jpg': '/src/assets/images/Randy_Travis.jpeg',
  'service-corporate.jpg': '/src/assets/images/Dan_Rather.jpeg',
  'service-party.jpg': '/src/assets/images/Travis_Tritt.jpeg',
  'service-sound.jpg': '/src/assets/images/Charlie_Daniels.jpeg',
  
  // Testimonials - use classic country artists for testimonials
  'testimonial-1.jpg': '/src/assets/images/George_Jones.jpeg',
  'testimonial-2.jpg': '/src/assets/images/Tammy_Wynette.jpeg',
  'testimonial-3.jpg': '/src/assets/images/Merle_Haggard.jpeg',
  'testimonial-4.jpg': '/src/assets/images/Marty_Haggard.jpeg',
  'testimonial-5.jpg': '/src/assets/images/Georgette_Jones.jpeg',
  'testimonial-6.jpg': '/src/assets/images/Dwight_Yoakum.jpeg',
  'testimonial-7.jpg': '/src/assets/images/The_Kentucky_Headhunters.jpeg',
};

// Simple function to return placeholder image URLs if needed
export const getPlaceholderImage = (width = 800, height = 600, text = 'Placeholder Image') => {
  // Use a simple online placeholder service
  return `https://dummyimage.com/${width}x${height}/333/fff&text=${encodeURIComponent(text.substring(0, 20))}`;
}; 