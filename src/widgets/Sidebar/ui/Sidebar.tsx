import { List } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { CustomListItem, CustomListItemText } from "./Sidebar.styles";
import { menuItems } from "@/features/navigation";


export const Sidebar = () => {
  return (
    <List>
      {menuItems.map(item => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        <CustomListItem key={item.path} component={NavLink} to={item.path}>
          <CustomListItemText primary={item.label} />
        </CustomListItem>
      ))}
    </List>
  );
};