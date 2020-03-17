import React, { useState } from "react";

export const BannerForm = props => {
  /*
  const [state, setState] = useState({
    imagePreview: "",
    imagePreviewUrl: ""
  });
  */

  const [imagePreview, setimagePreview] = useState("");
  const [imagePreviewUrl, setimagePreviewUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let imagePreviewUrl = e.target.file.value;

    if (imagePreviewUrl) {
      setimagePreview(imagePreviewUrl);
    }
  };

  const handleChange = e => {
    let imagePreviewUrl = e.target.value;
    if (imagePreviewUrl) {
      setimagePreview(imagePreviewUrl);
    }
  };

  return (
    <div className='image-upload'>
      <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleChange} />
        <button>Upload</button>
      </form>
      <div className='imgPreview'>
        <p>preview:</p>
        <br />
        <img src={imagePreview} alt='Logo' />
        {imagePreview}
      </div>
    </div>
  );
};
