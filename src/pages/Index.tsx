import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Users,
  Sparkles,
  TrendingUp,
  BookOpen,
  Award,
  Building2,
  Globe,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  const values = [
    {
      title: "Neutrality",
      description: "Non-political, independent, and impartial in all operations",
    },
    {
      title: "Empowerment",
      description: "Building capacity and enabling self-sufficiency",
    },
    {
      title: "Collaboration",
      description: "Partnership-driven approach with local and international stakeholders",
    },
    {
      title: "Ethical Innovation",
      description: "Technology as a force for good, guided by ethical principles",
    },
  ];

  const whyNow = [
    {
      icon: Shield,
      title: "Growing Cyber Threats",
      description:
        "Syria faces increasing cyber attacks targeting critical infrastructure, government services, and civil society organizations.",
    },
    {
      icon: BookOpen,
      title: "Digital Illiteracy",
      description:
        "Limited cybersecurity awareness and skills across all sectors, creating vulnerabilities and hindering digital transformation.",
    },
    {
      icon: Sparkles,
      title: "Untapped Talent",
      description:
        "A generation of young Syrians eager to build careers in cybersecurity, lacking access to training and opportunities.",
    },
  ];

  const objectives = [
    {
      icon: Users,
      title: "Enable & Empower People",
      description:
        "Raise awareness and build cybersecurity skills among citizens, especially youth and women, through accessible training programs.",
    },
    {
      icon: TrendingUp,
      title: "Engage & Employ Talent",
      description:
        "Create pathways for Syrian cybersecurity talent to gain experience, connect with opportunities, and contribute to rebuilding.",
    },
    {
      icon: Building2,
      title: "Enhance & Equip Institutions",
      description:
        "Strengthen cybersecurity capacity of public and private institutions through advisory services, tools, and partnerships.",
    },
  ];

  const programs = [
    {
      title: "Cyber Readiness Program",
      description:
        "Free training courses for beginners to advanced learners in cybersecurity fundamentals, threat detection, and incident response.",
    },
    {
      title: "Women in Cyber Initiative",
      description:
        "Dedicated programs to increase female participation in cybersecurity through mentorship, scholarships, and networking.",
    },
    {
      title: "Syria Cyber Forum",
      description:
        "Annual conference bringing together experts, practitioners, and policymakers to discuss Syria's digital security challenges.",
    },
    {
      title: "Virtual Internship Program",
      description:
        "Remote internships connecting Syrian talent with international cybersecurity firms and organizations for hands-on experience.",
    },
    {
      title: "Public Sector Advisory",
      description:
        "Technical assistance to government agencies on cybersecurity policy, strategy, and implementation of security measures.",
    },
    {
      title: "Critical Sectors Protection",
      description:
        "Specialized support for healthcare, education, and humanitarian organizations to secure their digital operations.",
    },
  ];

  const demographics = [
    {
      icon: Users,
      title: "Youth & Students",
      description: "Next generation of cybersecurity professionals",
    },
    {
      icon: Award,
      title: "Women",
      description: "Breaking barriers in tech and security",
    },
    {
      icon: Building2,
      title: "Public Institutions",
      description: "Government agencies and civil services",
    },
    {
      icon: Globe,
      title: "SMEs & Startups",
      description: "Private sector digital transformation",
    },
    {
      icon: Target,
      title: "Diaspora",
      description: "Syrian professionals contributing from abroad",
    },
  ];

  const team = [
    { initials: "RK", name: "Raed Khoury" },
    { initials: "YH", name: "Yara Hassan" },
    { initials: "ART", name: "Ahmad Al-Tamimi" },
    { initials: "LM", name: "Lina Mansour" },
    { initials: "OS", name: "Omar Saleh" },
    { initials: "NS", name: "Nour Sabbagh" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-foreground">
                Syria Digital Trust
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground hover:text-accent transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent/10 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Shield className="h-20 w-20 text-accent animate-glow" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Securing Syria's
              <br />
              <span className="text-accent">Digital Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              A non-political, volunteer-based international non-profit
              dedicated to empowering Syrians with cybersecurity knowledge,
              skills, and opportunities to protect and rebuild their digital
              society.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300"
                onClick={() =>
                  (window.location.href = "mailto:info@syriadigitaltrust.org")
                }
              >
                Get Involved
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To build a secure, resilient, and inclusive digital ecosystem in
                Syria by providing cybersecurity education, fostering talent, and
                supporting institutions in protecting their digital assets.
              </p>

              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Syria where every citizen, organization, and institution has the
                knowledge and tools to thrive safely in the digital age,
                contributing to a prosperous and secure society.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Our Values
              </h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-accent pl-4"
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Now?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The digital landscape in Syria presents urgent challenges and
              unique opportunities
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {whyNow.map((item, index) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-accent/50">
                  <CardContent className="p-8">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Strategic Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three interconnected pillars guiding our work
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                variants={fadeIn}
                className="relative"
              >
                <Card className="h-full bg-gradient-to-br from-card to-muted/30 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent/50">
                  <CardContent className="p-8">
                    <div className="bg-accent text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <objective.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Flagship Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive initiatives addressing Syria's cybersecurity needs
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.map((program, index) => (
              <motion.div key={program.title} variants={fadeIn}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-accent">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a diverse, inclusive cybersecurity community
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-5 gap-6"
          >
            {demographics.map((demo, index) => (
              <motion.div key={demo.title} variants={fadeIn}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:bg-accent/5">
                  <CardContent className="p-6">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <demo.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {demo.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {demo.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated volunteers committed to Syria's digital security
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeIn}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-accent/50 transition-shadow duration-300">
                  <span className="text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <p className="font-semibold text-foreground">{member.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Together, we can build a secure digital future for Syria
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                title: "Partner",
                description:
                  "Collaborate on programs and initiatives to amplify impact",
              },
              {
                title: "Sponsor",
                description:
                  "Support our mission through financial or in-kind contributions",
              },
              {
                title: "Support",
                description:
                  "Volunteer your time, expertise, or spread the word",
              },
            ].map((item, index) => (
              <motion.div key={item.title} variants={fadeIn}>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/80 mb-6">{item.description}</p>
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                      onClick={() =>
                        (window.location.href =
                          "mailto:info@syriadigitaltrust.org")
                      }
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold text-foreground">
                Syria Digital Trust
              </span>
            </div>

            <div className="flex items-center space-x-6 text-muted-foreground">
              <a
                href="mailto:info@syriadigitaltrust.org"
                className="hover:text-accent transition-colors flex items-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>info@syriadigitaltrust.org</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Syria Digital Trust. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
