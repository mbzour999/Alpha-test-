import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const SmallCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-[#009ec2] to-[#00e66a]">
      <div className="alpha-container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('smallCta.title')}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t('smallCta.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white/95 backdrop-blur-md text-alpha-primary hover:bg-white border border-white/50 rounded-full px-8 py-4 font-semibold transition-all duration-300 group"
            >
              <Link to="/contact">
              {t('smallCta.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full px-8 py-4 font-semibold transition-all duration-300 group"
              asChild
            >
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('ui.contactUs')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallCTASection;