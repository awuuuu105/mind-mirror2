import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
    const {
        t
    } = useLanguage();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        childName: "",
        childAge: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const contactImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=contact%20us%20illustration%20customer%20service%20support%20modern%20style&sign=f0ca4e37e2826b12466f33483bca3fda";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {
            name,
            value
        } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("咨询表单提交成功！我们的顾问将在24小时内与您联系。");

            setFormData({
                name: "",
                phone: "",
                childName: "",
                childAge: "",
                message: ""
            });
        }, 1500);
    };

    const isFormValid = () => {
        return formData.name.trim() !== "" && formData.phone.trim() !== "" && formData.childName.trim() !== "" && formData.childAge.trim() !== "";
    };

    return (
        <div className="scroll-smooth">
            {}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("nav.contact")}</h1>
                        <p className="text-xl text-blue-100 max-w-3xl">
                            {t("contact.title")}
                        </p>
                    </motion.div>
                </div>
            </section>
            {}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -20
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.8
                            }}
                            viewport={{
                                once: true
                            }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">联系我们</h2>
                            <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                                <p>无论您对「心智镜像」高维认知启导项目有任何疑问，我们的专业顾问团队都将竭诚为您提供帮助。填写下方咨询表单，我们将在24小时内与您联系，为您提供一对一的专业咨询服务。
                                                    </p>
                                <div className="space-y-6 mt-8">
                                    <></>
                                    <div className="flex items-start">
                                        <></>
                                        <div>
                                            <></>
                                            <></>
                                            <></>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-purple-100 p-3 rounded-full mr-4 mt-1">
                                            <i className="fa-solid fa-envelope text-purple-600"></i>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">电子邮件</h3>
                                            <p className="text-gray-700">3313231736@qq.com</p>
                                            <p className="text-sm text-gray-500 mt-1">我们将在1个工作日内回复您的邮件</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-10">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">常见问题快速链接</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[{
                                            text: "项目适合多大年龄的孩子？",
                                            href: "/program#faq"
                                        }, {
                                            text: "训练效果如何衡量？",
                                            href: "/methodology#effect"
                                        }, {
                                            text: "家长需要如何配合？",
                                            href: "/program#faq"
                                        }, {
                                            text: "项目费用是多少？",
                                            href: "/program"
                                        }, {
                                            text: "是否有体验课？",
                                            href: "/contact"
                                        }, {
                                            text: "如何申请名额？",
                                            href: "#form"
                                        }].map((item, index) => <a
                                            key={index}
                                            href={item.href}
                                            className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                                            <i className="fa-solid fa-angle-right mr-2 text-xs"></i>
                                            {item.text}
                                        </a>)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2
                            }}
                            viewport={{
                                once: true
                            }}
                            className="lg:mt-0 mt-10">
                            <div className="sticky top-24">
                                <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                                    <img src={contactImageUrl} alt="联系我们" className="w-full h-auto" />
                                </div>
                                <div
                                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                                    id="form">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">预约免费咨询评估</h3>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">您的姓名 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="请输入您的姓名" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">联系电话 <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="请输入您的联系电话" />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div>
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    htmlFor="childName">孩子姓名 <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="childName"
                                                    name="childName"
                                                    value={formData.childName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="请输入孩子姓名" />
                                            </div>
                                            <div>
                                                <label
                                                    className="block text-sm font-medium text-gray-700 mb-1"
                                                    htmlFor="childAge">孩子年龄 <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    id="childAge"
                                                    name="childAge"
                                                    value={formData.childAge}
                                                    onChange={handleChange}
                                                    required
                                                    min="10"
                                                    max="16"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="请输入孩子年龄" />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                                htmlFor="message">您的疑问或需求（选填）
                                                                      </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder="请输入您想咨询的问题或孩子的具体情况"></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={!isFormValid() || isSubmitting}
                                            className="w-full py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed mt-4 flex items-center justify-center">
                                            {isSubmitting ? <>
                                                <i className="fa-solid fa-spinner fa-spin mr-2"></i>提交中...
                                                                        </> : <>提交咨询表单
                                                                          <i className="fa-solid fa-arrow-right ml-2"></i>
                                            </>}
                                        </button>
                                        <div className="mt-4 text-center text-xs text-gray-500">
                                            <p>{t("disclaimer")}</p>
                                            <p className="mt-1">提交即表示您同意我们的<a href="#" className="text-blue-600 hover:underline">服务条款</a>和<a href="#" className="text-blue-600 hover:underline">隐私政策</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">为什么选择「心智镜像」高维认知启导项目</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[{
                            icon: "fa-university",
                            title: "顶尖学术支持",
                            desc: "与哈佛大学教育研究生院联合研究开发"
                        }, {
                            icon: "fa-graduation-cap",
                            title: "专业导师团队",
                            desc: "认知科学领域专家一对一指导"
                        }, {
                            icon: "fa-brain",
                            title: "科学评估体系",
                            desc: "多维度认知能力精准评估"
                        }, {
                            icon: "fa-child",
                            title: "个性化方案",
                            desc: "100%量身定制的认知提升计划"
                        }].map((item, index) => <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                            <div
                                className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className={`fa-solid ${item.icon} text-blue-600 text-2xl`}></i>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>)}
                    </div>
                </div>
            </section>
            {}
            <section
                className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        viewport={{
                            once: true
                        }}
                        className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">名额有限，立即预约锁定优惠</h2>
                        <p className="text-lg text-blue-100 mb-8">每期限额12个家庭，现在预约可享受免费认知评估（价值1980元）
                                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="tel:+8619922910749"
                                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
                                <i className="fa-solid fa-phone mr-2"></i>立即电话咨询
                                              </a>
                            <a
                                href="#form"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">填写预约表单
                                              </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}