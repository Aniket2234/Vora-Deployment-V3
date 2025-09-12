import React, { lazy, useState } from 'react';
import { HeaderSection } from "../VESHomePage/sections/HeaderSection/HeaderSection";

const FooterSection = lazy(() => import("../VESHomePage/sections/FooterSection/FooterSection").then(module => ({ default: module.FooterSection })));

// Add this after your imports and before const VESProject: React.FC = () => {

// Projects Page Header Section Component - Matching About Page Style
const ProjectsPageHeader = ({ logoPath = "https://via.placeholder.com/120x120/ffffff/000000?text=LOGO" }) => (
  <div style={{ backgroundColor: '#c4c4c4' }} className="text-white py-8 sm:py-12 md:py-16 lg:py-20 mt-16 sm:mt-0">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div className="text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 text-black animate-slide-down">Our Projects</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in opacity-0 animation-delay-300">
          Where Integrity, Innovation and Legacy, Power Future-Ready Solutions. Explore our portfolio of cutting-edge electrical projects that are shaping India's energy landscape.
        </p>
        <nav className="flex justify-center items-center mt-4 sm:mt-6 text-black animate-fade-in opacity-0 animation-delay-500">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">Homepage</span>
          <span className="mx-2 text-sm sm:text-lg">›</span>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg">Projects</span>
        </nav>

        {/* Quick Stats - Enhanced with animations */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 sm:mt-12 max-w-2xl mx-auto animate-fade-in opacity-0 animation-delay-700">
                    <div className="bg-white bg-opacity-90 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-xl sm:text-2xl font-bold text-black">200+</div>
                        <div className="text-xs sm:text-sm text-black">Projects</div>
                    </div>
                    <div className="bg-white bg-opacity-90 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-xl sm:text-2xl font-bold text-black">50MW+</div>
                        <div className="text-xs sm:text-sm text-black">Installed</div>
                    </div>
                    <div className="bg-white bg-opacity-90 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-xl sm:text-2xl font-bold text-black">15</div>
                        <div className="text-xs sm:text-sm text-black">States</div>
                    </div>
                    <div className="bg-white bg-opacity-90 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="text-xl sm:text-2xl font-bold text-black">24/7</div>
                        <div className="text-xs sm:text-sm text-black">Support</div>
                    </div>
                </div> */}
      </div>
    </div>
    <style>{`
            @keyframes fade-in-up {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slide-down {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            
            .animate-fade-in-up {
                animation: fade-in-up 0.8s ease-out;
            }
            
            .animate-slide-down {
                animation: slide-down 0.6s ease-out;
            }
            
            .animate-fade-in {
                animation: fade-in 0.8s ease-out forwards;
            }
            
            .animation-delay-300 {
                animation-delay: 0.3s;
            }
            
            .animation-delay-500 {
                animation-delay: 0.5s;
            }
            
            .animation-delay-700 {
                animation-delay: 0.7s;
            }
        `}</style>
  </div>
);


