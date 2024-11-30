import React from 'react';
import Link from 'next/link';
import { experienceData } from '../data/experience';

const ExperienceCard = ({ id, year, title, company }: { id: string, year: string, title: string, company: string }) => (
  <div className="group relative bg-transparent flex items-start gap-4">
    <Link 
      href={`/experience/${id}`}
      className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
    >
      <svg 
        className="w-4 h-4 text-white ml-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2.5} 
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
    <div>
      <p className="text-black text-sm font-medium mb-1">{year}</p>
      <h3 className="font-bold text-2xl mb-1 text-black">{title}</h3>
      <p className="text-black/80">{company}</p>
    </div>
  </div>
);

export const ExperienceSection = () => {
  // Split experiences into two columns
  const midpoint = Math.ceil(experienceData.length / 2);
  const leftExperiences = experienceData.slice(0, midpoint);
  const rightExperiences = experienceData.slice(midpoint);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <style jsx>{`
        .scrollable-column::-webkit-scrollbar {
          width: 8px;
        }
        .scrollable-column::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollable-column::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .scrollable-column::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
      `}</style>
      <div className="max-w-6xl mx-auto">
        <div className="bg-yellow-400 rounded-[2rem] p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="scrollable-column space-y-12 max-h-[800px] overflow-y-auto pr-6">
              {leftExperiences.map((exp) => (
                <ExperienceCard 
                  key={exp.id}
                  id={exp.id}
                  year={exp.year}
                  title={exp.title}
                  company={exp.company}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-black/10 absolute left-1/2 top-12 bottom-12"></div>

            {/* Right Column */}
            <div className="scrollable-column space-y-12 max-h-[800px] overflow-y-auto pl-6">
              {rightExperiences.map((exp) => (
                <ExperienceCard 
                  key={exp.id}
                  id={exp.id}
                  year={exp.year}
                  title={exp.title}
                  company={exp.company}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
