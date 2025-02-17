import { Box } from "@mui/material";
import { ReactNode } from "react";

export const MainContent = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            {children ? children :
                'Здесь пока ничего нет'}
        </Box>
    );
};
