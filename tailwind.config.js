/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                base: "13px"
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"]
            },
            colors: {
                blue: {
                    "dark-grayish": "hsl(217, 19%, 35%)",
                    "dark-desaturated": "hsl(214, 17%, 51%)",
                    "grayish": "hsl(212, 23%, 69%)",
                    "light-grayish": "hsl(210, 46%, 95%)",
                },
                "white": "hsl(0,0%,100%)"
            }
        },
    },
    plugins: [],
}