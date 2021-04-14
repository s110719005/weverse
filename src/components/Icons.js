import React from "react";

export function CartIcon2({size}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
    >
      <path fill="none" stroke="#ffffff" strokeLinecap="square" strokeWidth="1.5" d="M20,4 L24,16 M12,4 L8,16 M3,12 L29,12 C28.3333333,22 26.3333333,27 23,27 C18,27 14,27 9,27 C5.66666667,27 3.66666667,22 3,12 Z"/>
    </svg>
  );
}
export function CartIcon({size}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={size} 
      width={size} 
      fill="#000000">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );
}




