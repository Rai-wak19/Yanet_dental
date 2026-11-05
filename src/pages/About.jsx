import React from 'react';
import { Helmet } from 'react-helmet-async';
import TeamSection from '../components/TeamSection.jsx';
import Timeline from '../components/Timeline.jsx';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Yanet Speciality Dental</title>
        <meta
          name="description"
          content="Learn about the mission, vision, and specialist team behind Yanet Speciality Dental, a high-end clinic dedicated to advanced cosmetic and restorative care."
        />
      </Helmet>
      <main>
        <section className="section-padding bg-clinic-light/70 dark:bg-slate-950">
          <div className="container-page grid lg:grid-cols-[1.3fr,1fr] gap-8 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clinic-blue mb-2">
                About the clinic
              </p>
              <h1 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-4">
                Precision dentistry, crafted with warmth
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4">
                At Yanet Speciality Dental, our mission is to combine leading-edge dentistry with a
                calm, human-centered experience. Every treatment—from a routine cleaning to full
                rehabilitation—is planned collaboratively by our specialists.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Our vision is to redefine what a dental visit feels like: transparent, comfortable,
                and deeply personalized. We invest in advanced technology not to replace human care,
                but to amplify it.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-5 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <h2 className="font-semibold text-slate-900 dark:text-slate-50">
                Clinic at a glance
              </h2>
              <ul className="space-y-2">
                <li>• Multi-specialty team under one roof</li>
                <li>• Digital X-rays, 3D imaging, and guided surgery</li>
                <li>• Private treatment suites with comfort amenities</li>
                <li>• Transparent treatment plans and payment options</li>
              </ul>
            </div>
          </div>
        </section>
        <TeamSection />
        <Timeline />
      </main>
    </>
  );
};

export default About;

