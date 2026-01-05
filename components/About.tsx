'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                I&apos;m a skilled <strong className="text-white">Software Engineer</strong> with 2.5 years of experience specializing in Java, Spring Boot Microservices, Kafka, and PostgreSQL.
              </p>
              <p>
                Currently at <strong className="text-white">Go Digit Insurance</strong>, I excel in building scalable systems, managing seamless data flow, and ensuring robust data storage.
              </p>
              <p>
                I&apos;m confident in my ability to deliver high-performance solutions and love collaborating with cross-functional teams to create impactful software.
              </p>
            </div>
            
            <div className="mt-12 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">2.5+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">APIs Built</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">30k+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Daily Requests</p>
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Placeholder for an image or abstract graphic */}
             <div className="aspect-square rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/5 p-8 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span className="text-3xl">👨‍💻</span>
                    </div>
                    <p className="text-gray-500">"Building robust backend systems for the future of fintech."</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
