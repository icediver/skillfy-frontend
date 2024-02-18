import plugin from "tailwindcss/plugin";

const primary = "#e30b13";

export const plugins = [
  // require("@tailwindcss/forms"),
  // require("@tailwindcss/aspect-ratio"),
  require("tailwindcss-animate"),
  plugin(({ addComponents, theme, addUtilities, addBase }) => {
    addComponents({
      ".btn-primary": {
        backgroundColor: primary,
        color: "#fff",
        borderRadius: "0.65rem",
        transition: "background-color .3s ease-in-out",
        "&:hover": {
          backgroundColor: "#ff0009",
        },
      },

      ".text-link": {
        textUnderlineOffset: "4",
        color: "rgba(255, 255, 255, .9)",
        transition: "text-decoration-color .3s ease-in-out",
        textDecorationLine: "underline",
        textDecorationColor: "rgba(255, 255, 255, 0.2)",
        "&:hover": {
          textDecorationColor: "rgba(255, 255, 255, 0.9)",
        },
      },

      ".air-block": {
        borderRadius: theme("borderRadius.layout"),
        backgroundColor: theme("colors.gray.950"),
        color: theme("colors.white"),
        boxShadow: theme("boxShadow.lg"),
      },
      ".border-solid-left": {
        "border-left": "1px solid var(--border-schedule)",
      },
      ".border-dashed-bottom": {
        "border-bottom": "1px dashed var(--border-schedule)",
      },
      ".border-dashed-top": {
        "border-top": "1px dashed var(--border-schedule)",
      },
    }),
      addUtilities({
        ".text-shadow": {
          textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
        },

        ".outline-border-none": {
          outline: "none",
          border: "none",
        },

        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },

        ".image-like-bg": {
          objectPosition: "center",
          objectFit: "cover",
          pointerEvents: "none",
        },
        ".scrolbar-hidden": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".transparent-panel": {
          "background-color": "rgba(9,10,10,0.15)",
          // "background-color": "rgba(0,1,13,0.65)",
          borderRadius: "0.75rem",
          "backdrop-filter": "blur(20px)",
        },
        ".container": {
          width: "1164px",
          margin: "0 auto",
        },
      });
  }),
];
