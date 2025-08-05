import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const VisionMission = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We prioritize transparency, fairness, and accountability in all our AI solutions, ensuring technology serves humanity responsibly.'
    },
    {
      icon: Users,
      title: 'Human-Centered Design',
      description: 'Our solutions augment human capabilities rather than replace them, fostering collaboration between humans and AI.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible with AI while maintaining practical applicability for real-world challenges.'
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'We measure success not just by profit, but by the positive impact our solutions have on communities and society.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-alpha-primary/10 to-alpha-secondary/10">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              Vision & Mission
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed">
              Our guiding principles and aspirations that drive everything we do at Alpha AI
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-10 w-10 text-alpha-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-6">
                To be the global leader in ethical AI innovation, creating a world where artificial intelligence enhances human potential, drives sustainable progress, and ensures equitable access to advanced technology for all.
              </p>
              <p className="text-lg text-alpha-secondary leading-relaxed">
                We envision a future where AI serves as a powerful ally to humanity, solving complex global challenges while preserving human dignity and fostering inclusive growth across all communities.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-24 w-24 text-alpha-primary mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-alpha-foreground">
                    Empowering Tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-secondary/20 to-alpha-primary/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Target className="h-24 w-24 text-alpha-primary mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-alpha-foreground">
                    Driving Innovation
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-20 h-20 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-10 w-10 text-alpha-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-6">
                To democratize access to cutting-edge AI technology by developing ethical, transparent, and human-centered solutions that empower businesses and individuals to achieve their full potential.
              </p>
              <p className="text-lg text-alpha-secondary leading-relaxed">
                We are committed to bridging the gap between complex AI capabilities and practical business applications, ensuring that organizations of all sizes can harness the power of artificial intelligence responsibly and effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              The fundamental principles that guide our decision-making and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-alpha-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-r from-[#00e66a] to-[#009ec2] text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              We pledge to maintain the highest standards of ethical AI development, ensuring that our innovations contribute to a more equitable, sustainable, and prosperous future for all. Every solution we create is designed with transparency, accountability, and human welfare at its core.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="opacity-90">Transparent AI</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="opacity-90">Bias Tolerance</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">∞</div>
                <div className="opacity-90">Human Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;