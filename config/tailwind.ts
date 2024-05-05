import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "curious-blue": "#288FBD",
        "bahama-blue": "#006897",
        "tropaz-blue": "#2B5895",
        "stratos-blue": "#000C3F",
        "salem-green": "#099343",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        maven: ["Maven Pro", "sans-serif"],
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
