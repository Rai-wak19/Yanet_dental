import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Isabella M.',
    role: 'Smile makeover patient',
    text: 'From the first consultation, I felt like my smile was being designed just for me. The team walked me through every step and the results are beyond what I imagined.',
    image:
      'https://images.pexels.com/photos/3760850/pexels-photo-3760850.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Daniel K.',
    role: 'Full-arch implant patient',
    text: 'I had been putting off treatment for years out of fear. Dr. Yanet and her team rebuilt not just my teeth but my confidence. I can eat and laugh freely again.',
    image:
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Amira & Leo',
    role: 'Pediatric & orthodontic care',
    text: 'My son actually looks forward to his visits. The pediatric area is so calm and the orthodontic team made braces an empowering experience for him.',
    image:
      'https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const videoTestimonials = [
  {
    id: 'DR2JHtbiLfI',
    src: 'https://www.instagram.com/p/DR2JHtbiLfI/embed',
    name: 'Patient testimonial',
    summary: 'A real patient sharing their experience with Yanet Speciality Dental.'
  },
  {
    id: 'DOv4gDKCJsh',
    src: 'https://www.instagram.com/p/DOv4gDKCJsh/embed',
    name: 'Smile transformation story',
    summary: 'A before-and-after journey highlighting a personalized treatment plan.'
  },
  {
    id: 'DMnZqmuohST',
    src: 'https://www.instagram.com/p/DMnZqmuohST/embed',
    name: 'Implant success case',
    summary: 'Patient describing comfort and function after dental implant therapy.'
  },
  {
    id: 'DS5EAldDRKE',
    src: 'https://www.instagram.com/p/DS5EAldDRKE/embed',
    name: 'Family experience',
    summary: 'Family feedback on pediatric and orthodontic care under one roof.'
  },
  {
    id: 'DH8tM4QIu4u',
    src: 'https://www.instagram.com/p/DH8tM4QIu4u/embed',
    name: 'Anxiety-free visit',
    summary: 'A patient talk-through of how their dental anxiety was eased during treatment.'
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-padding bg-white dark:bg-slate-950">
      <div className="container-page grid lg:grid-cols-[1.2fr,1fr] gap-10 items-start">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-2">
            Stories behind every smile
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mb-6">
            Patients choose Yanet Speciality Dental for expertise, stay for the experience, and
            return because they feel genuinely cared for.
          </p>

          <div className="flex gap-2 mb-4">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                aria-label={`View testimonial from ${t.name}`}
                className={`h-1.5 flex-1 rounded-full transition-all ${i === index ? 'bg-clinic-blue w-10' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
              />
            ))}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45 }}
                className="glass-panel rounded-3xl p-5 sm:p-6"
              >
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mb-4">
                  “{active.text}”
                </p>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={active.image}
                    alt={`Portrait of patient ${active.name}`}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {active.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{active.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-panel rounded-3xl p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2">
              Recognitions
            </p>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <p>🏅 Accredited Cosmetic Dentistry Center</p>
              <p>🏆 Top Implant Practice in the Region 2023–2025</p>
              <p>💎 Digital Smile Design Certified Clinic</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="glass-panel rounded-2xl p-4">
              <p className="font-semibold mb-1 text-slate-900 dark:text-slate-50">
                Safety & Hygiene
              </p>
              <p>Hospital-grade sterilization and air filtration systems in every treatment room.</p>
            </div>
            <div className="glass-panel rounded-2xl p-4">
              <p className="font-semibold mb-1 text-slate-900 dark:text-slate-50">
                Comfort-First Design
              </p>
              <p>
                Noise-cancelling headphones, warm blankets, and aromatherapy options to ease
                anxiety.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clinic-blue mb-1">
              Video testimonials
            </p>
            <h3 className="font-display text-xl text-slate-900 dark:text-slate-50">
              Hear directly from our patients
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
            Curated highlights from our community, presented in a clean, distraction-free format so
            you can focus on what matters: their stories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videoTestimonials.map(video => (
            <div
              key={video.id}
              className="glass-panel rounded-3xl p-3 sm:p-4 flex flex-col gap-3"
            >
              <div className="relative rounded-[1.4rem] bg-gradient-to-tr from-clinic-blue/70 via-clinic-soft to-white p-[2px] shadow-soft">
                <div className="relative rounded-[1.2rem] overflow-hidden bg-black">
                  <div className="relative w-full aspect-[9/16] sm:aspect-[4/5] overflow-hidden">
                    <iframe
                      src={video.src}
                      title={video.name}
                      className="absolute inset-0 h-[120%] w-[120%] -translate-x-[10%] -translate-y-[8%] scale-110 border-0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-slate-950/5" />
                  </div>
                </div>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-slate-50 mb-0.5">
                  {video.name}
                </p>
                <p>{video.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

