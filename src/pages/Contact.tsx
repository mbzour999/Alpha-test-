import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-alpha-primary/5 to-alpha-secondary/5">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Contact;