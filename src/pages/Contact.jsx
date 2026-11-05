import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Replace this console.log with a POST request to your backend contact endpoint.
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Yanet Speciality Dental</title>
        <meta
          name="description"
          content="Contact Yanet Speciality Dental for appointments, questions, and smile consultations. View our location, hours, and direct contact information."
        />
      </Helmet>
      <main className="section-padding">
        <div className="container-page grid lg:grid-cols-[1.4fr,1fr] gap-8 items-start">
          <section aria-labelledby="contact-heading" className="space-y-5">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clinic-blue mb-2">
                Contact
              </p>
              <h1
                id="contact-heading"
                className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-3"
              >
                We’re here to answer every question
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                Reach out to discuss treatment options, pricing, or to coordinate care with your
                existing dentist or specialist.
              </p>
            </header>

            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-3xl p-5 sm:p-6 space-y-3"
            >
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
                  placeholder="Your name"
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
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-clinic-blue"
                  placeholder="How can we help?"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-clinic-blue to-clinic-navy px-6 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition"
                >
                  Send message
                </button>
                {submitted && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">
                    Thank you for reaching out. We will get back to you soon.
                  </span>
                )}
              </div>
            </form>
          </section>

          <section className="space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-soft">
              <iframe
                title="Yanet Speciality Dental location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01978963018!2d-122.40135188468148!3d37.79361797975633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d2f0d5a9%3A0xa12b30c0e2c6c9c3!2sDental%20Clinic!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="glass-panel rounded-3xl p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">Clinic address</p>
                <p>123 Smile Avenue, Suite 14B</p>
                <p>City Center, Yanet District</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">Contact</p>
                <p>Phone: +1 (555) 012-3456</p>
                <p>Email: hello@yanetspecialitydental.com</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">
                  Operating hours
                </p>
                <p>Mon–Fri: 8:30 AM – 7:30 PM</p>
                <p>Sat: 9:00 AM – 3:00 PM</p>
                <p>Sun: Emergency appointments by request</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;

