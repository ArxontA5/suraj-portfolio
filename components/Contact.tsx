'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle2, Github, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log('Form Data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to build something extraordinary? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl"
        >
          <div className="grid md:grid-cols-5 h-full">
            {/* Left Panel: Contact Info & Visuals */}
            <div className="md:col-span-2 bg-black/40 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:surajvprasd@gmail.com"
                    className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-sm">surajvprasd@gmail.com</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin size={18} />
                    </div>
                    <span className="text-sm">Suraj Prasad V</span>
                  </a>

                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <span className="text-sm">Bangalore, India</span>
                  </div>
                </div>
              </div>

              {/* Decorative Globe */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 opacity-20 pointer-events-none">
                 <Image 
                    src="/globe.svg" 
                    alt="Globe" 
                    width={256} 
                    height={256} 
                    className="animate-[spin_20s_linear_infinite]"
                 />
              </div>

              <div className="relative z-10 mt-12">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Social Connect</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel: Form */}
            <div className="md:col-span-3 p-8 md:p-10 bg-white/[0.02]">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-6 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Name</label>
                      <input
                        {...register('name')}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm",
                          errors.name && "border-red-500/50 focus:ring-red-500/50"
                        )}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-400 ml-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Email</label>
                      <input
                        {...register('email')}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm",
                          errors.email && "border-red-500/50 focus:ring-red-500/50"
                        )}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-400 ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                    <input
                      {...register('subject')}
                      className={cn(
                        "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm",
                        errors.subject && "border-red-500/50 focus:ring-red-500/50"
                      )}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && <p className="text-xs text-red-400 ml-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Message</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className={cn(
                        "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none text-sm",
                        errors.message && "border-red-500/50 focus:ring-red-500/50"
                      )}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-xs text-red-400 ml-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/20"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        <div className="mt-24 text-center text-gray-600 text-sm">
          <p>© 2026 Suraj Prasad V. Built with Next.js & Tailwind.</p>
        </div>
      </div>
    </section>
  );
}