'use client';

import { motion } from 'framer-motion';
import { Globe, Server, Database, Zap } from 'lucide-react';

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
                I&apos;m a skilled <strong className="text-white">Software Engineer</strong> with 3 years of experience specializing in Java, Spring Boot Microservices, Kafka, and PostgreSQL.
              </p>
              <p>
                Completed 3 Years at <strong className="text-white">Go Digit Insurance</strong>, I excel in building scalable systems, managing seamless data flow, and ensuring robust data storage.
              </p>
              <p>
                I&apos;m confident in my ability to deliver high-performance solutions and love collaborating with cross-functional teams to create impactful software.
              </p>
            </div>
            
            <div className="mt-12 flex gap-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">3</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">80+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">APIs Built</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">30k+</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Daily Requests</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-zinc-900/50 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Connecting Lines SVG */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Step 1: Entry Line (Incoming Request) */}
                <motion.path
                  d="M 50 0 L 50 9"
                  stroke="#60a5fa80"
                  strokeWidth="1"
                  fill="none"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0, transition: { duration: 0.3 } },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
                {/* Step 1 Arrow: Blue */}
                <motion.path
                  d="M -2 -3 L 0 0 L 2 -3 Z"
                  fill="#60a5fa"
                  transform="translate(50, 12)"
                  variants={{
                    hidden: { opacity: 0, transition: { duration: 0.1 } },
                    visible: { opacity: 1, transition: { delay: 0.8, duration: 0.2 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />

                {/* Step 2: Traffic to Logic */}
                <motion.path
                  d="M 50 20 L 50 39"
                  stroke="#a855f780" 
                  strokeWidth="1"
                  fill="none"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0, transition: { duration: 0.3 } },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 1.0, ease: "easeInOut" } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
                {/* Step 2 Arrow: Purple */}
                <motion.path
                  d="M -2 -3 L 0 0 L 2 -3 Z"
                  fill="#a855f7"
                  transform="translate(50, 42)"
                  variants={{
                    hidden: { opacity: 0, transition: { duration: 0.1 } },
                    visible: { opacity: 1, transition: { delay: 1.8, duration: 0.2 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
                
                {/* Step 3: Logic to Data */}
                <motion.path
                  d="M 46 58 L 28 78"
                  stroke="#22c55e80"
                  strokeWidth="1"
                  fill="none"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0, transition: { duration: 0.3 } },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 2.0, ease: "easeInOut" } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
                {/* Step 3 Arrow: Green */}
                <motion.path
                  d="M -2 -3 L 0 0 L 2 -3 Z"
                  fill="#22c55e"
                  transform="translate(26, 80) rotate(45)"
                  variants={{
                    hidden: { opacity: 0, transition: { duration: 0.1 } },
                    visible: { opacity: 1, transition: { delay: 2.8, duration: 0.2 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
                
                {/* Step 3: Logic to Events */}
                <motion.path
                  d="M 54 58 L 72 78"
                  stroke="#f9731680"
                  strokeWidth="1"
                  fill="none"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0, transition: { duration: 0.3 } },
                    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, delay: 2.0, ease: "easeInOut" } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
                {/* Step 3 Arrow: Orange */}
                <motion.path
                  d="M -2 -3 L 0 0 L 2 -3 Z"
                  fill="#f97316"
                  transform="translate(74, 80) rotate(-45)"
                  variants={{
                    hidden: { opacity: 0, transition: { duration: 0.1 } },
                    visible: { opacity: 1, transition: { delay: 2.8, duration: 0.2 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                />
              </svg>

              {/* Nodes */}
              <div className="absolute inset-0">
                {/* Top Node: User Traffic */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-2 border border-blue-500/20 backdrop-blur-sm z-10">
                    <Globe className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-blue-200 bg-black/40 px-2 rounded">User Traffic</span>
                </div>

                {/* Middle Node: Logic */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                   <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-2 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)] backdrop-blur-md">
                    <Server className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="text-sm font-medium text-purple-200 bg-black/40 px-2 rounded">Business Logic</span>
                  <span className="text-[10px] text-purple-400/60">Spring Boot</span>
                </div>

                {/* Bottom Left: Data */}
                <div className="absolute bottom-[8%] left-[25%] -translate-x-1/2 flex flex-col items-center">
                   <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-2 border border-green-500/20 backdrop-blur-sm z-10">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-xs font-medium text-green-200 bg-black/40 px-2 rounded">Secure Data</span>
                </div>

                {/* Bottom Right: Events */}
                <div className="absolute bottom-[8%] left-[75%] -translate-x-1/2 flex flex-col items-center">
                   <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-2 border border-orange-500/20 backdrop-blur-sm z-10">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xs font-medium text-orange-200 bg-black/40 px-2 rounded">Real-time Events</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
