import { useState, useEffect } from 'react';
import theCat from '../api/theCat';

const useCats = (defaultCategoryID, defaultImageType) => {
  const [catsResponse, setCatsResponse] = useState([]);

  useEffect(() => {
    console.log("defaultCategoryID: " + defaultCategoryID);
    console.log("defaultImageType: " + defaultImageType);

    // search(defaultCategoryID, defaultImageType);
  }, [defaultCategoryID, defaultImageType]);

  const search = async (category, image) => {
    const response = await theCat.get('/search', {
      params: {
        category_ids: category,
        mime_types: image,
      }
    });

    setCatsResponse(response); // will need to modify after console logging it
  };

  return [catsResponse, search];
};

export default useCats;
