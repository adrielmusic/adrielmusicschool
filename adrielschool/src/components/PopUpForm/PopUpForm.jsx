import { useState, useEffect } from 'react';

export default function SubscriptionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Check if user is already subscribed
    const isSubscribed = localStorage.getItem('isSubscribed');

    if (!isSubscribed) {
      // 2. Start 30-second timer ONLY if not subscribed
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for your Node.js API call goes here
    
    // 3. Mark as subscribed in localStorage
    localStorage.setItem('isSubscribed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
        >
          ✕
        </button>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get 20% Off!</h3>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter and save on your first order.</p>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <input 
              required
              type="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            />
            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transition-transform active:scale-95"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
