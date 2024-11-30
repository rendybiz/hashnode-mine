import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#0A2A2A] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="space-y-4">
              <p className="text-sm">👋 Hi, I'm Rendy Adi Saputra</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Tech Lead &<br />
                <span className="text-yellow-400"> Senior Fullstack</span><br />
                Developer
              </h1>
              
              <div className="mt-6">
                <p className="text-gray-300 text-lg">
                  10+ years of experience in <span className="text-yellow-400">web development</span><br />
                  with strong expertise in <span className="text-yellow-400">technical leadership</span><br />
                  and SCRUM mastery.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-semibold text-xl">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-300">
                  {/* Backend */}
                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">Backend</h4>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      PHP / Laravel / WordPress
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Node.js / Express / Loopback
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Python / GoLang / FastAPI
                    </p>
                  </div>

                  {/* Frontend */}
                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">Frontend</h4>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      React.js / Next.js / Remix
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Astro.js / Alpine.js
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      JavaScript / TypeScript
                    </p>
                  </div>

                  {/* Mobile & Database */}
                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">Mobile & Database</h4>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      React Native / Flutter
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      MySQL / MongoDB / DynamoDB
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Redis / Memcache
                    </p>
                  </div>

                  {/* DevOps & Cloud */}
                  <div className="space-y-2">
                    <h4 className="text-yellow-400 font-semibold">DevOps & Cloud</h4>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Docker / NGINX / Apache
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      AWS / Cloud Panel
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      Siteground / WPEngine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-transparent rounded-3xl">
                <Image
                  src="/assets/profile.png"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                  priority
                />
              </div>
              {/* Background Decorations */}
              <div className="absolute -z-10 w-full h-full">
                <div className="absolute top-10 -right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
