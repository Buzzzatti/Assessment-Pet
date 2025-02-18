import { ReactNode } from "react";

import { Box } from "@mui/material";

import { CardSubTitle, CardTitle } from "./Card.styles";

interface CardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  contentDirection?: "column" | "row";
}

const Card = ({
    title,
    subtitle,
  children,
  contentDirection = "column",
}: CardProps) => {
  return (
    <Box gap={16} flexDirection="column">
      <Box gap={12} flexDirection="column">
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
      </Box>
      <Box flexDirection={contentDirection}>{children}</Box>
    </Box>
  );
};

export default Card;
