import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('contact.form.success'),
        description: "We'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: t('contact.form.error'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: 'Riyadh, Saudi Arabia'
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@alphaai.com'
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+966 11 123 4567'
    }
  ];

  return (
    <section id="contact" className="alpha-section-padding">
      <div className="alpha-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 fade-in-up-delay-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-alpha-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-alpha-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-alpha-secondary mb-1">
                      {info.label}
                    </h3>
                    <p className="text-alpha-neutral-800">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in-up-delay-2">
            <Card className="alpha-card border-0">
              <CardHeader>
                <CardTitle className="text-alpha-secondary">
                  {t('contact.form.send')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-alpha-secondary">
                        {t('contact.form.name')} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-alpha-secondary">
                        {t('contact.form.email')} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-alpha-secondary">
                      {t('contact.form.company')}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-alpha-secondary">
                      {t('contact.form.message')} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="alpha-btn-primary text-white border-0 w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        {t('contact.form.send')}
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;