import React from "react";

export const ImagePreview = props => {
  return (
    <div className={`banner-preview size-${props.sizeX}-${props.sizeY}`}>
      <div className='dimension'>
        {props.sizeX}x{props.sizeY}
      </div>
      <div className='logo'></div>
      <div className='bg'></div>
    </div>
  );
};
