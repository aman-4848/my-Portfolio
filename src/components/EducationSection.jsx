import { useState, useEffect } from 'react'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const EducationSection = () => {
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

    const element = document.getElementById('education')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const achievements = [
    "Dean's List for Academic Excellence (2023-2024)",
    "Led development team for university hackathon project",
    "Active member of Software Engineering Student Association",
    "Completed advanced web development certification"
  ]

  const relevantCourses = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering Principles"
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic foundation and continuous learning in software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Education Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 card-hover">
              {/* University Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    Arba Minch University
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Calendar size={20} />
                  <span>2022 - 2026 (Expected)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} />
                  <span>Arba Minch, Ethiopia</span>
                </div>
              </div>

              {/* GPA */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Current GPA</span>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">3.8/4.0</span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-300 font-medium">Status:</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Currently Enrolled
                </span>
              </div>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Academic Achievements
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Relevant Coursework
                  </h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Core subjects that have shaped my technical foundation
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {relevantCourses.map((course, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Learning */}
        <div className={`mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beyond formal education, I actively pursue online courses, attend tech meetups, and contribute to open-source projects to stay current with the latest technologies and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
