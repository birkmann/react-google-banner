import React from "react";
import { ImagePreview } from "./ImagePreview";

export const Workspace = props => {
  return (
    <div className='workspace'>
      <h2>Workspace</h2>
      <div className='banner-wrapper'>
        <ImagePreview sizeX={300} sizeY={255} />
        <ImagePreview sizeX={336} sizeY={280} />
        <ImagePreview sizeX={300} sizeY={600} />
        <ImagePreview sizeX={320} sizeY={100} />
        <ImagePreview sizeX={729} sizeY={90} />
      </div>
    </div>
  );
};
