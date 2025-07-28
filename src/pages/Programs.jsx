import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle,
  ExternalLink,
  Target,
  Award,
  Users,
  Globe
} from 'lucide-react';

const KediLabsPrograms = () => {
  const [activeCategory, setActiveCategory] = useState('engineering');

  const categories = [
    { id: 'engineering', name: 'Engineering Education' },
    { id: 'technology', name: 'Technology Integration' },
    { id: 'innovation', name: 'Innovation Analytics' },
    { id: 'sustainability', name: 'Environmental Science' },
    { id: 'research', name: 'Research & Development' }
  ];

  const featuredPrograms = [
    {
      id: 'digital-platform',
      title: 'Digital Engineering Platform',
      category: 'engineering',
      description: 'Deploy comprehensive interactive STEM learning environments powered by AI and designed for African engineering education contexts.',
      features: ['AI-Powered Learning', 'Interactive Simulations', 'Real-time Collaboration', 'Progress Analytics'],
      link: '/programs/digital-platform'
    },
    {
      id: 'analytics-dashboard',
      title: 'Innovation Analytics Dashboard',
      category: 'innovation',
      description: 'Gain comprehensive visibility across STEM programs, student progress, and institutional outcomes for data-driven educational decisions.',
      features: ['Real-time Analytics', 'Performance Tracking', 'Institutional Insights', 'Custom Reports'],
      link: '/programs/analytics-dashboard'
    },
    {
      id: 'edutech-suite',
      title: 'EduTech Engineering Suite',
      category: 'technology',
      description: 'Experience our AI Canvas—where sustainable engineering education and innovative technology solutions converge.',
      features: ['AI Integration', 'Sustainable Design', 'Cloud-based Platform', 'Mobile Compatible'],
      link: '/programs/edutech-suite'
    },
    {
      id: 'smart-systems',
      title: 'Smart Engineering Systems',
      category: 'engineering',
      description: 'Deploy next-generation Kedi Smart Learning Systems designed for AI-enhanced engineering and technical education environments.',
      features: ['IoT Integration', 'Smart Sensors', 'Automated Assessment', 'Predictive Analytics'],
      link: '/programs/smart-systems'
    },
    {
      id: 'institutional-solutions',
      title: 'STEM for Digital Institutions',
      category: 'sustainability',
      description: 'Deliver exceptional engineering education performance for high-capacity universities and technical training institutions.',
      features: ['Institutional Scale', 'Custom Integration', 'Support Systems', 'Training Programs'],
      link: '/programs/institutional-solutions'
    },
    {
      id: 'educational-intelligence',
      title: 'Educational Intelligence + Kedi Insights',
      category: 'research',
      description: 'Unify perspectives across curriculum, infrastructure, and learning outcomes for comprehensive educational transformation.',
      features: ['Data Integration', 'Curriculum Analytics', 'Outcome Prediction', 'Strategic Insights'],
      link: '/programs/educational-intelligence'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Engineering students reached' },
    { number: '200+', label: 'Technical institutions partnered' },
    { number: '15', label: 'Countries with active programs' },
    { number: '98%', label: 'Institutional partnership retention' }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? featuredPrograms 
    : featuredPrograms.filter(program => program.category === activeCategory);

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
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 font-normal">
                  programs
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed font-light">
                Find the Kedi Labs programs that fit your institutional needs.
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
              Browse by featured programs
            </h2>
          </div>

          {/* Category Navigation - Cisco Style */}
          <div className="mb-12">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeCategory === 'all'
                      ? 'border-blue-500 text-blue-600'
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
                        ? 'border-blue-500 text-blue-600'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === 'all' ? featuredPrograms : filteredPrograms).map((program) => (
              <div key={program.id} className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden">
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <a
                    href={program.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
                  >
                    Explore {program.title.split(' ')[0].toLowerCase()}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View All Programs CTA */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-200">
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
              Our impact across Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming STEM education through innovative programs and strategic partnerships
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
                Kedi Labs integrates engineering excellence with sustainability, cutting-edge technology, and strategic partnerships to transform STEM education across Africa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm transition-colors flex items-center justify-center group">
                  Request institutional demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-md font-medium text-sm transition-colors flex items-center justify-center group">
                  Explore partnership opportunities
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right side - Partnership benefits */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Targeted Solutions</h4>
                  <p className="text-xs text-gray-600">Customized for African contexts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Proven Excellence</h4>
                  <p className="text-xs text-gray-600">Award-winning programs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Expert Support</h4>
                  <p className="text-xs text-gray-600">Dedicated partnership teams</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">Continental Reach</h4>
                  <p className="text-xs text-gray-600">15 countries and growing</p>
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