import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { services } from '../data/services.js';
import ServicesModal from '../components/ServicesModal.jsx';

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Helmet>
        <title>Dental Services | Yanet Speciality Dental</title>
        <meta
          name="description"
          content="Explore our specialty dental services including cosmetic dentistry, orthodontics, dental implants, pediatric dentistry, and professional teeth whitening."
        />
      </Helmet>
      <main className="section-padding">
        <div className="container-page">
          <header className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clinic-blue mb-2">
              Services
            </p>
            <h1 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-3">
              Specialty care at every stage
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
              Whether you are planning a subtle refresh or a full smile transformation, our
              multi-disciplinary team designs a sequence of visits that respects your schedule,
              comfort, and long-term oral health.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(service => (
              <article
                key={service.id}
                className="glass-panel rounded-3xl p-4 flex flex-col justify-between"
              >
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-clinic-soft text-lg">
                      {service.icon}
                    </span>
                    <h2 className="font-semibold text-slate-900 dark:text-slate-50">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {service.short}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(service)}
                  className="self-start mt-1 inline-flex items-center gap-1 rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-100 hover:border-clinic-blue hover:text-clinic-blue transition"
                >
                  View details & cases
                  <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
        <ServicesModal
          open={!!selected}
          service={selected}
          onClose={() => setSelected(null)}
        />
      </main>
    </>
  );
};

export default Services;

