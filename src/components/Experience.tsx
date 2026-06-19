import React from 'react';
import { motion } from 'motion/react';
import { CV_DATA } from '../data';
import { Calendar, Building2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase tracking-widest">Work <span className="text-zinc-500">Experience</span></h2>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {CV_DATA.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-6 h-6 rounded-none border border-white/20 bg-[#020202] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 md:p-8 rounded-2xl relative">
                <div className="flex flex-col space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider">{job.role}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
                      <span className="flex items-center"><Building2 className="w-4 h-4 mr-2" /> {job.company}</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {job.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-zinc-300 text-sm font-light leading-relaxed flex items-start">
                        <span className="mr-4 mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-white/50" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image for the empty side */}
              <div className="hidden md:flex md:w-[calc(50%-2.5rem)] md:order-2 justify-center items-center h-full relative group-odd:pr-8 group-even:pl-8">
                <img 
                  src="/ide-setup.png" 
                  alt="Coding IDE Setup" 
                  className="w-full h-auto max-h-[400px] object-cover opacity-50 transition-opacity duration-700 hover:opacity-80"
                  style={{ 
                    maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)', 
                    WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)' 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
