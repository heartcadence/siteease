import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-slate-50 py-16 sm:py-24" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="pricing-heading" className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Choose the level of service that fits your business. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {/* Essential Plan */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900">Essential</h3>
            <div className="mt-4 flex items-baseline text-slate-900">
              <span className="text-5xl font-extrabold tracking-tight">$49</span>
              <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
            </div>
            <ul className="mt-8 space-y-4 flex-1">
              {['Secure Cloud Hosting', 'Domain Management', 'Daily Backups', 'Quarterly Content Updates', 'Standard Support'].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="flex-shrink-0 w-5 h-5 text-primary-600 mr-3 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="outline" fullWidth onClick={() => {}}>Start Essential</Button>
            </div>
          </div>

          {/* Hassle-Free Pro Plan */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-primary-600 p-8 flex flex-col relative transform scale-100 md:scale-105 z-10">
            <div className="absolute top-0 right-0 -mt-4 mr-4">
              <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Hassle-Free Pro</h3>
            <div className="mt-4 flex items-baseline text-slate-900">
              <span className="text-5xl font-extrabold tracking-tight">$99</span>
              <span className="ml-1 text-xl font-medium text-slate-500">/mo</span>
            </div>
            <ul className="mt-8 space-y-4 flex-1">
              {['Everything in Essential', 'Priority Hosting Tier', 'Real-time Security Monitoring', 'Monthly Content Updates', 'Priority Email & Phone Support'].map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="flex-shrink-0 w-5 h-5 text-primary-600 mr-3 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="primary" fullWidth onClick={() => {}}>Go Hassle-Free</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};