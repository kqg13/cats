import React from 'react';
import './CatList.css';
import CatCard from './CatCard';

const CatList = ({images}) => {
  const renderedList = images.map((image) => {
    return <CatCard key={image.id} image={image} />;
  });

  return <div className="cat-list">{renderedList}</div>;
};

export default CatList;
