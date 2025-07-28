import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, Globe, Lightbulb, BookOpen, Target, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Cpu, Network, Eye, Settings, Microscope, GraduationCap, Cog, FlaskConical, Binary } from 'lucide-react';

const KediLabsHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroSlides = [
    {
      title: "Engineering Africa's Digital Future Through STEM Excellence",
      subtitle: "Transforming educational institutions with cutting-edge engineering platforms, sustainable innovation, and strategic partnerships that drive technological advancement across East Africa.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Building Tomorrow's Engineering Leaders",
      subtitle: "Revolutionary STEM education ecosystems designed for African contexts, combining engineering excellence with environmental sustainability for lasting institutional transformation.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Bridging Technology Access Through Educational Innovation",
      subtitle: "Creating accessible, scalable, and transformative learning platforms that unlock engineering potential and drive STEM advancement across African universities and technical institutions.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const impactStats = [
    { number: "50,000+", label: "Engineering students reached", icon: <Users className="h-8 w-8" /> },
    { number: "200+", label: "Technical institutions partnered", icon: <GraduationCap className="h-8 w-8" /> },
    { number: "15", label: "Countries with active programs", icon: <Globe className="h-8 w-8" /> },
    { number: "98%", label: "Institutional partnership retention", icon: <Award className="h-8 w-8" /> }
  ];

  const valueProps = [
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Engineering Education Platforms",
      description: "Advanced STEM learning environments integrating hands-on engineering principles with AI-powered digital innovation for comprehensive skill development.",
      color: "from-[#008B8B] to-[#36454F]"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Sustainable Technology Integration",
      description: "Environmentally conscious educational solutions that embed green engineering practices while delivering exceptional learning and research outcomes.",
      color: "from-[#379504] to-[#008B8B]"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Strategic Institutional Partnerships",
      description: "Comprehensive collaboration frameworks with universities, government bodies, and international organizations for systemic STEM education transformation.",
      color: "from-[#36454F] to-[#379504]"
    },
    {
      icon: <FlaskConical className="h-12 w-12" />,
      title: "Research-Driven Innovation",
      description: "Evidence-based educational technology development supported by rigorous research methodologies and continuous improvement frameworks.",
      color: "from-[#FF6B35] to-[#008B8B]"
    }
  ];

  const technologyCategories = [
    {
      icon: <Binary className="h-16 w-16" />,
      title: "Digital Engineering Labs",
      description: "Virtual laboratories and computational environments for advanced STEM learning"
    },
    {
      icon: <GraduationCap className="h-16 w-16" />,
      title: "Faculty Development",
      description: "Professional development in digital pedagogy and engineering education"
    },
    {
      icon: <Eye className="h-16 w-16" />,
      title: "Educational Intelligence",
      description: "Analytics and insights for institutional performance optimization"
    },
    {
      icon: <Cog className="h-16 w-16" />,
      title: "Innovation Ecosystems",
      description: "Engineering design centers and technology incubation spaces"
    },
    {
      icon: <Target className="h-16 w-16" />,
      title: "Access & Equity",
      description: "Rural outreach and inclusive STEM education initiatives"
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: "Green Engineering",
      description: "Sustainable technology and environmental engineering education"
    }
  ];

  const featuredPrograms = [
    {
      title: "Advancing digital engineering education through transformative learning platforms",
      description: "Comprehensive STEM environments that integrate theoretical engineering principles with practical applications for African educational contexts.",
      link: "Explore engineering platforms",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building sustainable educational infrastructure for lasting institutional impact",
      description: "Green technology solutions that establish environmentally conscious engineering practices across East African technical institutions.",
      link: "Learn about sustainability programs",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Transforming institutional capacity through strategic partnership frameworks",
      description: "Collaborative programs and faculty development initiatives that create comprehensive technological advancement in educational institutions.",
      link: "Discover partnership opportunities",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Empowering innovation ecosystems from community colleges to research universities",
      description: "Scalable educational technology solutions serving the full spectrum of African higher education and technical training institutions.",
      link: "View institutional impact",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-700 via-teal-600 to-slate-700">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/90 via-slate-700/60 to-transparent z-10"></div>
        
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-6">
                <span className="bg-green-600/20 text-green-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-green-600/30">
                  <Cog className="inline h-4 w-4 mr-2" />
                  Engineering • Technology • Innovation
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Explore STEM Solutions
                </button>
                <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group">
                  Schedule Institutional Demo
                  <ChevronRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-green-600' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section id="impact-stats" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${
            isVisible['impact-stats'] ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-5 bg-gradient-to-br from-teal-100 to-green-100 text-teal-600 rounded-2xl group-hover:from-teal-200 group-hover:to-green-200 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-700 mb-4">{stat.number}</div>
                <div className="text-slate-600 font-medium text-lg leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section id="featured-programs" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="text-teal-600 text-sm font-semibold uppercase tracking-wider">Latest Updates</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-light text-slate-700 mb-6">
              Innovation from Kedi Labs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our latest breakthroughs in engineering education and institutional transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt=""
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      New
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-gradient-to-r from-teal-100 to-green-100 text-teal-600 text-xs font-medium px-3 py-1 rounded">
                      Program Innovation
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                    {program.title}
                  </h3>
                  <a href="#" className="text-orange-500 font-medium text-sm hover:text-orange-400 transition-colors flex items-center group">
                    {program.link}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Most Popular Launches Section */}
      <section className="py-24 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="lg:w-1/3 mb-12 lg:mb-0">
              <h2 className="text-6xl font-light text-slate-700 mb-8 leading-tight">
                KEDI Labs <span className="text-green-600">Innovation</span>
              </h2>
              <p className="text-2xl font-light text-slate-600 mb-6">
                Our most impactful engineering solutions
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full"></div>
            </div>
            <div className="lg:w-2/3 lg:pl-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Binary className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-teal-600 transition-colors">Digital Engineering Platform</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Deploy comprehensive interactive STEM learning environments powered by AI and designed for African engineering education contexts.
                  </p>
                  <a href="#" className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group">
                    Explore engineering platforms
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-teal-600 transition-colors">Innovation Analytics Dashboard</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Gain comprehensive visibility across STEM programs, student progress, and institutional outcomes for data-driven educational decisions.
                  </p>
                  <a href="#" className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group">
                    Discover Analytics Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <FlaskConical className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-teal-600 transition-colors">EduTech Engineering Suite</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Experience our AI Canvas—where sustainable engineering education and innovative technology solutions converge.
                  </p>
                  <a href="#" className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group">
                    Learn about EduTech Suite
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Cog className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-teal-600 transition-colors">Smart Engineering Systems</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Deploy next-generation Kedi Smart Learning Systems designed for AI-enhanced engineering and technical education environments.
                  </p>
                  <a href="#" className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group">
                    Explore Smart Systems
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-teal-600 transition-colors">STEM for Digital Institutions</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Deliver exceptional engineering education performance for high-capacity universities and technical training institutions.
                  </p>
                  <a href="#" className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group">
                    Explore institutional solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Network className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-teal-600 transition-colors">Educational Intelligence + Kedi Insights</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Unify perspectives across curriculum, infrastructure, and learning outcomes for comprehensive educational transformation.
                  </p>
                  <a href="#" className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group">
                    Explore intelligence integrations
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-700 via-slate-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23008B8B' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="mb-6">
                <span className="bg-green-600/20 text-green-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-green-600/30">
                  Partner with Excellence
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
                Transform Your Institution with Kedi Labs
              </h2>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Only Kedi Labs integrates engineering excellence with sustainability, cutting-edge technology, and strategic partnerships to transform STEM education across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                  Request institutional demo
                </button>
                <button className="text-teal-600 hover:text-teal-500 px-8 py-4 font-medium transition-colors duration-200 flex items-center group">
                  Explore partnership opportunities
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-16">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="STEM Innovation"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default KediLabsHomepage;