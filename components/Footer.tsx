import React from 'react';
import { Hexagon } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Branding Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-primary-600 mb-6">
              <Hexagon className="h-6 w-6 stroke-[2]" aria-hidden="true" />
              <span className="font-bold text-lg tracking-tight text-slate-900">SiteEase</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Empowering small businesses with managed website solutions. We handle the tech, you handle the business.
            </p>
          </div>
          
          {/* Service Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wide">Service</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#features" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Domain Checker</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Hosting Status</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wide">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-primary-600 transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} SiteEase. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Designed with accessibility in mind.
          </p>
        </div>
      </div>
    </footer>
  );
};