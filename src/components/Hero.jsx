import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section-padding">
      <div className="container-page grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-clinic-soft/80 px-3 py-1 text-xs font-medium text-clinic-navy"
          >
            ✨ Elevating smiles with specialty care
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50 tracking-tight"
          >
            Your Smile, <span className="text-clinic-blue">Our Specialty</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl"
          >
            Yanet Speciality Dental combines advanced technology with a boutique,
            spa-like experience. From cosmetic artistry to complex restorative
            treatments, every visit is designed around your comfort and long-term
            oral health.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/appointments"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Book an Appointment
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 dark:border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 hover:border-clinic-blue/80 hover:text-clinic-blue transition"
            >
              Explore Services
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-6 pt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
          >
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                4.9 / 5 patient rating
              </p>
              <p>Trusted by families and professionals across the city.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">
                Same-day smile makeovers
              </p>
              <p>Advanced digital planning for predictable, beautiful results.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-gradient-to-br from-clinic-blue/30 to-clinic-soft blur-2xl -z-10" />
          <div className="absolute -bottom-10 -right-4 h-32 w-32 rounded-full bg-gradient-to-tr from-white to-clinic-soft border border-white shadow-soft -z-10" />

          <div className="glass-panel rounded-3xl p-3 sm:p-4 space-y-3">
            <div className="overflow-visible">
              <div className="relative rounded-[1.6rem] bg-gradient-to-tr from-clinic-blue/70 via-clinic-soft to-white p-[2px] shadow-soft">
                <div className="relative rounded-[1.4rem] overflow-hidden bg-slate-900/90">
                  <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] overflow-hidden">
                    <iframe
                      src="https://www.instagram.com/p/DS7rLIljSEE/embed"
                      title="Yanet Speciality Dental featured video"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-slate-950/10" />
                </div>
              </div>
            </div>
            <div className="mt-1 flex justify-between gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">
                  Featured at Yanet Speciality Dental
                </p>
                <p>See our team, technology, and real patient moments.</p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="font-semibold text-clinic-blue">Watch</p>
                <p>Instagram highlight</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

