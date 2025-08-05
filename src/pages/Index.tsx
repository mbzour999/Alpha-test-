import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import CareersSection from '@/components/CareersSection';
import SmallCTASection from '@/components/SmallCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <CTASection />
      <AboutSection />
      <ServicesSection />
      <CareersSection />
      <SmallCTASection />
      <Footer />
    </div>
  );
};

export default Index;
