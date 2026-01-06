'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Heart, Users, Target, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const prefix = locale === 'es' ? '' : `/${locale}`;

  return (
    <>
      {/* HERO - Diseño profesional con gradiente SUAVE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Fondo gradiente SUAVE */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-purple-50 to-pink-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.08),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          {/* Badge suave */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-600 text-sm font-medium mb-8 shadow-sm border border-brand-100">
            <Sparkles className="w-4 h-4" />
            <span>{t('hero.badge')}</span>
          </div>

          {/* Título elegante */}
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-tight mb-6">
            {t('hero.title1')}
            <br />
            <span className="text-brand-600">{t('hero.title2')}</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* Botones elegantes */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${prefix}/donar`}
              className="group px-8 py-4 bg-brand-600 text-white font-semibold rounded-full shadow-lg shadow-brand-200 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-300 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" fill="currentColor" />
              {t('hero.ctaDonate')}
            </Link>
            <Link
              href={`${prefix}/warriors`}
              className="px-8 py-4 bg-white text-brand-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 border border-brand-100"
            >
              {t('hero.ctaStories')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT - Tarjetas elegantes y profesionales */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {t('impact.title')} <span className="text-brand-600">{t('impact.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-white to-brand-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-brand-100">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-brand-600 mb-2">125k€</div>
              <div className="text-neutral-600 font-medium">{t('impact.donated')}</div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-purple-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-neutral-600 font-medium">{t('impact.dreamsFulfilled')}</div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-pink-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" fill="currentColor" />
              </div>
              <div className="text-4xl font-bold text-pink-600 mb-2">847</div>
              <div className="text-neutral-600 font-medium">{t('impact.warriorsSupported')}</div>
            </div>

            {/* Card 4 */}
            <div className="group bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-indigo-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">93</div>
              <div className="text-neutral-600 font-medium">{t('impact.activeVolunteers')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Sección elegante */}
      <section className="py-24 bg-gradient-to-br from-brand-600 via-purple-600 to-brand-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Born to Thrive 💜
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every donation, every hour of volunteering, every word of support counts. Together we are stronger.
          </p>
          <Link
            href={`${prefix}/donar`}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand-600 font-bold rounded-full shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all"
          >
            Make a Difference Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
