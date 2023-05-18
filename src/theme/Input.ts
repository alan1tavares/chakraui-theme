import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import color from "./color";
import typography from "./typography";

const helpers = createMultiStyleConfigHelpers(['field'])

const Input = helpers.defineMultiStyleConfig({
    variants: {
        outline: {
            field: {
                ...typography.bodyLarge,
                borderRadius: '8px',
                _focusVisible: {
                    borderColor: 'primary.500',
                    boxShadow: `0 0 0 1px ${color.primary[500]}`,
                }
            }
        }
    }
});

export default Input;