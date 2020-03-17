import React, { useState } from "react";

export const BannerForm = props => {
  /*
  const [state, setState] = useState({
    imagePreview: "",
    imagePreviewUrl: ""
  });
  */

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
    <div className='editor'>
      <div className='sidebar'>
        <div className='image-upload'>
          <form onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={handleChange} />
            <button>Upload</button>
          </form>
          <div className='image-preview'>
            <ImagePreview />
          </div>
        </div>
      </div>
      <div className='workspace'>
        <h2>Workspace</h2>
      </div>
    </div>
  );
};
