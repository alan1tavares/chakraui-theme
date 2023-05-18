// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react';
import typography from './typography';
import color from './color';
import elevation from './elevation';
import Button from './Button';
import Input from './Input';
import FormLabel from './FormLabel';

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
        primary: color.primary,
    },

    shadows: {
        elevation: elevation
    },
    components: {
        Button,
        Input,
        FormLabel,
    },
})

export default theme