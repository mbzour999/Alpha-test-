import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Camera, Scan, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerVision = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced neural networks that identify and locate objects in images and video streams.'
    },
    {
      icon: Camera,
      title: 'Image Recognition',
      description: 'High-accuracy image classification and recognition across diverse visual content.'
    },
    {
      icon: Scan,
      title: 'OCR & Text Extraction',
      description: 'Extract and digitize text from images, documents, and real-world scenes.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process video streams and images in real-time for immediate insights and actions.'
    }
  ];

  const applications = [
    'Quality control and defect detection',
    'Automated visual inspection systems',
    'Document processing and digitization',
    'Security and surveillance monitoring',
    'Medical image analysis and diagnosis',
    'Retail inventory and shelf monitoring',
    'Autonomous vehicle vision systems',
    'Augmented reality applications'
  ];

  const useCases = [
    {
      title: 'Manufacturing Quality Control',
      description: 'Automatically detect defects and quality issues in production lines with precision and speed.',
      impact: '95% defect detection accuracy'
    },
    {
      title: 'Retail Analytics',
      description: 'Monitor inventory levels, analyze customer behavior, and optimize store layouts using visual data.',
      impact: '40% improvement in inventory management'
    },
    {
      title: 'Security Monitoring',
      description: 'Enhance security systems with intelligent video analysis and automated threat detection.',
      impact: '80% reduction in false alarms'
    },
    {
      title: 'Medical Imaging',
      description: 'Assist healthcare professionals with AI-powered analysis of medical images and scans.',
      impact: '30% faster diagnosis time'
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
              {t('services.computerVision.title')}
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed mb-8">
              {t('services.computerVision.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  See the Vision
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
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
              Advanced Vision Capabilities
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              State-of-the-art computer vision models that understand and interpret visual data
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
                Visual Intelligence Applications
              </h2>
              <p className="text-lg text-alpha-secondary leading-relaxed mb-8">
                Transform visual data into actionable insights across industries and use cases.
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
                <Eye className="h-32 w-32 text-alpha-primary" />
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
              Industry Solutions
            </h2>
            <p className="text-xl text-alpha-secondary max-w-3xl mx-auto">
              See how computer vision transforms operations across different industries
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
            Ready to See the Future?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Transform your visual data into intelligent insights with cutting-edge computer vision technology.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Start Your Vision Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComputerVision;