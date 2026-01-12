'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Go Digit Insurance Pvt Ltd',
    role: 'Software Engineer',
    period: "Dec '23 - Present",
    description: [
      'Developed and deployed over 50 RESTful APIs using Java, Spring Boot, and SQL, handling 30,000+ daily requests.',
      'Integrated Kafka Producers and Consumers for microservices event communication.',
      'Deep linked UPI apps (BHIM, Paytm) for Payment Gateway managed Bank-Payments and Recurring-Payments.',
      'Streamlined operations of 20+ APIs by optimizing database queries and implementing asynchronous execution.',
      'Designed database schemas and implemented caching strategies for optimized data retrieval.',
      'Deployed services using Jenkins and Kubernetes, ensuring high availability and reliability.'
    ],
    tech: ['Java 11', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Redis']
  },
  {
    company: 'Go Digit Insurance Pvt Ltd',
    role: 'Graduate Trainee Engineer',
    period: "2022 - Dec '23",
    description: [
      'Worked on One-API Project (B2B Integration Microservice), developing Basic CRUD RESTful APIs.',
      'Assisted more than 15 partners in integrating their products with the service.',
      'Developed HTML pages and JSPs for APIs and Email Templates.',
      'Collaborated on gateway configurations for customer delivery.'
    ],
    tech: ['Java', 'REST APIs', 'HTML/JSP', 'MySQL', 'Git']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <Briefcase className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          <p className="text-gray-400 max-w-xl text-lg">
            My professional journey in building scalable software solutions.
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-4 top-0 w-8 h-8 md:w-8 md:h-8 -translate-x-1/2 bg-black border border-blue-500/50 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" />
              </div>

              {/* Card Content */}
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-lg text-blue-200 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit h-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-blue-500/50 rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {exp.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
