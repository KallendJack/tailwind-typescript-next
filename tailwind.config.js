/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
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
            colors: {},
            padding: {
                sm: '4rem',
                md: '6rem',
                lg: '10rem',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
