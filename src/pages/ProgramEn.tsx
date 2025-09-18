import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function ProgramEn() {
  const { t } = useLanguage();
  
  // 图片URL
  const programImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20development%20program%20illustration%20child%20learning%20journey&sign=87152b1c1bfa56405303c9671a6112b7";
  const processImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=12%20week%20program%20timeline%20visualization%20education%20process&sign=aa9d68b7e009bc8140bef366de81c219";
  const testimonialImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=parent%20testimonial%20illustration%20positive%20feedback&sign=87e590dc336aa64a90c01e177ed422f0";

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.program')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {t('project.title')} - Unlock Your Child's Cognitive Evolution Journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('details.title')}</h2>
              
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  The "Mind Mirror" High-Dimensional Cognitive Guidance Program is a 12-week systematic cognitive enhancement program designed specifically for deep thinkers aged 10-16. Through scientific assessment, personalized training, and ongoing support, we help children break through cognitive bottlenecks and develop high-dimensional cognitive abilities.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('details.d1')}</h3>
                    <p className="text-gray-700 text-sm">
                      We are particularly suitable for children who are "not challenged enough" in traditional educational systems—they may have excellent grades but crave deeper cognitive challenges, or possess unique thinking styles that struggle to find resonance in standardized education.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('details.d2')}</h3>
                    <p className="text-gray-700 text-sm">
                      The program adopts a progressive approach, from cognitive assessment to core training, and then to consolidation and application, ensuring that children can gradually establish and internalize high-dimensional cognitive abilities for sustainable cognitive enhancement.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('details.d3')}</h3>
                  <p className="text-gray-700 text-sm">
                    We adhere to small-class and highly personalized guidance, with a limit of 12 families per session to ensure each student receives adequate attention and customized training programs. This elite guidance model is one of the core factors ensuring our training effectiveness.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">{t('details.d4')}</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    The investment in the "Mind Mirror" program includes not only 12 weeks of professional guidance but also comprehensive cognitive assessment, personalized training programs, family协同指导, and follow-up support. We firmly believe this is the most valuable investment in your child's future thinking.
                  </p>
                  <p className="text-sm font-medium">
                    {t('details.conclusion')}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:mt-0 mt-10"
            >
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                  <img 
                    src={programImageUrl} 
                    alt="Mind Mirror Program Details" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Book a Consultation Now</h3>
                  <p className="text-gray-700 text-sm mb-6">
                    Fill out the form to book a free initial cognitive assessment and find out if your child is suitable for the "Mind Mirror" program.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Child's Age</label>
                      <input 
                        type="number" 
                        min="10" 
                        max="16" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter child's age"
                      />
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    Submit Booking
                  </button>
                  
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      {t('disclaimer')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12-Week Program Process</h2>
            <p className="text-lg text-gray-600">
              Our program adopts a scientific phase design to ensure steady improvement and sustainable development of cognitive abilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={processImageUrl} 
                  alt="12-Week Program Process" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {/* Phase 1: In-depth Assessment */}
                <div className="relative pl-10 pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: In-depth Cognitive Assessment (Week 1)</h3>
                  <p className="text-gray-700">
                    Through multi-dimensional cognitive assessment tools and structured interviews, we comprehensively understand children's cognitive characteristics, strengths, and bottlenecks, establishing a "Current Mental Representation Map" to provide a scientific basis for subsequent training.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>Neurocognitive ability testing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>Creative thinking assessment</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>Learning style and cognitive preference analysis</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>Personalized training program development</span>
                    </li>
                  </ul>
                </div>
                
                {/* Phase 2: Core Training */}
                <div className="relative pl-10 pb-8 border-l-2 border-indigo-200 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-indigo-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Core Cognitive Training (Weeks 2-10)</h3>
                  <p className="text-gray-700">
                    Based on assessment results, we provide children with weekly one-on-one core training, systematically implementing the three modules of Neuro-conformation Programming to gradually reshape the brain's information representational architecture.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>Once weekly, 90-minute one-on-one training sessions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>Cognitive Mirror Training module (3 weeks)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>Perceptual Expansion Protocol module (3 weeks)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>Cross-domain Integration Practice module (4 weeks)</span>
                    </li>
                  </ul>
                </div>
                
                {/* Phase 3: Consolidation and Transfer */}
                <div className="relative pl-10 pb-8 border-l-2 border-purple-200 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Consolidation and Transfer (Weeks 11-12)</h3>
                  <p className="text-gray-700">
                    We help children transfer the cognitive abilities acquired during training to daily study and life, and develop long-term cognitive development plans to ensure the continuous improvement and application of abilities.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>Cognitive ability transfer training</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>Family协同指导</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>Subsequent cognitive development plan formulation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>Final cognitive assessment and feedback</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              We've collected the most commonly asked questions from parents to help you better understand the "Mind Mirror" program
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "What is the difference between the 'Mind Mirror' program and traditional tutoring?",
                  answer: "Traditional tutoring mainly focuses on knowledge transmission and skill enhancement, while the 'Mind Mirror' program focuses on the underlying upgrade of cognitive abilities. We don't directly teach subject knowledge but reshape the brain's information processing architecture through systematic training, enhancing children's creative thinking, problem-solving abilities, and learning capabilities—abilities that can be transferred to any subject or field."
                },
                {
                  question: "What kind of children is the program suitable for?",
                  answer: "Our program is particularly suitable for deep thinkers aged 10-16 whose cognitive needs are not being met. These children typically exhibit the following characteristics: excellent grades but craving deeper cognitive challenges, strong curiosity and exploratory drive, potential in solving complex problems, knowledge structure appearing as 'isolated islands' but with integration tendencies, and dissatisfaction with traditional rote education."
                },
                {
                  question: "How long do the training effects last? Is continuous participation required?",
                  answer: "The 'Mind Mirror' program develops underlying cognitive abilities and thinking patterns that, once formed, will accompany the child throughout life and continue to develop. Our research shows that participants who completed the 12-week program maintained cognitive advantages after one year. While continuous participation in the formal program is not required, we provide subsequent cognitive development plans and regular consolidation activities to help children continue to improve."
                },
                {
                  question: "How do parents need to cooperate?",
                  answer: "Parental cooperation is an important factor in the program's success. We provide regular family协同指导 to help parents understand their child's cognitive development characteristics and learn how to support and promote their child's cognitive growth in daily life. Typically, parents need to spend 1-2 hours per week on simple interactive exercises with their children and create a supportive family cognitive environment."
                },
                {
                  question: "Is there scientific basis for the program? How is effectiveness measured?",
                  answer: "The 'Mind Mirror' program is based on joint research results with Harvard Graduate School of Education, integrating cutting-edge research in cognitive neuroscience, developmental psychology, and educational innovation. We measure training effectiveness through multi-dimensional indicators such as standardized cognitive assessment tools, brainwave data monitoring, and behavioral performance analysis. Data shows that 96% of participants demonstrate significant improvements in creative thinking, problem-solving abilities, and learning adaptability."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium text-gray-900 px-6 py-4 cursor-pointer list-none">
                      <span>{item.question}</span>
                      <i className="fa-solid fa-chevron-down text-gray-400 group-open:rotate-180 transition-transform"></i>
                    </summary>
                    <div className="px-6 pb-4 text-gray-700">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Parent Testimonials</h2>
              
              <div className="space-y-8">
                {[
                  {
                    name: "Mr. Zhang, parent of 14-year-old student",
                    content: "After participating in the 'Mind Mirror' program, the biggest change in my son is that he has learned to think independently and solve problems creatively. He used to only apply formulas when doing math problems, but now he can come up with multiple solutions and even create his own problems. What surprises me even more is that he has started to actively apply scientific knowledge to daily life, such as designing our family's waste sorting system.",
                    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20aged%20male%20avatar&sign=b012c77c7690a5c590031d1299030414"
                  },
                  {
                    name: "Ms. Li, parent of 12-year-old student",
                    content: "As an educator, I have接触过 many after-school programs, but 'Mind Mirror' is the most unique and effective. It doesn't teach children knowledge but teaches them how to think. After participating in the program, my daughter has shown significant improvement not only in writing ability, being able to analyze issues from multiple perspectives, but also in taking the initiative to organize interdisciplinary group inquiry activities with her classmates.",
                    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20aged%20female%20avatar&sign=74f7323064486406a49f683135c0d6a0"
                  },
                  {
                    name: "Mr. Wang, parent of 15-year-old student",
                    content: "My son used to be bored with traditional learning, finding school content too simple. After participating in the 'Mind Mirror' program, he has rediscovered his passion for learning. What surprises me most is that he has started combining mathematics, physics, and art to create a series of science-themed paintings, which won an award in a youth science and technology innovation competition. Thank you to the 'Mind Mirror' team for inspiring his potential.",
                    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20aged%20male%20avatar&sign=b012c77c7690a5c590031d1299030414%202"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center text-yellow-500 mb-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <i key={i} className="fa-solid fa-star text-xs"></i>
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm italic mb-3">"{testimonial.content}"</p>
                        <p className="text-gray-900 font-medium text-sm">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img 
                  src={testimonialImageUrl} 
                  alt="Parent Testimonials" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program Outcome Data</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Creative Thinking Improvement", value: "89%" },
                    { label: "Problem-solving Ability Improvement", value: "85%" },
                    { label: "Learning Adaptability Improvement", value: "92%" },
                    { label: "Parent Satisfaction", value: "96%" }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                        <span className="text-sm font-bold text-blue-600">{stat.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: stat.value }}
                        ></div>
                      </div></div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-4">Based on data from 500+ families who completed the program</p>
                  <Link to="/en/contact" className="inline-flex items-center text-blue-600 font-medium text-sm">
                    View more success stories <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                  </Link>
                </div>
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
            <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('contact.phone')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/en/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                Book Consultation Now
              </a>
              <a
                href="tel:+8619922910749"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-phone mr-2"></i> Call Now
              </a>
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