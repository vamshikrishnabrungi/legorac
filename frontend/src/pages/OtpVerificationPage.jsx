import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const createInitialDigits = () => ['', '', '', '', '', ''];
const SUCCESS_CODE = '123456';

const OtpVerificationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [digits, setDigits] = useState(createInitialDigits());
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    const sanitized = value.replace(/[^0-9]/g, '').slice(-1);
    setDigits((prev) => {
      const copy = [...prev];
      copy[index] = sanitized;
      return copy;
    });

    if (sanitized && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedDigits = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pastedDigits) return;

    const nextDigits = createInitialDigits();
    pastedDigits.split('').forEach((digit, idx) => {
      nextDigits[idx] = digit;
    });
    setDigits(nextDigits);

    const nextFocusIndex = Math.min(pastedDigits.length, inputRefs.current.length - 1);
    inputRefs.current[nextFocusIndex]?.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMessage('');
    setErrorMessage('');

    if (digits.some((digit) => digit === '')) {
      setErrorMessage('Please enter the full 6-digit code.');
      return;
    }

    const enteredCode = digits.join('');
    setIsVerifying(true);

    setTimeout(() => {
      if (enteredCode === SUCCESS_CODE) {
        setStatusMessage('Code accepted. Redirecting to your workspace...');
        setErrorMessage('');
        setTimeout(() => {
          navigate('/workspace', { replace: true, state: { email } });
        }, 600);
      } else {
        setErrorMessage('Incorrect code. Try again.');
        setIsVerifying(false);
      }
    }, 1200);
  };

  const handleResend = () => {
    setDigits(createInitialDigits());
    setStatusMessage('We just sent another code to your inbox.');
    setErrorMessage('');
    setIsVerifying(false);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-xl space-y-16">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate-400">
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-slate-500 hover:text-black font-medium tracking-normal"
          >
            ← Back to Login
          </button>
          <span>Secure verification</span>
        </div>

        <div className="text-center space-y-10">
          <p className="font-serif text-4xl tracking-[0.3em] text-slate-900">NAYA AI</p>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-900">Enter the code</p>
            <p className="text-sm text-slate-500">
              We sent a 6-digit code to <span className="font-medium text-slate-700">{email || 'your email'}</span>
            </p>
          </div>
          <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="flex justify-between gap-2" onPaste={handlePaste}>
              {digits.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => handleChange(event.target.value, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-white text-center text-xl font-semibold text-slate-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-slate-100"
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-400">For your security, this code expires in 10 minutes.</p>
            {errorMessage && <p className="text-sm text-rose-500">{errorMessage}</p>}
            <Button
              type="submit"
              disabled={isVerifying}
              className="w-full rounded-2xl bg-black text-white hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed py-3 text-base font-semibold flex items-center justify-center gap-2"
            >
              {isVerifying && (
                <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {isVerifying ? 'Verifying…' : 'Verify'}
            </Button>
          </form>
          {statusMessage && <p className="text-sm text-slate-600">{statusMessage}</p>}
          <button type="button" className="text-sm font-medium text-slate-700 hover:text-black" onClick={handleResend}>
            Resend code
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerificationPage;
