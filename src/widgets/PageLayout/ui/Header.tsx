import { Box } from "@mui/material";

export const Header = ({ title }: { title?: string }) => {
    return (
        <Box>
            <h1>{title}</h1>
        </Box>
    );
};
