import React, { useState, useEffect } from 'react';
import { Star, MapPin, Heart, Camera, Plane, ArrowRight, Clock, Users } from 'lucide-react';

const Destinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFilter, setActiveFilter] = useState('all');

  const destinations = [
    {
      id: 1,
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
      price: "$1,299",
      originalPrice: "$1,599",
      rating: 4.9,
      reviews: 2847,
      duration: "7 days",
      travelers: "2-8 people",
      category: "romantic",
      highlights: ["Sunset Views", "Wine Tasting", "Blue Domes"],
      description: "Iconic sunsets and white-washed villages overlooking the Aegean Sea",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
      price: "$1,899",
      originalPrice: "$2,299",
      rating: 4.8,
      reviews: 1923,
      duration: "10 days",
      travelers: "1-6 people",
      category: "cultural",
      highlights: ["Cherry Blossoms", "Temples", "Modern Culture"],
      description: "Where ancient traditions meet cutting-edge technology",
      badge: "Cultural Experience"
    },
    {
      id: 3,
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
      price: "$899",
      originalPrice: "$1,199",
      rating: 4.7,
      reviews: 3241,
      duration: "8 days",
      travelers: "2-10 people",
      category: "tropical",
      highlights: ["Beach Resorts", "Temples", "Yoga Retreats"],
      description: "Tropical paradise with spiritual essence and pristine beaches",
      badge: "Best Value"
    },
    {
      id: 4,
      name: "Reykjavik",
      country: "Iceland",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      price: "$1,599",
      originalPrice: "$1,899",
      rating: 4.9,
      reviews: 1654,
      duration: "6 days",
      travelers: "2-8 people",
      category: "adventure",
      highlights: ["Northern Lights", "Hot Springs", "Glaciers"],
      description: "Witness the Northern Lights and explore dramatic landscapes",
      badge: "Adventure"
    },
    {
      id: 5,
      name: "Maldives",
      country: "Indian Ocean",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
      price: "$2,299",
      originalPrice: "$2,799",
      rating: 5.0,
      reviews: 987,
      duration: "5 days",
      travelers: "2-4 people",
      category: "luxury",
      highlights: ["Overwater Villas", "Diving", "Spa Treatments"],
      description: "Ultimate luxury with overwater villas and crystal-clear waters",
      badge: "Luxury"
    },
    {
      id: 6,
      name: "Marrakech",
      country: "Morocco",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?w=600&h=400&fit=crop",
      price: "$1,199",
      originalPrice: "$1,499",
      rating: 4.6,
      reviews: 2156,
      duration: "9 days",
      travelers: "2-12 people",
      category: "cultural",
      highlights: ["Souks", "Desert Safari", "Riads"],
      description: "Ancient imperial city with vibrant markets and desert adventures",
      badge: "Exotic"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Destinations', count: destinations.length },
    { id: 'romantic', label: 'Romantic', count: destinations.filter(d => d.category === 'romantic').length },
    { id: 'adventure', label: 'Adventure', count: destinations.filter(d => d.category === 'adventure').length },
    { id: 'cultural', label: 'Cultural', count: destinations.filter(d => d.category === 'cultural').length },
    { id: 'tropical', label: 'Tropical', count: destinations.filter(d => d.category === 'tropical').length },
    { id: 'luxury', label: 'Luxury', count: destinations.filter(d => d.category === 'luxury').length }
  ];

  const filteredDestinations = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getBadgeColor = (badge) => {
    const colors = {
      'Most Popular': 'from-red-500 to-pink-500',
      'Cultural Experience': 'from-purple-500 to-indigo-500',
      'Best Value': 'from-green-500 to-emerald-500',
      'Adventure': 'from-orange-500 to-red-500',
      'Luxury': 'from-yellow-500 to-amber-500',
      'Exotic': 'from-teal-500 to-cyan-500'
    };
    return colors[badge] || 'from-blue-500 to-purple-500';
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/40 via-purple-900/20 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-3xl"></div>
        <div 
          className="absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 30%, transparent 70%)`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Curated by Travel Experts</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              POPULAR
            </span>
            <br />
            <span className="text-white">DESTINATIONS</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover handpicked destinations that offer extraordinary experiences, 
            from romantic getaways to thrilling adventures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <span className="flex items-center gap-2">
                {filter.label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id 
                    ? 'bg-white/20' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {filter.count}
                </span>
              </span>
              {activeFilter !== filter.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${getBadgeColor(destination.badge)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {destination.badge}
                </div>

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50">
                  <Heart className="w-4 h-4 text-white hover:text-red-400 transition-colors" />
                </button>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Info on Hover */}
                  <div className={`absolute bottom-4 left-4 right-4 transform transition-all duration-300 ${
                    hoveredCard === destination.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-2xl font-bold text-white">{destination.name}</span>
                    <span className="text-gray-400">{destination.country}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Details Row */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{destination.travelers}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(destination.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-white">{destination.rating}</span>
                    <span className="text-gray-400 text-sm">({destination.reviews} reviews)</span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">{destination.price}</span>
                        <span className="text-gray-500 line-through text-sm">{destination.originalPrice}</span>
                      </div>
                      <span className="text-gray-400 text-sm">per person</span>
                    </div>
                    
                    <button className="group/btn flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group relative bg-white/5 backdrop-blur-md border-2 border-white/20 hover:border-white/40 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10">
            <span className="flex items-center gap-2">
              <Plane className="w-5 h-5 group-hover:animate-bounce" />
              View All Destinations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;