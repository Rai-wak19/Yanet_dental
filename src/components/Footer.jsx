import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 mt-16">
      <div className="container-page py-10 sm:py-12 lg:py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-display text-xl text-slate-900 dark:text-slate-50">
            Yanet Speciality Dental
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            A high-end specialty dental clinic dedicated to artistry, precision,
            and the long-term health of your smile.
          </p>
          <div className="flex gap-3 text-slate-500 dark:text-slate-400 text-xl">
            <a href="#" aria-label="Visit our Instagram" className="hover:text-clinic-blue">
              ⧉
            </a>
            <a href="#" aria-label="Visit our Facebook" className="hover:text-clinic-blue">
              f
            </a>
            <a href="#" aria-label="Visit our LinkedIn" className="hover:text-clinic-blue">
              in
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <Link to="/about" className="hover:text-clinic-blue">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-clinic-blue">
                Services
              </Link>
            </li>
            <li>
              <Link to="/appointments" className="hover:text-clinic-blue">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-clinic-blue">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Newsletter
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Subscribe for smile care tips and clinic updates.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2"
            onSubmit={e => {
              e.preventDefault();
              // TODO: Integrate newsletter subscription API here.
              alert('Thank you for subscribing to our newsletter!');
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
            />
            <button
              type="submit"
              className="rounded-full bg-clinic-blue px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-clinic-navy transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200/70 dark:border-slate-800">
        <div className="container-page py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Yanet Speciality Dental. All rights reserved.</p>
          <p>Crafted with care for healthy, confident smiles.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

