import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/appointments', label: 'Appointments' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between py-3 sm:py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-clinic-blue to-clinic-navy flex items-center justify-center shadow-soft">
            <span className="text-white font-semibold text-lg">Y</span>
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg sm:text-xl text-slate-900 dark:text-slate-50">
              Yanet Speciality Dental
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
              Your Smile, Our Specialty
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-clinic-blue ${
                    isActive
                      ? 'text-clinic-blue'
                      : 'text-slate-700 dark:text-slate-200'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 shadow-sm hover:shadow-md transition"
          >
            <span className="text-lg">
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
          </button>

          <Link
            to="/appointments"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Book Now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="mr-1 h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 shadow-sm"
          >
            <span className="text-lg">
              {theme === 'light' ? '🌙' : '☀️'}
            </span>
          </button>
          <button
            type="button"
            className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 shadow-sm"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-900 dark:bg-slate-100 transition-transform ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-slate-900 dark:bg-slate-100 transition-opacity ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-slate-900 dark:bg-slate-100 transition-transform ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="container-page py-4 flex flex-col gap-3 text-sm font-medium">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `py-1 ${
                      isActive
                        ? 'text-clinic-blue'
                        : 'text-slate-700 dark:text-slate-200'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/appointments"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-4 py-2 text-sm font-semibold text-white shadow-soft"
              >
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

