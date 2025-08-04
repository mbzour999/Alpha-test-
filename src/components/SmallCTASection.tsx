import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const SmallCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-alpha-neutral-50 to-alpha-neutral-100">
      <div className="alpha-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-alpha-secondary mb-4">
            {t('smallCta.title')}
          </h2>
          <p className="text-lg text-alpha-neutral-800 mb-8 max-w-2xl mx-auto">
            {t('smallCta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-alpha-primary hover:bg-alpha-primary/90 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 group"
            >
              {t('smallCta.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-alpha-primary text-alpha-primary hover:bg-alpha-primary hover:text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 group"
              asChild
            >
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallCTASection;