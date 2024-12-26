import React, { useState, useEffect } from "react";

const Slidshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "https://media.istockphoto.com/id/1495606755/photo/watch-in-store.jpg?s=1024x1024&w=is&k=20&c=rb8tengB7_DdWwdWCMhenbtvTcUCiwCg-DLW7vzICeY=", text: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjKg-YA8BrGzgVjqGA4fr7SaHkmNNu-xUXw&s" },
    { src: "https://media.istockphoto.com/id/1313263576/photo/vintage-military-watch-and-tactical-belt-on-army-green-background-classic-timepiece.jpg?s=612x612&w=0&k=20&c=BmY033cTzq5RlyOKk5z9GLypNqTuSxb2IkYH1S_g18A=", text: "Image 2 Description" },
    { src: "https://media.istockphoto.com/id/1215997811/photo/the-smartwatch-falls-into-the-water-with-the-swimming-training-app-displayed.jpg?s=612x612&w=0&k=20&c=bkmcX-v8_40IH2Jogf7bQX1XmwMMfhduOppDthYtpx4=", text: "Image 3 Description" },
    { src: "https://media.istockphoto.com/id/628540774/photo/luxury-watches.jpg?s=612x612&w=0&k=20&c=lUY9ajPS1J1_h-ta-6n2VUIUSWUKVeJeWx_eDVjOc1c=", text: "Image 4 Description" },
    { src: "https://media.istockphoto.com/id/912724114/photo/luxury.jpg?s=612x612&w=0&k=20&c=VZOwuJdUDFIZlr9mFfCzKH904todLk4ade4xDy8xJ10=", text: "Image 5 Description" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]); // Add images.length to the dependency array

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} style={{ display: index === currentIndex ? "block" : "none" }}>
          <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: "100%",height:
           "450px", background: "pink", display: "flex"
           }} />
          <div className="text" style={{color: "blue",display: "flex", position: "absolute", top: "0"}}>{image.text} </div>
        </div>

      ))}
    </div>
  );
};

export default Slidshow;
