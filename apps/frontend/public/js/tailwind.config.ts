import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
const svgToDataUri = require('mini-svg-data-uri')
const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const tailwindConfig = {
  darkMode: ['class'],
  content: {
    files: ['./src/**/*!(*.stories|*.spec|*.test).{ts,tsx,astro,md,mdx,html}']
  },
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      animation: {
        marquees: 'marquee var(--duration, 30s) linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        blob: 'blob 10s infinite',
        border: 'background ease infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'gradient 8s linear infinite',
        meteor: 'meteor 5s linear infinite',
        grid: 'grid 15s linear infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        flip: 'flip calc(var(--spark) * 2) infinite steps(2, end)',
        rotate: 'rotate var(--spark) linear infinite both',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
        ripple: 'ripple 3400ms ease infinite',
        line: 'line 2s linear infinite',
        shimmer: 'shimmer 8s infinite',
        'vert-move': '3s ease-in-out infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        orbit: 'orbit calc(var(--duration)*1s) linear infinite',
        backgroundPositionSpin: 'background-position-spin 3000ms infinite alternate'
      },
      keyframes: {
        marquees: {
          to: { transform: 'translateX(-50%)' }
        },
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)'
          },
          '25%': {
            transform: 'translate(20px, -50px) scale(1.1)'
          },
          '50%': {
            transform: 'translate(0, 20px) scale(1)'
          },
          '75%': {
            transform: 'translate(-20px, -15px) scale(0.9)'
          }
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)'
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)'
          }
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'background-position-spin': {
          '0%': { backgroundPosition: 'top center' },
          '100%': { backgroundPosition: 'bottom center' }
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0'
          }
        },
        'vert-move': {
          '0%': {
            transform: 'translateY(-5px)'
          },
          '50%': {
            transform: 'translateY(10px)'
          },
          '100%': {
            transform: 'translateY(-5px)'
          }
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        },
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        flip: {
          to: { rotate: '360deg' }
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)'
          }
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0)'
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)'
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)'
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)'
          }
        },
        ripple: {
          '0%, 100%': {
            transform: 'translate(-50%, -50%) scale(1)'
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(0.9)'
          }
        },
        slide: {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)'
          }
        },
        line: {
          '0%': { 'mask-position-x': '0%' },
          '100%': { 'mask-position-x': '100%' }
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        },
        shimmer: {
          '0%, 90%, 100%': {
            'background-position': 'calc(-100% - var(--shimmer-width)) 0'
          },
          '30%, 60%': {
            'background-position': 'calc(100% + var(--shimmer-width)) 0'
          }
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
          }
        },
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%'
          },
          '50%': {
            'background-position': '100% 100%'
          },
          to: {
            'background-position': '0% 0%'
          }
        }
      },
      backgroundImage: {
        'blue-yellow-gradient': 'linear-gradient(83.21deg, #3245FF 0%, #FFDC00 100%)',
        'blue-green-gradient': 'linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)',
        'red-pink-gradient': 'linear-gradient(66.77deg, #D83333 0%, #F041FF 100%)',
        'orange-yellow-gradient': 'linear-gradient(266.93deg, #F8E42E 0%, #FF7D54 100%)'
      },
      maxWidth: {
        prose: '70ch'
      },
      zIndex: {
        'white-button-fill': '-1',
        noise: '-2',
        grid: '-3',
        blur: '-4'
      },
      fontFamily: {
        sans: [...fontFamily.sans]
      },
      height: {
        18: '4.5rem'
      },
      spacing: {
        18: '4.5rem'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primarys: 'oklch(66.28% 0.24 151.4 / <alpha-value>)',
        secondarys: 'oklch(66.35% 0.299 7.04 / <alpha-value>)',
        tertiarys: 'oklch(65.49% 0.1937998046114747 239.2963644488785 / <alpha-value>)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [
    addVariablesForColors,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`
          })
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio')
  ]
} satisfies Config

export default tailwindConfig

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}
