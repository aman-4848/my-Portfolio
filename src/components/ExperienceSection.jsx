import { useState, useEffect } from 'react'
import { ExternalLink, Github, Calendar, MapPin } from 'lucide-react'

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('experience')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const projects = [
    {
      title: "Real-time Chat Application",
      type: "Personal Project",
      duration: "February 2025 - June 2025",
      description: "Developed a full-stack real-time chat application with user authentication, real-time messaging, and responsive design.",
      achievements: [
        "Implemented real-time messaging using Socket.io",
        "Built responsive UI with React and Tailwind CSS",
        "Integrated user authentication and authorization",
        "Deployed on Render with MongoDB Atlas"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
      liveDemo: "https://chatapp-qhjf.onrender.com/",
      github: "https://github.com/aman-4848"
    },
    {
      title: "PrimeHealth - Healthcare Management System",
      type: "Academic Project",
      duration: "September 2024 - December 2024",
      description: "Comprehensive healthcare management system for patient records, appointments, and medical staff coordination.",
      achievements: [
        "Designed intuitive patient management interface",
        "Implemented appointment scheduling system",
        "Created secure medical records storage",
        "Built responsive dashboard for healthcare providers",
        "Developed comprehensive HR management system",
        "Implemented staff management and scheduling",
        "Built payroll processing system",
        "Integrated Chapa payment method for transactions"
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "#"
    },
    {
      title: "E-Commerce Platform",
      type: "Freelance Project",
      duration: "June 2024 - August 2024",
      description: "Full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      achievements: [
        "Built modern catalog with search and filtering",
        "Implemented shopping cart and checkout process",
        "Integrated payment gateway for secure transactions",
        "Created admin panel for inventory management"
      ],
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Stripe"],
      github: "#"
    }
  ]

  return (
    <section id="experience" className="padding-section px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my projects and professional journey in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 delay-${(index + 1) * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:pr-1/2">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 card-hover">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {project.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {project.type}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2 sm:mt-0 sm:ml-4">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-md transition-colors duration-200 text-sm font-medium"
                            >
                              <ExternalLink size={14} />
                              Live Demo
                            </a>
                          )}
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-sm font-medium"
                          >
                            <Github size={14} />
                            Code
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                      <div className="grid gap-2">
                        {project.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-2 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg border border-primary-200 dark:border-primary-800 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MERN Stack Mini-Projects Note */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Additional Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Completed multiple MERN Stack mini-projects during 2023-2024, focusing on various aspects of full-stack development including authentication systems, data visualization, and API integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
