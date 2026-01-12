'use client';

import { motion } from 'framer-motion';
import { Terminal, Cloud, Database, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend Engineering',
    icon: <Terminal className="w-6 h-6 text-blue-400" />,
    skills: [
      'Java 11', 'Spring Boot', 'Spring MVC', 
      'Spring JPA', 'Hibernate ORM', 'RESTful APIs', 
      'Aspect Programming'
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    skills: [
      'AWS', 'Docker', 'Kubernetes', 'Jenkins', 
      'Git/GitHub', 'Document Management (AWS/Azure)'
    ]
  },
  {
    title: 'Data & Messaging',
    icon: <Database className="w-6 h-6 text-green-400" />,
    skills: [
      'PostgreSQL', 'Apache Kafka', 'Data Modeling',
      'Transaction Management'
    ]
  },
  {
    title: 'System Solutions',
    icon: <Cpu className="w-6 h-6 text-purple-400" />,
    skills: [
      'Microservices', 'Auth & Authorization (JWT)', 
      'Payment Modules', 'Subscription Systems', 
      'Email/SMS Delivery', 'SEO Optimization'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-white/5 border border-white/5 text-gray-300 rounded-lg text-sm hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
