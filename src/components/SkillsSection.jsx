import { useState, useEffect } from 'react'
import { Code, Database, Server, Wrench } from 'lucide-react'

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate skill bars with delay
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                const uniqueIndex = categoryIndex * 100 + skillIndex
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, uniqueIndex]))
                }, (categoryIndex * category.skills.length + skillIndex) * 150)
              })
            })
          }, 500)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Socket.io", level: 80 },
        { name: "JWT Authentication", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 70 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Vercel/Netlify", level: 85 },
        { name: "Postman", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Jest", level: 80 },
        { name: "Playwright", level: 75 }
      ]
    }
  ]

  const SkillBar = ({ skill, index, categoryIndex }) => {
    const skillIndex = categoryIndex * 100 + index
    const isAnimated = animatedSkills.has(skillIndex)
    
    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
            style={{ 
              width: isAnimated ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`
            }}
          />
          {/* Animated flow effect */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isAnimated ? `${skill.level}%` : '0%',
              transitionDelay: `${index * 100}ms`,
              animation: isAnimated ? 'flow 2s ease-in-out infinite' : 'none'
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical proficiencies and tools I use to build exceptional software solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-1000 p-8 card-hover delay-${(categoryIndex + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    skill={skill} 
                    index={index} 
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages Showcase */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'JavaScript', level: 95 },
                { name: 'TypeScript', level: 80 },
                { name: 'Python', level: 75 },
                { name: 'Java', level: 70 },
                { name: 'C++', level: 65 },
                { name: 'SQL', level: 80 }
              ].map((lang, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {lang.name}
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {lang.level}%
                  </div>
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 h-2 rounded-full transition-all duration-1000 shadow-sm"
                      style={{ 
                        width: isVisible ? `${lang.level}%` : '0%',
                        transitionDelay: `${1000 + index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className={`mt-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Soft Skills & Qualities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Communication',
                'Critical Thinking',
                'Time Management',
                'Adaptability',
                'Leadership',
                'Continuous Learning'
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
