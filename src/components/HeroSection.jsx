import { useState, useEffect } from 'react'
import { ArrowRight, Download, ExternalLink, Linkedin, Github, Instagram } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '15+', label: 'Projects' },
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' },
    { number: '5+', label: 'Clients' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <div className="profile-image mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img
                  src="https://github.com/aman-4848.png"
                  alt="Amanuel Markos"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  }}
                />
              </div>
              {/* Online Status Indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-responsive-xl font-bold mb-4">
              Amanuel <span className="gradient-text">Markos</span>
            </h1>
            <p className="text-responsive-lg text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Software Developer | MERN Stack | Frontend & Backend
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="group bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-1"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-1"
              >
                <ExternalLink size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid-responsive-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/amanuel-markos-02280431a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/aman-4848"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://instagram.com/amanuel47298"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
