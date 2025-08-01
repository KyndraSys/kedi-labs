import React from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle,
  ExternalLink,
  Building2,
  Users,
  Globe,
  Award,
  BookOpen,
  Cpu,
  Handshake,
  MapPin
} from 'lucide-react';

const KediPartnersPage = () => {
  const partnerCategories = [
    {
      id: 'educational',
      title: 'Educational Institutions',
      description: 'Universities and technical colleges across East Africa, international academic partnerships, and research institutions.',
      partners: [
        'University of Nairobi',
        'Makerere University',
        'University of Dar es Salaam',
        'Kigali Institute of Science and Technology',
        'Technical University of Kenya',
        'Addis Ababa University'
      ],
      icon: BookOpen,
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'technology',
      title: 'Technology Partners',
      description: 'Leading EdTech companies, hardware and software providers, and digital platform developers.',
      partners: [
        'Microsoft Education',
        'Google for Education',
        'Cisco Networking Academy',
        'Intel Education',
        'Amazon Web Services',
        'Siemens Digital Industries'
      ],
      icon: Cpu,
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'funding',
      title: 'Funding Partners',
      description: 'Development finance institutions, private foundations, government agencies, and corporate sponsors.',
      partners: [
        'World Bank Group',
        'African Development Bank',
        'Gates Foundation',
        'Mastercard Foundation',
        'USAID',
        'UK Foreign Commonwealth Office'
      ],
      icon: Handshake,
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const impactStats = [
    { number: '50+', label: 'Partner institutions' },
    { number: '15', label: 'Countries reached' },
    { number: '200,000+', label: 'Students impacted' },
    { number: '98%', label: 'Partnership satisfaction' }
  ];

  const partnershipBenefits = [
    {
      title: 'Strategic Collaboration',
      description: 'Work together on innovative STEM education solutions tailored for African contexts.',
      icon: Users
    },
    {
      title: 'Resource Sharing',
      description: 'Access to cutting-edge educational technologies, research facilities, and expertise.',
      icon: Globe
    },
    {
      title: 'Capacity Building',
      description: 'Joint training programs and professional development opportunities for educators.',
      icon: Award
    },
    {
      title: 'Network Access',
      description: 'Connect with a growing network of educational leaders and innovators across Africa.',
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Narrow */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 mb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center text-sm text-slate-400">
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-cyan-400 font-medium">Partners</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                  Our Network of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-normal">
                    Excellence
                  </span>
                </h1>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Discover our network of educational institutions, technology partners, and funding collaborators transforming STEM education across Africa.
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center group">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-3 gap-4">
                    {/* Simulated partner logos/connections */}
                    <div className="col-span-3 text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Building2 className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-white text-sm font-medium">Kedi Labs</p>
                    </div>
                    
                    {/* Connection lines visualization */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white text-xs">Universities</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white text-xs">Technology</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-2">
                        <Handshake className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-white text-xs">Funding</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              Partnership Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with diverse organizations to advance STEM education across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className={`border rounded-lg p-8 bg-white hover:border-gray-300 transition-colors`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 text-sm mb-3">Key Partners:</h4>
                    {category.partners.slice(0, 4).map((partner, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {partner}
                      </div>
                    ))}
                    {category.partners.length > 4 && (
                      <p className="text-sm text-gray-500 mt-2">
                        +{category.partners.length - 4} more partners
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-normal text-gray-900 mb-6">
                Partnership Impact
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our collaborative approach has enabled us to reach more institutions, impact more students, and drive greater innovation in STEM education across the continent.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-semibold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Network Visualization */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Continental Reach
                </h3>
                <p className="text-sm text-gray-600">
                  Active partnerships across East and West Africa
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded p-4 text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Kenya</p>
                  <p className="text-xs text-gray-600">12 institutions</p>
                </div>
                <div className="bg-white border border-gray-200 rounded p-4 text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Uganda</p>
                  <p className="text-xs text-gray-600">8 institutions</p>
                </div>
                <div className="bg-white border border-gray-200 rounded p-4 text-center">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Tanzania</p>
                  <p className="text-xs text-gray-600">10 institutions</p>
                </div>
                <div className="bg-white border border-gray-200 rounded p-4 text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">Rwanda</p>
                  <p className="text-xs text-gray-600">6 institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network and unlock opportunities for collaboration, growth, and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 p-6 text-center hover:border-gray-300 transition-colors">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-normal text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Join our network of excellence and help transform STEM education across Africa. 
            Whether you're an educational institution, technology provider, or funding organization, 
            we'd love to explore partnership opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center group">
              Apply for Partnership
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center group">
              Download Partnership Guide
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KediPartnersPage;