import React, { useState } from "react";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Calendar,
  Code,
  BookOpen,
  Briefcase,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  User,
  GraduationCap,
  Brain,
  Zap,
  FileText,
  Cpu,
  Server,
  Layout,
  Terminal
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";

// Placeholder images - replace with your actual images
import profileImage from "../assets/ahh.jpg";

const CV = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSkills, setExpandedSkills] = useState(false);

  // Your personal information
  const personalInfo = {
    name: "Lanh Phalla",
    title: "Computer Science Student & Web Developer",
    email: "ahlaluktnam@gmail.com",
    phone: "+855 962657233",
    location: "Sangkhat Tuek Laok Ti 2, Khan Toul Kok, Phnom Penh capital",
    website: "localhost:5173/portfolio-2/",
    github: "github.com/Ahlasakdailuktnam",
    telegram: "t.me/lanhphalla03",
    bio: "Passionate Computer Science student at RUPP with hands-on experience in full-stack web development. Currently expanding skills in backend development while maintaining strong frontend capabilities.",
  };

  // Education timeline
  const education = [
    {
      institution: "Royal University of Phnom Penh (RUPP)",
      degree: "Bachelor of Computer Science",
      period: "2025 - Present",
      status: "Year 2 Student",
      description: "Currently studying Data Structures, Algorithms, OOP, and Database Systems. Maintaining strong academic performance while working on personal projects.",
      icon: <GraduationCap className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
    {
      institution: "Etec Center",
      degree: "Web Development & Programming",
      period: "2026 - Future",
      status: "Learning",
      description: "Completed comprehensive courses in C/C++, Web Design, Frontend Development, and currently learning Backend Development with PHP/Laravel.",
      icon: <Code className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
    {
      institution: "High School",
      degree: "Bac II Graduate",
      period: "2024",
      status: "Graduated",
      description: "Completed high school education with focus on sciences, developed strong research and communication skills.",
      icon: <Award className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
  ];

  // Skills categorized with specific icons
  const skills = {
    "Frontend Development": {
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Tailwind CSS", "Figma", "UI/UX"],
      icon: <Layout className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
    "Backend Development": {
      skills: ["PHP", "Laravel", "MySQL", "REST APIs", "Authentication", "Database Design", "API Development"],
      icon: <Server className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
    "Programming Languages": {
      skills: ["C", "C++", "JavaScript", "PHP"],
      icon: <Terminal className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
    "Tools & Technologies": {
      skills: ["Git & GitHub", "VS Code", "Postman", "XAMPP", "npm", "Command Line", "Problem Solving"],
      icon: <Cpu className="w-5 h-5" />,
      accentColor: "text-gray-600"
    },
    "Soft Skills": {
      skills: ["Communication", "Teamwork", "Time Management", "Critical Thinking", "Adaptability", "Self-Learning", "Project Planning"],
      icon: <Brain className="w-5 h-5" />,
      accentColor: "text-gray-600"
    }
  };

  // Certifications
  const certifications = [
    "Web Front-End Development - Etec Center (2025)",
    "Web Design Fundamentals - Etec Center (2025)",
    "C/C++ Programming - Etec Center (2025)",
  ];

  // Contact methods
  const contactMethods = [
    { icon: <Mail className="w-5 h-5" />, text: personalInfo.email, link: `mailto:${personalInfo.email}` },
    { icon: <Phone className="w-5 h-5" />, text: personalInfo.phone, link: `tel:${personalInfo.phone}` },
    { icon: <MapPin className="w-5 h-5" />, text: personalInfo.location },
    { icon: <Globe className="w-5 h-5" />, text: personalInfo.website, link: `https://${personalInfo.website}` },
    { icon: <Github className="w-5 h-5" />, text: personalInfo.github, link: `https://${personalInfo.github}` },
    { icon: <FaTelegram className="w-5 h-5" />, text: personalInfo.telegram, link: `https://${personalInfo.telegram}` },
  ];


  const downloadCV = () => {
    alert("ot mean file ey teh tver lg!!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 p-text">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
            CURRICULUM <span className="text-gray-400">VITAE</span>
          </h1>
          <div className="w-32 h-1 bg-gray-700 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Computer Science Student & Web Developer
          </p>
        </div>

        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-800 shadow-lg">
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-700">
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 bg-white text-black px-2 py-1 rounded-full text-xs font-medium border border-gray-300">
                    Kdm Ah chkut kmean tngaii jea
                  </div>
                </div>

                {/* Personal Info */}
                <h2 className="text-xl font-bold mb-2 text-white text-center">{personalInfo.name}</h2>
                <p className="text-gray-100 mb-4 text-center text-sm">{personalInfo.title}</p>
                
                <p className="text-gray-100 text-center mb-6 text-sm leading-relaxed">{personalInfo.bio}</p>
                
                {/* Download CV Button */}
                <button
                  onClick={downloadCV}
                  className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-all duration-200 border border-gray-300 hover:border-gray-400"
                >
                  <Download className="w-4 h-4" />
                  Download CV (PDF)
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-800 shadow-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                <User className="w-4 h-4 text-gray-100" />
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md transition-colors border border-gray-800 hover:border-gray-700">
                    <div className="text-gray-100">
                      {method.icon}
                    </div>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white transition-colors flex-1 text-sm"
                      >
                        {method.text}
                      </a>
                    ) : (
                      <span className="text-gray-300 flex-1 text-sm">{method.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 rounded-lg p-5 border border-gray-800 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-white">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-950 rounded-md border border-gray-800">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-gray-400 text-xs">Years Coding</div>
                </div>
                <div className="text-center p-3 bg-gray-950 rounded-md border border-gray-800">
                  <div className="text-2xl font-bold text-gray-300">10+</div>
                  <div className="text-gray-400 text-xs">Projects</div>
                </div>
                <div className="text-center p-3 bg-gray-950 rounded-md border border-gray-800">
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-gray-400 text-xs">Certifications</div>
                </div>
                <div className="text-center p-3 bg-gray-950 rounded-md border border-gray-800">
                  <div className="text-2xl font-bold text-gray-300">2</div>
                  <div className="text-gray-400 text-xs">Languages</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Navigation Tabs */}
            <div className="bg-gray-800 rounded-lg border border-gray-800 overflow-hidden">
              <div className="flex overflow-x-auto">
                {["overview", "education", "skills"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 min-w-fit px-5 py-3 font-medium text-sm transition-all duration-200 ${
                      activeTab === tab
                        ? "bg-white text-black border-b-2 border-black"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Education Summary */}
                  <div className="bg-white rounded-lg p-5 border border-gray-800 shadow-lg">
                    <h3 className="text-xl font-bold mb-5 flex items-center gap-2 text-black">
                      <BookOpen className="w-5 h-5 text-black" />
                      Education Journey
                    </h3>
                    <div className="space-y-4">
                      {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 pb-4 border-l border-gray-800 last:border-l-0 last:pb-0">
                          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-700">
                            <div className="text-black">
                              {edu.icon}
                            </div>
                          </div>
                          <div className="mb-2">
                            <h4 className="text-lg font-bold text-black">{edu.institution}</h4>
                            <p className="text-gray-900 text-sm">{edu.degree}</p>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="flex items-center gap-1 text-gray-900 text-xs">
                              <Calendar className="w-3 h-3" />
                              {edu.period}
                            </span>
                            <span className="px-2 py-1 bg-gray-800 text-white rounded text-xs border border-gray-700">
                              {edu.status}
                            </span>
                          </div>
                          <p className="text-gray-900 text-sm">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="bg-white rounded-lg p-5 border border-gray-800 shadow-lg">
                    <h3 className="text-xl font-bold mb-5 text-black">Technical Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(skills).slice(0, expandedSkills ? undefined : 3).map(([category, data]) => (
                        <div key={category} className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className={data.accentColor}>
                              {data.icon}
                            </div>
                            <h4 className="font-medium text-gray-900 text-sm">{category}</h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {data.skills.slice(0, 3).map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-800 rounded text-xs border border-gray-800 text-gray-300"
                              >
                                {skill}
                              </span>
                            ))}
                            {data.skills.length > 3 && (
                              <span className="px-2 py-1 text-gray-900 text-xs">
                                +{data.skills.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setExpandedSkills(!expandedSkills)}
                      className="mt-5 flex items-center gap-2 text-gray-900 hover:text-blue-950 transition-colors text-sm"
                    >
                      {expandedSkills ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show All Skills
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="bg-white rounded-lg p-5 border border-gray-800 shadow-lg">
                    <h3 className="text-xl font-bold mb-5 text-black">Detailed Education</h3>
                    <div className="space-y-5">
                      {education.map((edu, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-4 p-4 bg-gray-800 rounded-lg border border-black">
                          <div className="md:w-1/4">
                            <div className="text-3xl font-bold text-white mb-1">
                              {edu.period.split(' ')[0]}
                            </div>
                            <div className="text-xs text-gray-400">{edu.period.split('-')[1]?.trim()}</div>
                          </div>
                          <div className="md:w-3/4">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                                <p className="text-gray-300 text-sm">{edu.degree}</p>
                              </div>
                              <span className="px-3 py-1 bg-gray-900 text-gray-300 rounded text-xs border border-gray-700">
                                {edu.status}
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{edu.description}</p>
                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                              {edu.icon}
                              <span>Currently active</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-white rounded-lg p-5 border border-gray-800 shadow-lg">
                    <h3 className="text-xl font-bold mb-5 text-black">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="p-3 bg-gray-800 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Award className="w-4 h-4 text-gray-400" />
                            <span className="font-medium text-gray-300 text-sm">{cert}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === "skills" && (
                <div className="animate-fadeIn">
                  <div className="bg-white rounded-lg p-5 border border-gray-800 shadow-lg">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-xl font-bold text-black">Skills & Expertise</h3>
                      <Brain className="w-5 h-5 text-gray-900" />
                    </div>
                    <div className="space-y-5">
                      {Object.entries(skills).map(([category, data]) => (
                        <div key={category}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-2">
                              <div className={data.accentColor}>
                                {data.icon}
                              </div>
                              <h4 className="text-lg font-bold text-gray-900">{category}</h4>
                            </div>
                            <div className="flex-1 h-px bg-gray-800"></div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {data.skills.map((skill, idx) => (
                              <div
                                key={idx}
                                className="p-3 bg-gray-800 rounded border border-gray-800 hover:border-gray-700 transition-colors text-center group"
                              >
                                <Zap className="w-3 h-3 text-gray-400 mb-1 mx-auto group-hover:text-white transition-colors" />
                                <span className="font-medium text-gray-300 text-xs group-hover:text-white transition-colors">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Timeline Preview */}
            <div className="bg-white rounded-lg p-5 border border-gray-800 shadow-lg">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-black">Development Timeline</h3>
                <a 
                  href="/journey" 
                  className="text-gray-950 hover:text-blue-700 flex items-center gap-2 transition-colors border border-gray-800 hover:border-blue-700 px-3 py-2 rounded text-sm"
                >
                  View Full Timeline
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-800"></div>
                <div className="space-y-4 pl-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-3 top-1 w-2 h-2 rounded-full bg-white border border-gray-700"></div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-black text-sm">{edu.period.split(' ')[0]}</span>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-gray-900 text-sm">{edu.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CV;