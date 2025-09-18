import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutEn() {
  const { t } = useLanguage();
  
  // 图片URL
  const aboutImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=neuroscience%20research%20team%20collaboration%20illustration%20modern%20laboratory%20setting&sign=118d45d611a096f68ccf34caf6238d40";
  const researchImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20science%20research%20visualization%20brain%20mapping%20abstract&sign=946830643372b8c761bd221b150cf7d6";

  return (
    <div className="scroll-smooth">
      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.about')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">{t('project.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Background Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Background & Vision</h2>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  The "Mind Mirror" High-Dimensional Cognitive Guidance Program emerged from profound reflections on the limitations of contemporary educational systems. In the age of information explosion, traditional education models centered on knowledge transmission can no longer meet the future society's demands for innovative thinking and complex problem-solving abilities.
                </p>
                <p>
                  Our team consists of cognitive neuroscientists, developmental psychologists, and educational innovators dedicated to translating cutting-edge brain science research into practical cognitive development programs for adolescents.
                </p>
                <p>
                  Since the project's launch in 2018, we have successfully helped over 500 adolescents break through cognitive bottlenecks, cultivating their high-dimensional cognitive abilities and enabling significant improvements in academic performance and creative thinking.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '500+', label: 'Beneficiaries' },
                  { number: '96%', label: 'Parent Satisfaction' },
                  { number: '12', label: 'Research Partners' },
                  { number: '5', label: 'Academic Publications' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={aboutImageUrl} 
                  alt="Mind Mirror Research Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <i className="fa-solid fa-trophy text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">2023 Education Innovation Excellence Award</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Collaboration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Academic Support</h2>
            <p className="text-lg text-gray-600">
              {t('why.w2')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Research with Harvard Graduate School of Education</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  Our collaboration with the "Laboratory for Future Mind" at Harvard Graduate School of Education began in 2019, exploring cutting-edge areas of adolescent cognitive development together.
                </p>
                <p>
                  This collaborative research focuses on the relationship between neural conformational changes and cognitive ability enhancement, using advanced brain imaging techniques and longitudinal research methods to deeply explore the formation mechanisms of high-dimensional cognitive states.
                </p>
                <p>
                  Research findings have been published in top academic journals such as Trends in Cognitive Sciences and Mind, Brain, and Education, providing a solid scientific foundation for our guidance programs.
                </p>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=harvard%20university%20logo%20official&sign=c013e61ff82abf8a5a524b4feeffd7ce" 
                    alt="Harvard University Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Harvard Graduate School of Education</p>
                  <p className="text-xs text-gray-600">Mind, Brain, and Education Program</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={researchImageUrl} 
                  alt="Cognitive Science Research Visualization" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Research & Guidance Team</h2>
            <p className="text-lg text-gray-600">
              {t('why.w3')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Mingzhe Li",
                title: "Founder & Chief Scientist",
                bio: "Former researcher at Harvard Graduate School of Education, PhD in Cognitive Neuroscience, focusing on adolescent brain development and cognitive enhancement research",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20scientist%20portrait%20professional%20asian&sign=4a5f51ea2493a61aaef7e11c80fabf04"
              },
              {
                name: "Dr. Sarah Johnson",
                title: "Research Director",
                bio: "PhD in Developmental Psychology from Harvard University, former faculty at MIT, specializing in adolescent creative thinking development",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20scientist%20portrait%20professional%20caucasian&sign=a535080159ad75c2513d327d8a1c6126"
              },
              {
                name: "Dr. Zihan Wang",
                title: "Neuro-conformation Lab Director",
                bio: "PhD in Neuroscience from Stanford University, former researcher at UC Berkeley, focusing on brain-computer interfaces and cognitive enhancement research",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20neuroscientist%20portrait%20professional%20asian&sign=24fc76d65bf63cc74c28ec098239a890"
              },
              {
                name: "Dr. David Chen",
                title: "Guidance Program Director",
                bio: "PhD in Cognitive Science from MIT, former researcher at McKinsey Global Institute, specializing in educational innovation and cognitive training program design",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20cognitive%20scientist%20portrait%20professional%20asian&sign=2c81c73362fcd088835379cefef20dd8"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Child's Cognitive Evolution Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Fill out the inquiry form to get an exclusive cognitive development assessment opportunity for your child
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/en/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                Inquire Now
              </a>
              <a
                href="/en/program"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                View Program Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}