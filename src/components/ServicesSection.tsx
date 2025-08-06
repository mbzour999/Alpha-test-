import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  BarChart3, 
  Bot, 
  TrendingUp, 
  Star, 
  LineChart, 
  Heart, 
  Layers, 
  Eye, 
  Clock,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const services = [
    {
      key: 'dataAnalytics',
      icon: BarChart3,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'intelligentAssistants',
      icon: Bot,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'predictionModels',
      icon: TrendingUp,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'recommendationModels',
      icon: Star,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'regressionModels',
      icon: LineChart,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'emotionalAnalysis',
      icon: Heart,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'clusteringModels',
      icon: Layers,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'computerVision',
      icon: Eye,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    },
    {
      key: 'temporalAnalysis',
      icon: Clock,
      color: 'bg-alpha-primary/10 text-alpha-primary'
    }
  ];

  const handleCardFlip = (serviceKey: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceKey)) {
        newSet.delete(serviceKey);
      } else {
        newSet.add(serviceKey);
      }
      return newSet;
    });
  };

  return (
    <section id="services" className="alpha-section-padding">
      <div className="alpha-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent>
            {services.map((service, index) => {
              const isFlipped = flippedCards.has(service.key);
              return (
                <CarouselItem key={service.key} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`flip-card h-[400px] cursor-pointer fade-in-up-delay-${(index % 3) + 1}`}
                    onClick={() => handleCardFlip(service.key)}
                  >
                    <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                      {/* Front of the card */}
                      <div className="flip-card-front">
                        <Card className="bg-white border border-alpha-neutral-200 rounded-2xl p-8 text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <CardContent className="p-0 h-full">
                            <div className="flex flex-col items-center justify-between h-full">
                              <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 transform hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="h-10 w-10" />
                              </div>
                              
                              <h3 className="text-2xl font-bold text-alpha-secondary mb-6 leading-tight">
                                {t(`services.${service.key}.title`)}
                              </h3>
                              
                              <p className="text-alpha-neutral-600 leading-relaxed mb-8 min-h-[80px] text-center">
                                {t(`services.${service.key}.description`)}
                              </p>
                              
                              <div className="text-sm text-alpha-primary font-medium">
                                {t('ui.clickToLearnMore')}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Back of the card */}
                      <div className="flip-card-back">
                        <Card className="bg-gradient-to-br from-alpha-primary to-alpha-primary/80 border border-alpha-primary rounded-2xl p-8 text-center h-full shadow-lg">
                          <CardContent className="p-0 h-full">
                            <div className="flex flex-col items-center justify-between h-full text-white">
                              <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                <service.icon className="h-10 w-10 text-white" />
                              </div>
                              
                              <h3 className="text-2xl font-bold mb-6 leading-tight">
                                {t(`services.${service.key}.title`)}
                              </h3>
                              
                              <div className="text-center mb-8 overflow-y-auto max-h-[180px]">
                                <p className="text-white/90 leading-relaxed mb-4">
                                  {t(`services.${service.key}.description`)}
                                </p>
                                <div className="space-y-2 text-sm text-white/80">
                                  <div>• Advanced algorithms</div>
                                  <div>• Real-time processing</div>
                                  <div>• Scalable solutions</div>
                                </div>
                              </div>
                              
                              <Button 
                                className="bg-white text-alpha-primary hover:bg-white/90 rounded-full px-8 py-3 font-medium transition-all duration-300 group w-full"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Add your action here
                                }}
                              >
                                {t('services.discoverMore')}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="text-alpha-primary border-alpha-primary hover:bg-alpha-primary hover:text-white" />
          <CarouselNext className="text-alpha-primary border-alpha-primary hover:bg-alpha-primary hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;