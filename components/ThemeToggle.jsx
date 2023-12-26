'use client';

import { useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const themes = {
  winter: 'winter',
  night: 'night',
};
const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.winter);

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.night : themes.winter;
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      className='btn btn-sm cursor-pointer btn-outline '
      onClick={toggleTheme}
    >
      {theme === themes.winter ? (
        <BsMoonFill className='h-4 w-4 ' />
      ) : (
        <BsSunFill className='h-4 w-4 ' />
      )}
    </button>
  );
};

export default ThemeToggle;
