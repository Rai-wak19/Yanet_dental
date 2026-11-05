import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services.js';

const ServicesOverview = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-clinic-light to-white dark:from-slate-950 dark:to-slate-950">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-2">
              Specialty Dental Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              From discreet orthodontics to full-mouth rehabilitation, each treatment plan is tailored to your unique goals, lifestyle, and timeline.
            </p>
          </div>
          <Link
            to="/services"
            className="self-start inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-slate-700 px-4 py-2 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 hover:border-clinic-blue/80 hover:text-clinic-blue transition"
          >
            View all services
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="glass-panel rounded-2xl p-4 flex flex-col justify-between"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="h-9 w-9 rounded-2xl bg-clinic-soft flex items-center justify-center text-lg">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-50">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                    {service.short}
                  </p>
                </div>
              </div>
              <Link
                to="/services"
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-clinic-blue hover:text-clinic-navy"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

