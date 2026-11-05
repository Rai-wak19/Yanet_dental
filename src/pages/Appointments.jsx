import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppointmentForm from '../components/AppointmentForm.jsx';

const Appointments = () => {
  return (
    <>
      <Helmet>
        <title>Book an Appointment | Yanet Speciality Dental</title>
        <meta
          name="description"
          content="Request an appointment at Yanet Speciality Dental. Choose your preferred service, date, and time, and our team will confirm your visit."
        />
      </Helmet>
      <main className="section-padding bg-clinic-light/70 dark:bg-slate-950">
        <div className="container-page">
          <AppointmentForm />
        </div>
      </main>
    </>
  );
};

export default Appointments;

