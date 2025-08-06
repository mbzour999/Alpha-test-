import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Rocket, Stars } from 'lucide-react';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-alpha-primary via-alpha-primary/90 to-alpha-secondary">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 animate-pulse">
          <Sparkles className="h-6 w-6 text-white/30" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce">
          <Zap className="h-8 w-8 text-white/20" />
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse delay-1000">
          <Stars className="h-5 w-5 text-white/25" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce delay-500">
          <Rocket className="h-7 w-7 text-white/30" />
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/15 rounded-lg rotate-45 animate-pulse"></div>
        
        {/* Animated Particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative alpha-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span className="text-sm font-medium text-white/90">{t('cta.badge')}</span>
          </div>

          {/* Main Heading with Creative Typography */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
            {t('cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            {t('cta.subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500">
            <Button
              asChild
              size="lg"
              className="group bg-white/95 backdrop-blur-md text-alpha-primary hover:bg-white border border-white/50 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-white/40 transition-all duration-500 hover:scale-105"
            >
              <Link to="/contact">
              {t('cta.startJourney')}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-white text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full px-12 py-6 text-xl font-semibold transition-all duration-500 hover:scale-105"
            >
              <Link to="/about">
              {t('cta.watchDemo')}
              <Zap className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Stats or Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-white/70">{t('ui.clientsServed')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-white/70">{t('cta.stats.satisfaction')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">{t('ui.expertSupport')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;