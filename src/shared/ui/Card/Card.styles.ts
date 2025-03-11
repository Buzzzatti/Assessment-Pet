import { Box, Link } from '@mui/material';
import styled from 'styled-components';

export const CardTitle = styled(Box)`
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
`;

export const CardLinkTitle = styled(Link)`
    &&& {
        color: #000;
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
    }
`;

export const CardSubTitle = styled(Box)`
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
`;
export const CardContainer = styled(Box)`
    border-radius: 8px;
    background: #efefeb;
    padding: 20px;
    box-shadow: 0px 11px 15px rgba(111, 103, 103, 0.15);
`;
