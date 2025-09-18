import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  // 图片URL
  const aboutImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=neuroscience%20research%20team%20collaboration%20illustration%20modern%20laboratory%20setting&sign=118d45d611a096f68ccf34caf6238d40";
  const researchImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=cognitive%20science%20research%20visualization%20brain%20mapping%20abstract&sign=946830643372b8c761bd221b150cf7d6";

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.about')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">{t('project.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* 项目背景部分 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">项目背景与愿景</h2>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  「心智镜像」高维认知启导项目诞生于对当代教育体系局限性的深刻反思。在信息爆炸的时代，传统以知识传授为核心的教育模式已难以满足未来社会对创新思维和复杂问题解决能力的需求。
                </p>
                <p>
                  我们的团队由认知神经科学家、发展心理学家和教育创新者组成，致力于将最前沿的脑科学研究成果转化为切实可行的青少年认知发展方案。
                </p>
                <p>
                  自2018年项目启动以来，我们已成功帮助超过500名青少年突破认知瓶颈，培养了他们的高维认知能力，使他们在学术表现和创造性思维方面取得了显著进步。
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: '500+', label: '受益学员' },
                  { number: '96%', label: '家长满意度' },
                  { number: '12', label: '研究合作机构' },
                  { number: '5', label: '学术论文发表' }
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
                  alt="心智镜像研究团队" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <i className="fa-solid fa-trophy text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">2023年度教育创新卓越奖</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 研究合作部分 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">顶尖学术支持</h2>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">与哈佛大学教育研究生院的合作研究</h3>
              <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                <p>
                  我们与哈佛大学教育研究生院"未来心智实验室"的合作始于2019年，共同探索青少年认知发展的前沿领域。
                </p>
                <p>
                  这项合作研究聚焦于神经构象变化与认知能力提升之间的关系，通过先进的脑成像技术和纵向研究方法，深入探究了高维认知状态的形成机制。
                </p>
                <p>
                  研究成果已发表于《认知科学趋势》(Trends in Cognitive Sciences)和《心智、大脑与教育》(Mind, Brain, and Education)等顶级学术期刊，为我们的启导方案提供了坚实的科学基础。
                </p>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <img 
                    src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=harvard%20university%20logo%20official&sign=c013e61ff82abf8a5a524b4feeffd7ce" 
                    alt="哈佛大学标志" 
                    className="h-16 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">哈佛大学教育研究生院</p>
                  <p className="text-xs text-gray-600">心智、大脑与教育研究方向</p>
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
                  alt="认知科学研究可视化" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 团队介绍部分 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心研究与启导团队</h2>
            <p className="text-lg text-gray-600">
              {t('why.w3')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "李明哲 博士",
                title: "项目创始人 & 首席科学家",
                bio: "前哈佛大学教育研究生院研究员，认知神经科学博士，专注于青少年脑发育与认知提升研究",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=male%20scientist%20portrait%20professional%20asian&sign=4a5f51ea2493a61aaef7e11c80fabf04"
              },
              {
                name: "Sarah Johnson 博士",
                title: "研究总监",
                bio: "哈佛大学发展心理学博士，曾任教于麻省理工学院，专长于青少年创造性思维发展",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20scientist%20portrait%20professional%20caucasian&sign=a535080159ad75c2513d327d8a1c6126"
              },
              {
                name: "王梓涵 博士",
                title: "神经构象实验室主任",
                bio: "斯坦福大学神经科学博士，前加州大学伯克利分校研究员，专注于脑机接口与认知增强研究",
                image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=female%20neuroscientist%20portrait%20professional%20asian&sign=24fc76d65bf63cc74c28ec098239a890"
              },
              {
                name: "David Chen 博士",
                title: "启导方案总监",
                bio: "麻省理工学院认知科学博士，曾任职于麦肯锡全球研究院，专注于教育创新与认知训练方案设计",
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
            <h2 className="text-3xl font-bold mb-6">准备好开启孩子的认知进化之旅了吗？</h2>
            <p className="text-xl text-blue-100 mb-8">
              填写咨询表单，获取专属的孩子认知发展评估机会
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                立即咨询
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