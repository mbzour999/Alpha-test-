import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Target, BarChart, Brain, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PredictionModels = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: 'Advanced ML Algorithms',
      description: 'State-of-the-art machine learning models including neural networks, ensemble methods, and deep learning.'
    },
    {
      icon: Target,
      title: 'High Accuracy',
      description: 'Achieve prediction accuracy rates of 90%+ through rigorous model training and validation processes.'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Predictions',
      description: 'Get instant predictions and forecasts as new data becomes available in your systems.'
    },
    {
      icon: BarChart,
      title: 'Interpretable Results',
      description: 'Understand the factors driving predictions with explainable AI and detailed model insights.'
    }
  ];

  const applications = [
    'Sales and revenue forecasting',
    'Customer churn prediction',
    'Inventory demand planning',
    'Risk assessment and management',
    'Market trend analysis',
    'Equipment failure prediction',
    'Customer lifetime value estimation',
    'Price optimization modeling'
  ];

  const industries = [
    {
      title: 'E-commerce & Retail',
      description: 'Predict customer behavior, optimize pricing, and forecast demand to maximize revenue.',
      examples: ['Demand forecasting', 'Price optimization', 'Customer churn']
    },
    {
      title: 'Financial Services',
      description: 'Assess credit risk, detect fraud, and predict market movements for better decision-making.',
      examples: ['Credit scoring', 'Fraud detection', 'Market prediction']
    },
    {
      title: 'Manufacturing',
      description: 'Predict equipment failures, optimize production schedules, and improve quality control.',
      examples: ['Predictive maintenance', 'Quality prediction', 'Supply chain optimization']
    },
    {
      title: 'Healthcare',
      description: 'Predict patient outcomes, optimize treatment plans, and improve resource allocation.',
      examples: ['Patient risk assessment', 'Treatment outcomes', 'Resource planning']
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
              {t('services.predictionModels.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.predictionModels.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Build Your Model
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                See Examples
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
              Advanced Prediction Capabilities
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Leverage cutting-edge machine learning to forecast future outcomes with unprecedented accuracy
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
                Prediction Applications
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                Our prediction models can be applied across various business scenarios to provide actionable insights and competitive advantages.
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
                <TrendingUp className="h-32 w-32 text-alpha-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              Tailored prediction models for specific industry challenges and opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-alpha-foreground mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-alpha-secondary leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-alpha-foreground mb-2">Key Applications:</div>
                    {industry.examples.map((example, idx) => (
                      <div key={idx} className="inline-block mr-2 mb-2">
                        <span className="px-3 py-1 bg-alpha-primary/10 text-alpha-primary text-sm rounded-full">
                          {example}
                        </span>
                      </div>
                    ))}
                  </div>
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
              Our Development Process
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              A proven methodology for building accurate and reliable prediction models
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Data Assessment', desc: 'Analyze your data quality and availability' },
              { step: '02', title: 'Feature Engineering', desc: 'Extract and create relevant predictive features' },
              { step: '03', title: 'Model Training', desc: 'Train multiple algorithms to find the best fit' },
              { step: '04', title: 'Validation', desc: 'Test model accuracy and reliability' },
              { step: '05', title: 'Deployment', desc: 'Deploy models for real-time predictions' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-alpha-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
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
      <section className="py-16 bg-gradient-to-r from-[#009ec2] to-[#00e66a] text-white">
        <div className="alpha-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Predicting Your Future Success
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's build custom prediction models that give you a competitive edge and drive better business outcomes.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Discuss Your Prediction Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PredictionModels;