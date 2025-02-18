import { ListItem, ListItemText } from "@mui/material";

import styled, { css } from "styled-components";


export const CustomListItem = styled(ListItem) <{ isActive: boolean }>`
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        background-color: #eddbc5;
        div {
            color: #504343;
        }
    }

    ${(props) =>
        props.isActive &&
        css`
            background-color: #eddbc5;

            div {
                color: #504343;
            }
        `}
`;

export const CustomListItemText = styled(ListItemText)`

    color:#c9abab;


`