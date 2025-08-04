import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Footer = () => {
  const { t } = useTranslation();

  const navItems = [
    { key: 'overview', href: '#about' },
    { key: 'careers', href: '#careers' },
    { key: 'contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-alpha-secondary text-white">
      <div className="alpha-container">
        <div className="py-12 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/b1237e67-9047-4f58-a248-845129347a80.png" 
                  alt="Alpha AI" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-white/80 leading-relaxed max-w-md mb-6">
                {t('footer.tagline')}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-white/60">{t('footer.followUs')}:</span>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-9 h-9 p-0 text-white/60 hover:text-white hover:bg-white/10"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {t(`nav.${item.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">{t('nav.contact')}</h3>
              <div className="space-y-2 text-white/70">
                <p>Riyadh, Saudi Arabia</p>
                <a href="mailto:info@alphaai.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  info@alphaai.com
                </a>
                <p>+966 11 123 4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="[&_button]:border-white/20 [&_button]:text-white/70 [&_button]:hover:bg-white/10 [&_button]:hover:text-white">
            <LanguageToggle />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-white/40 text-sm">
              {t('footer.madeWith')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;