import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const aboutItems = [
    { label: 'Overview', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Vision and Mission', href: '/vision-mission' },
    { label: 'Team', href: '/team' },
  ];

  const servicesItems = [
    { label: 'Data Analytics', href: '/services/data-analytics' },
    { label: 'AI Assistants and AI Agents', href: '/services/ai-assistants' },
    { label: 'Prediction Models', href: '/services/prediction-models' },
    { label: 'Recommendation Models', href: '/services/recommendation-models' },
    { label: 'Regression Models', href: '/services/regression-models' },
    { label: 'Sentimental Analysis Models', href: '/services/sentiment-analysis' },
    { label: 'Clustering Models', href: '/services/clustering-models' },
    { label: 'Computer Vision', href: '/services/computer-vision' },
    { label: 'Temporal Data Analysis Models', href: '/services/temporal-analysis' },
  ];

  const simpleNavItems = [
    { key: 'careers', href: '/careers' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-alpha-neutral-200">
      <div className="alpha-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
              <img 
                src="/lovable-uploads/023d9089-8e6c-4e54-9bd6-fc0c2a216e99.png" 
                alt="Alpha AI" 
                className="h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse rtl:gap-1">
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-alpha-secondary hover:text-alpha-primary transition-colors font-medium">
                {t('nav.about')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-alpha-neutral-200 shadow-lg">
                {aboutItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="text-alpha-secondary hover:text-alpha-primary">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-alpha-secondary hover:text-alpha-primary transition-colors font-medium">
                {t('nav.services')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-alpha-neutral-200 shadow-lg">
                {servicesItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="text-alpha-secondary hover:text-alpha-primary">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Simple Navigation Items */}
            {simpleNavItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="text-alpha-secondary hover:text-alpha-primary transition-colors font-medium"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-alpha-secondary hover:text-alpha-primary"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </Button>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-alpha-secondary"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-alpha-neutral-200 bg-white/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {/* About Us Mobile - Collapsible */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <div className="px-4">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-alpha-secondary font-medium py-2 hover:text-alpha-primary transition-colors">
                    {t('nav.about')}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block pl-4 py-1 text-alpha-secondary hover:text-alpha-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </div>
              </Collapsible>
              
              {/* Services Mobile - Collapsible */}
              <Collapsible open={isServicesOpen} onOpenChange={setIsServicesOpen}>
                <div className="px-4">
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-alpha-secondary font-medium py-2 hover:text-alpha-primary transition-colors">
                    {t('nav.services')}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block pl-4 py-1 text-alpha-secondary hover:text-alpha-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </div>
              </Collapsible>

              {/* Simple Items Mobile */}
              {simpleNavItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className="block px-4 py-2 text-alpha-secondary hover:text-alpha-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              
              <div className="px-4 pt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-alpha-secondary hover:text-alpha-primary"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  {isSearchOpen ? <X className="h-4 w-4 mr-2" /> : <Search className="h-4 w-4 mr-2" />}
                  {t('nav.search')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-alpha-secondary">Search</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Search for services, solutions, or information..."
              className="w-full text-lg p-4 border-alpha-neutral-200 focus:border-alpha-primary"
              autoFocus
            />
            <div className="text-sm text-alpha-neutral-800">
              <p className="mb-2 font-medium">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="text-xs">
                  Data Analytics
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  AI Assistants
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Prediction Models
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navigation;