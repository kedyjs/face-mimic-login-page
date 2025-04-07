
import React from 'react';
import { PlusCircle } from 'lucide-react';

const FacebookFooter = () => {
  const languages = [
    { name: 'Türkçe', active: true },
    { name: 'English (UK)', active: false },
    { name: 'Kurdî (Kurmancî)', active: false },
    { name: 'العربية', active: false },
    { name: 'Zaza', active: false },
    { name: 'Deutsch', active: false },
    { name: 'Русский', active: false },
    { name: 'Français (France)', active: false },
    { name: 'فارسی', active: false },
    { name: 'Español', active: false },
    { name: 'Português (Brasil)', active: false }
  ];

  const links = [
    'Kaydol', 'Giriş Yap', 'Messenger', 'Facebook Lite', 'Video', 'Meta Pay', 'Meta Mağazası',
    'Meta Quest', 'Ray-Ban Meta', 'Meta AI', 'Instagram', 'Threads',
    'Oy Kullanma Bilgi Merkezi', 'Gizlilik İlkesi', 'Gizlilik Merkezi', 'Hakkımızda', 'Reklam Oluştur',
    'Sayfa Oluştur', 'Geliştiriciler', 'Kariyer Olanakları', 'Çerezler', 'Ad Choices',
    'Koşullar', 'Yardım', 'Kişi Yükleme ve Hesabı Olmayan Kişiler'
  ];

  return (
    <footer className="bg-white pt-5 pb-2 px-4 md:px-8 lg:px-16 text-[#65676b] text-xs">
      <div className="max-w-[980px] mx-auto">
        {/* Languages */}
        <div className="flex flex-wrap gap-x-2 pb-2 border-b border-gray-200">
          {languages.map((lang, index) => (
            <a 
              key={index} 
              href="#" 
              className={`mb-1 ${lang.active ? 'text-[#65676b]' : 'text-[#737373] hover:underline'}`}
            >
              {lang.name}
            </a>
          ))}
          <button className="flex items-center mb-1 text-[#65676b] border border-gray-300 rounded hover:bg-gray-100 px-2">
            <PlusCircle size={12} className="mr-1" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-4 mt-2">
          {links.map((link, index) => (
            <a key={index} href="#" className="mb-1 text-[#737373] hover:underline">
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p>Meta © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default FacebookFooter;
