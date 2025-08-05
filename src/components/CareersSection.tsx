import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Award } from 'lucide-react';

const CareersSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Users,
      key: 'collaborative'
    },
    {
      icon: TrendingUp,
      key: 'growth'
    },
    {
      icon: Award,
      key: 'innovation'
    }
  ];

  return (
    <section id="careers" className="alpha-section-padding bg-alpha-neutral-50">
      <div className="alpha-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
            {t('careers.title')}
          </h2>
          <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
            {t('careers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.key}
              className={`alpha-card border-0 text-center p-6 fade-in-up-delay-${index + 1}`}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-alpha-primary" />
                </div>
                <CardTitle className="text-alpha-secondary">
                  {t(`careers.benefits.${benefit.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-alpha-neutral-800">
                  {t(`careers.benefits.${benefit.key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center fade-in-up-delay-3">
          <Button
            asChild
            size="lg" 
            className="alpha-btn-primary text-white border-0 px-8 py-6 text-lg font-semibold group"
          >
            <Link to="/careers">
            {t('careers.exploreCareers')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;