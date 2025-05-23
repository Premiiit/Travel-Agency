import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, Play, Heart, MapPin, Camera, Users, Award } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      destination: "Santorini, Greece",
      rating: 5,
      text: "This was absolutely magical! The sunset views from our villa were breathtaking, and every detail was perfectly planned. The team went above and beyond to make our honeymoon unforgettable. We felt like royalty throughout the entire trip!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b510?w=120&h=120&fit=crop&crop=face",
      tripImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop",
      badge: "Honeymoon Trip",
      experience: "Luxury Romance",
      duration: "7 days",
      travelers: 2
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      location: "Barcelona, Spain",
      destination: "Tokyo, Japan",
      rating: 5,
      text: "Mind-blowing cultural immersion! From the bustling streets of Shibuya to the serene temples of Kyoto, every moment was curated to perfection. Our guide was incredibly knowledgeable and the hidden gems we discovered were absolutely incredible!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      tripImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=200&fit=crop",
      badge: "Cultural Explorer",
      experience: "Cultural Deep Dive",
      duration: "10 days",
      travelers: 2
    },
    {
      id: 3,
      name: "Aisha Patel",
      location: "Mumbai, India",
      destination: "Bali, Indonesia",
      rating: 5,
      text: "Pure paradise! The blend of spiritual experiences and tropical luxury was exactly what we needed. From sunrise yoga sessions to private beach dinners, every moment felt like a dream. Our family came back completely rejuvenated!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",
      tripImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop",
      badge: "Family Adventure",
      experience: "Wellness Retreat",
      duration: "8 days",
      travelers: 4
    },
    {
      id: 4,
      name: "James Mitchell",
      location: "London, UK",
      destination: "Iceland",
      rating: 5,
      text: "Absolutely epic adventure! Chasing the Northern Lights, exploring ice caves, and soaking in geothermal springs - it was the trip of a lifetime. The photography opportunities were endless and our guide's expertise made all the difference!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
      tripImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      badge: "Adventure Seeker",
      experience: "Northern Lights",
      duration: "6 days",
      travelers: 2
    },
    {
      id: 5,
      name: "Emma Thompson",
      location: "Sydney, Australia",
      destination: "Maldives",
      rating: 5,
      text: "Ultimate luxury! Our overwater villa was a slice of heaven, and the service was impeccable. Snorkeling with manta rays, spa treatments over the ocean, and private dining under the stars - it exceeded every expectation!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      tripImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=300&h=200&fit=crop",
      badge: "Luxury Escape",
      experience: "Overwater Villa",
      duration: "5 days",
      travelers: 2
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const getBadgeColor = (badge) => {
    const colors = {
      'Honeymoon Trip': 'from-pink-500 to-rose-500',
      'Cultural Explorer': 'from-purple-500 to-indigo-500',
      'Family Adventure': 'from-green-500 to-emerald-500',
      'Adventure Seeker': 'from-orange-500 to-red-500',
      'Luxury Escape': 'from-yellow-500 to-amber-500'
    };
    return colors[badge] || 'from-blue-500 to-purple-500';
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-500"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 40%, transparent 70%)`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-6">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-gray-300">Loved by 50,000+ Travelers</span>
            <Heart className="w-4 h-4 text-red-400" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">WHAT OUR</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              TRAVELERS SAY
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real stories from real adventures. See why thousands choose us 
            for their dream vacations.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="mb-16">
          <div className="relative max-w-6xl mx-auto">
            
            {/* Central Testimonial Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              
              {/* Floating Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-3 gap-8 items-center">
                
                {/* Left: User Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 p-1 rounded-full">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{currentTestimonial.name}</h3>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <MapPin className="w-3 h-3" />
                        {currentTestimonial.location}
                      </div>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`inline-block bg-gradient-to-r ${getBadgeColor(currentTestimonial.badge)} text-white text-sm font-bold px-4 py-2 rounded-full`}>
                    {currentTestimonial.badge}
                  </div>

                  {/* Trip Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Camera className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{currentTestimonial.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">{currentTestimonial.travelers} travelers • {currentTestimonial.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Center: Testimonial Text */}
                <div className="md:col-span-1 space-y-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-gray-200 leading-relaxed italic">
                    "{currentTestimonial.text}"
                  </blockquote>
                  
                  <div className="text-blue-400 font-semibold">
                    Destination: {currentTestimonial.destination}
                  </div>
                </div>

                {/* Right: Trip Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src={currentTestimonial.tripImage}
                      alt={currentTestimonial.destination}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white font-bold text-lg">{currentTestimonial.destination}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative transition-all duration-300 ${
                index === activeTestimonial ? 'scale-110' : 'hover:scale-105'
              }`}
            >
              <div className={`relative w-16 h-16 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'border-blue-400 shadow-lg shadow-blue-400/50' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Tooltip */}
              <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full whitespace-nowrap transition-all duration-300 ${
                hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                {testimonial.name}
              </div>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/10 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>Review {activeTestimonial + 1} of {testimonials.length}</span>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Average Rating" },
            { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Happy Travelers" },
            { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate" },
            { icon: <Heart className="w-6 h-6" />, value: "99%", label: "Recommend Us" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1">
                <div className="text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;