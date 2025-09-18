import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Program() {
  const { t } = useLanguage();
  
  // 图片URL
  const programImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20development%20program%20illustration%20child%20learning%20journey&sign=87152b1c1bfa56405303c9671a6112b7";
  const processImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=12%20week%20program%20timeline%20visualization%20education%20process&sign=aa9d68b7e009bc8140bef366de81c219";
  const testimonialImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=parent%20testimonial%20illustration%20positive%20feedback&sign=87e590dc336aa64a90c01e177ed422f0";

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.program')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {t('project.title')} - 为您的孩子开启认知进化之旅
            </p>
          </motion.div>
        </div>
      </section>

      {/* 项目概览部分 */}
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
                  「心智镜像」高维认知启导项目是一套为期12周的系统性认知提升方案，专为10-16岁的深度思考者设计。我们通过科学的评估、个性化的训练和持续的支持，帮助孩子突破认知瓶颈，培养高维认知能力。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('details.d1')}</h3>
                    <p className="text-gray-700 text-sm">
                      我们特别适合那些在传统教育体系中"吃不饱"的孩子——他们可能成绩优异但渴望更深层次的认知挑战，或者拥有独特思维方式却难以在标准化教育中找到共鸣。
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t('details.d2')}</h3>
                    <p className="text-gray-700 text-sm">
                      项目采用循序渐进的方式，从认知评估到核心训练，再到巩固应用，确保孩子能够逐步建立并内化高维认知能力，实现可持续的认知提升。
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{t('details.d3')}</h3>
                  <p className="text-gray-700 text-sm">
                    我们坚持小班制和高度个性化的指导模式，每期限额12个家庭，确保每位学员都能获得充分的关注和定制化的训练方案。这种精英式的指导模式是我们保证训练效果的核心因素之一。
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3">{t('details.d4')}</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    「心智镜像」项目的投资不仅包括12周的专业指导，还包含全面的认知评估、个性化训练方案、家庭协同指导和后续支持。我们坚信，这是为您孩子的未来思维进行的最具价值的投资。
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
                    alt="心智镜像项目详情" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">立即预约咨询</h3>
                  <p className="text-gray-700 text-sm mb-6">
                    填写表单预约免费的初步认知评估，了解您的孩子是否适合「心智镜像」项目。
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">联系电话</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="请输入您的联系电话"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">孩子年龄</label>
                      <input 
                        type="number" 
                        min="10" 
                        max="16" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="请输入孩子年龄"
                      />
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                    提交预约
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

      {/* 项目流程部分 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12周项目流程</h2>
            <p className="text-lg text-gray-600">
              我们的项目采用科学的阶段性设计，确保认知能力的稳步提升和可持续发展
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
                  alt="12周项目流程" 
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
                {/* 阶段一：深度评估 */}
                <div className="relative pl-10 pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-blue-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">阶段一：深度认知评估 (第1周)</h3>
                  <p className="text-gray-700">
                    我们通过多维度的认知评估工具和结构化访谈，全面了解孩子的认知特点、优势和瓶颈，建立"当前心智表征图谱"，为后续训练提供科学依据。
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>神经认知能力测试</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>创造性思维评估</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>学习风格与认知偏好分析</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-blue-600 mr-2 mt-1"></i>
                      <span>个性化训练方案制定</span>
                    </li>
                  </ul>
                </div>
                
                {/* 阶段二：核心训练 */}
                <div className="relative pl-10 pb-8 border-l-2 border-indigo-200 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-indigo-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">阶段二：核心认知训练 (第2-10周)</h3>
                  <p className="text-gray-700">
                    基于评估结果，我们为孩子提供每周一次的一对一核心训练，系统性实施神经构象编程的三大模块，逐步重塑大脑的信息表征架构。
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>每周1次，每次90分钟的一对一训练</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>认知镜像训练模块 (3周)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>感知拓展协议模块 (3周)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-indigo-600 mr-2 mt-1"></i>
                      <span>跨域整合实践模块 (4周)</span>
                    </li>
                  </ul>
                </div>
                
                {/* 阶段三：巩固与迁移 */}
                <div className="relative pl-10 pb-8 border-l-2 border-purple-200 last:border-l-0 last:pb-0">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">阶段三：巩固与迁移 (第11-12周)</h3>
                  <p className="text-gray-700">
                    我们帮助孩子将训练中获得的认知能力迁移到日常学习和生活中，并制定长期的认知发展计划，确保能力的持续提升和应用。
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>认知能力迁移训练</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>家庭协同指导</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>后续认知发展计划制定</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check-circle text-purple-600 mr-2 mt-1"></i>
                      <span>最终认知评估与反馈</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 常见问题部分 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">常见问题解答</h2>
            <p className="text-lg text-gray-600">
              我们收集了家长们最常提出的问题，希望能帮助您更好地了解「心智镜像」项目
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "「心智镜像」项目与传统的课外辅导有何区别？",
                  answer: "传统课外辅导主要聚焦于知识传授和技能强化，而「心智镜像」项目则着眼于认知能力的底层升级。我们不直接教授学科知识，而是通过系统性训练重塑大脑的信息处理架构，提升孩子的创造性思维、问题解决能力和学习能力，这些能力可以迁移到任何学科和领域。"
                },
                {
                  question: "项目适合什么样的孩子？",
                  answer: "我们的项目特别适合10-16岁、认知需求未被满足的深度思考者。这些孩子通常表现出以下特点：成绩优异但渴望更深层次的认知挑战、具有强烈的好奇心和探索欲、在解决复杂问题时展现出潜力、知识结构呈'孤岛状'但有整合倾向、对传统填鸭式教育感到不满。"
                },
                {
                  question: "训练效果能维持多久？需要持续参与吗？",
                  answer: "「心智镜像」项目培养的是底层的认知能力和思维模式，这些能力一旦形成，将伴随孩子终身并持续发展。我们的研究显示，完成12周项目的学员在1年后仍保持着认知能力的优势。虽然不需要持续参与正式项目，但我们会提供后续的认知发展计划和定期的巩固活动，帮助孩子持续提升。"
                },
                {
                  question: "家长需要如何配合？",
                  answer: "家长的配合是项目成功的重要因素之一。我们会为家长提供定期的家庭协同指导，帮助家长了解孩子的认知发展特点，学习如何在日常生活中支持和促进孩子的认知成长。通常，家长需要每周花1-2小时与孩子进行简单的互动练习，并营造支持性的家庭认知环境。"
                },
                {
                  question: "项目有科学依据吗？效果如何衡量？",
                  answer: "「心智镜像」项目基于与哈佛大学教育研究生院联合研究的成果，融合了认知神经科学、发展心理学和教育创新的前沿研究。我们通过标准化的认知评估工具、脑波数据监测和行为表现分析等多维度指标来衡量训练效果。数据显示，96%的参与者在创造性思维、问题解决能力和学习适应性方面表现出显著提升。"
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

      {/* 家长评价部分 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">家长们的真实反馈</h2>
              
              <div className="space-y-8">
                {[
                  {
                    name: "张先生，14岁学员家长",
                    content: "参加「心智镜像」项目后，我儿子最大的变化是学会了独立思考和创造性解决问题。他以前做数学题只会套用公式，现在却能想出多种解法，甚至自己编题。更让我惊喜的是，他开始主动将科学知识应用到日常生活中，比如设计了我们家的垃圾分类系统。",
                    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20aged%20male%20avatar&sign=b012c77c7690a5c590031d1299030414"
                  },
                  {
                    name: "李女士，12岁学员家长",
                    content: "作为一名教育工作者，我接触过很多课外项目，但「心智镜像」是最独特和有效的。它不是教孩子知识，而是教孩子如何思考。我女儿参加项目后，不仅写作能力明显提升，能够从多个角度分析问题，还开始主动组织同学进行跨学科的小组探究活动。",
                    avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle%20aged%20female%20avatar&sign=74f7323064486406a49f683135c0d6a0"
                  },
                  {
                    name: "王先生，15岁学员家长",
                    content: "我儿子以前对传统学习感到厌倦，认为学校教的内容太简单。参加「心智镜像」项目后，他重新找回了学习的热情。最让我惊讶的是，他开始将数学、物理和艺术结合起来，创作了一系列科学主题的绘画作品，并在青少年科技创新大赛中获奖。感谢「心智镜像」团队激发了他的潜能。",
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
                  alt="家长评价" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">项目成果数据</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "创造性思维提升", value: "89%" },
                    { label: "问题解决能力提升", value: "85%" },
                    { label: "学习适应性改善", value: "92%" },
                    { label: "家长满意度", value: "96%" }
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
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600 mb-4">基于500+完成项目的家庭数据</p>
                  <Link to="/contact" className="inline-flex items-center text-blue-600 font-medium text-sm">
                    查看更多成功案例 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                  </Link>
                </div>
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
            <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('contact.phone')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                立即预约咨询
              </a>
              <a
                href="tel:+8619922910749"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-phone mr-2"></i> 致电咨询
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