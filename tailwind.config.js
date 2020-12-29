module.exports = {
    purge: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: () => ({
                'background-pattern': "url('/static/images/Default.svg')"
            })
        },
        fontFamily: {
            advent: ['Advent Pro', 'Open Sans', 'ui-sans-serif'],
            open: ['Open Sans', 'ui-sans-serif']
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
