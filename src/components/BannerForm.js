import React, { useState } from "react";

let imagePreview: "";

function BannerForm(e) {
  /*
  let [imagePreview, setimagePreview] = useState({
    imagePreview: ""
  });
  */

  let [image, setimage] = useState({
    imagePreview: "",
    imagePreviewUrl: ""
  });

  let handleSubmit = e => {
    e.preventDefault();
    let imagePreviewUrl = e.target.file.value;

    if (imagePreviewUrl) {
      console.log(imagePreviewUrl);
      imagePreview = <img src={imagePreviewUrl} alt="Preview" />;
      console.log(imagePreview);
    }
  };

  return (
    <div className="image-upload">
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button>Upload</button>
      </form>
      <div className="imgPreview">
        <p>preview:</p>
        <br />
        {imagePreview}
      </div>
    </div>
  );
}

export default BannerForm;
