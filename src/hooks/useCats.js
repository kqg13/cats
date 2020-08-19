import { useState } from 'react';
import theCat from '../api/theCat';

const useCats = (defaultCategoryID, defaultImageType) => {
  const [catsResponse, setCatsResponse] = useState([]);

  const search = async (category, image) => {
    const response = await theCat.get('/search', {
      params: {
        limit: 3,
        category_ids: category,
        mime_types: image
      }
    });

    setCatsResponse(response.data);
  };

  return [catsResponse, search];
};

export default useCats;
