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
    { label: 'Clients Served', value: '150+' },
    { label: 'Industries', value: '15+' },
    { label: 'Years Experience', value: '10+' },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize AI technology and make it accessible for businesses of all sizes while maintaining ethical standards and human-centered design principles.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of AI researchers, data scientists, and engineers passionate about creating meaningful solutions that benefit humanity.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Innovation, transparency, ethical AI practices, and a commitment to building technology that empowers rather than replaces human capabilities.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-alpha-primary/5 to-alpha-secondary/5">
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose prose-lg max-w-none text-alpha-secondary">
                <p className="text-xl leading-relaxed mb-6">
                  {t('about.description')}
                </p>
                <p className="text-lg leading-relaxed">
                  Founded with the vision of making AI accessible and beneficial for all, Alpha AI has grown from a small team of passionate researchers to a recognized leader in ethical AI development. We believe that the future of AI lies not in replacing human intelligence, but in augmenting it.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl overflow-hidden shadow-lg">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                >
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-alpha-primary/10 to-transparent rounded-3xl pointer-events-none"></div>
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
      <section className="py-16 bg-gradient-to-r from-[#009ec2] to-[#00e66a] text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI can drive your success forward.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get in Touch
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