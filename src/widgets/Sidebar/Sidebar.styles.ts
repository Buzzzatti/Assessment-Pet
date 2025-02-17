import { ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";

export const CustomListItem = styled(ListItem)`

    cursor:pointer;
    border-radius: 8px;

    &:hover {
        background-color: #eddbc5;
    }

    &:hover{
        div {
            color:#504343;
        }
    }
`;

export const CustomListItemText = styled(ListItemText)`

    color:#c9abab;


`