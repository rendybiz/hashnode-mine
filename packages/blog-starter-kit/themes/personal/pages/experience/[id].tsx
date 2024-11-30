import { useRouter } from 'next/router';
import { experienceData } from '../../data/experience';

export default function ExperienceDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const experience = experienceData.find(exp => exp.id === id);

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A2A2A] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => router.back()} 
          className="text-yellow-400 mb-8 flex items-center hover:text-yellow-300"
        >
          ← Back
        </button>

        <div className="bg-[#0A2A2A] rounded-xl p-8 border border-yellow-400/20">
          <div className="mb-8">
            <p className="text-yellow-400 text-sm mb-2">{experience.year}</p>
            <h1 className="text-4xl font-bold mb-2 text-white">{experience.title}</h1>
            <p className="text-xl text-gray-300">{experience.company}</p>
          </div>

          {experience.description && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Responsibilities</h2>
              <div className="space-y-2">
                {experience.description.map((item, index) => (
                  <p key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5"></span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          {experience.technologies && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Technologies Used</h2>
              <div className="space-y-2">
                {experience.technologies.map((tech, index) => (
                  <p key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5"></span>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          )}

          {experience.products && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Products & Services</h2>
              <div className="space-y-2">
                {experience.products.map((product, index) => (
                  <p key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mt-1.5"></span>
                    {product}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
