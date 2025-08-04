import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, TrendingUp, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalytics = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Visualization',
      description: 'Interactive dashboards and reports that make complex data easy to understand and act upon.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Insights',
      description: 'Forecast future trends and outcomes using sophisticated machine learning algorithms.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect and analyze data from multiple sources and formats.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process and analyze streaming data for instant insights and rapid decision-making.'
    }
  ];

  const benefits = [
    'Increase revenue by 20-30% through data-driven insights',
    'Reduce operational costs by identifying inefficiencies',
    'Improve customer satisfaction with personalized experiences',
    'Make faster, more informed business decisions',
    'Identify new market opportunities and trends',
    'Optimize marketing campaigns and resource allocation'
  ];

  const useCases = [
    {
      title: 'Customer Behavior Analysis',
      description: 'Understand customer preferences, buying patterns, and lifecycle to optimize engagement strategies.'
    },
    {
      title: 'Operational Efficiency',
      description: 'Identify bottlenecks, optimize processes, and improve resource utilization across your organization.'
    },
    {
      title: 'Financial Analytics',
      description: 'Track KPIs, forecast revenue, and analyze financial performance with precision and clarity.'
    },
    {
      title: 'Market Intelligence',
      description: 'Analyze market trends, competitor performance, and identify strategic opportunities.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-alpha-primary/10 to-alpha-secondary/10">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              {t('services.dataAnalytics.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.dataAnalytics.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Started
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
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Comprehensive tools and capabilities to transform your data into actionable business intelligence
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
                Our data analytics solutions deliver measurable results that drive growth and efficiency across your organization.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-alpha-primary flex-shrink-0 mt-0.5" />
                    <span className="text-alpha-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-alpha-primary/20 to-alpha-secondary/20 rounded-3xl flex items-center justify-center">
                <BarChart3 className="h-32 w-32 text-alpha-primary" />
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
              Use Cases
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Real-world applications of our data analytics solutions across various business functions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-alpha-foreground mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-alpha-muted">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              A systematic approach to transforming your data into strategic business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business goals and data landscape' },
              { step: '02', title: 'Integration', desc: 'Connect and clean your data sources' },
              { step: '03', title: 'Analysis', desc: 'Apply advanced analytics and ML models' },
              { step: '04', title: 'Insights', desc: 'Deliver actionable insights and recommendations' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-alpha-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-alpha-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-alpha-secondary text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-alpha-primary text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss how our data analytics solutions can drive growth and efficiency for your business.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Your Analytics Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalytics;