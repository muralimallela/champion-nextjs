"use client"
import React, { useEffect, useState } from "react";
import Modal from "react-modal";


interface Photo {
  src: string;
  thumbnail: string;
  title: string;
  description: string;
}

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/photos");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Failed to fetch photos", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (photo: Photo) => {
    setCurrentPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentPhoto(null);
  };

  return (
    <div className="mt-[200px] container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-auto"
            />
            <p className="mt-2 text-center">{photo.title}</p>
          </div>
        ))}
      </div>

      {currentPhoto && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Photo Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="w-full h-auto"
            />
            {/* <h2 className="mt-4 text-blue-400">{currentPhoto.title}</h2>
            <p className="mt-2 text-green-400">{currentPhoto.description}</p> */}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PhotoGallery;
