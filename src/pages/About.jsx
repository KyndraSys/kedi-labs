import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, Globe, Lightbulb, BookOpen, Target, ArrowRight, Play, CheckCircle, Star, Zap, Shield, Cpu, Network, Eye, Settings, Microscope, GraduationCap, Cog, FlaskConical, Binary, Phone, Mail, MapPin, ExternalLink, ChevronDown } from 'lucide-react';

const KediLabsAbout = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const milestones = [
    { year: "2021", title: "Foundation", description: "Kedi Labs established in Nairobi, Kenya with a vision to revolutionize STEM education across Africa" },
    { year: "2022", title: "First Partnerships", description: "Collaborated with 25 educational institutions across Kenya and Uganda" },
    { year: "2023", title: "Regional Expansion", description: "Extended operations to Tanzania and Rwanda, reaching 100+ institutions" },
    { year: "2024", title: "Innovation Hub", description: "Launched state-of-the-art research facilities and AI-powered learning platforms" },
    { year: "2025", title: "Global Vision", description: "Preparing for international expansion while maintaining focus on African excellence" }
  ];

  const leadership = [
    {
      name: "Dr. Sarah Kimani",
      role: "Founder & CEO",
      expertise: "Educational Technology, Systems Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prof. Michael Ochieng",
      role: "Chief Technology Officer",
      expertise: "AI in Education, Digital Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Amina Hassan",
      role: "Director of Research",
      expertise: "STEM Pedagogy, Sustainable Technology",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const awards = [
    { title: "UNESCO Education Innovation Award", year: "2024" },
    { title: "African Digital Education Excellence", year: "2023" },
    { title: "Sustainable Technology Leadership", year: "2023" },
    { title: "STEM Education Pioneer Award", year: "2022" }
  ];

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
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Dark overlay with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90 z-10"></div>
          
          {/* Futuristic background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Futuristic Technology Lab"
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 border border-cyan-400 rotate-45 rounded-3xl"></div>
            <div className="absolute bottom-32 left-32 w-72 h-72 border border-teal-400 rotate-12 rounded-2xl"></div>
            <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-green-400 -rotate-12 rounded-xl"></div>
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/2 w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 animate-pulse delay-500"></div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 pt-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center text-sm text-slate-400">
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-cyan-400 font-medium">About Kedi Labs</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-5xl">
              {/* Badge */}
              <div className="mb-8 animate-fade-in">
                <span className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm text-cyan-400 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider border border-cyan-400/30 shadow-lg">
                  <FlaskConical className="h-5 w-5 mr-3" />
                  About Kedi Labs
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight animate-slide-up">
                Powering an{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-green-400 font-normal">
                  inclusive future
                </span>{' '}
                for all
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl font-light animate-slide-up delay-200">
                At Kedi Labs, we believe that revolutionary STEM education has the power to transform lives, communities, and nations. Our mission is to democratize access to world-class engineering and technology education across Africa.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 animate-slide-up delay-400">
                <button className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Explore Our Impact
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group border-2 border-slate-600 hover:border-teal-400 text-slate-300 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-slate-800/20 hover:bg-slate-700/30">
                  Read Our Research
                  <ExternalLink className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-teal-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-15"></div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-100 to-green-100 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-light text-slate-800 mb-6">Our Mission</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  To revolutionize STEM education in Africa by creating innovative, sustainable, and accessible digital learning experiences that empower students to become the engineers, scientists, and innovators of tomorrow.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Democratize access to world-class STEM education</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Bridge the digital divide through innovative technology</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <span className="text-slate-600">Foster sustainable development across African communities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-light text-slate-800 mb-6">Our Vision</h2>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  A future where every African student has access to world-class STEM education, equipped with the skills and mindset to solve complex challenges and drive sustainable development across the continent.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-600">
                  <blockquote className="text-slate-700 italic text-lg">
                    "We envision an Africa where innovation knows no boundaries, where every young mind can access cutting-edge technology education, and where sustainable solutions emerge from local creativity and global collaboration."
                  </blockquote>
                  <cite className="text-sm text-slate-500 mt-4 block">- Dr. Sarah Kimani, Founder & CEO</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Connects Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100/30 to-green-100/30 rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Global STEM Network"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-5xl font-light text-slate-800 mb-8 leading-tight">
                Our technology <span className="text-green-600 font-semibold">connects</span> Africa to the world
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Kedi Labs offers an industry-leading portfolio of educational technology innovations. Through advanced learning platforms, AI-powered analytics, sustainable infrastructure, and strategic partnerships, we help securely connect African institutions to global knowledge networks.
              </p>
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center group">
                Explore our technology
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-slate-800 mb-6">
              Visionary <span className="text-green-600 font-semibold">leadership</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our world-class team combines decades of experience in education, technology, and sustainable development to drive transformational change across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                    <p className="text-green-400 font-medium">{leader.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 leading-relaxed">
                    Specializing in {leader.expertise}, bringing innovative solutions to STEM education challenges across Africa.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey & Milestones */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-8">
              <h2 className="text-5xl font-light text-slate-800 mb-8 leading-tight">
                The power of <span className="text-green-600 font-semibold">purpose</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                This year, we're celebrating four years of purpose-driven innovation. Learn about the remarkable progress we've made in transforming STEM education across Africa.
              </p>
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                Read Our Impact Report
              </button>
            </div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-2xl font-bold text-green-600">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-green-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-6">
              Global <span className="text-green-400 font-semibold">recognition</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {award.title}
                </h3>
                <p className="text-gray-400">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts and Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-slate-800 mb-6">
              Facts and <span className="text-green-600 font-semibold">information</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Our Organization</h3>
              <div className="space-y-3">
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Leadership team</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Research publications</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Company overview</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Career opportunities</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Recognition</h3>
              <div className="space-y-3">
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Kedi Labs awards</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Industry relations</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Partner testimonials</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">Impact stories</a>
                <a href="#" className="block text-teal-600 hover:text-teal-500 transition-colors">News & media</a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Headquarters</h3>
              <div className="text-slate-600 space-y-2 mb-6">
                <p className="font-medium">Kedi Labs Ltd.</p>
                <p>Westlands, Nairobi</p>
                <p>P.O. Box 12345-00100</p>
                <p>Nairobi, Kenya</p>
              </div>
              
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Regional Offices</h4>
              <div className="text-slate-600 space-y-1">
                <p>Kampala, Uganda</p>
                <p>Dar es Salaam, Tanzania</p>
                <p>Kigali, Rwanda</p>
              </div>
            </div>
            
            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-600 mr-3" />
                  <span className="text-slate-600">+254 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-600 mr-3" />
                  <a href="mailto:info@kedilabs.net" className="text-teal-600 hover:text-teal-500 transition-colors">
                    info@kedilabs.net
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                  <a href="#" className="text-teal-600 hover:text-teal-500 transition-colors">
                    Get directions
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="mailto:info@kedilabs.net" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
                  Contact Kedi Labs
                </a>
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
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }

        @media (max-width: 768px) {
          .text-8xl {
            font-size: 3.5rem;
            line-height: 1.1;
          }
          
          .text-5xl {
            font-size: 2.5rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

export default KediLabsAbout;