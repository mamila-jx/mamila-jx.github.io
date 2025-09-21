    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Chivo', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
            code: ['JetBrains Mono', 'monospace']
          },
          colors: {
            'cyber-bg': '#121212',
            'cyber-surface': '#1e1e1e',
            'cyber-text': '#eaeaea',
            'cyber-muted': '#9CA3AF',
            'cyber-accent': '#00adb5',
            'cyber-accentHover': '#00e5ff',
            'cyber-border': '#2a2a2a'
          },
          boxShadow: {
            'glow-cyan': '0 0 8px rgba(0, 229, 255, 0.35), 0 0 20px rgba(0, 229, 255, 0.1)'
          }
        }
      }
    }