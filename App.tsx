
import React, { useState, useEffect } from 'react';
import type { CountryKey, LanguageKey, PlatformKey, CountryData, ContentPost } from './types';
import { appData, translations, PLATFORMS } from './data';
import ContentSections from './components/ContentSections';
import ContentCalendar from './components/ContentCalendar';

// UI Components defined within App.tsx to reduce file count

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => (
    <label className="toggle-switch w-[60px] h-[34px] relative inline-block">
        <input type="checkbox" checked={checked} onChange={onChange} className="opacity-0 w-0 h-0" />
        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition duration-400 rounded-[34px] before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white before:transition before:duration-400 before:rounded-full peer-checked:bg-brand-green peer-checked:before:translate-x-[26px]"></span>
    </label>
);


interface DayModalProps {
    isOpen: boolean;
    onClose: () => void;
    day: number;
    month: number;
    year: number;
    countryData: CountryData;
    lang: LanguageKey;
    platformFilter: PlatformKey;
}

const DayModal: React.FC<DayModalProps> = ({ isOpen, onClose, day, month, year, countryData, lang, platformFilter }) => {
    if (!isOpen) return null;

    const t = translations[lang];
    const dayOfWeek = new Date(year, month, day - 1).getDay();
    const calendarData = countryData.calendar;

    const dayActivePeriods = calendarData.activePeriods[dayOfWeek];

    const platformPosts: { key: PlatformKey, name: string, posts: ContentPost[], style: string }[] = [
        { key: 'facebook', name: 'Facebook', posts: calendarData.facebookPosts, style: 'bg-blue-50 border-blue-200 text-blue-800' },
        { key: 'tiktok', name: 'TikTok', posts: calendarData.tiktokPosts, style: 'bg-red-50 border-red-200 text-red-800' },
        { key: 'instagram', name: 'Instagram', posts: calendarData.instagramPosts, style: 'bg-purple-50 border-purple-200 text-purple-800' },
        { key: 'linkedin', name: 'LinkedIn', posts: calendarData.linkedinPosts, style: 'bg-indigo-50 border-indigo-200 text-indigo-800' },
        { key: 'youtube', name: 'YouTube', posts: calendarData.youtubePosts, style: 'bg-red-100 dark:bg-red-50 border-red-200 dark:border-red-300 text-red-800' },
        { key: 'whatsapp', name: 'WhatsApp', posts: calendarData.whatsappPosts, style: 'bg-green-100 dark:bg-green-100 border-green-300 text-green-800' },
    ];
    
    const relevantPosts = platformPosts
        .filter(p => platformFilter === 'all' || platformFilter === p.key)
        .map(p => {
            const postsForDay = p.posts.filter(post => {
                if (!post.date) return false;
                const [postMonth, postDay] = post.date.split('-').map(Number);
                return postMonth === month + 1 && postDay === day;
            });
            return { ...p, posts: postsForDay };
        })
        .filter(p => p.posts.length > 0);

    return (
        <div className="modal-overlay fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300" onClick={onClose}>
            <div className="modal-container bg-white dark:bg-[#1C1C1C] rounded-xl shadow-lg w-11/12 max-w-2xl max-h-[90vh] flex flex-col transform scale-95 opacity-0 animate-modal-in"
                 style={{ animation: 'modal-in 0.3s ease forwards' }}
                 onClick={e => e.stopPropagation()}>
                <div className="modal-header p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {(t.modalTitle as string).replace('{month}', (t.months as string[])[month]).replace('{day}', String(day))}
                    </h3>
                    <button onClick={onClose} className="modal-close-btn bg-transparent border-0 text-3xl cursor-pointer text-gray-400 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-100 transition-colors">&times;</button>
                </div>
                <div className="modal-body p-4 sm:p-6 overflow-y-auto">
                    {dayActivePeriods && dayActivePeriods.length > 0 ? (
                        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 rounded-lg">
                            <h4 className="font-bold text-blue-800 dark:text-blue-300">{(t.modalActiveHours as string)}</h4>
                            <p className="text-blue-700 dark:text-blue-400">{dayActivePeriods.join(', ')}</p>
                        </div>
                    ) : (
                        <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">{(t.modalActiveHours as string)}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{(t.modalNoActiveHours as string)}</p>
                        </div>
                    )}

                    {relevantPosts.length > 0 ? relevantPosts.map(p => (
                        <div key={p.key}>
                             <h4 className="font-bold text-gray-700 dark:text-gray-300 mt-4 mb-2">{(t.modalSuggestedPosts as string).replace('{platform}', p.name)}</h4>
                             {p.posts.map((post, index) => (
                                <div key={index} className={`p-3 rounded-lg border mb-2 ${p.style.replace('text-red-800','dark:text-red-300').replace('text-blue-800','dark:text-blue-300').replace('text-purple-800','dark:text-purple-300').replace('text-indigo-800','dark:text-indigo-300').replace('text-green-800','dark:text-green-300')}`}>
                                    <h5 className="font-semibold">{post.title}</h5>
                                    <p className="text-sm opacity-80">{post.description}</p>
                                </div>
                             ))}
                        </div>
                    )) : <p className="text-gray-500 dark:text-gray-400 mt-4">{(t.modalNoContent as string)}</p>}
                </div>
            </div>
            <style>{`
                @keyframes modal-in {
                    to {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};


const App: React.FC = () => {
    const [country, setCountry] = useState<CountryKey>('sudan');
    const [lang, setLang] = useState<LanguageKey>('en');
    const [isDark, setIsDark] = useState(true);
    const [platformFilter, setPlatformFilter] = useState<PlatformKey>('all');
    const [selectedDay, setSelectedDay] = useState<{ day: number, month: number, year: number } | null>(null);

    useEffect(() => {
        const storedLang = localStorage.getItem('language') as LanguageKey;
        if (storedLang && ['en', 'ar'].includes(storedLang)) {
            setLang(storedLang);
        }
        
        const storedTheme = localStorage.getItem('darkMode');
        const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(storedTheme ? storedTheme === 'true' : defaultDark);
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', String(isDark));
    }, [isDark]);

    const handleLanguageToggle = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        setLang(newLang);
        localStorage.setItem('language', newLang);
    };

    const handleDayClick = (day: number, month: number, year: number) => {
        setSelectedDay({ day, month, year });
    };

    const t = translations[lang];
    const countryData = appData[country];

    const countryButtons: { key: CountryKey, name: string, flag: string }[] = [
        { key: 'sudan', name: t.sudan as string, flag: '🇸🇩' },
        { key: 'oman', name: t.oman as string, flag: '🇴🇲' },
        { key: 'uganda', name: t.uganda as string, flag: '🇺🇬' },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <header className="text-center mb-10">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <img src="https://googleusercontent.com/file_content/4" alt="Brandi Logo" className="h-16 w-auto" />
                    <img src="https://googleusercontent.com/file_content/5" alt="Seedtech Logo" className="h-16 w-auto" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{t.mainTitle as string}</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">{t.mainSubtitle as string}</p>
                <div className="mt-8">
                    <img src="https://googleusercontent.com/file_content/6" alt="Social Media Calendar Visualization" className="max-w-xl mx-auto rounded-lg shadow-2xl" />
                </div>
            </header>

            <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">EN</span>
                    <ToggleSwitch checked={lang === 'ar'} onChange={handleLanguageToggle} />
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">AR</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">☀️</span>
                    <ToggleSwitch checked={isDark} onChange={() => setIsDark(!isDark)} />
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">🌙</span>
                </div>
            </div>

            <nav className="flex flex-col sm:flex-row justify-center sm:justify-between items-center border-b-2 border-gray-200 dark:border-gray-700 pb-4 mb-12 gap-4">
                <div className="flex flex-wrap justify-center gap-2">
                    {countryButtons.map(({ key, name, flag }) => (
                        <button key={key} onClick={() => setCountry(key)} className={`nav-button text-lg font-semibold py-2 px-4 rounded-md transition-all duration-300 border-b-4 border-transparent ${country === key ? 'text-white bg-brand-green !border-brand-green shadow-lg' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                            {flag} <span className="country-name-nav">{name}</span>
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-0">
                    {Object.entries(PLATFORMS).map(([key, name]) => (
                        <button key={key} onClick={() => setPlatformFilter(key as PlatformKey)} className={`platform-filter-button px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${platformFilter === key ? 'bg-brand-green text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                            {key === 'all' ? t.all : name}
                        </button>
                    ))}
                </div>
            </nav>

            <main>
                <ContentSections country={country} lang={lang} isDark={isDark} />
                <ContentCalendar country={country} lang={lang} onDayClick={handleDayClick} />
            </main>

            {selectedDay && (
                <DayModal
                    isOpen={!!selectedDay}
                    onClose={() => setSelectedDay(null)}
                    {...selectedDay}
                    countryData={countryData}
                    lang={lang}
                    platformFilter={platformFilter}
                />
            )}

            <footer className="footer text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <img src="https://googleusercontent.com/file_content/4" alt="Brandi Logo" className="h-20 w-auto" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{t.footerPreparedBy as string}</p>
                <div className="text-gray-500 dark:text-gray-400 mb-4 space-y-1">
                    <p>Email: <a href="mailto:care@branddi.co.site" className="hover:text-brand-orange">care@branddi.co.site</a></p>
                    <p>Call: <a href="tel:+905433400087" className="hover:text-brand-orange">+90 543 340 00 87</a> | WhatsApp: <a href="https://wa.me/249963777777" className="hover:text-brand-orange">+249 963 777 777</a></p>
                    <p>Address: Çamlık, Sevin Sokağı No:2-14, 34774 Ümraniye/İstanbul</p>
                </div>
                <div className="flex justify-center gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100046358752051" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors">Facebook</a>
                    <a href="https://www.instagram.com/brandi.adv/#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-orange transition-colors">Instagram</a>
                </div>
            </footer>
        </div>
    );
};

export default App;
