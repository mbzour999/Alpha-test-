import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Building2, 
  HeartHandshake, 
  GraduationCap, 
  Plane, 
  Truck, 
  Home, 
  Briefcase, 
  Radio 
} from 'lucide-react';

const Industries = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      key: 'retail',
      icon: ShoppingCart
    },
    {
      key: 'banking',
      icon: Building2
    },
    {
      key: 'healthcare',
      icon: HeartHandshake
    },
    {
      key: 'education',
      icon: GraduationCap
    },
    {
      key: 'tourism',
      icon: Plane
    },
    {
      key: 'logistics',
      icon: Truck
    },
    {
      key: 'realEstate',
      icon: Home
    },
    {
      key: 'professional',
      icon: Briefcase
    },
    {
      key: 'communications',
      icon: Radio
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-alpha-primary/5 to-alpha-secondary/5">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-alpha-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-alpha-secondary leading-relaxed">
              Delivering AI excellence across diverse industries with tailored solutions for every sector
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card key={sector.key} className="border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-alpha-primary/10 rounded-full flex items-center justify-center group-hover:bg-alpha-primary/20 transition-colors">
                    <sector.icon className="h-10 w-10 text-alpha-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-alpha-secondary group-hover:text-alpha-primary transition-colors">
                    {t(`sectors.${sector.key}`)}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;