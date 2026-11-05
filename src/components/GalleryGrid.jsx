import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    category: 'Cosmetic',
    src: 'https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Close-up of bright smile after cosmetic treatment'
  },
  {
    id: 2,
    category: 'Cosmetic',
    src: 'https://images.pexels.com/photos/3762405/pexels-photo-3762405.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dentist reviewing cosmetic treatment plan with patient'
  },
  {
    id: 3,
    category: 'Orthodontics',
    src: 'https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Teen smiling with clear aligners'
  },
  {
    id: 4,
    category: 'Orthodontics',
    src: 'https://images.pexels.com/photos/4269691/pexels-photo-4269691.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dentist adjusting orthodontic braces'
  },
  {
    id: 5,
    category: 'Implants',
    src: 'https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Consultation about dental implants on digital screen'
  },
  {
    id: 6,
    category: 'Implants',
    src: 'https://images.pexels.com/photos/5355915/pexels-photo-5355915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Patient smiling after implant treatment'
  },
  {
    id: 7,
    category: 'Cosmetic',
    src: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern dental chair and equipment in clinic'
  },
  {
    id: 8,
    category: 'Orthodontics',
    src: 'https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Dentist explaining orthodontic treatment using model'
  }
];

const filters = ['All', 'Cosmetic', 'Orthodontics', 'Implants'];

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filtered =
    activeFilter === 'All'
      ? images
      : images.filter(img => img.category === activeFilter);

  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-2">
              Inside Yanet Speciality Dental
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              A calming, technology-rich environment designed to feel more like a spa than a
              traditional clinic—without compromising clinical excellence.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {filters.map(filter => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-3 py-1.5 border text-xs font-medium transition ${
                  activeFilter === filter
                    ? 'bg-clinic-blue text-white border-clinic-blue'
                    : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-clinic-blue/70'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.figure
                key={img.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: index * 0.04 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <div>
                    <p className="text-xs font-semibold text-white">{img.category}</p>
                    <p className="text-[11px] text-slate-100/90 line-clamp-2">
                      {img.alt}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
              onClick={() => setLightboxImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-3xl w-full"
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="w-full max-h-[70vh] object-contain rounded-2xl shadow-soft"
              />
              <div className="mt-2 flex justify-between items-center text-xs text-slate-200">
                <p>{lightboxImage.alt}</p>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="rounded-full bg-slate-900/80 px-3 py-1"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;

