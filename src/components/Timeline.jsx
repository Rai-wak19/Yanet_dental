import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2010',
    title: 'Clinic Founded',
    description:
      'Yanet Speciality Dental opens as a boutique cosmetic practice with a focus on smile makeovers.'
  },
  {
    year: '2015',
    title: 'Implant & Digital Expansion',
    description:
      'Introduction of 3D CBCT imaging and guided implant surgery, expanding into comprehensive restorative care.'
  },
  {
    year: '2019',
    title: 'Pediatric & Orthodontic Wing',
    description:
      'Dedicated pediatric and orthodontic floors designed to be calm, distraction-free, and family-friendly.'
  },
  {
    year: '2024',
    title: 'Accredited Center of Excellence',
    description:
      'Recognized as a regional center of excellence for complex cosmetic and implant cases.'
  }
];

const Timeline = () => {
  return (
    <section className="section-padding bg-clinic-light/60 dark:bg-slate-950">
      <div className="container-page">
        <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-6">
          A decade of specialized care
        </h2>
        <div className="relative pl-4 sm:pl-6">
          <div className="absolute left-[10px] sm:left-[14px] top-0 bottom-0 w-px bg-gradient-to-b from-clinic-blue/20 via-clinic-blue/50 to-transparent" />
          <div className="space-y-6">
            {milestones.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.05 }}
                className="relative pl-6 sm:pl-8"
              >
                <div className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 bg-clinic-blue shadow-soft" />
                <p className="text-xs font-semibold text-clinic-blue mb-1">
                  {item.year}
                </p>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

