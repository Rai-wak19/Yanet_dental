import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesModal = ({ open, onClose, service }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            className="relative z-10 max-w-3xl w-full glass-panel rounded-3xl p-4 sm:p-6 lg:p-7 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start gap-3 mb-4">
              <div>
                <p className="text-xs font-semibold text-clinic-blue mb-1">Specialty Service</p>
                <h2 className="font-display text-xl sm:text-2xl text-slate-900 dark:text-slate-50">
                  {service.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm"
                aria-label="Close service details"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              {service.description}
            </p>

            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-4 lg:gap-6 mb-4">
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {service.details.map(point => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-clinic-blue" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {service.beforeAfter.map((img, idx) => (
                    <figure key={img} className="text-[11px] text-slate-500">
                      <img
                        src={img}
                        alt={
                          idx === 0
                            ? `Before treatment example for ${service.name}`
                            : `After treatment example for ${service.name}`
                        }
                        className="h-24 w-full rounded-xl object-cover"
                      />
                      <figcaption className="mt-1">
                        {idx === 0 ? 'Before' : 'After'}
                      </figcaption>
                    </figure>
                  ))}
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200/70 dark:border-slate-800 bg-black/80">
                  <iframe
                    title={`${service.name} overview`}
                    src={service.videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-4">
              * Results and timelines vary by patient. During your consultation, our specialists
              will walk you through a personalized sequence of visits that fits your schedule.
            </p>

            <div className="flex flex-wrap gap-3 justify-end">
              <button
                onClick={onClose}
                className="rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 hover:border-clinic-blue/80 hover:text-clinic-blue transition"
              >
                Close
              </button>
              <a
                href="/appointments"
                className="rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
              >
                Book this service
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServicesModal;

