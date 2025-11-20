/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                audiowide: ["Audiowide", "sans-serif"],
                sans: ['ui-sans-serif', 'system-ui'],
                nunito: ['Nunito Sans', 'system-ui'],
            },
            colors: {

                brand: "rgb(var(--brand) / <alpha-value>)",

                mint: {
                    50: "#f6fffb",
                    500: "#34d399",
                },
            },
            spacing: {
                128: "32rem",
            },

            screens: {
                "3xl": "1600px",
            },
        },
    },


    plugins: [

    ],
};
