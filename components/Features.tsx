import React from 'react';
import { Server, Globe, ShieldCheck, RefreshCcw } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Managed Hosting',
    description: 'Blazing fast, secure, and reliable hosting on Canadian servers. We ensure 99.9% uptime so your customers can always find you.',
    icon: Server,
  },
  {
    title: 'Domain Registration',
    description: 'We handle the registration, DNS settings, and annual renewals. Your digital address is safe with us, with no administrative headaches.',
    icon: Globe,
  },
  {
    title: 'Daily Backups',
    description: 'Your data is precious. We perform automated off-site backups every single day, ensuring rapid disaster recovery if ever needed.',
    icon: ShieldCheck,
  },
  {
    title: 'Monthly Updates',
    description: 'Need to change a photo or update text? Just email us. We include monthly content updates on request to keep your site fresh.',
    icon: RefreshCcw,
  },
];

export const Features: React.FC = () => {
  return (
    <section 
      id="features" 
      aria-labelledby="features-heading"
      className="bg-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="features-heading" className="text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-4">
            The Hassle-Free Bundle
          </h2>
          <p className="text-xl text-slate-500">
            We don't just build websites; we keep them alive. Every SiteEase plan includes these four pillars of digital peace of mind.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-slate-50 rounded-lg px-6 pb-8 h-full border border-slate-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-slate-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};