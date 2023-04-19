/*import React, { useState } from "react";

function ImageUploader() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const uploadedImages = [];
    for (let i = 0; i < files.length; i++) {
      const image = files[i];
      uploadedImages.push(URL.createObjectURL(image));
    }
    setImages(uploadedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    // Send formData to your server using fetch or axios
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleImageUpload} />
      <button type="submit">Upload Images</button>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`uploaded-image-${index}`} />
        ))}
      </div>
    </form>
  );
}

export default ImageUploader;*/
import React, { useState } from 'react';

function ImageUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleFileChange(event) {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  }

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {selectedFiles.map((file, index) => (
          <img key={index} src={URL.createObjectURL(file)} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;

