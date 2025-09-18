import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export function Footer() {
    const {
        language,
        t
    } = useLanguage();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("project.title")}</h3>
                        <p className="text-sm text-gray-600 mb-4 max-w-md">
                            {t("project.subtitle")}
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <i className="fa-brands fa-weixin text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <i className="fa-brands fa-weibo text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <i className="fa-brands fa-linkedin text-xl"></i>
                            </a>
                        </div>
                    </div>
                    {}
                    <div>
                        <h4
                            className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            {t("nav.home")}
                        </h4>
                        <ul className="space-y-2">
                            {["nav.about", "nav.methodology", "nav.program", "nav.contact"].map(item => <li key={item}>
                                <Link
                                    to={language === "en" ? `/en/${t(item).toLowerCase()}` : `/${t(item).toLowerCase()}`}
                                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                    {t(item)}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                    {}
                    <div>
                        <h4
                            className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            {t("nav.contact")}
                        </h4>
                        <address className="not-italic text-sm text-gray-600 space-y-2">
                            <></>
                            <p className="flex items-start">
                                <></>
                                <span>邮箱：3313231736@qq.com</span>
                            </p>
                        </address>
                    </div>
                </div>
                {}
                <div
                    className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p className="mb-2">{t("footer.rights")}</p>
                    <p className="text-xs mt-1">{t("disclaimer")}</p>
                </div>
            </div>
        </footer>
    );
}