module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        // min-width:
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'sidebar-breakpoint': {max: '768px'},
        'full-hd-bp': {min: '1921px'},
      },
      fontFamily: {inter: ['Inter', 'sans-serif']},
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(88% 50% at 50% 50%, #286497 0%, rgba(229, 253, 85, 0.00) 97.44%)',
        'account-panel-gradient':
          'linear-gradient(180deg, #0E1012 0%, #0E1012 0.01%, rgba(14, 16, 18, 0.00) 100%)',
      },
      borderRadius: {
        20: '20px',
      },
      colors: {
        'l-50': 'rgba(255,255,255,.05)',
        'l-100': 'rgba(255,255,255,.1)',
        'l-200': 'rgba(255,255,255,.2)',
        'l-300': 'rgba(255,255,255,.3)',
        'l-400': 'rgba(255,255,255,.4)',
        'l-500': 'rgba(255,255,255,.5)',
        'l-600': 'rgba(255,255,255,.6)',
        'l-800': 'rgba(255,255,255,.8)',
        'hover-link': '#26DDFF',
        dark: '#0E1012',
        'd-800': 'rgba(0,0,0,.8)',
        'd-900': 'rgba(0,0,0,.9)',
        pink: '#FD5573',
        green: {
          200: '#286497',
          400: '#76ED00',
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.inter'),
              fontWeight: '700',
              color: theme('colors.white'),
            },
            h2: {
              marginTop: theme('spacing.16'),
              marginBottom: theme('spacing.12'),
              fontSize: '2.5rem',
              lineHeight: '1.2',
            },
            'h2:first-child': {
              marginTop: '0',
            },
            h3: {
              marginTop: theme('spacing.9'),
              marginBottom: theme('spacing.4'),
              fontSize: theme('fontSize.2xl'),
              lineHeight: '1.5',
            },
            p: {
              color: 'rgba(255, 255, 255, 0.60)',
              fontSize: theme('fontSize.base'),
            },
            a: {
              color: theme('colors.white'),
              textDecoration: 'underline',
            },
            'a:hover': {
              textDecoration: 'none',
            },
            img: {
              width: '100%',
              height: '312px',
              borderRadius: theme('borderRadius.lg'),
              objectFit: 'cover',
            },
            video: {
              width: '100%',
              height: '312px',
              marginBottom: '0',
              borderRadius: theme('borderRadius.lg'),
              objectFit: 'cover',
            },
            figCaption: {
              textAlign: 'center',
              fontSize: theme('fontSize.xs'),
              lineHeight: theme('lineHeight.5'),
              color: 'rgba(255, 255, 255, 0.60)',
            },
            ul: {
              marginLeft: theme('spacing.6'),
              color: 'rgba(255, 255, 255, 0.60)',
              listStyleType: 'disc',
            },
            ol: {
              marginLeft: theme('spacing.6'),
              color: 'rgba(255, 255, 255, 0.60)',
              listStyleType: 'decimal',
              listStyleColor: '#fff',
            },
            'li::marker': {
              color: theme('colors.white'),
            },
            li: {
              marginBottom: theme('spacing.6'),
            },
            'strong, b': {
              color: theme('colors.white'),
            },
          },
        },
        sm: {
          css: {
            fontSize: theme('fontSize.base'),
            h2: {
              fontSize: theme('fontSize.3xl'),
              lineHeight: '1',
              letterSpacing: '-0.06px',
              marginBottom: theme('spacing.12'),
            },
            'h2:first-child': {
              marginTop: '0',
            },
            h3: {
              fontSize: '1.625rem',
              marginBottom: theme('spacing.4'),
              letterSpacing: '-0.052px',
              lineHeight: '1.2',
            },
            p: {
              fontSize: theme('fontSize.sm'),
              lineHeight: '1.5rem',
              fontWeight: '400',
            },
            'img, video': {
              height: '224px',
            },
            figCaption: {
              fontSize: theme('fontSize.xs'),
              lineHeight: theme('lineHeight.5'),
            },
            'ul, ol': {
              fontSize: theme('fontSize.sm'),
              lineHeight: theme('lineHeight.6'),
            },
            li: {
              marginBottom: theme('spacing.6'),
            },
            'li:last-child': {
              marginBottom: '0',
            },
          },
        },
      }),
      animation: {
        shake: 'shake 1s linear 1',
      },
      keyframes: {
        shake: {
          '0%': {transform: 'translateX(0)'},
          '10%, 90%': {transform: 'translateX(-1rem)'},
          '20%, 80%': {transform: 'translateX(1rem)'},
          '30%, 50%, 70%': {transform: 'translateX(-1rem)'},
          '40%, 60%': {transform: 'translateX(1rem)'},
          '100%': {transform: 'translateX(0)'},
        },
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
