import { NavLink, useLocation } from 'react-router-dom';

import { menuItems } from '@/features/navigation';

import { List } from '@mui/material';

import { CustomListItem, CustomListItemText } from './Sidebar.styles';

export const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <List>
            {menuItems.map(({ path, label }) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                <CustomListItem isActive={pathname === path} key={path} component={NavLink} to={path}>
                    <CustomListItemText primary={label} />
                </CustomListItem>
            ))}
        </List>
    );
};
