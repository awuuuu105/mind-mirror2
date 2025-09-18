import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换语言
  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
    // 根据当前语言跳转到对应语言的页面
    const currentPath = window.location.pathname;
    if (language === 'zh' && !currentPath.startsWith('/en')) {
      window.location.pathname = `/en${currentPath === '/' ? '' : currentPath}`;
    } else if (language === 'en' && currentPath.startsWith('/en')) {
      window.location.pathname = currentPath.replace('/en', '') || '/';
    }
  };

  // 导航链接数据
  const navLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/about', label: 'nav.about' },
    { path: '/methodology', label: 'nav.methodology' },
    { path: '/program', label: 'nav.program' },
    { path: '/contact', label: 'nav.contact' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={language === 'en' ? '/en' : '/'} className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">MM</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {t('project.title').split(':')[0]}
            </span>
          </Link>

          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={language === 'en' ? `/en${link.path}` : link.path}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {t(link.label)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* 语言切换按钮 */}
            <button
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors flex items-center space-x-1"
            >
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
              <i className="fa-solid fa-language text-xs"></i>
            </button>
          </nav>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLanguage}
              className="mr-2 px-2 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fa-solid fa-times"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={language === 'en' ? `/en${link.path}` : link.path}
                  className="px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// 修复缺少的import
import { useEffect } from 'react';