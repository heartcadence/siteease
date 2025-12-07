import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('siteease-cookie-consent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('siteease-cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // For a real app, you would disable tracking scripts here
    localStorage.setItem('siteease-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      role="region" 
      aria-label="Cookie Consent"
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg p-4 z-50 transform transition-transform duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-600 text-sm">
          <p>
            We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
            <a href="#" className="underline ml-1 text-primary-600 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 rounded">
              Read our Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" onClick={handleDecline} className="text-sm py-2 px-4">
            Decline
          </Button>
          <Button onClick={handleAccept} className="text-sm py-2 px-4">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};