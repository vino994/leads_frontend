import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ChartBarIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-5 bg-white shadow-sm sticky top-0 z-50">

        <h1 className="text-2xl font-bold text-indigo-600">
          JSTUDIO
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/services" className="hover:text-indigo-600 transition">
            Services
          </Link>

          <Link to="/login" className="hover:text-indigo-600 transition">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              className="w-7 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="w-7 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Get Started
          </Link>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="text-center px-6 md:px-16 py-20 md:py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

        <h2 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
          Grow Your Business  
          <br className="hidden md:block" />
          With Smart Digital Solutions 🚀
        </h2>

        <p className="max-w-3xl mx-auto text-base md:text-lg opacity-90 mb-10">
          Lead Generation, Website Development, Web Applications,
          Branding & Digital Marketing — Everything Your Business Needs.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <Link
            to="/register"
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            🚀 Start Free Today
          </Link>

          <Link
            to="/login"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition"
          >
            🔐 Login to Dashboard
          </Link>

        </div>

        <p className="mt-8 text-sm opacity-80">
          No credit card required • Free 20 leads per month
        </p>

      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="px-6 md:px-16 py-16 text-center bg-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-10">
          Trusted By Growing Businesses
        </h3>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-bold text-indigo-600 mb-2">⚡ Fast Delivery</h4>
            <p className="opacity-70">
              Quick turnaround time without compromising quality.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-indigo-600 mb-2">💼 Professional Team</h4>
            <p className="opacity-70">
              Experienced developers & marketers.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-indigo-600 mb-2">📈 Business Growth Focus</h4>
            <p className="opacity-70">
              We build solutions that increase revenue.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-16 py-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-14">
          Our Core Services
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: ChartBarIcon, title: "Lead Generation" },
            { icon: GlobeAltIcon, title: "Website Development" },
            { icon: CodeBracketIcon, title: "Web Applications" },
            { icon: AcademicCapIcon, title: "Training Camps" }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg text-center hover:scale-105 hover:shadow-xl transition"
              >
                <Icon className="w-10 h-10 mx-auto text-indigo-600 mb-6" />
                <h4 className="font-bold">{item.title}</h4>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-20 px-6">

        <h3 className="text-3xl font-bold mb-6">
          Ready to Generate High Quality Leads?
        </h3>

        <p className="mb-10 opacity-90">
          Create your free account and start growing today.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <Link
            to="/register"
            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Get Started Free
          </Link>

          <a
            href="tel:9380334317"
            className="bg-green-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            📞 Call Now
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white text-center py-10 px-6">
        <h4 className="font-bold text-lg">JSTUDIO & ONLINE CODERS</h4>
        <p className="text-sm opacity-70 mt-2">
          Aranthangi | 9380334317 | vinodjayasudha@gmail.com
        </p>
      </footer>

    </div>
  );
}

export default Landing;