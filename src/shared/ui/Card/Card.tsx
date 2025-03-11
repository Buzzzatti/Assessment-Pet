import { ReactNode } from 'react';

import { Box } from '@mui/material';

import {
    CardContainer,
    CardLinkTitle,
    CardSubTitle,
    CardTitle,
} from './Card.styles';

interface CardProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    contentDirection?: 'column' | 'row';
    link?: string;
    mb?: string | number;
}

const Card = ({
    title,
    subtitle,
    children,
    contentDirection = 'column',
    link,
    mb = 3,
}: CardProps) => {
    return (
        <CardContainer gap={16} flexDirection="column" mb={mb}>
            <Box gap={12} flexDirection="column">
                {link ? (
                    <CardLinkTitle underline="hover" href={link}>
                        {title}
                    </CardLinkTitle>
                ) : (
                    <CardTitle>{title}</CardTitle>
                )}
                {subtitle && <CardSubTitle>{subtitle}</CardSubTitle>}
            </Box>
            <Box flexDirection={contentDirection}>{children}</Box>
        </CardContainer>
    );
};

export default Card;
