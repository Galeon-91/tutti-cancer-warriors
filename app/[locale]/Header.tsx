'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const prefix = locale === 'es' ? '' : `/${locale}`;

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ro', name: 'Română', flag: '🇷🇴' },
  ];

  const currentLang = languages.find(lang => lang.code === locale) || languages[0];

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/(es|en|ro)/, '') || '/';
    const newPath = newLocale === 'es' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `${prefix}/`, label: t('home') },
    { href: `${prefix}/warriors`, label: t('warriors') },
    { href: `${prefix}/voluntarios`, label: t('volunteers') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={`${prefix}/`} className="flex items-center">
            <Image 
              src="/TCW_LOGO.svg" 
              alt="Tutti Cancer Warriors" 
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-neutral-700 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                <Globe className="w-5 h-5 text-neutral-600" />
                <span className="text-xl">{currentLang.flag}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 border border-neutral-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLanguage(lang.code)}
                      className={`w-full px-4 py-3 text-left hover:bg-brand-50 flex items-center gap-3 ${
                        lang.code === locale ? 'bg-brand-50' : ''
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium text-neutral-700">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`${prefix}/donar`}
              className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 hover:shadow-lg transition-all"
            >
              {t('donate')}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-b-2xl shadow-xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-neutral-700 hover:text-brand-600 hover:bg-neutral-50 rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2">
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { switchLanguage(lang.code); setIsMobileMenuOpen(false); }}
                      className={`px-3 py-2 rounded-lg ${
                        lang.code === locale ? 'bg-brand-100' : 'bg-neutral-100'
                      }`}
                    >
                      {lang.flag}
                    </button>
                  ))}
                </div>
              </div>
              <Link
                href={`${prefix}/donar`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 px-6 py-3 bg-brand-600 text-white font-semibold rounded-full text-center"
              >
                {t('donate')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
