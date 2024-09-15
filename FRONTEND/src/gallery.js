import React, { useState } from 'react';
import './Gallery.css';

import nimg1 from './nimg1.jpg';
import nimg2 from './nimg2.jpg';
import nimg3 from './nimg3.jpg';
import nimg4 from './nimg4.jpg';
import nimg5 from './nimg5.webp';
import nimg6 from './nimg6.webp';

const images = [
    { id: 6, src: nimg1, alt: 'Gym Interior 3' },
    { id: 7, src: nimg2, alt: 'Gym Interior 4' },
    { id: 8, src: nimg3, alt: 'Gym Interior 5' },
    { id: 9, src: nimg4, alt: 'Gym Interior 6' },
    { id: 10, src: nimg5, alt: 'Gym Interior 7' },
    { id: 11, src: nimg6, alt: 'Gym Interior 8' },
    // Add more images as needed
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