const VESProject: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "GreenTech Solar Installation",
      category: "Renewable Energy",
      description: "Installed a high-efficiency solar power system for an eco-friendly office, optimizing energy usage and reducing carbon footprint significantly.",
      fullDescription: "This comprehensive solar installation project involved designing and implementing a 500kW rooftop solar system for a modern office complex. The project included advanced photovoltaic panels, smart inverters, and an intelligent monitoring system. We successfully reduced the building's electricity costs by 75% and eliminated approximately 450 tons of CO2 emissions annually.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      duration: "3 months",
      capacity: "500kW",
      savings: "75% cost reduction",
      completion: "December 2023",
      technologies: ["Monocrystalline PV Panels", "String Inverters", "SCADA Monitoring", "Grid-tie System"],
      challenges: "Complex rooftop geometry and structural limitations required custom mounting solutions.",
      client: "EcoTech Corporate Center",
      location: "Mumbai, Maharashtra",
      teamSize: "12 specialists"
    },
    {
      id: 2,
      title: "Smart Grid Infrastructure Upgrade",
      category: "Infrastructure",
      description: "Modernized the electrical grid system for a residential complex with smart meters and automated load balancing.",
      fullDescription: "A state-of-the-art smart grid implementation covering 200 residential units. The project included installation of smart meters, automated switching systems, and real-time monitoring capabilities. This upgrade enables dynamic load balancing, power quality optimization, and predictive maintenance scheduling, resulting in 99.9% system reliability.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      duration: "6 months",
      capacity: "2MW",
      savings: "40% efficiency gain",
      completion: "March 2024",
      technologies: ["Smart Meters", "AMI Infrastructure", "Load Management System", "Power Quality Analyzers"],
      challenges: "Upgrading live systems without service interruption while ensuring resident safety.",
      client: "Skyline Residential Complex",
      location: "Pune, Maharashtra",
      teamSize: "18 engineers"
    },
    {
      id: 3,
      title: "Industrial Automation & Control",
      category: "Automation",
      description: "Designed and installed comprehensive electrical automation systems for a manufacturing facility.",
      fullDescription: "Complete electrical automation overhaul for a large-scale manufacturing plant. The project encompassed PLC programming, SCADA system implementation, motor control centers, and industrial networking. Our solution improved production efficiency by 60% while ensuring operator safety through advanced safety interlocks and emergency shutdown systems.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      duration: "8 months",
      capacity: "5MW",
      savings: "60% efficiency boost",
      completion: "August 2023",
      technologies: ["Siemens PLC", "WinCC SCADA", "Profibus Network", "Safety Controllers"],
      challenges: "Integrating legacy equipment with modern control systems while maintaining production schedules.",
      client: "Tata Manufacturing Ltd",
      location: "Chennai, Tamil Nadu",
      teamSize: "25 specialists"
    },
    {
      id: 4,
      title: "Hospital Emergency Power System",
      category: "Critical Infrastructure",
      description: "Implemented redundant backup power systems ensuring uninterrupted electricity supply for critical medical equipment.",
      fullDescription: "A mission-critical project involving the installation of triple-redundant power systems for a 500-bed hospital. The solution includes diesel generators, UPS systems, automatic transfer switches, and emergency lighting. Our design ensures zero downtime for life-support equipment and maintains full operational capacity during extended power outages.",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
      duration: "5 months",
      capacity: "3MW",
      savings: "100% uptime guarantee",
      completion: "January 2024",
      technologies: ["Diesel Generators", "Online UPS", "Automatic Transfer Switches", "Emergency Lighting"],
      challenges: "Installing backup systems in operational hospital without disrupting critical care services.",
      client: "Apollo Health Center",
      location: "Bangalore, Karnataka",
      teamSize: "20 engineers"
    },
    {
      id: 5,
      title: "EV Charging Station Network",
      category: "Electric Vehicle Infrastructure",
      description: "Established a comprehensive electric vehicle charging network across multiple commercial locations.",
      fullDescription: "Deployment of 50 high-speed EV charging stations across 15 commercial locations. The project includes Level 2 and DC fast charging options, smart payment systems, and renewable energy integration. Our network supports all major EV brands and provides real-time availability monitoring through a dedicated mobile app.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      duration: "4 months",
      capacity: "2.5MW total",
      savings: "Clean transport solution",
      completion: "June 2024",
      technologies: ["DC Fast Chargers", "Level 2 AC Chargers", "Payment Gateway", "Mobile App Integration"],
      challenges: "Coordinating installations across multiple locations while ensuring grid stability.",
      client: "Future Mobility Solutions",
      location: "Delhi NCR",
      teamSize: "15 technicians"
    },
    {
      id: 6,
      title: "Data Center Power Infrastructure",
      category: "IT Infrastructure",
      description: "Built robust electrical infrastructure for a tier-3 data center with advanced cooling and power management systems.",
      fullDescription: "Complete electrical infrastructure for a 10,000 sq ft data center facility. The project involved designing redundant power distribution, precision cooling systems, and advanced monitoring solutions. We implemented N+1 redundancy throughout the system, ensuring 99.99% uptime with intelligent load balancing and predictive failure detection.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      duration: "7 months",
      capacity: "8MW",
      savings: "99.99% reliability",
      completion: "October 2023",
      technologies: ["Modular UPS", "PDU Systems", "Environmental Monitoring", "Fire Suppression"],
      challenges: "Achieving tier-3 certification standards while optimizing power efficiency and cooling costs.",
      client: "DataVault Technologies",
      location: "Hyderabad, Telangana",
      teamSize: "22 specialists"
    },
    {
      id: 7,
      title: "Railway Electrification Project",
      category: "Transportation",
      description: "Comprehensive electrification of a 50km railway corridor with modern traction power systems.",
      fullDescription: "Major railway electrification project covering 50km of track with overhead electrical systems, traction substations, and signaling integration. The project enables high-speed train operations and reduces carbon emissions by 80% compared to diesel locomotives. Advanced protection systems ensure safe and reliable power delivery.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
      duration: "12 months",
      capacity: "25MW",
      savings: "80% emission reduction",
      completion: "February 2024",
      technologies: ["Overhead Contact System", "Traction Substations", "SCADA Integration", "Protection Relays"],
      challenges: "Working around active rail operations while meeting strict safety and timeline requirements.",
      client: "Indian Railways",
      location: "Gujarat",
      teamSize: "45 engineers"
    },
    {
      id: 8,
      title: "Wind Farm Electrical Systems",
      category: "Renewable Energy",
      description: "Electrical infrastructure development for a 100MW wind farm including collection systems and grid integration.",
      fullDescription: "Complete electrical design and installation for a 100MW wind farm featuring 50 wind turbines. The project includes medium voltage collection systems, step-up transformers, SCADA integration, and grid interconnection facilities. Advanced power quality management ensures seamless integration with the national grid.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
      duration: "10 months",
      capacity: "100MW",
      savings: "Clean energy generation",
      completion: "May 2024",
      technologies: ["Wind Turbine Systems", "MV Collection", "Step-up Transformers", "Grid Integration"],
      challenges: "Managing electrical systems across vast terrain while ensuring optimal power collection efficiency.",
      client: "GreenWind Energy Ltd",
      location: "Rajasthan",
      teamSize: "35 specialists"
    }
  ];

  const categories = ['All', 'Renewable Energy', 'Infrastructure', 'Automation', 'Critical Infrastructure', 'Electric Vehicle Infrastructure', 'IT Infrastructure', 'Transportation'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const toggleExpand = (id: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" },
    { name: "IEC 61850", description: "Power System Communication" }
  ];

  const awards = [
    { year: "2024", title: "Excellence in Renewable Energy", organization: "Energy Ministry of India" },
    { year: "2023", title: "Best Electrical Contractor", organization: "Construction Industry Awards" },
    { year: "2023", title: "Innovation in Smart Grid", organization: "IEEE Power & Energy Society" },
    { year: "2022", title: "Sustainable Infrastructure Award", organization: "Green Building Council" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />

      {/* Hero Section */}
      <ProjectsPageHeader />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">VES Electrical Solutions</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With over two decades of excellence in electrical engineering and installation services,
                  VES Electrical Solutions stands as a beacon of innovation in the power industry. We specialize
                  in delivering comprehensive electrical solutions that combine cutting-edge technology with
                  sustainable practices.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our expertise spans across renewable energy systems, industrial automation, critical infrastructure,
                  and smart grid technologies. Every project we undertake reflects our commitment to quality,
                  sustainability, and future-ready solutions that stand the test of time.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Our Mission</h3>
                    <p className="text-gray-600">Powering India's future through innovative, sustainable, and reliable electrical solutions.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Our Vision</h3>
                    <p className="text-gray-600">To be the leading electrical solutions provider driving the nation's energy transformation.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                  alt="Industrial Automation"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop"
                  alt="Solar Installation"
                  className="rounded-lg shadow-md w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                  alt="Smart Grid"
                  className="rounded-lg shadow-md w-full h-48 object-cover -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
                  alt="Data Center"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:shadow-md'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of successful electrical installations and innovations
              that have powered businesses and communities across India. Each project represents
              our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white bg-opacity-90 text-black px-3 py-1 rounded-full text-sm font-medium">
                      {project.completion}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Basic Info Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">{project.capacity}</div>
                      <div className="text-xs text-gray-500">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">{project.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-black">{project.teamSize}</div>
                      <div className="text-xs text-gray-500">Team Size</div>
                    </div>
                  </div>

                  {expandedProjects[project.id] && (
                    <div className="overflow-hidden">
                      <p className="text-gray-600 mb-4">{project.fullDescription}</p>

                      {/* Detailed Information */}
                      <div className="space-y-4 mb-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-black text-sm mb-2">Client & Location</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div>
                              <span className="text-gray-500 text-sm">Client: </span>
                              <span className="text-black text-sm">{project.client}</span>
                            </div>
                            <div>
                              <span className="text-gray-500 text-sm">Location: </span>
                              <span className="text-black text-sm">{project.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-black text-sm mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="bg-white px-2 py-1 rounded text-xs text-gray-700 border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-black text-sm mb-2">Key Challenge</h4>
                          <p className="text-gray-600 text-sm">{project.challenges}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-gray-100 p-3 rounded">
                            <h4 className="font-semibold text-black text-sm">Achievement</h4>
                            <p className="text-gray-600 text-sm">{project.savings}</p>
                          </div>
                          <div className="bg-gray-100 p-3 rounded">
                            <h4 className="font-semibold text-black text-sm">Completed</h4>
                            <p className="text-gray-600 text-sm">{project.completion}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">Project #{project.id.toString().padStart(2, '0')}</span>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors duration-300"
                    >
                      {expandedProjects[project.id] ? 'Show Less' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact Across India</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and innovation in electrical solutions,
              spanning across multiple states and diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">200+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">50MW+</div>
              <div className="text-gray-300">Total Capacity Installed</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">99.8%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">22+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-700 pt-12">
            <div>
              <div className="text-2xl font-bold text-white mb-2">15</div>
              <div className="text-gray-300 text-sm">States Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm">Engineers & Technicians</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-300 text-sm">Tons CO2 Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-12">Recognition & Certifications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Awards */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Recent Awards</h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="border-l-4 border-black pl-6 py-3">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-black">{award.title}</h4>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">{award.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{award.organization}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Certifications</h3>
                <div className="grid grid-cols-1 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-1">{cert.name}</h4>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-4">Our Core Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive electrical solutions tailored to meet the diverse needs of modern India's infrastructure and industrial requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Power Systems Design</h3>
                <p className="text-gray-600 mb-4">Complete electrical system design, installation, and maintenance for residential, commercial, and industrial applications.</p>
                <div className="text-sm text-gray-500">
                  • HV/MV/LV Systems<br />
                  • Load Flow Analysis<br />
                  • Protection Coordination
                </div>
              </div>

              <div className="text-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Industrial Automation</h3>
                <p className="text-gray-600 mb-4">Advanced industrial automation solutions with cutting-edge control systems and process optimization.</p>
                <div className="text-sm text-gray-500">
                  • PLC Programming<br />
                  • SCADA Systems<br />
                  • Motor Control Centers
                </div>
              </div>

              <div className="text-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Renewable Energy</h3>
                <p className="text-gray-600 mb-4">Sustainable energy solutions including solar, wind, and energy storage systems for a greener tomorrow.</p>
                <div className="text-sm text-gray-500">
                  • Solar PV Systems<br />
                  • Wind Farm Integration<br />
                  • Energy Storage Solutions
                </div>
              </div>

              <div className="text-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Critical Infrastructure</h3>
                <p className="text-gray-600 mb-4">Mission-critical power solutions for hospitals, data centers, and essential services requiring 99.99% uptime.</p>
                <div className="text-sm text-gray-500">
                  • Emergency Power Systems<br />
                  • UPS & Battery Backup<br />
                  • Redundant Power Design
                </div>
              </div>

              <div className="text-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">EV Infrastructure</h3>
                <p className="text-gray-600 mb-4">Future-ready electric vehicle charging solutions supporting India's transition to sustainable transportation.</p>
                <div className="text-sm text-gray-500">
                  • DC Fast Charging<br />
                  • Smart Grid Integration<br />
                  • Payment Solutions
                </div>
              </div>

              <div className="text-center p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Smart Grid Solutions</h3>
                <p className="text-gray-600 mb-4">Next-generation smart grid technologies enabling efficient power distribution and management.</p>
                <div className="text-sm text-gray-500">
                  • Smart Metering<br />
                  • Grid Automation<br />
                  • Demand Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Our Project Methodology</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach ensuring every project is delivered on time, within budget, and exceeding quality expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  01
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Planning & Design</h3>
                <p className="text-gray-600 text-sm">Comprehensive site analysis, load calculations, and detailed engineering design with 3D modeling.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  02
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Procurement & Logistics</h3>
                <p className="text-gray-600 text-sm">Strategic sourcing of premium materials and equipment with quality assurance and timely delivery.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  03
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Installation & Testing</h3>
                <p className="text-gray-600 text-sm">Expert installation by certified technicians followed by rigorous testing and commissioning.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  04
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Support & Maintenance</h3>
                <p className="text-gray-600 text-sm">Ongoing maintenance support with 24/7 monitoring and predictive maintenance programs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">Technology Partners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We collaborate with leading technology providers to deliver best-in-class solutions using cutting-edge equipment and software.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="font-bold text-black">Siemens</div>
                  <div className="text-xs text-gray-500">Automation</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="font-bold text-black">ABB</div>
                  <div className="text-xs text-gray-500">Power Systems</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="font-bold text-black">Schneider</div>
                  <div className="text-xs text-gray-500">Energy Management</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="font-bold text-black">GE</div>
                  <div className="text-xs text-gray-500">Grid Solutions</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="font-bold text-black">Honeywell</div>
                  <div className="text-xs text-gray-500">Control Systems</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:opacity-100 transition-opacity">
                <div className="text-center">
                  <div className="font-bold text-black">Rockwell</div>
                  <div className="text-xs text-gray-500">Industrial Automation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Power Your Next Project?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Partner with VES Electrical Solutions for innovative, reliable, and sustainable electrical infrastructure.
              Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get a Quote
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold mb-1">Free</div>
                <div className="text-gray-400 text-sm">Initial Consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">24-48hrs</div>
                <div className="text-gray-400 text-sm">Quote Turnaround</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">5 Year</div>
                <div className="text-gray-400 text-sm">Warranty Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <React.Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
        <FooterSection />
      </React.Suspense>
    </div>
  );
};

export default VESProject;