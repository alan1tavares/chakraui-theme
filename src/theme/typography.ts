
interface Typography {
    lineHeight: string;
    fontSize: string;
    letterSpacing: string;
    fontWeight: string;
}

const displayLarge: Typography = {
    fontSize: "3.5625rem",
    fontWeight: "400",
    lineHeight: "4rem",
    letterSpacing: "-0.015625rem",
}

const displayMedium: Typography = {
    fontSize: "2.8125rem",
    fontWeight: "400",
    lineHeight: "3.25rem",
    letterSpacing: "0rem",
}

const displaySmall: Typography = {
    fontSize: "2.25rem",
    fontWeight: "400",
    lineHeight: "2.75rem",
    letterSpacing: "0rem",
}

export default { displayLarge, displayMedium, displaySmall };