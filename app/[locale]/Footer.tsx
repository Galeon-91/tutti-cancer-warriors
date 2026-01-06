'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Image 
              src="/TCW_LOGO.svg" 
              alt="Tutti Cancer Warriors" 
              width={200}
              height={60}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 text-sm">{t('description')}</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href={`${prefix}/warriors`} className="hover:text-purple-400 transition-colors">Warriors</Link></li>
              <li><Link href={`${prefix}/voluntarios`} className="hover:text-purple-400 transition-colors">Volunteers</Link></li>
              <li><Link href={`${prefix}/donar`} className="hover:text-purple-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@tutticancerwarriors.org" className="hover:text-purple-400 transition-colors">
                  info@tutticancerwarriors.org
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href={`${prefix}/donar`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
