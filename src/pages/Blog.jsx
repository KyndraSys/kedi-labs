import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Calendar,
  User,
  Tag,
  Search,
  Filter,
  BookOpen,
  Cpu,
  Microscope,
  Cog,
  Globe,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  Clock
} from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'engineering', name: 'Engineering Education', count: 8 },
    { id: 'sustainability', name: 'Sustainability', count: 6 },
    { id: 'innovation', name: 'African Innovation', count: 5 },
    { id: 'partnerships', name: 'Partnerships', count: 3 },
    { id: 'insights', name: 'Industry Insights', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'Transforming Engineering Education Through Digital Innovation',
      excerpt: 'How AI-powered learning platforms are revolutionizing STEM education across African universities and creating unprecedented access to quality engineering programs.',
      category: 'Engineering Education',
      author: 'Dr. Sarah Kimani',
      date: '2025-07-20',
      readTime: '8 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['AI', 'Engineering', 'Education Technology']
    },
    {
      id: 2,
      title: 'Sustainable Infrastructure for Digital Learning Ecosystems',
      excerpt: 'Building resilient educational technology infrastructure that supports long-term institutional growth while maintaining environmental sustainability.',
      category: 'Sustainability',
      author: 'Michael Ochieng',
      date: '2025-07-18',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['Sustainability', 'Infrastructure', 'Green Tech']
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: 'Partnership Models That Drive STEM Innovation',
      excerpt: 'Exploring successful collaboration frameworks between universities, industry partners, and technology providers in advancing engineering education.',
      category: 'Partnerships',
      author: 'Prof. James Mwangi',
      date: '2025-07-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/300',
      tags: ['Partnerships', 'Collaboration', 'Innovation']
    },
    {
      id: 4,
      title: 'The Rise of Engineering Labs in East Africa',
      excerpt: 'How modern laboratory facilities are transforming hands-on learning experiences and preparing students for industry 4.0 challenges.',
      category: 'Engineering Education',
      author: 'Dr. Grace Wanjiku',
      date: '2025-07-12',
      readTime: '7 min read',
      image: '/api/placeholder/400/300',
      tags: ['Labs', 'Practical Learning', 'Industry 4.0']
    },
    {
      id: 5,
      title: 'Data-Driven Insights: Measuring Educational Impact',
      excerpt: 'Leveraging analytics and performance metrics to optimize STEM learning outcomes and institutional effectiveness.',
      category: 'Industry Insights',
      author: 'David Mutua',
      date: '2025-07-10',
      readTime: '6 min read',
      image: '/api/placeholder/400/300',
      tags: ['Analytics', 'Data Science', 'Education Metrics']
    },
    {
      id: 6,
      title: 'Innovation Hubs: Fostering Entrepreneurship in Universities',
      excerpt: 'Creating ecosystems that nurture student innovation, from ideation to market-ready solutions in the STEM sector.',
      category: 'African Innovation',
      author: 'Dr. Ruth Ndegwa',
      date: '2025-07-08',
      readTime: '4 min read',
      image: '/api/placeholder/400/300',
      tags: ['Innovation', 'Entrepreneurship', 'Student Success']
    },
    {
      id: 7,
      title: 'Bridging the Digital Divide in Technical Education',
      excerpt: 'Strategies for ensuring equitable access to digital learning resources across diverse socioeconomic backgrounds.',
      category: 'Engineering Education',
      author: 'Samuel Kiprotich',
      date: '2025-07-05',
      readTime: '5 min read',
      image: '/api/placeholder/400/300',
      tags: ['Digital Equity', 'Access', 'Technical Training']
    },
    {
      id: 8,
      title: 'Green Engineering: Sustainable Practices in STEM',
      excerpt: 'Integrating environmental consciousness into engineering curricula and research methodologies.',
      category: 'Sustainability',
      author: 'Dr. Mary Wangari',
      date: '2025-07-03',
      readTime: '6 min read',
      image: '/api/placeholder/400/300',
      tags: ['Green Engineering', 'Environmental Impact', 'Curriculum']
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Engineering students reached', icon: Users },
    { number: '200+', label: 'Technical institutions partnered', icon: Award },
    { number: '15', label: 'Countries with active programs', icon: Globe },
    { number: '98%', label: 'Institutional partnership retention', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Narrow with Background Image */}
      <section className="relative py-16 bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden">
        {/* Background Cover Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='600' viewBox='0 0 1200 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='lab-pattern' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23ffffff' fill-opacity='0.1'/%3E%3Cpath d='M50 20v60M20 50h60' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23lab-pattern)'/%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 mb-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center text-sm text-slate-400">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-cyan-400 font-medium">Blog</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <BookOpen className="h-4 w-4 mr-2" />
                  STEM Education • Innovation • Insights
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-normal">
                  Innovation
                </span>{' '}
                Insights
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Discover the latest breakthroughs in STEM education, sustainability innovations, and African engineering excellence. Stay informed with insights from industry leaders and academic pioneers.
              </p>

              <div className="flex items-center space-x-4">
                <Link to="/blog/blogdetail" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center group">
                  Explore Articles
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Subscribe to Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-semibold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-1 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeCategory === category.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Latest insights from our engineering education research and innovation initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <Link to="/blog/blogdetail">
                  <div className="bg-gray-100 rounded-lg aspect-video mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Microscope className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <p className="text-sm opacity-80">Featured Article Image</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                        Read Article
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-normal text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive collection of STEM education insights and innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <Link to="/blog/blogdetail">
                  <div className="bg-gray-100 aspect-video overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <div className="text-center text-white">
                        <BookOpen className="h-12 w-12 mx-auto mb-2 opacity-60" />
                        <p className="text-xs opacity-60">Article Image</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-center text-xs text-gray-600 space-x-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-600">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center mx-auto group">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-normal text-gray-900 mb-6">
            Stay Updated with STEM Innovation
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Get the latest insights on engineering education, sustainability innovations, and African STEM breakthroughs delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Join 5,000+ educators and innovators. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;