'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Shield, Zap } from 'lucide-react';
import NeuralNetworkBackground from './NeuralNetworkBackground';

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Dynamic Particle Background */}
      <NeuralNetworkBackground />

      {/* Decorative Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">System Status: Online</span>
            </div>
          </motion.div>

          {/* Glassmorphism Hero Content */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none"
            >
              <span className="block text-white">SURAJ</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
                PRASAD V
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Architecting high-performance <span className="text-blue-400">Backend Systems</span> and
              <span className="text-purple-400"> Distributed Services</span> for the modern web.
            </motion.p>

            {/* Quick Stats/Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mb-12 text-xs font-mono text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-500/50" />
                <span>SPRING BOOT</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-500/50" />
                <span>KAFKA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500/50" />
                <span>POSTGRESQL</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#experience"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all hover:border-white/20"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-800 to-transparent" />
      </motion.div>
    </section>
  );
}
