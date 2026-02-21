import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useState } from "react";
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  AcademicCapIcon,
  MegaphoneIcon
} from "@heroicons/react/24/outline";

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const services = [
    {
      title: "Lead Generation",
      icon: ChartBarIcon,
      desc: "High-quality targeted leads to scale your sales pipeline."
    },
    {
      title: "Website Development",
      icon: GlobeAltIcon,
      desc: "Modern, responsive and high-performance business websites."
    },
    {
      title: "Web Application Development",
      icon: CodeBracketIcon,
      desc: "Custom SaaS, dashboards and scalable web applications."
    },
    {
      title: "Social Media Management",
      icon: DevicePhoneMobileIcon,
      desc: "Professional branding and social growth strategies."
    },
    {
      title: "Digital Marketing",
      icon: MegaphoneIcon,
      desc: "SEO, paid ads and growth marketing campaigns."
    },
    {
      title: "Training & Development Camp",
      icon: AcademicCapIcon,
      desc: "Real-time full stack training with live project experience."
    }
  ];

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <Sidebar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <div className="flex-1 flex flex-col">
        <Topbar setIsOpen={setIsOpen} darkMode={darkMode} />

        <div className="p-6 md:p-12 space-y-20">

          {/* ================= HERO ================= */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              JSTUDIO & ONLINE CODERS
            </h1>
            <p className="text-lg opacity-70">
              We design, develop and deliver powerful digital solutions
              that help businesses grow and succeed in the modern world.
            </p>
          </div>

          {/* ================= MISSION ================= */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="opacity-70">
                To empower startups and businesses with scalable technology
                solutions, creative branding and smart digital marketing.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="opacity-70">
                To become a leading digital solutions company delivering
                innovation, education and enterprise-level development.
              </p>
            </div>
          </div>

          {/* ================= SERVICES GRID ================= */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Services
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300"
                  >
                    <Icon className="w-10 h-10 text-indigo-600 mb-6" />
                    <h3 className="text-xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="opacity-70 text-sm">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= TRAINING CAMP ================= */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              Professional Training Camps
            </h2>
            <p className="max-w-3xl mx-auto opacity-90">
              We conduct intensive training programs in Web Development,
              Full Stack Development, and real-time project-based learning.
              Perfect for students and aspiring developers.
            </p>
          </div>

          {/* ================= TESTIMONIALS ================= */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  text: "JSTUDIO built our website professionally and delivered beyond expectations.",
                  name: "Business Owner"
                },
                {
                  text: "Their lead generation services increased our sales conversions significantly.",
                  name: "Marketing Agency"
                },
                {
                  text: "Excellent mentorship and hands-on training experience.",
                  name: "Student"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                >
                  <p className="italic mb-4">“{item.text}”</p>
                  <p className="font-semibold text-sm opacity-70">
                    — {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

    {/* ================= CONTACT CTA ================= */}
<div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl text-center">

  {/* Background Glow Effect */}
  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

  <div className="relative z-10 space-y-6">

    <h2 className="text-3xl md:text-4xl font-extrabold">
      Let’s Build Something Amazing Together 🚀
    </h2>

    <p className="max-w-2xl mx-auto text-lg opacity-90">
      Need leads, website, web app, branding or social media growth?
      Talk to our experts today and scale your business faster.
    </p>
<p className="text-yellow-300 font-semibold">
  ⚡ Limited slots available for new projects this month!
</p>
    {/* Contact Info */}
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">

      {/* Call Button */}
      <a
        href="tel:9380334317"
        className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300"
      >
        📞 Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919380334317"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300"
      >
        💬 WhatsApp Us
      </a>

      {/* Email Button */}
      <a
        href="mailto:vinodjayasudha@gmail.com"
        className="bg-black text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition duration-300"
      >
        📧 Email Us
      </a>

    </div>

    {/* Location */}
    <p className="mt-6 text-sm opacity-80">
      📍 Aranthangi, Tamil Nadu
    </p>

  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Services;