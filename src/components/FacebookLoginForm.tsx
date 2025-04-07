
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
    <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Email address or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 text-lg border border-gray-200 rounded-md"
          required
        />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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
          className="w-full h-12 text-lg font-bold bg-facebook-blue hover:bg-blue-600"
        >
          Log In
        </Button>
        
        <div className="text-center">
          <a href="#" className="text-facebook-link text-sm hover:underline">
            Forgotten password?
          </a>
        </div>
        
        <Separator className="my-5" />
        
        <div className="flex justify-center">
          <Button 
            type="button" 
            className="px-4 py-3 text-white bg-facebook-green hover:bg-green-600 font-bold text-md"
          >
            Create New Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FacebookLoginForm;
