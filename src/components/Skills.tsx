import React from 'react';
import { motion } from 'motion/react';
import { CV_DATA } from '../data';
import { Layers, Database, MonitorSmartphone, Bug, Box, Server } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

const icons = {
  programming: <Box className="w-5 h-5 text-white" />,
  frameworks: <Layers className="w-5 h-5 text-white" />,
  databases: <Database className="w-5 h-5 text-white" />,
  qa: <Bug className="w-5 h-5 text-white" />,
  infrastructure: <Server className="w-5 h-5 text-white" />,
  core: <MonitorSmartphone className="w-5 h-5 text-white" />
};

const formatTitle = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

export const Skills = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase tracking-widest">Technical <span className="text-zinc-500">Competencies</span></h2>
          <p className="text-zinc-400 max-w-2xl font-mono text-sm uppercase tracking-wider">A comprehensive overview of my technical toolkit, languages, and core proficiencies.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(CV_DATA.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="p-6 flex flex-col h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-[#111] rounded-md border border-white/10">
                    {icons[category as keyof typeof icons]}
                  </div>
                  <h3 className="font-semibold text-lg text-white uppercase tracking-widest text-sm">
                    {formatTitle(category)}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-sm bg-[#111] border border-white/10 rounded-md text-zinc-300 font-mono tracking-wider uppercase text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
