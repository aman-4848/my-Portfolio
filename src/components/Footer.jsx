import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'amanuelmark747@gmail.com',
      href: 'mailto:amanuelmark747@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+251934216600',
      href: 'tel:+251934216600'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Addis Abeba, Ethiopia',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/amanuel-markos-02280431a',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub', 
      href: 'https://github.com/aman-4848',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://instagram.com/amanuel47298',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Get In Touch Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            Ready to collaborate on your next project?
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Let's discuss how we can work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300 group ${social.color}`}
                >
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {['Home', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase())
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Amanuel Markos. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
