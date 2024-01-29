import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "stratos-blue": "#000C3F",
        "curious-blue": "#288FBD",
        "bahama-blue": "#006897",
        "salem-green": "#099343",
        "tropaz-blue": "#2B5895",
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
};
