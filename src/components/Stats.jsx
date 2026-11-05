import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const statItems = [
  { label: 'Smiles Transformed', value: 3200, suffix: '+' },
  { label: 'Implants Placed', value: 850, suffix: '+' },
  { label: 'Years of Expertise', value: 15, suffix: '+' },
  { label: 'Patient Satisfaction', value: 98, suffix: '%' }
];

const AnimatedNumber = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 900;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="section-padding">
      <div className="container-page glass-panel rounded-3xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-2xl text-slate-900 dark:text-slate-50 mb-2">
              A clinic built on trust
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              Yanet Speciality Dental has quietly become a destination clinic for complex cases and
              smile transformations from around the region.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            These numbers update in real time as we continue to care for patients every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200/70 dark:border-slate-700/80 rounded-2xl px-4 py-5 bg-white/60 dark:bg-slate-950/60"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {item.label}
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-clinic-blue">
                <AnimatedNumber value={item.value} suffix={item.suffix} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

