import { useTheme } from '../context/Theme/useTheme';
import { useEffect } from 'react';

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [setTheme]);

  const onToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isDark = theme === 'dark';

  return (
    <div
      onClick={onToggle}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isDark ? 'bg-green-500' : 'bg-gray-300'
      }`}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? 'translate-x-6' : ''
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
