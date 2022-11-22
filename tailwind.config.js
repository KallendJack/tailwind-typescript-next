/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                default: '1rem',
                md: '2rem',
            },
        },
        fontFamily: {
            primary: ['Montserrat', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#001126',
                primaryGradientEnd: '#00204F',
                secondary: '#F2652C',
                secondaryGradientEnd: '#FF4900',
                tertiary: '#03BFB5',
                quaternary: '#7F8FA7',
                quaternaryGradientEnd: '#A4A9BE',
                grey: '#C9CBD8',
                cardGradientStart: '#00204f',
                cardGradientEnd: '#004869',
            },
            padding: {
                sm: '4rem',
                md: '6rem',
                lg: '10rem',
            },
            boxShadow: {
                default: '0 6px 12px 0 rgba(0,17,38,0.12)',
                defaultHover: '0 12px 24px 0 rgba(0,0,0,0.12)',
                button: '0 12px 24px 0 rgba(0,0,0,0.12)',
            },
            borderRadius: {
                default: '0.625rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
