import React, { useState } from "react";

function BannerForm(e) {
  const [image] = useState({
    imagePreview: "",
    myTest: "123"
  });

  let handleSubmit = e => {
    e.preventDefault();
    let imagePreviewUrl = e.target.file.value;

    if (imagePreviewUrl) {
      console.log(imagePreviewUrl);
      image.imagePreview = <img src={imagePreviewUrl} alt="Preview" />;
      console.log(image.imagePreview);
      image.myTest = "123;";
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
        {image.imagePreview}
        <br />
        {image.myTest}
      </div>
    </div>
  );
}

export default BannerForm;
