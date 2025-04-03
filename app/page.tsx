'use client';

import React, { useState } from 'react';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('home');

  return (
    <main className="min-h-screen flex">
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <MainContent selectedCategory={selectedCategory} />
    </main>
  );
}
