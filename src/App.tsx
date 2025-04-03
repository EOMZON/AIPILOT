import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <MainContent selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
