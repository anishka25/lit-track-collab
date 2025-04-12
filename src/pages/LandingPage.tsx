
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  GanttChartSquare,
  Github,
  Layers,
  SquareKanban,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Task Management",
    description: "Organize research tasks and track progress efficiently.",
    icon: <ClipboardList className="h-10 w-10 text-resach-600" />,
  },
  {
    title: "Kanban Board",
    description: "Visualize your workflow with customizable Kanban boards.",
    icon: <SquareKanban className="h-10 w-10 text-resach-600" />,
  },
  {
    title: "Timeline View",
    description: "Plan your research milestones with an interactive timeline.",
    icon: <GanttChartSquare className="h-10 w-10 text-resach-600" />,
  },
  {
    title: "Literature Management",
    description: "Keep track of research papers with an organized library.",
    icon: <BookOpen className="h-10 w-10 text-resach-600" />,
  },
  {
    title: "Team Collaboration",
    description: "Work together with your research team seamlessly.",
    icon: <Users className="h-10 w-10 text-resach-600" />,
  },
  {
    title: "Research Components",
    description: "Modular organization of your research elements.",
    icon: <Layers className="h-10 w-10 text-resach-600" />,
  },
];

const testimonials = [
  {
    quote: "Resach has transformed how our lab manages research projects. The literature management feature is invaluable.",
    author: "Dr. Emily Chen",
    role: "Research Director",
    avatar: "EC",
  },
  {
    quote: "The timeline view helps me stay on track with my dissertation. I can't imagine working without it now.",
    author: "Michael Rodriguez",
    role: "PhD Candidate",
    avatar: "MR",
  },
  {
    quote: "Team collaboration is seamless with Resach. It's become an essential tool for our department.",
    author: "Prof. Sarah Johnson",
    role: "Department Head",
    avatar: "SJ",
  },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="font-bold text-2xl">
              <span className="text-resach-700">Re</span>
              <span className="text-resach-600">sach</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pb-32 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="heading-gradient">Streamline Your Research</span>
            <br />Management Process
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A unified platform for research teams to collaborate, manage tasks,
            and organize literature efficiently.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-in-delay-1">
          <Link to="/dashboard">
            <Button size="lg" className="text-base px-8">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="#demo">
            <Button size="lg" variant="outline" className="text-base px-8">
              View Demo
            </Button>
          </a>
        </div>
        <div className="mt-16 relative w-full max-w-6xl mx-auto animate-fade-in animate-in-delay-2">
          <div className="bg-gradient-to-r from-resach-700/20 to-resach-500/20 rounded-2xl p-1">
            <div className="rounded-xl overflow-hidden border shadow-xl">
              <img
                src="/images/dashboard-preview.png"
                alt="Resach Dashboard Preview"
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/1200x700/f5f3ff/6d28d9?text=Resach+Dashboard+Preview";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Research Management Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything your research team needs to stay organized and productive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className={`bg-card rounded-xl p-8 border shadow-sm hover:shadow-md transition-all hover-scale animate-fade-in animate-in-delay-${Math.min(index + 1, 4)}`}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Researchers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by research teams worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author} 
                className={`bg-card rounded-xl p-8 border shadow-sm animate-fade-in animate-in-delay-${index + 1}`}
              >
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" viewBox="0 0 45 36" fill="none" className="text-resach-300">
                    <path d="M13.244 0C6.018 4.392 0 13.176 0 21.96C0 29.64 5.346 36 13.43 36C19.97 36 24.944 30.912 24.944 24.552C24.944 18.288 20.262 13.968 14.288 13.968C13.244 13.968 11.63 14.256 11.258 14.352C12.674 10.44 17.834 5.064 22.994 2.304L13.244 0ZM35.206 0C28.072 4.392 22.054 13.176 22.054 21.96C22.054 29.64 27.4 36 35.484 36C42.024 36 46.998 30.912 46.998 24.552C46.998 18.288 42.316 13.968 36.342 13.968C35.298 13.968 33.684 14.256 33.312 14.352C34.728 10.44 39.888 5.064 45.048 2.304L35.206 0Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-resach-100 flex items-center justify-center mr-3">
                    <span className="font-semibold text-sm text-resach-700">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your research team's needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-md transition-all animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Free</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">For individual researchers</p>
              </div>
              <ul className="space-y-4 mb-8">
                {["5 research projects", "Basic task management", "Limited storage", "Community support"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-resach-600 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-card rounded-xl p-8 border-2 border-resach-600 shadow-lg relative animate-fade-in animate-in-delay-1">
              <div className="absolute top-0 right-0 bg-resach-600 text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Pro</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">For small research teams</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited projects", 
                  "Advanced task management", 
                  "10GB storage",
                  "Team collaboration", 
                  "Literature management", 
                  "Email support"
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-resach-600 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Choose Pro</Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-md transition-all animate-fade-in animate-in-delay-2">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">For research institutions</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Pro", 
                  "Unlimited storage", 
                  "Advanced analytics",
                  "Custom integrations", 
                  "Dedicated support", 
                  "Training sessions"
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-resach-600 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-resach-700 to-resach-500 rounded-2xl p-10 md:p-16 text-white text-center max-w-5xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Research?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Join thousands of researchers who are already using Resach to optimize their workflow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg text-foreground outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-white text-resach-700 hover:bg-white/90">
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">
                <span className="text-resach-700">Re</span>
                <span className="text-resach-600">sach</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Simplifying research management for teams and individuals.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Resach. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
