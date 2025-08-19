import React from 'react';
import { Link } from 'react-router-dom';

import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle,
  Target,
  Users,
  BookOpen,
  Monitor,
  Settings,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const KediLabsPrograms = () => {
  const corePrograms = [
    {
      id: 'advocacy',
      title: 'Digital Education Policy Advocacy',
      subtitle: 'Advancing STEM Education Investment',
      description: 'Strategic advocacy for digital education policy development and increased government investment in STEM Education infrastructure across Kenya and East Africa.',
      keyFeatures: [
        'Policy framework development for digital STEM education',
        'Government and institutional stakeholder engagement',
        'Investment advocacy for educational technology infrastructure',
        'Strategic partnerships with education policymakers'
      ],
      outcomes: [
        'Improved policy environment for digital education',
        'Increased government investment in STEM programs',
        'Enhanced institutional capacity for technology adoption'
      ],
      icon: Target,
      timeline: 'Immediate Priority',
      focus: 'Policy & Investment'
    },
    {
      id: 'training',
      title: 'STEM Educator Training & Sensitization',
      subtitle: 'Building Digital Teaching Capacity',
      description: 'Comprehensive training and sensitization programs designed for STEM educators and students, focusing on effective integration of digital learning technologies.',
      keyFeatures: [
        'Digital pedagogy certification for STEM educators',
        'Virtual laboratory instruction methodologies',
        'Technology integration best practices',
        'Student engagement through digital tools'
      ],
      outcomes: [
        'Enhanced educator digital competency',
        'Improved student learning outcomes in STEM',
        'Sustainable teaching practice transformation'
      ],
      icon: Users,
      timeline: 'Ongoing Implementation',
      focus: 'Capacity Building'
    },
    {
      id: 'access',
      title: 'Virtual Labs & Digital Learning Toolkit Supply',
      subtitle: 'Expanding Access to STEM Resources',
      description: 'Deployment of virtual laboratory toolkits and comprehensive digital learning resources to schools, enabling hands-on STEM education without physical infrastructure constraints.',
      keyFeatures: [
        'Complete virtual laboratory environments',
        'Interactive STEM learning simulations',
        'Cross-platform digital learning tools',
        'Technical support and maintenance programs'
      ],
      outcomes: [
        'Increased access to practical STEM education',
        'Reduced infrastructure barriers for schools',
        'Enhanced student engagement in STEM subjects'
      ],
      icon: Monitor,
      timeline: 'Active Deployment',
      focus: 'Access & Equity'
    }
  ];

  const impactMetrics = [
    { value: '1,000+', label: 'STEM Educators Targeted', category: 'Training' },
    { value: '180+', label: 'Schools for Virtual Labs', category: 'Infrastructure' },
    { value: '15,000+', label: 'Students to be Impacted', category: 'Reach' },
    { value: '5+', label: 'Counties in Kenya', category: 'Coverage' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-green-600 font-medium">Programs</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Transforming STEM Education Through
              <span className="block text-green-600 font-normal mt-2">Digital Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kenya Digital Laboratories delivers comprehensive programs focused on advocacy, training, and access to advance STEM education across Kenya through strategic digitization initiatives.
            </p>

            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Kisumu, Kenya
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +254711731625
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Admin/Info
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Our Core Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three strategic initiatives driving STEM education transformation across Kenya
            </p>
          </div>

          <div className="space-y-16">
            {corePrograms.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={program.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className={`p-12 ${isEven ? 'order-1' : 'order-2'}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                              {program.timeline}
                            </span>
                            <span className="text-xs text-gray-500">{program.focus}</span>
                          </div>
                          <h3 className="text-2xl font-normal text-gray-900">{program.title}</h3>
                          <p className="text-green-600 font-medium">{program.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {program.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="font-medium text-gray-900 mb-4">Key Components</h4>
                        <div className="space-y-3">
                          {program.keyFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-medium text-gray-900 mb-4">Expected Outcomes</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {program.outcomes.map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="bg-gray-50 rounded-lg p-4">
                              <p className="text-gray-700 text-sm">{outcome}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link 
                        to="/contact"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors group"
                      >
                        Learn More About This Program
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    {/* Visual Side */}
                    <div className={`bg-gradient-to-br from-green-50 to-cyan-50 p-12 flex items-center justify-center ${isEven ? 'order-2' : 'order-1'}`}>
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <Icon className="h-16 w-16 text-white" />
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-2">{program.focus}</h4>
                        <p className="text-gray-600">{program.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Projected Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes driving STEM education transformation across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-8 border border-gray-100">
                <div className="text-4xl font-light text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {metric.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Mission */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                Our Strategic Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-medium text-white mb-3">Immediate Focus</h3>
                  <p className="text-green-100 leading-relaxed">
                    Digitization of education initiatives through advocacy, training, and access programs that directly impact STEM education delivery across Kenya.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-medium text-white mb-3">Long-term Vision</h3>
                  <p className="text-green-100 leading-relaxed">
                    Building a sustainable tech startup ecosystem that supports continuous innovation in educational technology solutions for Africa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-light text-gray-900 mb-6">
                Program Implementation
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Policy Advocacy</h4>
                    <p className="text-gray-600 text-sm">Strategic government and institutional engagement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Educator Training</h4>
                    <p className="text-gray-600 text-sm">Comprehensive digital teaching methodologies</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Resource Access</h4>
                    <p className="text-gray-600 text-sm">Virtual labs and digital learning toolkit deployment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <Link 
                    to="/contact"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center"
                  >
                    Partner With Us
                  </Link>
                  <a
                    href='https://hvaa0fgs9i.ufs.sh/f/dnBu1xMbtIQ0CGt8GwEIFJjK2yWd6uQSYcGTq7vwV19CNOxh'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-green-600 text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg font-medium transition-colors text-center"
                  >
                    Download Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">
              Comprehensive Program Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each program is designed to address specific challenges in STEM education digitization, 
              creating a holistic approach to educational transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corePrograms.map((program) => {
              const Icon = program.icon;
              return (
                <div key={program.id} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        {program.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-green-600 font-medium mb-4 text-sm">
                      {program.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-medium text-gray-900 text-sm">Key Features</h4>
                      {program.keyFeatures.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/contact"
                      className="w-full bg-white border border-gray-200 hover:border-green-600 hover:text-green-600 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group"
                    >
                      Get Program Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Transform STEM Education?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with Kenya Digital Laboratories to implement comprehensive STEM education solutions 
              tailored for your institution's needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href='https://hvaa0fgs9i.ufs.sh/f/dnBu1xMbtIQ0CGt8GwEIFJjK2yWd6uQSYcGTq7vwV19CNOxh'
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center group"
              >
                Partnership Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KediLabsPrograms;