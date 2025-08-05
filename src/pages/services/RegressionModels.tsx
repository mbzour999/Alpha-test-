import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, TrendingUp, BarChart, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegressionModels = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: LineChart,
      title: 'Linear & Non-Linear Models',
      description: 'Advanced regression techniques including linear, polynomial, and non-linear regression models.'
    },
    {
      icon: Target,
      title: 'High Accuracy Predictions',
      description: 'Achieve precise forecasting with R² scores of 0.9+ through optimized model selection.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends in your data to make informed business decisions.'
    },
    {
      icon: BarChart,
      title: 'Feature Engineering',
      description: 'Advanced feature selection and engineering to improve model performance.'
    }
  ];

  const applications = [
    'Sales forecasting and revenue prediction',
    'Price optimization and elasticity modeling',
    'Demand planning and inventory management',
    'Financial risk assessment',
    'Performance metrics prediction',
    'Resource allocation optimization',
    'Market trend analysis',
    'Customer lifetime value estimation'
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales based on historical data, seasonality, and market conditions.',
      impact: '25% improvement in forecast accuracy'
    },
    {
      title: 'Price Optimization',
      description: 'Determine optimal pricing strategies using demand elasticity and market analysis.',
      impact: '15% increase in profit margins'
    },
    {
      title: 'Operational Efficiency',
      description: 'Forecast resource needs and optimize operational processes for maximum efficiency.',
      impact: '30% reduction in operational costs'
    },
    {
      title: 'Financial Planning',
      description: 'Predict financial metrics and plan budgets with confidence using regression analysis.',
      impact: '20% better budget accuracy'
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
              {t('services.regressionModels.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.regressionModels.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Build Your Model
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
              Advanced Regression Capabilities
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Powerful regression models that deliver accurate predictions and actionable insights
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
                Our regression models provide accurate forecasting and optimization across various business functions.
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
                <LineChart className="h-32 w-32 text-alpha-primary" />
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
              Real-World Use Cases
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              See how regression models drive business success across different scenarios
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
            Ready to Optimize Your Forecasting?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's build powerful regression models that drive accurate predictions and business growth.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Your Regression Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegressionModels;