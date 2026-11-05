import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Yanet Alvarez',
    title: 'Lead Cosmetic & Implant Dentist',
    bio: 'Internationally trained cosmetic and implant dentist with a focus on minimally invasive, biomimetic techniques.',
    image:
      'https://images.pexels.com/photos/8376236/pexels-photo-8376236.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Cosmetic Dentistry, Full-Mouth Rehabilitation'
  },
  {
    name: 'Dr. Noah Fernandes',
    title: 'Orthodontist',
    bio: 'Dedicated to creating functional, beautiful smiles using the latest in digital orthodontics and clear aligner technology.',
    image:
      'https://images.pexels.com/photos/5434019/pexels-photo-5434019.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Clear Aligners, Interceptive Orthodontics'
  },
  {
    name: 'Dr. Lila Mehta',
    title: 'Pediatric Dentist',
    bio: 'Passionate about transforming children’s perception of the dentist through gentle communication and play-based visits.',
    image:
      'https://images.pexels.com/photos/6234606/pexels-photo-6234606.jpeg?auto=compress&cs=tinysrgb&w=600',
    specialty: 'Pediatric Care, Preventive Dentistry'
  }
];

const TeamSection = () => {
  return (
    <section className="section-padding">
      <div className="container-page">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl text-slate-900 dark:text-slate-50 mb-2">
            The specialists behind your smile
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            A collaborative team of specialists ensures every treatment plan is reviewed from
            cosmetic, functional, and long-term health perspectives.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.title}`}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                  {member.name}
                </h3>
                <p className="text-xs text-clinic-blue font-medium mb-1">{member.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {member.specialty}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex-1">
                  {member.bio}
                </p>
                <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Hover to see more about each specialist’s focus and approach.
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

