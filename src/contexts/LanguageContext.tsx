import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// 定义支持的语言类型
type Language = 'zh' | 'en';

// 定义语言上下文类型
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 创建语言上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 中文语言包
const zhTranslations = {
  "project.title": "「心智镜像」高维认知启导项目",
  "project.subtitle": "基于神经构象学与心智模型理论 | 与哈佛大学教育研究生院心智、大脑与教育方向联合研究",
  "nav.home": "首页",
  "nav.about": "关于我们",
  "nav.methodology": "方法论",
  "nav.program": "项目详情",
  "nav.contact": "联系我们",
  "hero.title": "突破认知瓶颈，开启高维思维",
  "hero.subtitle": "为10-16岁深度思考者定制的认知进化之旅",
  "problems.title": "您是否观察到您的孩子正在面临这些认知瓶颈？",
  "problems.p1": "虽然成绩优异，但学习方式仍以记忆为主，缺乏真正的洞察与直觉？",
  "problems.p2": "在解决前所未有的复杂问题时，常常感到思维阻滞，难以进行创造性的跳跃？",
  "problems.p3": "知识结构呈“孤岛状”，难以将数理逻辑与人文艺术的思维模式融会贯通？",
  "problems.p4": "在面对高度不确定性的未来时，表现出适应性焦虑，而非探索的兴奋？",
  "problems.conclusion": "传统的教育是在填充知识，而未来需要的是构建知识的新思维。",
  "highdim.title": "何为“高维认知”？",
  "highdim.content": "当代顶尖认知科学研究揭示，卓越的创造力并非源自知识量的简单堆积，而是取决于信息在大脑中独特的“表征架构”（Representational Architecture）。这种更优越的架构，意味着更丰富的神经连接模式、更灵活的概念切换能力以及更深层次的信息处理维度。我们称之为“高维认知状态”（Higher-Dimensional Cognitive State）。「心智镜像」项目，正是一套旨在系统性诱导与塑造此种认知状态的前沿启导方案。",
  "methodology.title": "项目核心方法论：神经构象编程",
  "methodology.intro": "我们的课程并非简单的技能培训，而是一次对认知底层操作系统的“升级”。",
  "methodology.m1.title": "认知镜像训练",
  "methodology.m1.desc": "通过一系列特制的思维工具与沉浸式任务，引导孩子为自身的思维过程建立“镜像”，从而实现元认知能力的飞跃。",
  "methodology.m2.title": "感知拓展协议",
  "methodology.m2.desc": "运用基于生物反馈的感知调节技术，帮助孩子稳定进入高专注、高创造性的脑波状态（α/θ波），拓宽感知过滤器。",
  "methodology.m3.title": "跨域整合实践",
  "methodology.m3.desc": "设计独特的项目制课题，要求孩子强制调用不同学科的核心思维模型，打破认知壁垒，构建互联的知识网络。",
  "benefits.title": "您的孩子将获得何种体验？",
  "benefits.b1": "深度信息感知：能直觉性地抓取文本、数据或艺术作品中隐含的模式、结构与核心意图。",
  "benefits.b2": "流畅思维生成：思路涌现自然且流畅，大幅降低创作与解题过程中的精神内耗。",
  "benefits.b3": "跨域概念整合：轻松发现数学与音乐、物理与哲学之间的深层联系，形成独创性见解。",
  "benefits.b4": "心智韧性强化：在面对模糊与复杂的挑战时，能保持清晰的思维和稳定的心态。",
  "why.title": "为何选择「心智镜像」？",
  "why.w1": "前沿理论基石：融合认知神经科学、复杂系统理论、心智哲学的前沿见解。",
  "why.w2": "顶尖学术支持：课程框架基于与哈佛大学教育研究生院“未来心智实验室”（Laboratory for Future Mind）的长期联合研究。",
  "why.w3": "精英启导师团队：所有启导师均拥有认知科学、心理学或相关领域的硕士以上学位，并经过严格的“心智镜像引导”专业培训。",
  "why.w4": "高度定制化：项目伊始将对您的孩子进行深度“当前心智表征图谱”评估，确保后续启导方案百分百量身定制。",
  "why.w5": "私密与专注：所有启导课程均在隔音良好、设计极简的“认知工作室”中一对一进行，确保最佳的沉浸体验。",
  "details.title": "项目详情与须知",
  "details.d1": "适合对象：10-16岁，认知需求未被满足的深度思考者。",
  "details.d2": "项目周期：每期为期12周，包含1次深度评估、10次核心启导课程、2次巩固会话与家庭协同指导。",
  "details.d3": "名额限制：为保证质量，每期限额12个家庭。",
  "details.d4": "投资：请您致电咨询详情。我们坚信，这是为您孩子的未来思维进行的最具价值的投资。",
  "details.conclusion": "我们承诺的不是一个具体的分数，而是一种能让他受益终身的、更高级的思维模式与认知体验。",
  "contact.title": "立即预约限量名额，开启孩子的认知进化之旅",
  "contact.phone": "敬请致电垂询：+86 19922910749",
  "contact.org": "心智镜像研究院",
  "disclaimer": "郑重声明：本项目为高端认知教育发展项目，效果因人而异。不承诺任何具体的升学或考试成绩提升。",
  "footer.rights": "© 2025 心智镜像研究院. 保留所有权利."
};

