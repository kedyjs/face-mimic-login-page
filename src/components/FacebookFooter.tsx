
import React from 'react';

const languages = [
  "English (UK)", "Français (France)", "العربية", "Español", "Português (Brasil)", 
  "Italiano", "Deutsch", "हिन्दी", "中文(简体)", "日本語"
];

const links = [
  "Sign Up", "Log In", "Messenger", "Facebook Lite", "Watch", "Places", "Games", "Marketplace", 
  "Meta Pay", "Meta Store", "Meta Quest", "Instagram", "Threads", "Fundraisers", "Services", 
  "Voting Information Centre", "Privacy Policy", "Privacy Centre", "Groups", "About", 
  "Create ad", "Create Page", "Developers", "Careers", "Cookies", "AdChoices", 
  "Terms", "Help", "Contact uploading and non-users"
];

const FacebookFooter: React.FC = () => {
  return (
    <footer className="mt-10 px-4 text-sm text-gray-600 max-w-[980px] mx-auto">
      <div className="flex flex-wrap gap-x-3 mb-2">
        {languages.map((language, index) => (
          <React.Fragment key={language}>
            <a href="#" className="hover:underline">
              {language}
            </a>
            {index < languages.length - 1 && <span>·</span>}
          </React.Fragment>
        ))}
        <button className="ml-1 border border-gray-300 px-2 py-0.5 rounded-md bg-gray-100 hover:bg-gray-200">
          +
        </button>
      </div>
      
      <div className="border-t border-gray-300 pt-3">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {links.map((link, index) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:underline">
                {link}
              </a>
              {index < links.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="mt-4">Meta © 2025</p>
      </div>
    </footer>
  );
};

export default FacebookFooter;
