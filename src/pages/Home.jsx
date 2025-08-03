import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, Globe, Lightbulb, BookOpen, Target, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Cpu, Network, Eye, Settings, Microscope, GraduationCap, Cog, FlaskConical, Binary } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NavigationPills from '../components/NavigationPills';
const KediLabsHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  
  // Add useNavigate hook
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "Digitizing STEM Education Across Kenya",
      subtitle: "Advocating for digital education policy, providing comprehensive STEM training, and delivering virtual labs toolkit supply to transform learning experiences for educators and students.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Empowering STEM Educators Through Digital Training",
      subtitle: "Comprehensive training and sensitization programs designed to equip STEM educators with cutting-edge digital teaching methodologies and virtual laboratory techniques.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Virtual Labs & Digital Learning Toolkit Supply",
      subtitle: "Providing accessible virtual laboratory solutions and digital learning toolkits that bring advanced STEM education capabilities directly to schools and institutions across Kenya.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const impactStats = [
    { number: "1,000+", label: "Targeted trained STEM educators", icon: <Users className="h-8 w-8" /> },
    { number: "180+", label: "Targeted Schools equipped with virtual labs", icon: <GraduationCap className="h-8 w-8" /> },
    { number: "15,000+", label: "Targeted learnersto be impacted in Kenya", icon: <Globe className="h-8 w-8" /> },
    { number: "95%", label: "Training completion rate", icon: <Award className="h-8 w-8" /> }
  ];

  const valueProps = [
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Digital Education Policy Advocacy",
      description: "Leading advocacy efforts for comprehensive digital education policy development and strategic investment in STEM education infrastructure across Kenya.",
      color: "from-[#008B8B] to-[#36454F]"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "STEM Educator Training Programs",
      description: "Comprehensive training and sensitization programs for STEM educators, equipping them with modern digital teaching methodologies and virtual laboratory skills.",
      color: "from-[#379504] to-[#008B8B]"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "STEM Student Development",
      description: "Specialized training programs for STEM students, providing hands-on experience with digital learning tools and virtual laboratory environments.",
      color: "from-[#36454F] to-[#379504]"
    },
    {
      icon: <FlaskConical className="h-12 w-12" />,
      title: "Virtual Labs & Digital Toolkit Supply",
      description: "Complete virtual laboratory toolkit supply and digital learning toolkit distribution to schools and educational institutions nationwide.",
      color: "from-[#FF6B35] to-[#008B8B]"
    }
  ];

  const technologyCategories = [
    {
      icon: <Binary className="h-16 w-16" />,
      title: "Virtual Laboratory Solutions",
      description: "Complete virtual labs toolkit for hands-on STEM learning experiences"
    },
    {
      icon: <GraduationCap className="h-16 w-16" />,
      title: "Educator Training Programs",
      description: "Comprehensive training and sensitization for STEM educators"
    },
    {
      icon: <Eye className="h-16 w-16" />,
      title: "Policy Advocacy",
      description: "Digital education policy development and STEM investment advocacy"
    },
    {
      icon: <Cog className="h-16 w-16" />,
      title: "Digital Learning Toolkits",
      description: "Complete digital learning toolkit supply and implementation"
    },
    {
      icon: <Target className="h-16 w-16" />,
      title: "Student Development",
      description: "Specialized STEM student training and skill development programs"
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: "Education Technology",
      description: "Modern educational technology solutions for STEM learning"
    }
  ];

  const featuredPrograms = [
    {
      title: "Virtual Labs Toolkit Implementation Across Kenyan Schools",
      description: "Comprehensive virtual laboratory solutions being deployed to schools nationwide, providing hands-on STEM learning experiences without physical infrastructure constraints.",
      link: "Explore virtual labs program",
      image: "https://l0kbxarjd9.ufs.sh/f/GBNtWc6jN1ySpJd3OqCJ1QwsdRZ4V8Y9rc0AUkWXjLbotxDu"
    },
    {
      title: "STEM Educator Digital Training Initiative",
      description: "Intensive training and sensitization programs for STEM educators, focusing on digital pedagogy and virtual laboratory instruction techniques.",
      link: "Learn about educator training",
      image: "https://l0kbxarjd9.ufs.sh/f/GBNtWc6jN1ySz4EOOg9xZSQRAhT1skLN32yGtOK6VwfcIiej"
    },
    {
      title: "Digital Education Policy Advocacy Framework",
      description: "Strategic advocacy efforts promoting digital education policy development and increased government investment in STEM education infrastructure.",
      link: "Discover policy initiatives",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student-Centered STEM Development Programs",
      description: "Specialized training programs designed specifically for STEM students, enhancing their practical skills through digital learning toolkit utilization.",
      link: "View student programs",
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
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90 z-10"></div>
        
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
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          ))}
        </div>

        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 opacity-10 z-15">
          <div className="absolute top-20 right-20 w-96 h-96 border border-cyan-400 rotate-45 rounded-3xl"></div>
          <div className="absolute bottom-32 left-32 w-72 h-72 border border-teal-400 rotate-12 rounded-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-green-400 -rotate-12 rounded-xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="mb-8 animate-fade-in">
                <span className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm text-cyan-400 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider border border-cyan-400/30 shadow-lg">
                  <FlaskConical className="h-5 w-5 mr-3" />
                  Digital Education • Training • Virtual Labs
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-slide-up">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl font-light animate-slide-up delay-200">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-400">
                <button 
                  onClick={() => navigate('/programs')}
                  className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Virtual Labs Solutions
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="group border-2 border-slate-600 hover:border-teal-400 text-slate-300 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-slate-800/20 hover:bg-slate-700/30"
                >
                  Request Training Program Demo
                  <ChevronRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <NavigationPills />

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-15"></div>
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
                <div className="text-4xl lg:text-5xl font-light text-slate-800 mb-4">{stat.number}</div>
                <div className="text-slate-600 font-medium text-lg leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section id="technology-categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Browse by technology
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {technologyCategories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 text-center hover:border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 text-green-500 group-hover:text-green-600 transition-colors">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center space-x-4">
            <button 
              onClick={() => navigate('/programs')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View all programs
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Why Kedi Labs for the digital era
            </button>
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
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6">
              Innovation from Kedi Labs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our latest breakthroughs in digital STEM education and virtual laboratory implementation
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
                      Training Program
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                    {program.title}
                  </h3>
                  <button 
                    onClick={() => navigate('/programs')} 
                    className="text-orange-500 font-medium text-sm hover:text-orange-400 transition-colors flex items-center group"
                  >
                    {program.link}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
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
              <h2 className="text-6xl font-light text-slate-800 mb-8 leading-tight">
                KEDI Labs <span className="text-green-600 font-semibold">Innovation</span>
              </h2>
              <p className="text-2xl font-light text-slate-600 mb-6">
                Our most impactful digital education solutions
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
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">Virtual Laboratory Platform</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Deploy comprehensive virtual laboratory environments designed specifically for Kenyan STEM education contexts, enabling hands-on learning without physical constraints.
                  </p>
                  <button 
                    onClick={() => navigate('/programs')} 
                    className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group"
                  >
                    Explore virtual lab solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">Educator Training Dashboard</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Comprehensive training management system tracking educator progress, sensitization outcomes, and digital pedagogy skill development across Kenya.
                  </p>
                  <button 
                    onClick={() => navigate('/programs')} 
                    className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group"
                  >
                    Discover Training Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <FlaskConical className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">Digital Learning Toolkit Suite</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Experience our comprehensive digital learning toolkit—where policy advocacy meets practical implementation through virtual laboratories and educator training.
                  </p>
                  <button 
                    onClick={() => navigate('/programs')} 
                    className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group"
                  >
                    Learn about Digital Toolkit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Cog className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">Policy Advocacy Systems</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Deploy strategic advocacy frameworks designed for digital education policy development and STEM investment promotion across Kenya.
                  </p>
                  <button 
                    onClick={() => navigate('/about')} 
                    className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group"
                  >
                    Explore Policy Initiatives
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">STEM Training for Digital Schools</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Deliver exceptional STEM training performance for primary schools, secondary schools, and higher learning institutions across Kenya.
                  </p>
                  <button 
                    onClick={() => navigate('/programs')} 
                    className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group"
                  >
                    Explore training solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="group">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                      <Network className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4 group-hover:text-teal-600 transition-colors">Educational Intelligence + Kedi Insights</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Unify perspectives across training programs, virtual lab implementation, and policy advocacy outcomes for comprehensive educational transformation.
                  </p>
                  <button 
                    onClick={() => navigate('/about')} 
                    className="text-orange-500 font-medium hover:text-orange-400 transition-colors flex items-center group"
                  >
                    Explore intelligence integrations
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
                Transform Your School with Kedi Labs
              </h2>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Only Kedi Labs integrates virtual laboratory solutions with comprehensive educator training, digital learning toolkit supply, and policy advocacy to drive STEM education transformation across Kenya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Request training program demo
                </button>
                <button 
                  onClick={() => navigate('/programs')}
                  className="text-teal-400 hover:text-teal-300 px-8 py-4 font-medium transition-colors duration-200 flex items-center group"
                >
                  Explore virtual labs solutions
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
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default KediLabsHomepage;