/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px"
      },
      screens: {
        xs:  "320px",
        sm:  "375px",
        sml: "500px",
        md:  "667px",
        mdl: "768px",
        lg:  "960px",
        lgl: "1024px",
        xl:  "1280px",
      },
      fontFamily: {
        title_font: "Roboto",
        body_font: "Poppins",
      },
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#FEBD69",
        white_text: "#FFFFFF",
        light_text: "#CCCCCC",
        quantity_box: "#F0F2F2",
        footer_bottom: "#131A22",
      },
      boxShadow: {
        amazon_input: "0px 0px 3px 2px rgb(228 121 17 / 50%)",
      }
    },
  },
  plugins: [],
}
