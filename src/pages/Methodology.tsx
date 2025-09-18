import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Methodology() {
  const { t } = useLanguage();
  
  // 图片URL
  const neuroImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=neural%20connections%20visualization%20brain%20activity%20abstract%20blue%20tones&sign=5c46ad283226ab61f0d909da4d0ffc37";
  const mirrorImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20mirror%20training%20mindfulness%20meditation%20visualization&sign=5006dab4b626c911a499b86fe78ac389";
  const perceptionImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=brainwave%20biofeedback%20technology%20neurofeedback%20interface&sign=90e5891fccb133c1ad07cfb519755065";
  const integrationImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cross%20domain%20knowledge%20integration%20mind%20mapping%20visualization&sign=be777d89692047ae77046de0f75ba53d";
  const caseImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=before%20after%20brain%20activity%20comparison%20scientific%20visualization&sign=04d9e17781cc28302921b12fc2820bc5";

  return (
    <div className="scroll-smooth">
      {/* 页面标题区域 */}
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

      {/* 神经构象编程概述 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">神经构象编程：认知升级的科学路径</h2>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  神经构象编程(Neuro-conformation Programming)是「心智镜像」项目的核心方法论，它基于当代认知神经科学的最新研究发现，通过系统性的训练干预，重塑大脑的信息表征架构，从而实现认知能力的质的飞跃。
                </p>
                <p>
                  传统的认知训练往往局限于特定技能的强化，而神经构象编程则着眼于大脑底层的"操作系统升级"，通过诱导神经连接模式的优化重组，提升信息处理的维度和效率。
                </p>
                <p>
                  我们的研究表明，经过12周的系统训练，参与者的大脑前额叶皮层、顶叶和颞叶区域的神经连接密度显著增加，α和θ脑波的协调性提高，这与创造性思维和问题解决能力的提升高度相关。
                </p>
              </div>
              
              <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <i className="fa-solid fa-lightbulb text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">科学突破</h4>
                    <p className="text-sm text-gray-700">
                      我们的研究首次证实，通过特定的认知训练可以显著增加大脑默认模式网络(DMN)和任务正网络(TN)之间的动态协调性，这是创造性思维的神经基础。
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
                  alt="神经构象编程原理" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 方法论三大模块 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">三大核心训练模块</h2>
            <p className="text-lg text-gray-600">
              神经构象编程由三个相互关联、循序渐进的训练模块组成，共同作用于大脑的信息处理系统，实现认知架构的升级
            </p>
          </div>
          
          {/* 模块一：认知镜像训练 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={mirrorImageUrl} 
                  alt="认知镜像训练" 
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
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">模块一</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{t('methodology.m1.title')}</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  {t('methodology.m1.desc')}
                </p>
                <p>
                  该模块通过一系列精心设计的元认知训练任务，帮助青少年建立对自身思维过程的"第三人称视角"，识别并突破固有的思维模式局限。
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                {[
                  "思维过程可视化技术：学习将抽象思维转化为可操作的视觉表征",
                  "认知偏差识别训练：系统识别并规避确认偏误、锚定效应等常见思维陷阱",
                  "元认知日记：建立结构化的思维反思习惯，追踪认知模式的演变",
                  "心智模型库构建：掌握并灵活运用20+核心思维模型"
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
          
          {/* 模块二：感知拓展协议 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:order-1 order-2 mt-10 lg:mt-0"
            >
              <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">模块二</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{t('methodology.m2.title')}</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  {t('methodology.m2.desc')}
                </p>
                <p>
                  该模块运用先进的生物反馈技术，帮助青少年识别并稳定高创造性认知状态，拓展感知范围和信息接收能力。
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                {[
                  "脑波生物反馈训练：通过实时脑波监测，学习自主调节进入α/θ波状态",
                  "感知过滤拓展练习：系统性降低感知防御机制，提升信息接收广度",
                  "正念认知训练：培养不评判的当下觉察能力，增强信息处理的精准度",
                  "多模态感知整合：训练跨感官信息整合能力，丰富神经表征维度"
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
                  alt="感知拓展协议" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
          
          {/* 模块三：跨域整合实践 */}
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
                  alt="跨域整合实践" 
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
              <span className="text-sm font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">模块三</span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{t('methodology.m3.title')}</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  {t('methodology.m3.desc')}
                </p>
                <p>
                  该模块通过精心设计的跨学科项目制学习，打破传统学科界限，培养知识的整合应用能力和创造性问题解决能力。
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                {[
                  "思维模式桥接训练：学习在分析性思维与整体性思维之间灵活切换",
                  "跨域概念迁移：训练将一个领域的原理创造性应用于另一个领域",
                  "复杂系统建模：学习构建多变量相互作用的复杂系统模型",
                  "现实问题解决：针对真实世界问题，整合多学科知识提出创新解决方案"
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

      {/* 训练效果与案例 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">训练效果与实证研究</h2>
            <p className="text-lg text-gray-600">
              我们的方法论经过严格的科学验证和实践检验，取得了显著的认知提升效果
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">神经构象变化的实证证据</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="fa-solid fa-brain text-blue-600 mr-2"></i>
                    大脑功能连接增强
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    功能性磁共振成像(fMRI)显示，经过训练后，参与者的额顶网络(负责认知控制)和默认模式网络(负责创造性思维)之间的功能连接强度平均增加了23%。
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="fa-solid fa-wave-square text-purple-600 mr-2"></i>
                    创造性思维脑波模式稳定化
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    脑电图(EEG)数据显示，参与者能够自主进入高创造性α/θ脑波状态的成功率从训练前的18%提升至训练后的76%。
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                    <i className="fa-solid fa-puzzle-piece text-teal-600 mr-2"></i>
                    复杂问题解决能力提升
                  </h4>
                  <p className="text-gray-700 text-sm mb-3">
                    托兰斯创造性思维测验(TTCT)结果显示，参与者的创造性思维得分平均提升了47%，尤其在独创性和灵活性维度提升显著。
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '47%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-gray-500 italic">
                数据来源：「心智镜像」项目2023年发表于《认知增强》(Cognitive Enhancement)期刊的随机对照试验研究，n=120
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
                  alt="训练前后脑活动对比" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <h4 className="font-medium text-gray-900 mb-3">典型案例：小明(14岁)</h4>
                <p className="text-gray-700 text-sm mb-3">
                  小明是一名数学成绩优异但缺乏创造性思维的初中生。经过12周训练：
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-right text-blue-600 mr-2 mt-1"></i>
                    <span>数学竞赛成绩从省级三等奖提升至全国一等奖</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-right text-blue-600 mr-2 mt-1"></i>
                    <span>开发了一款结合数学模型和环保理念的校园垃圾分类优化APP</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-arrow-right text-blue-600 mr-2 mt-1"></i>
                    <span>脑波数据显示，其创造性思维状态的自主调控能力提升了68%</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 行动召唤部分 */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">见证孩子认知能力的革命性突破</h2>
            <p className="text-xl text-blue-100 mb-8">
              让您的孩子掌握未来社会的核心竞争力——高维认知能力
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                预约认知评估
              </a>
              <a
                href="/program"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                了解项目详情
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}