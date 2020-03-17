import React, { useState } from "react";

export const BannerForm = props => {
  const [state, setState] = useState({
    imagePreview: "",
    imagePreviewUrl: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    let imagePreviewUrl = e.target.file.value;

    if (imagePreviewUrl) {
      console.log(imagePreviewUrl);
      state.imagePreview = <img src={imagePreviewUrl} alt="Preview" />;
      console.log(state.imagePreview);
      state.myTest = "123;";
      setState({ imagePreview: "test" });
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
        {state.imagePreview}
        <br />
        {state.myTest}
      </div>
    </div>
  );
};
