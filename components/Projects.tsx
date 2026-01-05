'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Database, Lock } from 'lucide-react';
import Link from 'next/link';

// Placeholder projects based on your skills (Java/Spring/Microservices)
const projects = [
  {
    title: 'Distributed Event Streaming Platform',
    description: 'A scalable microservices architecture using Spring Boot and Kafka to handle high-throughput event streaming. Implemented reliable message consumption and fault tolerance.',
    tags: ['Java 11', 'Spring Boot', 'Kafka', 'Docker'],
    links: {
      github: '#',
      demo: '#'
    },
    icon: <Server className="w-10 h-10 text-blue-400" />
  },
  {
    title: 'Secure Payment Gateway Integration',
    description: 'Robust backend service integrating multiple payment providers (UPI, NetBanking). Features include deep-linking support, encryption, and automated reconciliation.',
    tags: ['Java', 'PostgreSQL', 'Redis', 'Security'],
    links: {
      github: '#',
      demo: '#'
    },
    icon: <Lock className="w-10 h-10 text-purple-400" />
  },
  {
    title: 'High-Performance API Service',
    description: 'Optimized RESTful API suite handling 30k+ daily requests. Designed for low latency with database indexing and asynchronous processing strategies.',
    tags: ['Spring MVC', 'Hibernate', 'SQL', 'Jenkins'],
    links: {
      github: '#',
      demo: '#'
    },
    icon: <Database className="w-10 h-10 text-emerald-400" />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-gray-400 max-w-xl">
            showcasing backend expertise and scalable system designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:-translate-y-2 group"
            >
              <div className="mb-6 bg-zinc-800/50 w-fit p-4 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-300 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link 
                  href={project.links.github} 
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={18} /> Code
                </Link>
                <Link 
                  href={project.links.demo} 
                  className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} /> Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
