import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp, Calendar, BarChart, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemporalAnalysis = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Clock,
      title: 'Time Series Forecasting',
      description: 'Advanced ARIMA, LSTM, and Prophet models for accurate time-based predictions.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify long-term trends, seasonal patterns, and cyclical behaviors in your data.'
    },
    {
      icon: Calendar,
      title: 'Seasonal Modeling',
      description: 'Account for seasonal variations and holiday effects in your forecasting models.'
    },
    {
      icon: BarChart,
      title: 'Anomaly Detection',
      description: 'Detect unusual patterns and outliers in time series data for early warning systems.'
    }
  ];

  const applications = [
    'Sales and revenue forecasting',
    'Demand planning and inventory optimization',
    'Financial market analysis and trading',
    'Energy consumption and load forecasting',
    'Website traffic and user behavior prediction',
    'Supply chain optimization',
    'Economic indicator analysis',
    'Resource capacity planning'
  ];

  const useCases = [
    {
      title: 'Demand Forecasting',
      description: 'Predict future demand patterns to optimize inventory levels and reduce stockouts.',
      impact: '35% reduction in inventory costs'
    },
    {
      title: 'Financial Planning',
      description: 'Forecast revenue, expenses, and cash flow with confidence using historical patterns.',
      impact: '25% improvement in budget accuracy'
    },
    {
      title: 'Energy Management',
      description: 'Predict energy consumption patterns to optimize resource allocation and reduce costs.',
      impact: '20% reduction in energy costs'
    },
    {
      title: 'Market Analysis',
      description: 'Analyze market trends and predict future movements for strategic decision-making.',
      impact: '40% better investment returns'
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
              {t('services.temporalAnalysis.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.temporalAnalysis.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Predict the Future
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
              Advanced Time Series Analysis
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Sophisticated models that understand temporal patterns and deliver accurate forecasts
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
                Time-Based Applications
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                Plan with confidence using advanced time series forecasting across various business scenarios.
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
                <Clock className="h-32 w-32 text-alpha-primary" />
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
              Real-World Success Stories
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              See how temporal analysis drives better planning and strategic decisions
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
            Ready to Master Time?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform your temporal data into strategic advantages with advanced time series analysis.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Time Series Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TemporalAnalysis;