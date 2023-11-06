import React from "react";

const GalleryCard = ({ gallery }) => {
  return (
    <div className=" flex flex-wrap gap-10">
      {gallery.map((item) => (
        <div key={item.id}>
          <img className=" w-auto h-[300.49px]" src={item.galleryimg} alt="" />
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
