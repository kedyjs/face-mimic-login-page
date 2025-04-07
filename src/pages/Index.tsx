
import React from 'react';
import FacebookLogo from '@/components/FacebookLogo';
import FacebookLoginForm from '@/components/FacebookLoginForm';
import FacebookFooter from '@/components/FacebookFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-facebook-grey">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center lg:mt-10">
          {/* Left side - Logo and tagline */}
          <div className="max-w-md lg:mt-[-6rem]">
            <div className="flex justify-center lg:justify-start mb-4">
              <FacebookLogo />
            </div>
            <h2 className="text-2xl lg:text-3xl text-center lg:text-left text-facebook-text mb-6">
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          
          {/* Right side - Login form */}
          <div className="max-w-md w-full">
            <FacebookLoginForm />
            
            <p className="text-center mt-6 text-sm">
              <a href="#" className="font-bold hover:underline">Create a Page</a> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <FacebookFooter />
      </div>
    </div>
  );
};

export default Index;
