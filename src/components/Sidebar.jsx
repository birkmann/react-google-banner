import React, { useState } from "react";

export const Sidebar = props => {
  let [file, setFile] = useState("");
  let [imagePreviewUrl, setimagePreviewUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    let imagePreviewUrl = e.target.value;
    if (imagePreviewUrl) {
      setFile(imagePreviewUrl);
    }
    let reader = new FileReader();
    file = e.target.files[0];
    reader.onloadend = () => {
      setimagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const ImagePreview = props => {
    if (imagePreviewUrl) {
      return <img src={imagePreviewUrl} alt="Logo" />;
    } else {
      return null;
    }
  };

  return (
    <div className="sidebar">
      <div className="image-upload">
        <h3>Background Image</h3>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleChange} />
        </form>
        <div className="image-preview">
          <ImagePreview />
        </div>
      </div>
    </div>
  );
};
