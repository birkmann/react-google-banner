import React, { useState } from "react";

export const Sidebar = props => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setimagePreviewUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    let imagePreviewUrl = e.target.value;
    if (imagePreviewUrl) {
      setFile(imagePreviewUrl);
    }
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setimagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const ImagePreview = props => {
    if (imagePreviewUrl) {
      return <img src={imagePreviewUrl} alt='Logo' />;
    } else {
      return null;
    }
  };

  return (
    <div className='sidebar'>
      <div className='image-upload'>
        <ul>
          <li>300×250</li>
          <li>336×280</li>
          <li>728×90</li>
          <li>300×600</li>
          <li>320×100</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <input type='file' name='file' onChange={handleChange} />
        </form>
        <div className='image-preview'>
          <ImagePreview />
        </div>
      </div>
    </div>
  );
};
