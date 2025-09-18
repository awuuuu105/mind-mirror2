import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MethodologyEn() {
  const { t } = useLanguage();
  
  // 图片URL
  const neuroImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=neural%20connections%20visualization%20brain%20activity%20abstract%20blue%20tones&sign=5c46ad283226ab61f0d909da4d0ffc37";
  const mirrorImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20mirror%20training%20mindfulness%20meditation%20visualization&sign=5006dab4b626c911a499b86fe78ac389";
  const perceptionImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=brainwave%20biofeedback%20technology%20neurofeedback%20interface&sign=90e5891fccb133c1ad07cfb519755065";
  const integrationImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cross%20domain%20knowledge%20integration%20mind%20mapping%20visualization&sign=be777d89692047ae77046de0f75ba53d";
  const caseImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=before%20after%20brain%20activity%20comparison%20scientific%20visualization&sign=04d9e17781cc28302921b12fc2820bc5";

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.methodology')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {t('methodology.intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Neuro-conformation Programming: The Scientific Path to Cognitive Upgrade</h2>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  Neuro-conformation Programming is the core methodology of the "Mind Mirror" program. Based on the latest research findings in contemporary cognitive neuroscience, it reshapes the brain's information representational architecture through systematic training interventions, thereby achieving a qualitative leap in cognitive abilities.
                </p>
                <p>
                  Traditional cognitive training is often limited to the enhancement of specific skills, while Neuro-conformation Programming focuses on the "operating system upgrade" of the underlying brain, promoting the optimal reorganization of neural connection patterns and increasing the dimension and efficiency of information processing.
                </p>
                <p>
                  Our research shows that after 12 weeks of systematic training, participants exhibit significantly increased neural connection density in the prefrontal cortex, parietal lobe, and temporal lobe regions of the brain, with improved coordination of alpha and theta brain waves, which correlates highly with enhancements in creative thinking and problem-solving abilities.
                </p>
              </div>
              
              <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <i className="fa-solid fa-lightbulb text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Scientific Breakthrough</h4>
                    <p className="text-sm text-gray-700">
                      Our research is the first to证实 that specific cognitive training can significantly increase the dynamic coordination between the brain's Default Mode Network (DMN) and Task-Positive Network (TN), which is the neural basis of creative thinking.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:mt-0 mt-10"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={neuroImageUrl} 
                  alt="Principles of Neuro-conformation Programming" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Core Training Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Three Core Training Modules</h2>
            <p className="text-lg text-gray-600">
              Neuro-conformation Programming consists of three interrelated, progressive training modules that collectively act on the brain's information processing system to upgrade cognitive architecture
            </p>
          </div>
          
          {/* Module 1: Cognitive Mirror Training */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ><div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={mirrorImageUrl} 
                  alt="Cognitive Mirror Training" 
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
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Module 1</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{t('methodology.m1.title')}</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  {t('methodology.m1.desc')}
                </p>
                <p>
                  This module helps adolescents establish a "third-person perspective" on their own thinking processes through a series of carefully designed metacognitive training tasks, identifying and breaking through inherent thinking pattern limitations.
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                {[
                  "Thinking process visualization techniques: Learning to transform abstract thinking into operable visual representations",
                  "Cognitive bias identification training: Systematically identifying and avoiding common thinking traps such as confirmation bias and anchoring effect",
                  "Metacognitive journaling: Establishing structured thinking reflection habits to track the evolution of cognitive patterns",
                  "Mental model library construction: Mastering and flexibly applying 20+ core thinking models"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fa-solid fa-check text-blue-600 text-sm"></i>
                    </div>
                    <div className="text-gray-700">{item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Module 2: Perceptual Expansion Protocol */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1 order-2 mt-10 lg:mt-0"
            >
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Module 2</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{t('methodology.m2.title')}</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  {t('methodology.m2.desc')}
                </p>
                <p>
                  This module utilizes advanced biofeedback technology to help adolescents identify and stabilize high-creativity cognitive states, expanding perceptual range and information reception capabilities.
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                {[
                  "Brainwave biofeedback training: Learning to autonomously regulate entry into alpha/theta brainwave states through real-time brainwave monitoring",
                  "Perceptual filter expansion exercises: Systematically reducing perceptual defense mechanisms to increase information reception breadth",
                  "Mindful cognitive training: Cultivating non-judgmental present-moment awareness to enhance the precision of information processing",
                  "Multimodal perceptual integration: Training cross-sensory information integration capabilities to enrich neural representational dimensions"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fa-solid fa-check text-purple-600 text-sm"></i>
                    </div>
                    <div className="text-gray-700">{item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:order-2 order-1"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={perceptionImageUrl} 
                  alt="Perceptual Expansion Protocol" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Module 3: Cross-domain Integration Practice */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={integrationImageUrl} 
                  alt="Cross-domain Integration Practice" 
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
              <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">Module 3</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{t('methodology.m3.title')}</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  {t('methodology.m3.desc')}
                </p>
                <p>
                  This module breaks traditional disciplinary boundaries through carefully designed interdisciplinary project-based learning, fostering the ability to integrate and apply knowledge and creative problem-solving skills.
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                {[
                  "Thinking pattern bridging training: Learning to flexibly switch between analytical and holistic thinking",
                  "Cross-domain concept transfer: Training to creatively apply principles from one domain to another",
                  "Complex system modeling: Learning to construct complex system models with multiple interacting variables",
                  "Real-world problem solving: Integrating multidisciplinary knowledge to propose innovative solutions for authentic problems"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-teal-100 p-1 rounded-full mr-3 mt-1">
                      <i className="fa-solid fa-check text-teal-600 text-sm"></i>
                    </div>
                    <div className="text-gray-700">{item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Effectiveness and Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Effectiveness and Empirical Research</h2>
            <p className="text-lg text-gray-600">
              Our methodology has undergone rigorous scientific validation and practical testing, achieving significant cognitive enhancement effects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Empirical Evidence of Neuro-conformational Changes</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="fa-solid fa-brain text-blue-600 mr-2"></i>
                    Enhanced Brain Functional Connectivity
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Functional Magnetic Resonance Imaging (fMRI) shows that after training, the functional connectivity strength between participants' frontoparietal network (responsible for cognitive control) and default mode network (responsible for creative thinking) increased by an average of 23%.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="fa-solid fa-wave-square text-purple-600 mr-2"></i>
                    Stabilization of Creative Thinking Brainwave Patterns
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Electroencephalogram (EEG) data shows that participants' success rate in autonomously entering high-creativity alpha/theta brainwave states increased from 18% before training to 76% after training.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="fa-solid fa-puzzle-piece text-teal-600 mr-2"></i>
                    Improved Complex Problem-Solving Ability
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Results from the Torrance Tests of Creative Thinking (TTCT) show that participants' creative thinking scores increased by an average of 47%, with particularly significant improvements in originality and flexibility dimensions.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '47%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-gray-500 italic">
                Data source: Randomized controlled trial study published in the journal "Cognitive Enhancement" by the "Mind Mirror" project in 2023, n=120
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                <img 
                  src={caseImageUrl} 
                  alt="Before and After Brain Activity Comparison" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">Typical Case: Ming (14 years old)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Ming was a junior high school student with excellent math grades but lacking creative thinking. After 12 weeks of training:
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-right text-blue-600 mr-2 mt-1"></i>
                    <span>Math competition results improved from provincial third prize to national first prize</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-right text-blue-600 mr-2 mt-1"></i>
                    <span>Developed a campus waste sorting optimization APP combining mathematical models and environmental concepts</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-right text-blue-600 mr-2 mt-1"></i>
                    <span>Brainwave data showed a 68% improvement in his ability to autonomously regulate creative thinking states</span>
                  </li>
                </ul>
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
            <h2 className="text-3xl font-bold mb-6">Witness Your Child's Revolutionary Cognitive Breakthrough</h2>
            <p className="text-xl text-blue-100 mb-8">
              Equip your child with the core competency for future society - high-dimensional cognitive ability
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/en/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                Book Cognitive Assessment
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