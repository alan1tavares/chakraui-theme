import { defineStyleConfig } from "@chakra-ui/react";
import typography from "./typography";

const FormLabel = defineStyleConfig({
    baseStyle: {
        ...typography.bodyLarge,
    }
});

export default FormLabel;