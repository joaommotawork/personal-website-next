module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
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
