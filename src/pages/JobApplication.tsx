import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Upload, Send } from 'lucide-react';

const JobApplication = () => {
  const { jobId } = useParams();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    coverLetter: '',
    experience: '',
    availability: ''
  });

  // Job titles mapping
  const jobTitles: { [key: string]: string } = {
    'senior-ml-engineer': 'Senior Machine Learning Engineer',
    'ai-research-scientist': 'AI Research Scientist',
    'data-scientist': 'Senior Data Scientist',
    'product-manager': 'AI Product Manager',
    'ux-designer': 'Senior UX Designer',
    'devops-engineer': 'DevOps Engineer'
  };

  const jobTitle = jobTitles[jobId || ''] || 'Position';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedIn: '',
        coverLetter: '',
        experience: '',
        availability: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-alpha-primary/5 to-alpha-secondary/5">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/careers" 
              className="inline-flex items-center gap-2 text-alpha-primary hover:text-alpha-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Careers
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-alpha-foreground mb-4">
              Apply for {jobTitle}
            </h1>
            <p className="text-lg text-alpha-secondary">
              Join our team and help shape the future of AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="alpha-container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-alpha-secondary">
                  Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-alpha-secondary">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-alpha-secondary">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-alpha-secondary">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-alpha-secondary">
                          Email Address *
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
                      <div>
                        <Label htmlFor="phone" className="text-alpha-secondary">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="linkedIn" className="text-alpha-secondary">
                        LinkedIn Profile (Optional)
                      </Label>
                      <Input
                        id="linkedIn"
                        name="linkedIn"
                        type="url"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-alpha-secondary">Resume</h3>
                    <div className="border-2 border-dashed border-alpha-neutral-200 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-alpha-neutral-800 mx-auto mb-4" />
                      <p className="text-alpha-secondary mb-2">Upload your resume</p>
                      <p className="text-sm text-alpha-neutral-800 mb-4">PDF, DOC, or DOCX (Max 5MB)</p>
                      <Button type="button" variant="outline" className="border-alpha-primary text-alpha-primary">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  {/* Experience & Cover Letter */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-alpha-secondary">Additional Information</h3>
                    <div>
                      <Label htmlFor="experience" className="text-alpha-secondary">
                        Relevant Experience *
                      </Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Please describe your relevant experience and qualifications for this position..."
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary resize-none"
                      />
                    </div>
                    <div>
                      <Label htmlFor="coverLetter" className="text-alpha-secondary">
                        Cover Letter *
                      </Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary resize-none"
                      />
                    </div>
                    <div>
                      <Label htmlFor="availability" className="text-alpha-secondary">
                        Availability *
                      </Label>
                      <Input
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Immediately, 2 weeks notice, etc."
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-alpha-primary hover:bg-alpha-primary/90 text-white px-8 py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting Application...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Submit Application
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobApplication;