
import React from 'react';

const FacebookMobileLogo: React.FC = () => {
  return (
    <div className="flex justify-center">
      <svg className="h-16 w-16 text-facebook-blue" viewBox="0 0 48 48" fill="currentColor">
        <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/>
        <path d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" fill="#fff"/>
      </svg>
    </div>
  );
};

export default FacebookMobileLogo;
