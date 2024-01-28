import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "curious-blue": "#288FBD",
        "salem-green": "#099343",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
};
