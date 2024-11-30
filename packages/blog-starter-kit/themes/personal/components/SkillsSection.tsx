import React from 'react';

type SkillCategory = {
  title: string;
  skills: string[];
};

const SkillCategoryCard = ({ category }: { category: SkillCategory }) => (
  <div className="bg-[#0A2A2A] rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
    <h3 className="text-yellow-400 font-semibold text-lg mb-4">{category.title}</h3>
    <div className="space-y-2">
      {category.skills.map((skill, index) => (
        <p key={index} className="flex items-start gap-2 text-gray-300">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5"></span>
          {skill}
        </p>
      ))}
    </div>
  </div>
);

export const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend Programming",
      skills: [
        "PHP (Advanced)",
        "NodeJS (Intermediate)",
        "GoLang (Beginner)",
        "Python (Intermediate)",
        "Scala (Beginner)"
      ]
    },
    {
      title: "Backend Frameworks",
      skills: [
        "Laravel, CodeIgniter, Lamina (PHP)",
        "PSR-4 Standard Framework (PHP)",
        "SWOOLE based & TCP/Socket (PHP)",
        "Flask and FastAPI (Python)",
        "ExpressJS, Loopback (NodeJS)",
        "Gin Framework (GoLang)"
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        "VueJS (Intermediate)",
        "Angular (Intermediate)",
        "ReactJS (Learning)",
        "jQuery (Advanced)",
        "JavaScript/TypeScript (Intermediate+)",
        "HTML/CSS/SCSS (Intermediate+)",
        "WebPack, Node Module, Yarn"
      ]
    },
    {
      title: "Databases & Caching",
      skills: [
        "MS SQL Server, MySQL, MongoDB",
        "Cassandra, SQLite, AWS DynamoDB",
        "Memcache, Redis, Aerospike",
        "File Caching"
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Docker, Jenkins",
        "Ubuntu, CentOS, Redhat (RHEL)",
        "Apache2, Nginx",
        "AWS, Google Cloud, Digital Ocean"
      ]
    },
    {
      title: "Project Management",
      skills: [
        "SCRUM Master",
        "Jira, Redmine, Trello, Airtable",
        "UML, Google draw.io, Visual Paradigm",
        "Workflow, Data Flow, Use Case",
        "Gantt Chart, Burndown Chart"
      ]
    },
    {
      title: "Business Domain Expertise",
      skills: [
        "E-Commerce (Single/Multi-stores)",
        "CRM/CMS (Single/Multi-tenancy)",
        "Payment Gateway Integration",
        "Google Map, MapBox Integration",
        "Mail Services (Mailgun, Sendinblue, Moosend)"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Technical Leadership",
        "Team Communication",
        "Problem Solving",
        "Project Estimation",
        "Documentation",
        "Code Management",
        "Remote Work Proficiency"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A2A2A]/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Technical <span className="text-yellow-400">Skills</span>
        </h2>
        <p className="text-gray-300 mb-12 text-lg">
          Comprehensive expertise across multiple technologies and domains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
