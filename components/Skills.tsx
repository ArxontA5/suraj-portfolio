'use client';

import { motion } from 'framer-motion';

const skills = [
  'Java 11', 'Spring Boot', 'Spring MVC', 'Spring JPA',
  'Hibernate ORM', 'Microservices', 'Kafka', 'PostgreSQL',
  'Kubernetes', 'Jenkins', 'Docker', 'AWS',
  'RESTful APIs', 'Aspect Programming', 'JSON Web Token', 'Git/GitHub','Authentication-Authorization',
  'WebApp-Development','SEO Optimization','Dynamic Email/SMS Delivery Systems','Document Management Systems-AWS/AZURE',
  'Recurring Payment Modules','Subscription Management'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset for building robust, scalable, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-colors text-center group"
            >
              <h3 className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
