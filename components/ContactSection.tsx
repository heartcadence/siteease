import React from 'react';
import { Button } from './Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-900 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Left Column: Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
              Ready to simplify your web presence?
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Get started with SiteEase today. Fill out the form, and our onboarding specialist will contact you within 24 hours to begin your hassle-free journey.
            </p>
            
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-white">Email:</strong> support@siteease.ca
              </p>
              <p>
                <strong className="text-white">Hours:</strong> Mon-Fri, 9am - 5pm EST
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="block w-full rounded-md border-slate-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-3 border"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-md border-slate-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-3 border"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-slate-300 bg-slate-50 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-3 border resize-none"
                  placeholder=""
                />
              </div>

              <Button type="submit" fullWidth className="mt-2">
                Request Consultation
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};