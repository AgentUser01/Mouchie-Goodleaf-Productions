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

    // For GitHub Pages deployment, use the correct path structure
    // Using relative paths without /src/ prefix
    return `${process.env.PUBLIC_URL}/assets/images/${imageName}`;
  } catch (error) {
    console.error('Error getting image URL:', error);
    return `${process.env.PUBLIC_URL}/placeholder.jpg`;
  }
};

// Create a mapping of original placeholders to real images
export const placeholderImages = {
  // Hero and Main Sections
  'dj-hero-bg.jpg': `${process.env.PUBLIC_URL}/assets/images/Mouchies_Mobile_Music_Logo.jpeg`,
  'dj-about.jpg': `${process.env.PUBLIC_URL}/assets/images/About_me.jpeg`,
  'dj-portrait.jpg': `${process.env.PUBLIC_URL}/assets/images/About_me.jpeg`,
  
  // Gallery images of artists/celebrities
  'gallery-1.jpg': `${process.env.PUBLIC_URL}/assets/images/Garth_Brooks.jpeg`,
  'gallery-2.jpg': `${process.env.PUBLIC_URL}/assets/images/Eric_Church.jpeg`,
  'gallery-3.jpg': `${process.env.PUBLIC_URL}/assets/images/Keith_Urban.jpeg`,
  'gallery-4.jpg': `${process.env.PUBLIC_URL}/assets/images/Faith_Hill-Tim_McGraw.jpeg`,
  'gallery-5.jpg': `${process.env.PUBLIC_URL}/assets/images/Brad_Paisley.jpeg`,
  'gallery-6.jpg': `${process.env.PUBLIC_URL}/assets/images/Luke_Bryan.jpeg`,
  'gallery-7.jpg': `${process.env.PUBLIC_URL}/assets/images/Kenny_Chesney.jpeg`,
  'gallery-8.jpg': `${process.env.PUBLIC_URL}/assets/images/Brett_Kissel.jpeg`,
  'gallery-9.jpg': `${process.env.PUBLIC_URL}/assets/images/Dierks_Bentley.jpeg`,
  'gallery-10.jpg': `${process.env.PUBLIC_URL}/assets/images/Little_Big_Town.jpeg`,
  'gallery-11.jpg': `${process.env.PUBLIC_URL}/assets/images/Thompson_Square.jpeg`,
  'gallery-12.jpg': `${process.env.PUBLIC_URL}/assets/images/Brooks_&_Dunn.jpeg`,
  
  // Equipment
  'equipment-sound.jpg': `${process.env.PUBLIC_URL}/assets/images/me-Stanley-Cup.jpeg`,
  'equipment-dj.jpg': `${process.env.PUBLIC_URL}/assets/images/Mouchies_Mobile_Music_Logo.jpeg`,
  'equipment-lighting.jpg': `${process.env.PUBLIC_URL}/assets/images/Storm_Warren.jpeg`,
  
  // Services
  'service-wedding.jpg': `${process.env.PUBLIC_URL}/assets/images/Randy_Travis.jpeg`,
  'service-corporate.jpg': `${process.env.PUBLIC_URL}/assets/images/Dan_Rather.jpeg`,
  'service-party.jpg': `${process.env.PUBLIC_URL}/assets/images/Travis_Tritt.jpeg`,
  'service-sound.jpg': `${process.env.PUBLIC_URL}/assets/images/Charlie_Daniels.jpeg`,
  
  // Testimonials - use artists for testimonials
  'testimonial-1.jpg': `${process.env.PUBLIC_URL}/assets/images/George_Jones.jpeg`,
  'testimonial-2.jpg': `${process.env.PUBLIC_URL}/assets/images/Tammy_Wynette.jpeg`,
  'testimonial-3.jpg': `${process.env.PUBLIC_URL}/assets/images/Merle_Haggard.jpeg`,
  'testimonial-4.jpg': `${process.env.PUBLIC_URL}/assets/images/Marty_Haggard.jpeg`,
  'testimonial-5.jpg': `${process.env.PUBLIC_URL}/assets/images/Georgette_Jones.jpeg`,
  'testimonial-6.jpg': `${process.env.PUBLIC_URL}/assets/images/Dwight_Yoakum.jpeg`,
  'testimonial-7.jpg': `${process.env.PUBLIC_URL}/assets/images/The_Kentucky_Headhunters.jpeg`,
};

// Simple function to return placeholder image URLs if needed
export const getPlaceholderImage = (width = 800, height = 600, text = 'Placeholder Image') => {
  // Use a simple online placeholder service
  return `https://dummyimage.com/${width}x${height}/333/fff&text=${encodeURIComponent(text.substring(0, 20))}`;
}; 