import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HomeEn() {
  const { t } = useLanguage();
  
  // 图片URL - 使用心智镜像相关的专业、抽象的视觉元素
  const heroImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=abstract%20brain%20visualization%20with%20neural%20connections%20in%20blue%20and%20purple%20tones%20modern%20minimalist%20style&sign=d273eacc3a35dcfbe32a2d36e5b75b41";
  const methodologyImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20training%20visualization%20mind%20mapping%20conceptual%20illustration&sign=0baa7d413be7071c0f9ee58963589b88";
  const benefitsImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=child%20thinking%20creatively%20problem%20solving%20illustration%20warm%20colors&sign=d95df2861aab0812c84b476ce4aa2deb";

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -left-20 bottom-10 w-60 h-60 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/en/program"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all transform hover:-translate-y-1 text-center"
                >
                  View Program Details
                </Link>
                <Link
                  to="/en/contact"
                  className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center"
                >
                  Inquire Now
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImageUrl} 
                  alt="Mind Mirror High-Dimensional Cognitive Guidance Program" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <i className="fa-solid fa-check text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Joint Research with Harvard University</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('problems.title')}
            </h2>
            <p className="text-lg text-gray-600 italic">
              {t('problems.conclusion')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Problem Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-lightbulb text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Lack of True Insight</h3>
              <p className="text-gray-600 text-sm">
                {t('problems.p1')}
              </p>
            </motion.div>
            
            {/* Problem Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-brain text-indigo-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mental Blockages</h3>
              <p className="text-gray-600 text-sm">
                {t('problems.p2')}
              </p>
            </motion.div>
            
            {/* Problem Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-sitemap text-purple-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Knowledge Silos</h3>
              <p className="text-gray-600 text-sm">
                {t('problems.p3')}
              </p>
            </motion.div>
            
            {/* Problem Card 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <i className="fa-solid fa-compass text-teal-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Adaptive Anxiety</h3>
              <p className="text-gray-600 text-sm">
                {t('problems.p4')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-Dimensional Cognition Introduction */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('highdim.title')}
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  {t('highdim.content')}
                </p>
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <img 
                        src={`https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=professional%20person%20avatar%20${i}`} 
                        alt="Expert Team" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star text-xs"></i>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Over 200 five-star reviews from parents</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={methodologyImageUrl} 
                  alt="Neuro-conformation Programming Methodology" 
                  className="w-full h-auto"
                />
              </div><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-400 rounded-2xl -z-10 transform scale-105 opacity-20 blur-xl"></div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold text-blue-600">96%</p>
                  <p className="text-sm text-gray-600">Parent Satisfaction</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <p className="text-3xl font-bold text-indigo-600">12+</p>
                  <p className="text-sm text-gray-600">Research Partners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('methodology.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('methodology.intro')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Methodology 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-mirror text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('methodology.m1.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('methodology.m1.desc')}
              </p>
              <Link to="/en/methodology" className="inline-flex items-center text-blue-600 font-medium text-sm">
                Learn more <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </motion.div>
            
            {/* Methodology 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-brain text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('methodology.m2.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('methodology.m2.desc')}
              </p>
              <Link to="/en/methodology" className="inline-flex items-center text-purple-600 font-medium text-sm">
                Learn more <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </motion.div>
            
            {/* Methodology 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-8 border border-teal-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-project-diagram text-teal-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('methodology.m3.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('methodology.m3.desc')}
              </p>
              <Link to="/en/methodology" className="inline-flex items-center text-teal-600 font-medium text-sm">
                Learn more <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={benefitsImageUrl} 
                    alt="Cognitive improvement for children" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg max-w-xs z-20">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <i className="fa-solid fa-quote-right text-green-600"></i>
                    </div>
                    <div>
                      <p className="text-sm italic text-gray-700 mb-2">After participating in the program, my child demonstrated unprecedented creativity and insight in problem-solving.</p>
                      <p className="text-xs font-medium text-gray-900">— Parent of a 12-year-old participant</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('why.title')}
              </h2>
              
              <div className="space-y-8">
                {[
                  { icon: 'fa-lightbulb', text: t('why.w1') },
                  { icon: 'fa-university', text: t('why.w2') },
                  { icon: 'fa-graduation-cap', text: t('why.w3') },
                  { icon: 'fa-user-gear', text: t('why.w4') },
                  { icon: 'fa-lock', text: t('why.w5') }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <i className={`fa-solid ${item.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link
                  to="/en/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                >
                  Book a free consultation <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('contact.phone')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/en/program"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                View Program Details
              </Link>
              <Link
                to="/en/contact"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Fill Inquiry Form
              </Link>
            </div>
            <p className="mt-8 text-sm text-blue-200">
              {t('disclaimer')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}