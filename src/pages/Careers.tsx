import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const { t } = useTranslation();

  const jobOpenings = [
    {
      id: 'senior-ml-engineer',
      title: 'Senior Machine Learning Engineer',
      department: 'Engineering',
      location: 'Remote / Dubai',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge ML models and systems that power our AI solutions.',
      requirements: ['5+ years ML experience', 'Python/TensorFlow', 'PhD preferred']
    },
    {
      id: 'ai-research-scientist',
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Dubai',
      type: 'Full-time',
      description: 'Conduct research in AI/ML and publish findings in top-tier conferences.',
      requirements: ['PhD in AI/ML', 'Research publications', 'Deep learning expertise']
    },
    {
      id: 'data-scientist',
      title: 'Senior Data Scientist',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      description: 'Extract insights from complex datasets and build predictive models.',
      requirements: ['3+ years experience', 'Statistical modeling', 'SQL/Python']
    },
    {
      id: 'product-manager',
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Dubai',
      type: 'Full-time',
      description: 'Define product strategy and roadmap for AI-powered products.',
      requirements: ['Product management experience', 'AI/ML knowledge', 'Strategic thinking']
    },
    {
      id: 'ux-designer',
      title: 'Senior UX Designer',
      department: 'Design',
      location: 'Remote / Dubai',
      type: 'Full-time',
      description: 'Design intuitive interfaces for complex AI applications.',
      requirements: ['5+ years UX design', 'AI/ML familiarity', 'Design systems']
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain scalable infrastructure for AI workloads.',
      requirements: ['Kubernetes', 'Cloud platforms', 'CI/CD pipelines']
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Top-tier salary packages with equity participation and performance bonuses.'
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance.'
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning budget, conference attendance, and skill development.'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive healthcare, mental health support, and wellness programs.'
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and research exploration.'
    },
    {
      title: 'Impact',
      description: 'Work on meaningful projects that make a real difference in the world.'
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
              {t('careers.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('careers.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Benefits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Why Join Alpha AI?
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              We offer an environment where innovation thrives and your contributions make a meaningful impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-alpha-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-alpha-secondary">
              Join our team and help build the future of AI
            </p>
          </div>
          
          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-alpha-foreground">
                          {job.title}
                        </h3>
                        <Badge variant="secondary">{job.department}</Badge>
                      </div>
                      
                      <p className="text-alpha-secondary mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-alpha-secondary">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.department}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm text-alpha-secondary mb-2">Key Requirements:</div>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-6">
                      <Button asChild>
                        <Link to={`/careers/${job.id}/apply`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
              We believe that diverse perspectives and collaborative innovation drive the best results. Our culture emphasizes continuous learning, ethical AI development, and making a positive impact on the world.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">95%</div>
                <div className="text-alpha-secondary">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">40+</div>
                <div className="text-alpha-secondary">Nationalities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">∞</div>
                <div className="text-alpha-secondary">Growth Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#009ec2] to-[#00e66a] text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to the future of AI.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Send Us Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;