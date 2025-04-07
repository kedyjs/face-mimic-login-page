
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";

const FacebookLoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // This is just for demo purposes - no actual authentication
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="E-posta veya Telefon Numarası"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 text-lg border border-gray-200 rounded-md"
          required
        />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 text-lg border border-gray-200 rounded-md pr-10"
            required
          />
          <button 
            type="button"
            className="absolute right-3 top-3 text-gray-500" 
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        
        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-semibold bg-facebook-blue hover:bg-blue-600"
        >
          Giriş Yap
        </Button>
        
        <div className="text-center">
          <a href="#" className="text-facebook-link text-sm hover:underline">
            Şifreni mi Unuttun?
          </a>
        </div>
        
        <Separator className="my-5" />
        
        <div className="flex justify-center">
          <Button 
            type="button" 
            className="px-4 py-3 text-white bg-[#42b72a] hover:bg-[#36a420] font-bold text-md"
          >
            Yeni hesap oluştur
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FacebookLoginForm;
