import React from 'react';
import ImageCarousel from './components/ImageCarousel';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  // Generate 8 random 3D-style images from Picsum
  const carouselImages = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg"
  ];


  return (
    <div className="min-h-screen">
      {/* Header with Image Carousel */}
      <header>
        <ImageCarousel images={carouselImages} autoScrollInterval={3000} />
      </header>

      {/* Main Content Section */}
      <main>
        <MainContent />
      </main>

      {/* Footer with Action Buttons */}
      <Footer />
    </div>
  );
}

export default App;