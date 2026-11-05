import React, { useState } from 'react';
import AvailabilityCalendar from './AvailabilityCalendar.jsx';

const servicesOptions = [
  'Cosmetic Dentistry',
  'Orthodontics',
  'Dental Implants',
  'Pediatric Dentistry',
  'Teeth Whitening',
  'Comprehensive Exam'
];

const AppointmentForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: Replace this mock submit with a POST request to your backend API (FastAPI / Node.js).
    // Example:
    // await fetch('/api/appointments', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    console.log('Appointment form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const availabilityStatus =
    form.date && form.time
      ? 'This slot looks available. Our team will confirm by phone or email within one business day.'
      : 'Select a date and preferred time to preview availability.';

  return (
    <div className="grid lg:grid-cols-[1.4fr,1fr] gap-6 lg:gap-8 items-start">
      <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clinic-blue mb-1">
              Book an appointment
            </p>
            <h2 className="font-display text-xl sm:text-2xl text-slate-900 dark:text-slate-50">
              Reserve your visit
            </h2>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs">
            For urgent dental emergencies, please call us directly at +1 (555) 012-3456.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
              placeholder="+1 (555) 012-3456"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
              Service
            </label>
            <select
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
            >
              <option value="">Select a service</option>
              {servicesOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              required
              value={form.date}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
              Preferred Time
            </label>
            <input
              type="time"
              name="time"
              required
              value={form.time}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
            Notes for our team (optional)
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
            placeholder="Share your goals, concerns, or previous dental history to help us prepare."
          />
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          By submitting this form, you agree that our team may contact you by phone, SMS, or email
          to confirm your appointment and share pre-visit instructions.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Confirm Request
            <span aria-hidden="true">→</span>
          </button>
          {submitted && (
            <div className="text-xs text-emerald-600 dark:text-emerald-400">
              Thank you. Your request has been received. A confirmation will follow shortly.
            </div>
          )}
        </div>
      </form>

      <div className="space-y-4">
        <AvailabilityCalendar
          value={form.date}
          onChange={iso => setForm(prev => ({ ...prev, date: iso }))}
        />
        <div className="glass-panel rounded-3xl p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-50 mb-1">
            Slot preview
          </p>
          <p>{availabilityStatus}</p>
          <p className="mt-2 text-[11px] text-slate-500">
            You can optionally sync confirmed appointments with your personal calendar (Google,
            Apple, Outlook) via the confirmation email.
          </p>
          {/* TODO: When backend is implemented, attach a calendar invite (Google Calendar / ICS) in the confirmation email. */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;

