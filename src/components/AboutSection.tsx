import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Shield, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: 'Human-Centered',
      description: 'AI that amplifies human capabilities'
    },
    {
      icon: Shield,
      title: 'Ethical & Transparent',
      description: 'Responsible AI development practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions for tomorrow'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building together with unity'
    }
  ];

  return (
    <section id="about" className="alpha-section-padding bg-alpha-neutral-50">
      <div className="alpha-container">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl md:text-2xl text-alpha-primary font-medium leading-relaxed mb-8">
            {t('about.headline')}
          </p>
          <p className="text-lg text-alpha-neutral-800 leading-relaxed max-w-3xl mx-auto mb-8">
            {t('about.description')}
          </p>
          <Button className="bg-alpha-primary hover:bg-alpha-primary/90 text-white px-8 py-3">
            About Us
          </Button>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className={`alpha-card border-0 text-center p-6 fade-in-up-delay-${index + 1}`}
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-alpha-primary" />
                </div>
                <h3 className="text-lg font-semibold text-alpha-secondary mb-2">
                  {value.title}
                </h3>
                <p className="text-alpha-neutral-800">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;