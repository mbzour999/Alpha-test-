import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const { t } = useTranslation();

  const leadership = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Chief Executive Officer',
      bio: 'Former Director of AI Research at major tech companies with 15+ years of experience in machine learning and business strategy.',
      image: '/lovable-uploads/b1237e67-9047-4f58-a248-845129347a80.png',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Leading researcher in neural networks and deep learning, published 100+ papers in top-tier AI conferences.',
      image: '/lovable-uploads/b1237e67-9047-4f58-a248-845129347a80.png',
      linkedin: '#',
      twitter: '#',
      email: '#'
    },
    {
      name: 'Dr. Amira Hassan',
      role: 'Head of Ethics & AI Safety',
      bio: 'Expert in AI ethics and responsible AI development, ensuring our solutions meet the highest ethical standards.',
      image: '/lovable-uploads/b1237e67-9047-4f58-a248-845129347a80.png',
      linkedin: '#',
      twitter: '#',
      email: '#'
    }
  ];

  const teams = [
    {
      title: 'Research & Development',
      description: 'Our R&D team pushes the boundaries of AI innovation, developing cutting-edge algorithms and models.',
      size: '25+ researchers'
    },
    {
      title: 'Engineering',
      description: 'World-class engineers who turn research breakthroughs into scalable, production-ready solutions.',
      size: '30+ engineers'
    },
    {
      title: 'Data Science',
      description: 'Expert data scientists who transform complex datasets into actionable business insights.',
      size: '20+ data scientists'
    },
    {
      title: 'Product & Design',
      description: 'User-focused designers and product managers creating intuitive AI-powered experiences.',
      size: '15+ designers'
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
              Meet Our Team
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed">
              Brilliant minds working together to shape the future of artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Experienced leaders driving our vision and ensuring ethical AI development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-alpha-muted">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-alpha-foreground mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-alpha-primary font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-alpha-secondary text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={leader.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={leader.email}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Our Teams
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Diverse, talented professionals working across different disciplines to deliver exceptional AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teams.map((team, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-alpha-foreground mb-4">
                    {team.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed mb-4">
                    {team.description}
                  </p>
                  <div className="text-alpha-primary font-medium">
                    {team.size}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              We foster an environment of innovation, collaboration, and continuous learning. Our team members are encouraged to explore new ideas, challenge assumptions, and contribute to groundbreaking research that benefits humanity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">15+</div>
                <div className="text-alpha-secondary">Countries Represented</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">50+</div>
                <div className="text-alpha-secondary">PhD Holders</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">100+</div>
                <div className="text-alpha-secondary">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-[#009ec2] to-[#00e66a] text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI. We're always looking for passionate individuals who share our vision of ethical, impactful artificial intelligence.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/careers">View Open Positions</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;