// 英文语言包
const enTranslations = {
  "project.title": "Mind Mirror: High-Dimensional Cognitive Guidance Program",
  "project.subtitle": "Based on Neuro-conformation Theory and Mental Model Theory | Joint Research with Harvard Graduate School of Education - Mind, Brain, and Education",
  "nav.home": "Home",
  "nav.about": "About",
  "nav.methodology": "Methodology",
  "nav.program": "Program Details",
  "nav.contact": "Contact",
  "hero.title": "Break Through Cognitive Bottlenecks, Unlock High-Dimensional Thinking",
  "hero.subtitle": "A Cognitive Evolution Journey for Deep Thinkers Aged 10-16",
  "problems.title": "Have you noticed your child facing these cognitive bottlenecks?",
  "problems.p1": "Despite excellent grades, still relies primarily on memorization rather than true insight and intuition?",
  "problems.p2": "Often experiences mental blocks when solving unprecedented complex problems, struggling to make creative leaps?",
  "problems.p3": "Knowledge structure appears as 'isolated islands', making it difficult to integrate logical-mathematical and人文艺术思维模式融会贯通？",
  "problems.p4": "Exhibits adaptive anxiety rather than exploratory excitement when facing an uncertain future?",
  "problems.conclusion": "Traditional education fills knowledge, while the future requires new ways of constructing knowledge.",
  "highdim.title": "What is 'High-Dimensional Cognition'?",
  "highdim.content": "Cutting-edge cognitive science research reveals that exceptional creativity does not stem from simple accumulation of knowledge, but from the unique 'Representational Architecture' of information in the brain. This superior architecture means richer neural connection patterns, more flexible concept switching abilities, and deeper dimensions of information processing. We call this the 'Higher-Dimensional Cognitive State'. The 'Mind Mirror' project is a cutting-edge guidance program designed to systematically induce and shape this cognitive state.",
  "methodology.title": "Core Methodology: Neuro-conformation Programming",
  "methodology.intro": "Our program is not simple skill training, but an 'upgrade' to the underlying operating system of cognition.",
  "methodology.m1.title": "Cognitive Mirror Training",
  "methodology.m1.desc": "Through a series of specially designed thinking tools and immersive tasks, guide children to establish a 'mirror' of their own thinking processes, thereby achieving a leap in metacognitive abilities.",
  "methodology.m2.title": "Perceptual Expansion Protocol",
  "methodology.m2.desc": "Using biofeedback-based perceptual regulation techniques to help children stably enter high-focus, high-creativity brainwave states (α/θ waves), broadening perceptual filters.",
  "methodology.m3.title": "Cross-domain Integration Practice",
  "methodology.m3.desc": "Design unique project-based topics that require children to invoke core thinking models from different disciplines, breaking cognitive barriers and building interconnected knowledge networks.",
  "benefits.title": "What Experience Will Your Child Gain?",
  "benefits.b1": "Deep Information Perception: Intuitively grasp hidden patterns, structures, and core intentions in texts, data, or artistic works.",
  "benefits.b2": "Fluid Thought Generation: Ideas emerge naturally and smoothly, significantly reducing mental friction during creation and problem-solving.",
  "benefits.b3": "Cross-domain Concept Integration: Easily discover deep connections between mathematics and music, physics and philosophy, forming original insights.",
  "benefits.b4": "Enhanced Mental Resilience: Maintain clear thinking and stable mindset when facing ambiguous and complex challenges.",
  "why.title": "Why Choose Mind Mirror?",
  "why.w1": "Cutting-edge Theoretical Foundation: Integrating frontier insights from cognitive neuroscience, complex systems theory, and philosophy of mind.",
  "why.w2": "Top Academic Support: Curriculum framework based on long-term joint research with the 'Laboratory for Future Mind' at Harvard Graduate School of Education.",
  "why.w3": "Elite Mentor Team: All mentors hold master's degrees or higher in cognitive science, psychology, or related fields, and have undergone rigorous 'Mind Mirror Guidance' professional training.",
  "why.w4": "Highly Customized: At the beginning of the program, we conduct an in-depth 'Current Mental Representation Mapping' assessment of your child to ensure the subsequent guidance plan is 100% tailored.",
  "why.w5": "Private and Focused: All guidance sessions are conducted one-on-one in soundproof, minimalist 'cognitive studios' to ensure optimal immersion.",
  "details.title": "Program Details and Information",
  "details.d1": "Target Participants: Ages 10-16, deep thinkers whose cognitive needs are not being met.",
  "details.d2": "Program Duration: 12 weeks per session, including 1 in-depth assessment, 10 core guidance sessions, 2 consolidation sessions, and family协同指导.",
  "details.d3": "Quota Limit: To ensure quality, each session is limited to 12 families.",
  "details.d4": "Investment: Please call for details. We firmly believe this is the most valuable investment in your child's future thinking.",
  "details.conclusion": "We do not promise a specific score, but a more advanced thinking mode and cognitive experience that will benefit him for life.",
  "contact.title": "Reserve Your Limited Spot Now and Begin Your Child's Cognitive Evolution Journey",
  "contact.phone": "Please call for inquiries: +86 19922910749",
  "contact.org": "Mind Mirror Research Institute",
  "disclaimer": "Important Notice: This program is a high-end cognitive education development program, and results vary from person to person. No specific academic advancement or test score improvement is guaranteed.",
  "footer.rights": "© 2025 Mind Mirror Research Institute. All rights reserved."
};

// 语言提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // 从本地存储获取语言偏好，默认为中文
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'zh';
  });

  // 当语言变化时保存到本地存储
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // 翻译函数
  const t = (key: string): string => {
    if (language === 'en' && enTranslations[key as keyof typeof enTranslations]) {
      return enTranslations[key as keyof typeof enTranslations];
    }
    return zhTranslations[key as keyof typeof zhTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 自定义hook方便使用语言上下文
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}