import { defineStyleConfig } from "@chakra-ui/react";
import typography from "./typography";

const Link = defineStyleConfig({
    variants: {
        navLink: {
            ...typography.titleSmall,
            borderBottom: '1px solid #878787',
            color: 'gray.600',
            padding: '16px 14px',
            transition: 'border-color 0.3s, border-width 0.3s',
            _hover: {
                borderBottom: '3px solid',
                borderColor: 'primary.500',
                borderRadius: '3px 3px 0px 0px',
                color: 'black',
                textDecoration: 'none',
            }
        }
    }
});

export default Link;