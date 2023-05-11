// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import typography from './typography'

const theme = extendTheme({
    textStyles: {
        displayLarge: typography.displayLarge,
        displayMedium: typography.displayMedium,
        displaySmall: typography.displaySmall,

        headlineLarge: typography.headlineLarge,
        headlineMedium: typography.headlineMedium,
        headlineSmall: typography.headlineSmall,
    },

    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
        primary: {
            500: '#FFA4A3',
            600: '#D18686',
            700: '#A36968',
            900: '#472E2E'
        },
    },
    components: {
        Button: {
            variants: {
                solid: {
                    color: 'primary.900',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 4px rgba(64, 41, 41, 0.25)',
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