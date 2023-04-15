module.exports = {
    // darkMode: false, // or 'media' or 'class'
    content: [
        './pages/**/*.{html,js,vue}',
        './components/**/*.{html,js,vue}',
        './layouts/**/*.{html,js,vue}',
    ],
    theme: {
        extend: {
            fontFamily: {
              'm-plus-rounded-1c': ['"M PLUS Rounded 1c"', 'sans-serif']
            }
        },
        container: {
            center: true
        },
        screens: {
            'mobile': '480px',
            'tablet': '760px',
            'desktop': '1420px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}