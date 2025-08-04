import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Users, TrendingUp, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailEcommerce = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-powered product recommendations that increase conversion rates and average order value.',
      impact: '+25% revenue'
    },
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict product demand to optimize inventory levels and reduce stockouts.',
      impact: '-30% inventory costs'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Identify customer groups for targeted marketing and personalized experiences.',
      impact: '+40% engagement'
    },
    {
      icon: ShoppingCart,
      title: 'Dynamic Pricing',
      description: 'Optimize pricing strategies in real-time based on market conditions and demand.',
      impact: '+15% profit margins'
    }
  ];

  const challenges = [
    {
      problem: 'Cart Abandonment',
      solution: 'AI-powered retargeting and personalized recovery campaigns',
      result: '35% reduction in abandonment rates'
    },
    {
      problem: 'Inventory Management',
      solution: 'Predictive analytics for demand forecasting and stock optimization',
      result: '50% reduction in stockouts'
    },
    {
      problem: 'Customer Acquisition',
      solution: 'ML-driven customer lifetime value prediction and targeted acquisition',
      result: '60% lower acquisition costs'
    },
    {
      problem: 'Product Discovery',
      solution: 'Intelligent search and recommendation systems',
      result: '45% increase in product discovery'
    }
  ];

  const features = [
    'Real-time personalization engine',
    'Advanced customer analytics',
    'Inventory optimization algorithms',
    'Fraud detection systems',
    'Price optimization models',
    'Chatbot customer support',
    'Visual search capabilities',
    'Supply chain analytics'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-alpha-primary/10 to-alpha-secondary/10">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              AI Solutions for Retail & E-commerce
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              Transform your retail business with intelligent solutions that boost sales, optimize operations, and enhance customer experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Transform Your Retail Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              AI-Powered Retail Solutions
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for retail and e-commerce challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-alpha-primary/10 rounded-full flex items-center justify-center">
                    <solution.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed text-sm mb-4">
                    {solution.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-alpha-primary/10 text-alpha-primary text-sm font-medium rounded-full">
                    {solution.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Solving Retail Challenges
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              How our AI solutions address common retail and e-commerce pain points
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-alpha-secondary mb-1">Challenge</div>
                    <h3 className="text-xl font-bold text-alpha-foreground">
                      {challenge.problem}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-alpha-secondary mb-1">Our Solution</div>
                    <p className="text-alpha-secondary leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-alpha-secondary mb-1">Result</div>
                    <div className="text-alpha-primary font-semibold">
                      {challenge.result}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-6">
                Complete AI Platform for Retail
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                Our comprehensive suite of AI tools covers every aspect of retail operations, from customer acquisition to inventory management.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-alpha-primary flex-shrink-0 mt-0.5" />
                    <span className="text-alpha-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl flex items-center justify-center">
                <ShoppingCart className="h-32 w-32 text-alpha-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Real results from retail businesses that transformed with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">300%</div>
                <div className="text-alpha-secondary mb-2">Increase in Online Sales</div>
                <div className="text-sm text-alpha-secondary">
                  Fashion retailer using AI recommendations
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">50%</div>
                <div className="text-alpha-secondary mb-2">Reduction in Inventory Costs</div>
                <div className="text-sm text-alpha-secondary">
                  Electronics retailer with demand forecasting
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-alpha-primary mb-2">85%</div>
                <div className="text-alpha-secondary mb-2">Customer Satisfaction Rate</div>
                <div className="text-sm text-alpha-secondary">
                  Omnichannel retailer with AI chatbots
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alpha-primary text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revolutionize Your Retail Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join leading retailers who are using AI to drive growth, improve efficiency, and deliver exceptional customer experiences.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Your AI Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailEcommerce;