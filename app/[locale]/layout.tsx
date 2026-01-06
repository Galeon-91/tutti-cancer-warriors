import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import "../globals.css";
import Header from './Header';
import Footer from './Footer';

export const metadata: Metadata = {
  title: "Tutti Cancer Warriors | Born to Thrive",
  description: "Cumplimos sueños y damos esperanza a warriors que luchan contra el cáncer cada día",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-white">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
