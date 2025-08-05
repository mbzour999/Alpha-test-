import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Users, ShoppingCart, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecommendationModels = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Star,
      title: 'Personalized Recommendations',
      description: 'Deliver highly personalized product and content recommendations based on user behavior and preferences.'
    },
    {
      icon: Users,
      title: 'Collaborative Filtering',
      description: 'Leverage user similarity and item relationships to suggest relevant products and services.'
    },
    {
      icon: ShoppingCart,
      title: 'Cross-selling & Upselling',
      description: 'Increase revenue through intelligent cross-selling and upselling recommendations.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Generate recommendations instantly as users interact with your platform.'
    }
  ];

  const benefits = [
    'Increase conversion rates by 20-35%',
    'Boost average order value through cross-selling',
    'Improve customer satisfaction and engagement',
    'Reduce bounce rates with relevant suggestions',
    'Enhance user experience with personalized content',
    'Drive customer loyalty and retention'
  ];

  const useCases = [
    {
      title: 'E-commerce Product Recommendations',
      description: 'Suggest products based on browsing history, purchase behavior, and similar customer preferences.',
      impact: '30% increase in sales'
    },
    {
      title: 'Content Recommendation Systems',
      description: 'Recommend articles, videos, or media content based on user interests and consumption patterns.',
      impact: '45% longer engagement'
    },
    {
      title: 'Service Recommendations',
      description: 'Suggest relevant services, courses, or subscriptions based on user profile and behavior.',
      impact: '25% higher conversion'
    },
    {
      title: 'Social Media Feed Optimization',
      description: 'Curate personalized feeds and content streams to maximize user engagement.',
      impact: '50% more time spent'
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
              {t('services.recommendationModels.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.recommendationModels.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Build Your System
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Examples
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
              Advanced Recommendation Features
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Sophisticated algorithms that understand user preferences and deliver personalized experiences
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

      {/* Benefits Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
                Business Impact
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                Our recommendation systems deliver measurable results that drive engagement, sales, and customer satisfaction.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-alpha-primary flex-shrink-0 mt-0.5" />
                    <span className="text-alpha-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl flex items-center justify-center">
                <Star className="h-32 w-32 text-alpha-primary" />
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
              See how recommendation systems transform user experiences across different industries
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

      {/* Algorithm Types Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Recommendation Algorithms
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Multiple approaches to deliver the most relevant recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Collaborative Filtering', desc: 'Recommendations based on user behavior patterns and similarities' },
              { title: 'Content-Based Filtering', desc: 'Suggestions based on item features and user preferences' },
              { title: 'Hybrid Approaches', desc: 'Combining multiple algorithms for optimal recommendation accuracy' }
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
            Ready to Personalize Your User Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's build intelligent recommendation systems that drive engagement and boost your business results.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Your Recommendation Engine
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecommendationModels;