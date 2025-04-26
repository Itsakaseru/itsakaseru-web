type color =
  "cocoa" |
  "white" |
  "dayker" |
  "lime" |
  "reboot" |
  "orange" |
  "chocolate" |
  "cloud" |
  "lavender" |
  "cyan" |
  "rose" |
  "matt-purple";

type shade =
  "dark" |
  "default" |
  "light" |
  "white";

type colorType =
  "background" |
  "gradient" |
  "outline" |
  "text";

/*
  Function to return tailwindcss color classes, shades are optional, and not all shades are available for every color
  change this function if you want to add more shades to a color
*/
export function getColorClass(type: colorType, color: color, shade: shade = "default") {
  switch (type) {
    case "background":
      if (shade === "dark") return bgColorsDark[color];
      else return bgColorsWhite[color];

    case "gradient":
      return gradientColors[color];

    case "outline":
      return outlineColorsLight[color];

    case "text":
      return textColorsDark[color];
  }
}

const bgColorsDark = {
  cocoa:         "bg-cocoa-dark",
  white:         "bg-white-dark",
  dayker:        "bg-dayker-dark",
  lime:          "bg-lime-dark",
  reboot:        "bg-reboot-dark",
  orange:        "bg-orange-dark",
  chocolate:     "bg-chocolate-dark",
  cloud:         "bg-cloud-dark",
  lavender:      "bg-lavender-dark",
  cyan:          "bg-cyan-dark",
  rose:          "bg-rose-dark",
  "matt-purple": "bg-matt-purple-dark",
};

const bgColorsWhite = {
  cocoa:         "bg-cocoa-white",
  white:         "bg-white-white",
  dayker:        "bg-dayker-white",
  lime:          "bg-lime-white",
  reboot:        "bg-reboot-white",
  orange:        "bg-orange-white",
  chocolate:     "bg-chocolate-white",
  cloud:         "bg-cloud-white",
  lavender:      "bg-lavender-white",
  cyan:          "bg-cyan-white",
  rose:          "bg-rose-white",
  "matt-purple": "bg-matt-purple-white",
};

const textColorsDark = {
  cocoa:         "text-cocoa-dark",
  white:         "text-white-dark",
  dayker:        "text-dayker-dark",
  lime:          "text-lime-dark",
  reboot:        "text-reboot-dark",
  orange:        "text-orange-dark",
  chocolate:     "text-chocolate-dark",
  cloud:         "text-cloud-dark",
  lavender:      "text-lavender-dark",
  cyan:          "text-cyan-dark",
  rose:          "text-rose-dark",
  "matt-purple": "text-matt-purple-dark",
};

const outlineColorsLight = {
  cocoa:         "outline-cocoa-light",
  white:         "outline-white",
  dayker:        "outline-dayker",
  lime:          "outline-lime",
  reboot:        "outline-reboot",
  orange:        "outline-orange",
  chocolate:     "outline-chocolate",
  cloud:         "outline-cloud",
  lavender:      "outline-lavender",
  cyan:          "outline-cyan",
  rose:          "outline-rose",
  "matt-purple": "outline-matt-purple",
};

const gradientColors = {
  cocoa:         "from-cocoa to-cocoa-light",
  white:         "from-white to-white-light",
  dayker:        "from-dayker to-dayker-light",
  lime:          "from-lime to-lime-light",
  reboot:        "from-reboot to-reboot-light",
  orange:        "from-orange to-orange-light",
  chocolate:     "from-chocolate to-chocolate-light",
  cloud:         "from-cloud to-cloud-light",
  lavender:      "from-lavender to-lavender-light",
  cyan:          "from-cyan to-cyan-light",
  rose:          "from-rose to-rose-light",
  "matt-purple": "from-matt-purple to-matt-purple-light",
};

