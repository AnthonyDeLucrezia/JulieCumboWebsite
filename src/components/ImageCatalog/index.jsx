import React from "react";
import "./index.scss";

const ImageCatalog = (props) => {
  const { images, className } = props;

  return (
    <div className={`app-image-catalog-container ${className}`}>
      {images.map((x) => (
        <div className="catalog-image-div">
          <img src={x.img} alt={x.description} />
        </div>
      ))}
    </div>
  );
};

export { ImageCatalog as default };
