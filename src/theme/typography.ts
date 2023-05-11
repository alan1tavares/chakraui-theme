
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

const headlineLarge: Typography = {
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "2.5rem",
    letterSpacing: "0rem",
}

const headlineMedium: Typography = {
    fontSize: "1.75rem",
    fontWeight: "400",
    lineHeight: "2.25rem",
    letterSpacing: "0rem",
}

const headlineSmall: Typography = {
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "2rem",
    letterSpacing: "0rem",
}

const titleLarge: Typography = {
    fontSize: "1.375rem",
    fontWeight: "400",
    lineHeight: "1.75rem",
    letterSpacing: "0rem",
}

const titleMedium: Typography = {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.5rem",
    letterSpacing: "0.009375rem",
}

const titleSmall: Typography = {
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1.25rem",
    letterSpacing: "0.00625rem",
}

const labelLarge: Typography = {
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1.25rem",
    letterSpacing: "0.00625rem",
}

const labelMedium: Typography = {
    fontSize: "0.75rem",
    fontWeight: "500",
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
}

const labelSmall: Typography = {
    fontSize: "0.6875rem",
    fontWeight: "500",
    lineHeight: "1rem",
    letterSpacing: "0.03125rem",
}

export default {
    displayLarge, displayMedium, displaySmall,
    headlineLarge, headlineMedium, headlineSmall,
    titleLarge, titleMedium, titleSmall,
    labelLarge, labelMedium, labelSmall  
};