import React from 'react';
import { Button } from './Button';
import { CheckCircle, ArrowRight, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      aria-labelledby="hero-heading" 
      className="relative bg-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left">
            <h1 id="hero-heading" className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6 leading-tight">
              Your Professional Website, <span className="text-primary-600">Hassle-Free.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
              We build, host, and manage your online presence so you can focus on running your business. No technical skills required.
            </p>
            
            <div className="flex flex-row gap-4 mb-10">
              <Button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="gap-2">
                View Plans <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={() => {}}>
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>Fully Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>WCAG Accessible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-600" />
                <span>Mobile Optimized</span>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
            <div className="relative rounded-2xl bg-primary-50 p-8 sm:p-12 overflow-visible">
              
              {/* Abstract Browser Window */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 relative z-10">
                {/* Browser Toolbar */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                
                {/* Browser Content Skeleton */}
                <div className="p-6 grid gap-6">
                  {/* Header Area */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-24 h-4 bg-slate-200 rounded"></div>
                    <div className="flex gap-2">
                       <div className="w-12 h-3 bg-slate-100 rounded"></div>
                       <div className="w-12 h-3 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Hero Area */}
                  <div className="flex gap-6">
                    <div className="w-1/3 h-32 bg-slate-100 rounded-lg"></div>
                    <div className="w-2/3 space-y-3 py-2">
                      <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                      <div className="h-3 bg-slate-50 rounded w-full"></div>
                      <div className="h-3 bg-slate-50 rounded w-5/6"></div>
                      <div className="h-8 w-24 bg-primary-100 rounded mt-2"></div>
                    </div>
                  </div>

                  {/* Grid Area */}
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div className="h-20 bg-slate-50 rounded-lg"></div>
                    <div className="h-20 bg-slate-50 rounded-lg"></div>
                    <div className="h-20 bg-slate-50 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-8 sm:-right-8 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-4 border border-slate-100 z-20 max-w-xs animate-fade-in-up">
                <div className="flex-shrink-0 rounded-full bg-green-100 p-2">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Update Complete</p>
                  <p className="text-xs text-slate-500">Your monthly changes are live.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};