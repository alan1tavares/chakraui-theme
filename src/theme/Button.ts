import { defineStyleConfig } from "@chakra-ui/react";
import typography from "./typography";

const Button = defineStyleConfig({
    baseStyle: {
        ...typography.labelLarge,
        minH: '40px',
    },
    variants: {
        primarySolid: {
            backgroundColor: 'primary.500',
            borderRadius: '16px',
            color: 'primary.900',
            _hover: {
                backgroundColor: 'primary.300',
                boxShadow: "elevation.1",
            },
            _focus: {
                backgroundColor: 'primary.400',
                boxShadow: "elevation.1"
            },
            _active: {
                boxShadow: "none",
            },
        },
        primaryOutline: {
            border: '1px solid',
            borderColor: 'primary.500',
            borderRadius: '16px',
            color: 'primary.900',
            _hover: {
                backgroundColor: 'primary.50',
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
        }
    },
    defaultProps: {
        variant: 'primarySolid',
        size: 'solid'
    },
});

export default Button;