import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section gradient-bg-contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Let's Connect</h3>
            <p className="text-lg text-gray-700 mb-6">
              Whether you have a project idea, a question about my blog posts,
              or just want to say hello, feel free to drop me a message.
            </p>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-500/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-700">contact@michelini.dev</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-blue-500/10 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h4 className="font-medium">Social Media</h4>
                <p className="text-gray-700">
                  Connect with me on{" "}
                  <a
                    href="https://linkedin.com/in/alessiomichelini"
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          {/* <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="border-blue-200 focus:border-blue-300"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
