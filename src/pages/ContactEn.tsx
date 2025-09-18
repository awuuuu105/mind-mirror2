import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactEn() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childName: '',
    childAge: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 图片URL
  const contactImageUrl = "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=contact%20us%20illustration%20customer%20service%20support%20modern%20style&sign=f0ca4e37e2826b12466f33483bca3fda";

  // 处理表单输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Consultation form submitted successfully! Our consultant will contact you within 24 hours.');
      setFormData({
        name: '',
        phone: '',
        childName: '',
        childAge: '',
        message: ''
      });
    }, 1500);
  };
  
  // 表单验证
  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.childName.trim() !== '' &&
      formData.childAge.trim() !== ''
    );
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('nav.contact')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {t('contact.title')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              
              <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                <p>
                  If you have any questions about the "Mind Mirror" High-Dimensional Cognitive Guidance Program, our professional consultant team is here to help. Fill out the consultation form below, and we will contact you within 24 hours to provide one-on-one professional consulting services.
                </p>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4 mt-1">
                      <i className="fa-solid fa-phone text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Consultation</h3>
                      <p className="text-gray-700">{t('contact.phone')}</p>
                      <p className="text-sm text-gray-500 mt-1">Consultation Hours: Monday to Sunday 9:00-21:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4 mt-1">
                      <i className="fa-solid fa-map-marker-alt text-indigo-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Offline Experience Center</h3>
                      <p className="text-gray-700">Mind Mirror Research Institute, Building 8, Zhongguancun Science Park, Haidian District, Beijing</p>
                      <p className="text-sm text-gray-500 mt-1">Welcome to book a visit and experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 mt-1">
                      <i className="fa-solid fa-envelope text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">contact@mindmirror.com</p>
                      <p className="text-sm text-gray-500 mt-1">We will reply to your email within 1 business day</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links to FAQs</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { text: "What age group is the program suitable for?", href: "/en/program#faq" },
                      { text: "How is training effectiveness measured?", href: "/en/methodology#effect" },
                      { text: "How do parents need to cooperate?", href: "/en/program#faq" },
                      { text: "What is the program cost?", href: "/en/program" },
                      { text: "Is there a trial class?", href: "/en/contact" },
                      { text: "How to apply for a spot?", href: "#form" }
                    ].map((item, index) => (
                      <a 
                        key={index}
                        href={item.href}
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i className="fa-solid fa-angle-right mr-2 text-xs"></i>
                        {item.text}
                      </a>
                    ))}
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
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                  <img 
                    src={contactImageUrl} 
                    alt="Contact Us" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" id="form">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Free Consultation Assessment</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="childName">
                          Child's Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="childName"
                          name="childName"
                          value={formData.childName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Enter child's name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="childAge">
                          Child's Age <span className="text-red-500">*</span>
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
                          placeholder="Enter child's age"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                        Your Questions or Needs (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Please enter your questions or your child's specific situation"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={!isFormValid() || isSubmitting}
                      className="w-full py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed mt-4 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Consultation Form
                          <i className="fa-solid fa-arrow-right ml-2"></i>
                        </>
                      )}
                    </button>
                    
                    <div className="mt-4 text-center text-xs text-gray-500">
                      <p>{t('disclaimer')}</p>
                      <p className="mt-1">By submitting, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Advantages Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose the "Mind Mirror" Program</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fa-university",
                title: "Top Academic Support",
                desc: "Joint research with Harvard Graduate School of Education"
              },
              {
                icon: "fa-graduation-cap",
                title: "Professional Mentor Team",
                desc: "One-on-one guidance from cognitive science experts"
              },
              {
                icon: "fa-brain",
                title: "Scientific Assessment System",
                desc: "Multi-dimensional cognitive ability assessment"
              },
              {
                icon: "fa-child",
                title: "Personalized Program",
                desc: "100% tailor-made cognitive enhancement plan"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fa-solid ${item.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Limited Spots Available, Book Now to Lock in Discounts</h2>
            <p className="text-lg text-blue-100 mb-8">
              Limited to 12 families per session, book now to enjoy a free cognitive assessment (valued at ¥1980)
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+8619922910749"
                className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <i className="fa-solid fa-phone mr-2"></i>
                Call Now
              </a>
              <a
                href="#form"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Fill Booking Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}