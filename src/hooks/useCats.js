import { useState } from 'react';
import theCat from '../api/theCat';

const useCats = (defaultCategoryID, defaultImageType) => {
  const [images, setImages] = useState([]);

  const search = async (category, image) => {
    const response = await theCat.get('/search', {
      params: {
        limit: 15,
        category_ids: category,
        mime_types: image
      }
    });
    setImages(response.data);
  };

  return [images, search];
};

export default useCats;
