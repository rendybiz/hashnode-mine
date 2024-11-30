import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  company: string;
  description: string[];
  technologies: string[];
  image: string;
  link?: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative overflow-hidden rounded-xl bg-dark-green-light border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">{project.title}</h3>
      <p className="text-yellow-400 mb-4">{project.company}</p>
      
      <div className="space-y-2 mb-4">
        {project.description.map((item, index) => (
          <p key={index} className="flex items-start gap-2 text-gray-300 text-sm">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></span>
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs font-medium bg-dark-green text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const PortfolioSection = () => {
  const projects: Project[] = [
    {
      title: 'Tech Lead Engineer',
      company: 'Upscalix',
      description: [
        'Design and deployment of Products (Web and mobile applications)',
        'Help define IT infrastructure strategy, architecture, and processes',
        'Analyze business requirements across organization',
        'Lead for more than 10+ developers'
      ],
      technologies: ['PHP', 'NodeJS', 'VueJS', 'Angular', 'Docker', 'AWS'],
      image: '/portfolio/upscalix.jpg'
    },
    {
      title: 'Senior Lead Engineer',
      company: 'Toptal Remote Work Inc.',
      description: [
        'Design and deployment of SaaS',
        'Infrastructure strategy and architecture',
        'Business requirements analysis and solutions'
      ],
      technologies: ['CubeJS', 'ExpressJS', 'ReactJS', 'PostgreSQL', 'AWS RDS', 'Docker', 'BigQuery'],
      image: '/portfolio/toptal.jpg'
    },
    {
      title: 'IT Manager',
      company: 'PT CLS System',
      description: [
        'Lead Team (10 People) for IT projects',
        'Maintain Agile SCRUM methodology',
        'Define IT infrastructure and architecture',
        'Business strategy development'
      ],
      technologies: ['PHP MVC', 'VueJS', 'Angular', 'IONIC', 'Flutter', 'Docker', 'Swoole', 'MongoDB'],
      image: '/portfolio/cls.jpg',
      link: 'https://cls-indo.com'
    },
    {
      title: 'Tech Lead',
      company: 'PT Myskin Indonesia',
      description: [
        'SaaS Design and Development',
        'IT Infrastructure Strategy',
        'Business Analysis',
        'SEO & SMO Support System'
      ],
      technologies: ['PHP WordPress', 'Laravel', 'ExpressJS', 'ReactJS', 'PostgreSQL', 'AWS'],
      image: '/portfolio/myskin.jpg'
    },
    {
      title: 'Senior Software Developer',
      company: 'Altastratus.id & CIRCL',
      description: [
        'Full Stack development for multiple clients',
        'High availability & performance optimization',
        'Engineering documentation and planning'
      ],
      technologies: ['Drupal', 'WordPress', 'PHP', 'MySQL', 'DynamoDB', 'Serverless', 'ExpressJS'],
      image: '/portfolio/audi.jpg',
      link: 'https://audiclubna.org'
    },
    {
      title: 'Senior Web & Mobile Engineer',
      company: 'IPAYMU Payment Gateway',
      description: [
        'Full stack Web & Android Development',
        'Backend Development (Admin Panel and APIs)',
        'Team Management and Communication'
      ],
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Springboot', 'Java', 'Android', 'jQuery'],
      image: '/portfolio/ipaymu.jpg',
      link: 'https://ipaymu.com'
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-green-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-yellow-400">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Over a decade of expertise in software development, technical leadership, and delivering impactful solutions across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
