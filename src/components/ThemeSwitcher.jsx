import { useState } from 'react';
import { useTheme, themes } from '../context/ThemeContext';

const themeColors = {
  gold: '#FFC526',
  green: '#4CAF50',
  red: '#E53935',
  blue: '#42A5F5',
  white: '#F5F5F0',
  black: '#1A1A1A',
};

export default function ThemeSwitcher() {
  const { themeName, setThemeName } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-switcher">
      {/* Palette */}
      {open && (
        <div className="theme-palette animate-fade-in">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => {
                setThemeName(key);
                setOpen(false);
              }}
              className={`theme-dot ${themeName === key ? 'active' : ''}`}
              style={{
                background: themeColors[key],
                color: key === 'white' || key === 'gold' ? '#333' : '#fff',
              }}
              title={theme.name}
            >
              {themeName === key ? '✓' : ''}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="theme-btn"
        title="Change Color Theme"
      >
        🎨
      </button>
    </div>
  );
}
