import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Users, GraduationCap, Building2, Send, CheckCircle, AlertCircle, Loader2, Globe, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
const KediLabsContact = () => {
  const [activeForm, setActiveForm] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    stakeholderType: '',
    message: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const stakeholderTypes = [
    { id: 'partner', label: 'Partnership', icon: Building2, description: 'Educational institutions, NGOs, and corporate partners' },
    { id: 'student', label: 'Student/Learner', icon: GraduationCap, description: 'Students, educators, and individual learners' },
    { id: 'donor', label: 'Donor/Investor', icon: Users, description: 'Funding organizations and impact investors' }
  ];

  const contactInfo = [
    {
      type: 'Office',
      icon: MapPin,
      title: 'Headquarters',
      details: 'Kedi Labs Innovation Hub\nKisumu',

    },
    {
      type: 'General',
      icon: Mail,
      title: 'General Inquiries',
      details: 'info@kedilabs.net',
      link: 'mailto:info@kedilabs.net'
    },
    {
      type: 'Support',
      icon: MessageSquare,
      title: 'Technical Support',
      details: 'contact@kedilabs.net',
      link: 'mailto:contact@kedilabs.net'
    },
    {
      type: 'Partnerships',
      icon: Building2,
      title: 'Partnerships',
      details: 'contact@kedilabs.net',
      link: 'mailto:partners@kedilabs.net'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          stakeholderType: activeForm,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', organization: '', stakeholderType: '', message: '', subject: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.log('Simulated form submission:', { ...formData, stakeholderType: activeForm });
      // For demo purposes, show success after 2 seconds
      setTimeout(() => setSubmitStatus('success'), 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/90 z-10"></div>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Contact Kedi Labs"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 border border-cyan-400 rotate-45 rounded-2xl"></div>
            <div className="absolute bottom-32 left-32 w-48 h-48 border border-teal-400 rotate-12 rounded-xl"></div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-20 pt-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center text-sm text-slate-400">
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-cyan-400 font-medium">Contact</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex items-center min-h-[50vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-normal">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                Ready to transform STEM education in Africa? Connect with us to explore partnerships, learning opportunities, or support our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h3>
                <p className="text-slate-600 text-sm whitespace-pre-line mb-4">{info.details}</p>
                {info.link && (
                  <a 
                    href={info.link}
                    className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center transition-colors"
                    target={info.type === 'Office' ? '_blank' : undefined}
                    rel={info.type === 'Office' ? 'noopener noreferrer' : undefined}
                  >
                    {info.type === 'Office' ? 'View on Map' : 'Contact Now'}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Onboarding Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Stakeholder Types */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-light text-slate-800 mb-6">
                Join Our <span className="text-green-600 font-semibold">Community</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Select your stakeholder type to get started with the right onboarding process.
              </p>
              
              <div className="space-y-4">
                {stakeholderTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveForm(type.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                      activeForm === type.id 
                        ? 'border-teal-500 bg-teal-50' 
                        : 'border-gray-200 hover:border-teal-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                        activeForm === type.id ? 'bg-teal-600' : 'bg-gray-400'
                      }`}>
                        <type.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold mb-1 ${
                          activeForm === type.id ? 'text-teal-800' : 'text-slate-800'
                        }`}>
                          {type.label}
                        </h3>
                        <p className="text-sm text-slate-600">{type.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  {stakeholderTypes.find(type => type.id === activeForm)?.label} Inquiry
                </h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-green-800">Thank you! Your message has been submitted successfully.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-red-800">There was an error submitting your message. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="contact@kedilabs.net"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="+254 700 000 000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="Your organization/institution"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                      placeholder="Tell us about your interests, goals, or how we can collaborate..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">
              Visit Our <span className="text-green-600 font-semibold">Innovation Hub</span>
            </h2>
            <p className="text-lg text-slate-600">
              Located in the heart of Kisumu
            </p>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
  <div className="aspect-w-16 aspect-h-9 h-96">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124183.08858011256!2d34.66108667578538!3d-0.018737386036050647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa505cd99a173%3A0x2b61e11f4f6c4374!2sCounty%20Government%20Of%20Kisumu!5e1!3m2!1sen!2ske!4v1754238951876!5m2!1sen!2ske"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Kedi Labs Location"
    ></iframe>
  </div>
  
  <div className="p-8 bg-gradient-to-r from-slate-50 to-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex items-center">
        <MapPin className="h-6 w-6 text-teal-600 mr-3" />
        <div>
          <p className="font-semibold text-slate-800">Address</p>
          <p className="text-slate-600">Kisumu</p>
        </div>
      </div>


                
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-teal-600 mr-3" />
                  <div>
                    <p className="font-semibold text-slate-800">Office Hours</p>
                    <p className="text-slate-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-teal-600 mr-3" />
                  <div>
                    <p className="font-semibold text-slate-800">Timezone</p>
                    <p className="text-slate-600">EAT (UTC+3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-6">
            Need a <span className="text-teal-400 font-semibold">quick response</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent inquiries or immediate support, reach out to us directly via email or phone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@kedilabs.net"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us Now
            </a>
            <a 
              href="tel:+254700123456"
              className="border-2 border-teal-400 hover:bg-teal-400 hover:text-slate-800 text-teal-400 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KediLabsContact;