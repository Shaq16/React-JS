"use client";

import React from 'react';
import { AuthProvider } from './auth-context';
import { CartProvider } from './cart-context';

export function AppProvider({ children }.ReactNode }) {
  return (
    
      {children}</CartProvider>
    </AuthProvider>
  );
}
