import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Users, Shield, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about.values.humanCentered.title'),
      description: t('about.values.humanCentered.description')
    },
    {
      icon: Shield,
      title: t('about.values.ethical.title'),
      description: t('about.values.ethical.description')
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    }
  ];

  return (
    <section id="about" className="alpha-section-padding bg-alpha-neutral-50">
      <div className="alpha-container">
        {/* About Content with Video */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl md:text-2xl text-alpha-primary font-medium leading-relaxed mb-8">
              {t('about.headline')}
            </p>
            <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <Button className="bg-alpha-primary hover:bg-alpha-primary/90 text-white px-8 py-3" asChild>
              <Link to="/about">
                About Us
              </Link>
            </Button>
          </div>
          
          {/* Video Section */}
          <div className="fade-in-up-delay-1">
            <div className="relative aspect-video bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl overflow-hidden shadow-lg">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-alpha-primary/10 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
          </div>
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