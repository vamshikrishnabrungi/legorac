import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const REGION_OPTIONS = ['EU', 'USA', 'India'];

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('EU');
  const [statusMessage, setStatusMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setStatusMessage('Please enter your work email.');
      return;
    }

    setStatusMessage('');
    navigate('/verify-otp', { state: { email } });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-xl space-y-16">
        <div className="flex items-center justify-end gap-3">
          <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Region</label>
          <select
            className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-slate-100"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            {REGION_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center space-y-10">
          <p className="font-serif text-5xl tracking-[0.3em] text-slate-900">NAYA AI</p>
          <form className="space-y-6 max-w-md mx-auto text-left" onSubmit={handleSubmit}>
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-600 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-500 focus:border-black focus:outline-none focus:ring-2 focus:ring-slate-100"
                placeholder="you@firm.com"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-2xl bg-black text-white hover:bg-gray-900 py-3 text-base font-semibold"
            >
              Continue
            </Button>
          </form>
          {statusMessage && <p className="text-sm text-slate-600">{statusMessage}</p>}
          <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
            By proceeding, you affirm your understanding and acceptance of our{' '}
            <span className="text-slate-600 font-medium">Privacy Policy</span> which delineate the
            rules and expectations governing your engagement with our services.
          </p>
        </div>

        <div className="text-center text-sm text-slate-500 space-y-2">
          <div className="flex items-center justify-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-slate-800 animate-pulse" />
            </span>
          </div>
          <button type="button" className="font-medium text-slate-700 hover:text-black">
            Need help signing in?
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
