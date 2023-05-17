import { defineStyleConfig } from "@chakra-ui/react";
import typography from "./typography";

const Button = defineStyleConfig({
    baseStyle: {
        ...typography.labelLarge,
    },
    variants: {
        primarySolid: {
            backgroundColor: 'primary.500',
            color: 'primary.900',
            borderRadius: '16px',
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
        }
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