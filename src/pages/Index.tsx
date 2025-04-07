
import React from 'react';
import FacebookLogo from '@/components/FacebookLogo';
import FacebookLoginForm from '@/components/FacebookLoginForm';
import FacebookFooter from '@/components/FacebookFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] flex flex-col">
      <div className="flex flex-grow items-center justify-center px-4 py-8 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[980px] w-full">
          {/* Left side - Logo and tagline */}
          <div className="lg:pr-8 lg:mr-8 mb-10 lg:mb-0 max-w-md">
            <div className="flex justify-center lg:justify-start mb-4">
              <FacebookLogo />
            </div>
            <h2 className="text-xl md:text-2xl text-center lg:text-left leading-7 lg:leading-8 text-[#1c1e21] px-8 md:px-0">
              Facebook tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.
            </h2>
          </div>
          
          {/* Right side - Login form */}
          <div className="md:min-w-[396px]">
            <FacebookLoginForm />
            
            <div className="text-center mt-6">
              <a href="#" className="font-bold text-sm">Sayfa oluştur</a> <span className="text-sm text-[#1c1e21]">ünlü biri, marka veya işletme için</span>
            </div>
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
