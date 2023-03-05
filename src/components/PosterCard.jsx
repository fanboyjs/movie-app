import React from 'react';

const PosterCard = (props) => {
  const { poster } = props;

  console.log(poster);
  return (
    <div className="h-96 max-h-fit w-96 ">
      <img
        src={poster.image}
        alt=""
        className="max-h-max max-w-xs"
        width={200}
      />
    </div>
  );
};

export default PosterCard;
