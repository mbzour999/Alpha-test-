import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.stats.projectsCompleted'), value: '150+' },
    { label: t('about.stats.clientsServed'), value: '80+' },
    { label: t('about.stats.industries'), value: '15+' },
    { label: t('about.stats.yearsExperience'), value: '10+' },
  ];

  const highlights = [
    {
      icon: Target,
      title: t('about.highlights.mission.title'),
      description: t('about.highlights.mission.description')
    },
    {
      icon: Users,
      title: t('about.highlights.team.title'),
      description: t('about.highlights.team.description')
    },
    {
      icon: Award,
      title: t('about.highlights.values.title'),
      description: t('about.highlights.values.description')
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-alpha-primary/5 to-alpha-secondary/5">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-alpha-secondary mb-8 leading-relaxed">
              {t('about.headline')}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild size="lg">
                <Link to="/vision-mission">
                  Learn Our Vision
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-alpha-background">
        <div className="alpha-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-alpha-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-alpha-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-alpha-secondary mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('about.foundingStory')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-alpha-primary/10 rounded-full flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-alpha-foreground mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alpha-primary text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.ctaSection.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('about.ctaSection.subtitle')}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              {t('about.ctaSection.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;