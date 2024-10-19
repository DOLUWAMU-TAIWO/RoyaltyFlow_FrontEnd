module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  theme: {
    extend: {
      transitionProperty: {
        'scale': 'transform',
      },
      colors: {
        'blue-800': '#1E3A8A', // Override to make color look consistent in dark mode
        'blue-600': '#2563EB',
        'gray-300': '#D1D5DB',
        'gray-800': '#1F2937',
      },
      maxWidth: {
        'container': '90%', // Limit maximum width for container-like elements
      },
    },
  },
  plugins: [],
};
