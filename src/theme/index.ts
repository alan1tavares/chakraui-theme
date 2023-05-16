// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import typography from './typography'

const theme = extendTheme({
    fonts: {
        heading: typography.font,
        body: typography.font,
    },

    textStyles: {
        displayLarge: typography.displayLarge,
        displayMedium: typography.displayMedium,
        displaySmall: typography.displaySmall,

        headlineLarge: typography.headlineLarge,
        headlineMedium: typography.headlineMedium,
        headlineSmall: typography.headlineSmall,

        titleLarge: typography.titleLarge,
        titleMedium: typography.titleMedium,
        titleSmall: typography.titleSmall,

        labelLarge: typography.labelLarge,
        labelMedium: typography.labelMedium,
        labelSmall: typography.labelSmall,

        bodyLarge: typography.bodyLarge,
        bodyMedium: typography.bodyMedium,
        bodySmall: typography.bodySmall,
    },

    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
        primary: {
            50: "#FFF6F6",
            100: "#FFE6E5",
            200: "#FFD5D5",
            300: "#FFC5C4",
            400: "#FFB4B4",
            500: '#FFA4A3',
            600: '#D18686',
            700: '#A36968',
            900: '#472E2E'
        },
    },
    components: {
        Button: {
            baseStyle: {
                _hover: {
                    color: "white",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
                },
                _focus: {
                    color: "primary.900",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)"
                },
                _active: {
                    boxShadow: "none",
                }
            },
            variants: {
                solid: {
                    color: 'primary.900',
                    borderRadius: '16px',
                    ...typography.labelLarge,
                }
            },

            sizes: {
                md: {
                    px: 6,
                }
            },

            defaultProps: {
                colorScheme: 'primary',
                sizes: 'md',
            },
        },
    },
})

export default theme