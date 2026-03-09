import React, { useState } from 'react';
import { EyeOff, Eye, FileEdit, CreditCard, FileSearch, Sprout } from 'lucide-react';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex font-sans text-gray-800 bg-white">
      {/* Left Side - Graphic */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#f4f4f4] overflow-hidden items-center justify-center">
        {/* Top Left Yellow Shape */}
        <div className="absolute top-0 left-0 w-64 h-20 bg-[#fdb813] rounded-br-full"></div>
        
        {/* Top Left Teal Circle Outline */}
        <div className="absolute top-32 left-48 w-24 h-24 border-[6px] border-[#4db6ac] rounded-full"></div>
        
        {/* Center Yellow Pill */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[80%] bg-[#fdb813] rounded-[300px] -rotate-12"></div>
        
        {/* Right Edge Blue Shape */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#005eab] rounded-full"></div>
        
        {/* Bottom Left Light Blue Shape */}
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-[#00a3e0] rounded-full"></div>
        
        {/* Bottom Right Blue Circle Outline */}
        <div className="absolute -bottom-32 right-16 w-96 h-96 border-[8px] border-[#005eab] rounded-full"></div>

        {/* Person Image Placeholder */}
        <div className="relative z-10 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-2xl bg-white">
           <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Happy person with laptop" 
              className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 bg-white">
        <div className="w-full max-w-[420px] space-y-8">
          
          {/* Logo */}
          <div className="flex items-center mb-12">
            <span className="text-[42px] font-bold text-[#005eab] tracking-tighter leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>BD</span>
            <div className="w-[28px] h-[28px] rounded-full border-[6px] border-[#fdb813] mx-1.5"></div>
            <span className="text-[34px] font-bold text-[#005eab] tracking-tight leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>online</span>
          </div>

          {/* Heading */}
          <h1 className="text-[28px] font-medium text-gray-800 mb-8">
            Welcome to BDO Online!
          </h1>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="username" className="block text-[13px] text-gray-700 mb-1.5">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005eab] focus:border-[#005eab] sm:text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[13px] text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005eab] focus:border-[#005eab] sm:text-sm pr-10 transition-colors"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-[100px] flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005eab] hover:bg-[#004a87] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005eab] transition-colors"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Links */}
          <div className="mt-10 space-y-5 text-[13px]">
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-800">
                Don't have Online Banking yet?{' '}
                <a href="#" className="font-medium text-[#005eab] hover:underline">
                  Sign up
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-800">Need help logging in?</p>
              <div className="flex flex-col space-y-1.5">
                <a href="#" className="text-[#005eab] hover:underline w-fit">
                  I'd like to get my username
                </a>
                <a href="#" className="text-[#005eab] hover:underline w-fit">
                  I'd like to reset my password
                </a>
              </div>
            </div>

            <div className="pt-1">
              <p className="text-gray-800">
                Need more information? Go{' '}
                <a href="#" className="font-medium text-[#005eab] hover:underline">
                  here
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Quick Links */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="grid grid-cols-4 gap-4">
              <QuickLink icon={<FileEdit className="h-5 w-5" strokeWidth={1.5} />} text="Apply Now" />
              <QuickLink icon={<CreditCard className="h-5 w-5" strokeWidth={1.5} />} text="Activate Credit Card" />
              <QuickLink icon={<FileSearch className="h-5 w-5" strokeWidth={1.5} />} text="Remit Status Inquiry" />
              <QuickLink icon={<Sprout className="h-5 w-5" strokeWidth={1.5} />} text="My Trust Investments" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function QuickLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a href="#" className="flex flex-col items-center group text-center">
      <div className="w-10 h-10 rounded-full bg-[#f0f7ff] flex items-center justify-center text-[#005eab] group-hover:bg-[#e0f0ff] transition-colors mb-2">
        {icon}
      </div>
      <span className="text-[11px] leading-tight text-[#005eab] group-hover:underline">
        {text}
      </span>
    </a>
  );
}
