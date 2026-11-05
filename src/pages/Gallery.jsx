import React from 'react';
import { Helmet } from 'react-helmet-async';
import GalleryGrid from '../components/GalleryGrid.jsx';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Yanet Speciality Dental</title>
        <meta
          name="description"
          content="Browse the Yanet Speciality Dental gallery featuring our clinic interiors, advanced equipment, and real smile transformation photography."
        />
      </Helmet>
      <main>
        <GalleryGrid />
      </main>
    </>
  );
};

export default Gallery;

