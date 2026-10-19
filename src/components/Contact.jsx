import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-slate-800/80 bg-[#080d1a]"
      aria-label="Contact Information and Inquiry"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Build Something in the Cloud"
          description="I am open to Cloud Engineer internships, AWS/DevOps trainee roles, entry-level cloud support roles, and small cloud deployment projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-semibold text-white">
                Contact Details
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href={personalInfo.links.email}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-300 hover:text-[#FF9900] hover:border-[#FF9900]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email</div>
                    <div className="text-sm font-medium text-slate-200">{personalInfo.links.emailDisplay}</div>
                  </div>
                </a>

                {/* Phone */}
                {personalInfo.phone && (
                  <a
                    href={personalInfo.phoneLink}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-400">Phone</div>
                      <div className="text-sm font-medium text-slate-200">{personalInfo.phone}</div>
                    </div>
                  </a>
                )}

                {/* LinkedIn */}
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                    <div className="text-sm font-medium text-slate-200">priyansh-yadav-090a97350</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-600 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">GitHub</div>
                    <div className="text-sm font-medium text-slate-200">priyanshzx</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-medium text-slate-200">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400 leading-relaxed border-t border-slate-800">
                Current Status: Final-year BCA student (United University) actively preparing for AWS Cloud & DevOps engineering challenges.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Client-Side Validation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Client-side demo form &bull; Direct inquiries will be answered via email or LinkedIn
              </p>

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-3 animate-in fade-in"
                >
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Validation Successful
                  </div>
                  <p className="text-base text-white font-medium">
                    Thank you. This demo form is not connected to a backend yet.
                  </p>
                  <p className="text-xs text-emerald-400/90 font-mono">
                    Please reach out directly at{' '}
                    <a
                      href={personalInfo.links.email}
                      className="underline font-bold text-white hover:text-emerald-200"
                    >
                      {personalInfo.links.emailDisplay}
                    </a>{' '}
                    or via LinkedIn.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 hover:text-white border border-slate-800"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 uppercase font-mono tracking-wider mb-2">
                      Your Name <span className="text-[#FF9900]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/80 border text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 uppercase font-mono tracking-wider mb-2">
                      Your Email <span className="text-[#FF9900]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/80 border text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 uppercase font-mono tracking-wider mb-2">
                      Message <span className="text-[#FF9900]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Discuss an internship, entry-level opening, or project opportunity..."
                      className={`w-full px-4 py-3 rounded-lg bg-slate-950/80 border text-slate-100 placeholder-slate-400 text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[#FF9900] text-slate-950 hover:bg-[#e08800] transition-colors shadow-lg shadow-[#FF9900]/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Message (Validate)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
