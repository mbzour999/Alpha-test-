import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectorsSection from '@/components/SectorsSection';

const Industries = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-alpha-primary/5 to-alpha-secondary/5">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed">
              Delivering AI excellence across diverse industries with tailored solutions for every sector
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <SectorsSection />

      <Footer />
    </div>
  );
};

export default Industries;