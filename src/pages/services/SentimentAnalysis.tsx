import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MessageSquare, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SentimentAnalysis = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Heart,
      title: 'Emotion Detection',
      description: 'Advanced NLP models that detect emotions, sentiment polarity, and contextual meaning in text.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Language Support',
      description: 'Analyze sentiment across multiple languages with high accuracy and cultural context awareness.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analysis',
      description: 'Process and analyze sentiment from social media, reviews, and feedback in real-time.'
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Monitor brand reputation and detect potential PR issues before they escalate.'
    }
  ];

  const applications = [
    'Social media monitoring and brand reputation',
    'Customer feedback analysis and insights',
    'Product review sentiment tracking',
    'Market research and consumer opinion',
    'Crisis management and PR monitoring',
    'Customer service quality assessment',
    'Content performance optimization',
    'Competitive sentiment analysis'
  ];

  const useCases = [
    {
      title: 'Brand Reputation Monitoring',
      description: 'Track brand sentiment across social media, news, and review platforms to protect your reputation.',
      impact: '85% faster issue detection'
    },
    {
      title: 'Customer Feedback Analysis',
      description: 'Analyze customer reviews and feedback to identify improvement opportunities and satisfaction trends.',
      impact: '40% improvement in customer satisfaction'
    },
    {
      title: 'Product Launch Monitoring',
      description: 'Monitor public sentiment during product launches to gauge market reception and adjust strategies.',
      impact: '60% better launch success rate'
    },
    {
      title: 'Crisis Management',
      description: 'Detect negative sentiment spikes early to enable rapid response and damage control.',
      impact: '70% reduction in crisis impact'
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
              {t('services.emotionalAnalysis.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.emotionalAnalysis.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Protect Your Brand
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Demo
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
              Advanced Sentiment Analysis
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Sophisticated NLP models that understand context, emotion, and cultural nuances
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

      {/* Applications Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
                Business Applications
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                Protect your brand and understand customer sentiment across all digital touchpoints.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-alpha-primary flex-shrink-0 mt-0.5" />
                    <span className="text-alpha-secondary">{application}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl flex items-center justify-center">
                <Heart className="h-32 w-32 text-alpha-primary" />
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
              Real-World Impact
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              See how sentiment analysis transforms brand management and customer understanding
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#009ec2] to-[#00e66a] text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Protect Your Brand?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Start monitoring sentiment and protecting your brand reputation with advanced AI analysis.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Sentiment Monitoring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SentimentAnalysis;