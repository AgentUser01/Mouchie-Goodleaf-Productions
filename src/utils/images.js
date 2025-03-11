// Placeholder function that returns a solid color placeholder image
export const getPlaceholderImage = (width = 800, height = 600, text = 'Placeholder Image') => {
  // Generate a random dark color for the background
  const r = Math.floor(Math.random() * 100);
  const g = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const color = `rgb(${r},${g},${b})`;
  
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  // Get the context and draw the background
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width/2, height/2);
  
  // Return data URL
  return canvas.toDataURL('image/png');
};

// Create placeholders for all required images
export const placeholderImages = {
  // Hero and Main Sections
  'dj-hero-bg.jpg': getPlaceholderImage(1920, 1080, 'DJ Hero Background'),
  'dj-about.jpg': getPlaceholderImage(800, 600, 'About DJ'),
  'dj-portrait.jpg': getPlaceholderImage(600, 600, 'DJ Portrait'),
  
  // Gallery
  'gallery-1.jpg': getPlaceholderImage(800, 600, 'Gallery 1'),
  'gallery-2.jpg': getPlaceholderImage(800, 600, 'Gallery 2'),
  'gallery-3.jpg': getPlaceholderImage(800, 600, 'Gallery 3'),
  'gallery-4.jpg': getPlaceholderImage(800, 600, 'Gallery 4'),
  'gallery-5.jpg': getPlaceholderImage(800, 600, 'Gallery 5'),
  'gallery-6.jpg': getPlaceholderImage(800, 600, 'Gallery 6'),
  'gallery-7.jpg': getPlaceholderImage(800, 600, 'Gallery 7'),
  'gallery-8.jpg': getPlaceholderImage(800, 600, 'Gallery 8'),
  'gallery-9.jpg': getPlaceholderImage(800, 600, 'Gallery 9'),
  'gallery-10.jpg': getPlaceholderImage(800, 600, 'Gallery 10'),
  'gallery-11.jpg': getPlaceholderImage(800, 600, 'Gallery 11'),
  'gallery-12.jpg': getPlaceholderImage(800, 600, 'Gallery 12'),
  
  // Equipment
  'equipment-sound.jpg': getPlaceholderImage(800, 600, 'Sound Equipment'),
  'equipment-dj.jpg': getPlaceholderImage(800, 600, 'DJ Equipment'),
  'equipment-lighting.jpg': getPlaceholderImage(800, 600, 'Lighting Equipment'),
  
  // Services
  'service-wedding.jpg': getPlaceholderImage(800, 600, 'Wedding Services'),
  'service-corporate.jpg': getPlaceholderImage(800, 600, 'Corporate Services'),
  'service-party.jpg': getPlaceholderImage(800, 600, 'Party Services'),
  'service-sound.jpg': getPlaceholderImage(800, 600, 'Sound Services'),
  
  // Testimonials
  'testimonial-1.jpg': getPlaceholderImage(400, 400, 'Testimonial 1'),
  'testimonial-2.jpg': getPlaceholderImage(400, 400, 'Testimonial 2'),
};

// Helper function to get a placeholder image URL
export const getImageUrl = (imageName) => {
  return placeholderImages[imageName] || placeholderImages['dj-hero-bg.jpg'];
}; 