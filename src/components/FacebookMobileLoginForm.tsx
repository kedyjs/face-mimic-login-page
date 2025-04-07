
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

const FacebookMobileLoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // This is just for demo purposes - no actual authentication
  };

  return (
    <div className="w-full px-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Mobile number or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 text-base rounded-md"
          required
        />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 text-base rounded-md pr-10"
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
          className="w-full h-12 text-base font-semibold bg-facebook-blue hover:bg-blue-600 rounded-md"
        >
          Log in
        </Button>
        
        <div className="text-center">
          <a href="#" className="text-facebook-link text-sm hover:underline">
            Forgot password?
          </a>
        </div>
      </form>

      <div className="mt-16 mb-8">
        <Button 
          type="button" 
          variant="outline"
          className="w-full border border-facebook-blue text-facebook-blue hover:bg-transparent hover:text-facebook-blue font-semibold rounded-md py-2"
        >
          Create new account
        </Button>
      </div>
    </div>
  );
};

export default FacebookMobileLoginForm;
