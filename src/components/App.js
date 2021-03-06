import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import CatList from './CatList';
import useCats from '../hooks/useCats';

const mime_types_options = [
  {
    label: 'Select type',
    value: null
  },
  {
    label: 'All',
    value: 'jpg, png, gif'
  },
  {
    label: 'Still',
    value: 'jpg, png'
  },
  {
    label: 'Animated',
    value: 'gif'
  }
];

const category_ids_options = [
  {
    label: 'Select category',
    value: null
  },
  {
    label: 'Boxes',
    value: 5
  },
  {
    label: 'Clothes',
    value: 15
  },
  {
    label: 'Hats',
    value: 1
  },
  {
    label: 'Sinks',
    value: 14
  },
  {
    label: 'Space',
    value: 2
  },
  {
    label: 'Sunglasses',
    value: 4
  },
  {
    label: 'Ties',
    value: 7
  }
];

const App = () => {
  const [selCategory, setSelCategory] = useState(category_ids_options[0]);
  const [selMime, setSelMime] = useState(mime_types_options[0]);
  const [images, search] = useCats(null, []);
  // Initialize dropdown values
  const [categoryVal, setCategoryVal] = useState(0);
  const [mimeVal, setMimeVal] = useState('');

  useEffect(() => {
    // console.log("images: " + images);
  }, [images]);

  useEffect(() => {
    if (categoryVal || mimeVal) {
      search(categoryVal, mimeVal);
    }
  }, [categoryVal, mimeVal]);

  return (
    <div className="ui container" style={{marginTop: '10px'}}>
      <h1>It's Caturday!</h1>
      <Dropdown
        label="Select category"
        options={category_ids_options}
        selected={selCategory}
        onSelectedChange={setSelCategory}
        onSelectedValueChange={setCategoryVal}
      />
      <Dropdown
        label="Select image type"
        options={mime_types_options}
        selected={selMime}
        onSelectedChange={setSelMime}
        onSelectedValueChange={setMimeVal}
      />
      <br/>
      <CatList images={images}/>
    </div>
  );
};

export default App;
