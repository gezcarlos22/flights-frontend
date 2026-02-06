'use client';

import { useState } from 'react';
import Image from 'next/image';
import InputField from './InputField';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simular verificación (en realidad es hardcoded)
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        onLogin(username, password);
      } else {
        setError('Incorrect username or password');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 bg-[url(/assets/fondo1.jpg)] bg-cover px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Logo / Title */}
          <div className="text-center mb-8">
            <Image 
              src="/assets/LOGO2.png" 
              alt="Flight On Time" 
              width={200} 
              height={200} 
              className="mx-auto"
            />
            <p className="text-gray-600 font-bold text-sm sm:text-base">AI-powered flight prediction</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-xs sm:text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <InputField
                label="Username"
                type="text"
                value={username}
                onChange={setUsername}
                placeholder="Enter your username"
              />
            </div>

            <div>
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={setPassword}
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition duration-200 text-sm sm:text-base"
            >
              {loading ? 'Verifying...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-xs text-gray-600 mb-3">Demo Credentials:</p>
            <div className="bg-gray-50 rounded p-3 text-center">
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                <span className="font-semibold">Username:</span> admin
              </p>
              <p className="text-xs sm:text-sm text-gray-700">
                <span className="font-semibold">Password:</span> 1234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
