import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle,
  ExternalLink,
  Target,
  Award,
  Users,
  Globe,
  FlaskConical,
  GraduationCap,
  Eye,
  Cog
} from 'lucide-react';

const KediLabsPrograms = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProgram, setExpandedProgram] = useState(null);

  const categories = [
    { id: 'technology', name: 'Technology Integration' },
    { id: 'engineering', name: 'Engineering Education' },
    { id: 'innovation', name: 'Innovation Analytics' },
    { id: 'sustainability', name: 'Student Development' }
  ];

  const featuredPrograms = [
    {
      id: 'virtual-labs',
      title: 'Virtual Labs Toolkit Implementation',
      category: 'technology',
      description: 'Comprehensive virtual laboratory solutions being deployed to schools nationwide, providing hands-on STEM learning experiences without physical infrastructure constraints.',
      detailedDescription: 'Our Virtual Labs Toolkit Implementation program delivers comprehensive virtual laboratory environments designed specifically for Kenyan STEM education contexts. This solution enables hands-on learning experiences without the need for expensive physical laboratory infrastructure, making advanced STEM education accessible to schools across Kenya. The platform includes interactive simulations, real-time experimentation capabilities, and comprehensive assessment tools.',
      features: ['Interactive Virtual Experiments', 'Real-time Laboratory Simulations', 'Assessment Integration', 'Cross-platform Compatibility'],
      link: '/programs/virtual-labs'
    },
    {
      id: 'educator-training',
      title: 'STEM Educator Digital Training Initiative',
      category: 'engineering',
      description: 'Intensive training and sensitization programs for STEM educators, focusing on digital pedagogy and virtual laboratory instruction techniques.',
      detailedDescription: 'Our STEM Educator Digital Training Initiative provides comprehensive training and sensitization programs for STEM educators across Kenya. The program focuses on modern digital teaching methodologies, virtual laboratory instruction techniques, and effective integration of technology in STEM education. Educators receive hands-on training with our virtual labs toolkit and digital learning resources.',
      features: ['Digital Pedagogy Training', 'Virtual Lab Instruction', 'Certification Programs', 'Ongoing Support'],
      link: '/programs/educator-training'
    },
    {
      id: 'policy-advocacy',
      title: 'Digital Education Policy Advocacy Framework',
      category: 'innovation',
      description: 'Strategic advocacy efforts promoting digital education policy development and increased government investment in STEM education infrastructure.',
      detailedDescription: 'Our Digital Education Policy Advocacy Framework leads strategic advocacy efforts for comprehensive digital education policy development in Kenya. We work with government agencies, educational institutions, and stakeholders to promote increased investment in STEM education infrastructure and the adoption of digital learning technologies across the education system.',
      features: ['Policy Development Support', 'Stakeholder Engagement', 'Research & Analytics', 'Strategic Advocacy'],
      link: '/programs/policy-advocacy'
    },
    {
      id: 'student-development',
      title: 'Student-Centered STEM Development Programs',
      category: 'sustainability',
      description: 'Specialized training programs designed specifically for STEM students, enhancing their practical skills through digital learning toolkit utilization.',
      detailedDescription: 'Our Student-Centered STEM Development Programs are specifically designed to enhance STEM students\' practical skills through comprehensive digital learning toolkit utilization. These programs provide students with hands-on experience using virtual laboratory environments, digital learning tools, and modern STEM technologies to prepare them for future academic and career success.',
      features: ['Hands-on Digital Learning', 'Virtual Lab Access', 'Skill Development', 'Career Preparation'],
      link: '/programs/student-development'
    }
  ];

  const stats = [
    { number: '1,000+', label: 'STEM educators targeted for training' },
    { number: '180+', label: 'Schools targeted for virtual labs equipment' },
    { number: '15,000+', label: 'Learners targeted to be impacted in Kenya' },
    { number: '95%', label: 'Training completion rate' }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? featuredPrograms 
    : featuredPrograms.filter(program => program.category === activeCategory);

  const handleViewAllPrograms = () => {
    setActiveCategory('all');
    setExpandedProgram(null); // Close any expanded cards
  };

  const navigateTo = (path) => {
    // In a real app, this would use React Router's navigate function
    console.log(`Navigating to: ${path}`);
    // For demo purposes, you can replace this with actual navigation logic
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90 z-10"></div>
          
          {/* Tech Network Visualization */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1440 800">
              {/* Connection lines */}
              <g stroke="url(#gradient)" strokeWidth="1" fill="none">
                <path d="M200,150 Q400,100 600,200 T1000,150" />
                <path d="M150,400 Q350,300 550,450 T950,350" />
                <path d="M300,600 Q500,500 700,650 T1100,550" />
                <path d="M100,300 L300,150 L600,200 L900,100 L1200,200" />
                <path d="M200,500 L450,300 L750,400 L1050,250" />
              </g>
              
              {/* Network nodes */}
              <g fill="url(#nodeGradient)">
                <circle cx="200" cy="150" r="8" className="animate-pulse" />
                <circle cx="600" cy="200" r="12" className="animate-pulse delay-300" />
                <circle cx="1000" cy="150" r="10" className="animate-pulse delay-700" />
                <circle cx="150" cy="400" r="6" className="animate-pulse delay-500" />
                <circle cx="550" cy="450" r="14" className="animate-pulse delay-100" />
                <circle cx="950" cy="350" r="8" className="animate-pulse delay-900" />
                <circle cx="300" cy="600" r="10" className="animate-pulse delay-200" />
                <circle cx="700" cy="650" r="12" className="animate-pulse delay-600" />
              </g>
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="nodeGradient">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 pt-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center text-sm text-slate-400">
              <a href="/" className="hover:text-cyan-400 transition-colors cursor-pointer">Home</a>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-cyan-400 font-medium">Programs & Services</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex items-center min-h-[50vh]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                Kedi Labs{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-green-400 font-normal">
                  programs
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
                Digitizing STEM Education Across Kenya through advocacy, training, and virtual labs toolkit supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Featured Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-2">
              Our Digital STEM Education Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Transforming STEM education in Kenya through comprehensive training, virtual laboratory solutions, and policy advocacy
            </p>
          </div>

          {/* Category Navigation */}
          <div className="mb-12">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeCategory === 'all'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  All Programs
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeCategory === category.id
                        ? 'border-teal-500 text-teal-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden">
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Expanded Description */}
                  {expandedProgram === program.id && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-teal-500 transition-all duration-300 ease-in-out">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {program.detailedDescription}
                      </p>
                    </div>
                  )}
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 gap-3">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm transition-colors group"
                    >
                      {expandedProgram === program.id ? 'Show less' : 'Learn more'}
                      <ArrowRight className={`ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 ${expandedProgram === program.id ? 'rotate-90' : ''}`} />
                    </button>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Programs CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={handleViewAllPrograms}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-200"
            >
              View all Kedi Labs programs
            </button>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              Our projected impact in Kenya
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming STEM education through innovative digital programs and strategic partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="border border-gray-200 bg-white p-8 hover:border-gray-300 transition-colors">
                  <div className="text-3xl font-semibold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Excellence CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-normal text-gray-900 mb-6 leading-tight">
                Partner with Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Transform Your Institution with Kedi Labs
              </p>
              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Kedi Labs integrates digital education policy advocacy, comprehensive STEM educator training, virtual laboratory solutions, and student development programs to transform STEM education across Kenya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/contact"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors flex items-center justify-center group"
                >
                  Request training program demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a 
                  href="/programs/"
                  className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-md font-medium text-sm transition-colors flex items-center justify-center group"
                >
                  Explore virtual labs solutions
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right side - Partnership benefits */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Digital Solutions</h4>
                  <p className="text-xs text-gray-600">Customized for Kenyan contexts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Training Programs</h4>
                  <p className="text-xs text-gray-600">Award-winning programs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FlaskConical className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Virtual Labs</h4>
                  <p className="text-xs text-gray-600">Dedicated virtual laboratory teams</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Kenya Focus</h4>
                  <p className="text-xs text-gray-600">Nationwide reach and growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KediLabsPrograms;