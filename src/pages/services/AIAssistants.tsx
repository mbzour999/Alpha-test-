import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, MessageSquare, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAssistants = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'Automate complex workflows and repetitive tasks with advanced AI reasoning capabilities.'
    },
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in human-like conversations with context awareness and multi-turn dialogue support.'
    },
    {
      icon: Zap,
      title: 'Real-time Responses',
      description: 'Get instant, accurate responses and actions powered by cutting-edge AI models.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security with data privacy, access controls, and compliance features.'
    }
  ];

  const capabilities = [
    'Customer service and support automation',
    'Content creation and document processing',
    'Data analysis and report generation',
    'Meeting scheduling and calendar management',
    'Email and communication assistance',
    'Research and information gathering',
    'Task prioritization and workflow optimization',
    'Training and knowledge management'
  ];

  const useCases = [
    {
      title: 'Customer Support Agent',
      description: 'Handle customer inquiries 24/7 with intelligent responses, ticket routing, and escalation management.',
      impact: '60% reduction in response time'
    },
    {
      title: 'Sales Assistant',
      description: 'Qualify leads, schedule meetings, and provide personalized product recommendations to prospects.',
      impact: '40% increase in conversion rates'
    },
    {
      title: 'HR Assistant',
      description: 'Streamline recruitment, onboarding, and employee support with automated workflows.',
      impact: '50% faster hiring process'
    },
    {
      title: 'Research Assistant',
      description: 'Gather, analyze, and synthesize information from multiple sources for strategic decision-making.',
      impact: '70% time savings on research'
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
              {t('services.intelligentAssistants.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.intelligentAssistants.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Build Your Assistant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Powered by state-of-the-art AI models with enterprise-grade reliability and security
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-alpha-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
                What Our AI Assistants Can Do
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                From simple task automation to complex problem-solving, our AI assistants adapt to your specific needs and workflows.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-alpha-primary flex-shrink-0 mt-0.5" />
                    <span className="text-alpha-secondary">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl flex items-center justify-center">
                <Bot className="h-32 w-32 text-alpha-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              See how AI assistants transform business operations across different departments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-alpha-foreground mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-alpha-primary/10 text-alpha-primary text-sm font-medium rounded-full">
                    {useCase.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Deploy AI assistants across your existing tools and platforms with minimal disruption
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Web & Mobile Apps', desc: 'Native integration with your applications via APIs and SDKs' },
              { title: 'Communication Platforms', desc: 'Deploy on Slack, Teams, WhatsApp, and other messaging platforms' },
              { title: 'Business Systems', desc: 'Connect with CRM, ERP, and other enterprise software' }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-alpha-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed">
                    {item.desc}
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
            Ready to Deploy Your AI Assistant?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform your workforce productivity with intelligent AI assistants tailored to your business needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAssistants;