import { defineStyleConfig } from "@chakra-ui/react";
import typography from "./typography";

const Button = defineStyleConfig({
    baseStyle: {
        ...typography.labelLarge,
        minH: '40px',
        borderRadius: '16px',
    },
    variants: {
        primarySolid: {
            backgroundColor: 'primary.500',
            color: 'primary.900',
            _hover: {
                backgroundColor: 'primary.100',
                boxShadow: "elevation.1",
            },
            _focus: {
                backgroundColor: 'primary.50',
                boxShadow: "elevation.1"
            },
            _active: {
                boxShadow: "none",
            },
        },
        primaryOutline: {
            border: '1px solid',
            borderColor: 'primary.500',
            color: 'primary.900',
            _hover: {
                backgroundColor: 'primary.100',
                boxShadow: "elevation.1",
            },
            _focus: {
                backgroundColor: 'primary.50',
                boxShadow: "elevation.1",
            },
            _active: {
                boxShadow: "none",
            },
        },
        primaryText: {
            color: 'primary.900',
            px: '0.75rem',
            _hover: {
                backgroundColor: 'primary.100',
                boxShadow: "elevation.1",
            },
            _focus: {
                backgroundColor: 'primary.50',
                boxShadow: "elevation.1",
            },
            _active: {
                boxShadow: "none",
            },
        },
    },
    sizes: {
        solid: {
            px: "1.5rem",
        },
    },
    defaultProps: {
        variant: 'primarySolid',
        size: 'solid'
    },
});

export default Button;