import { List,ListItem,ListItemText} from"@mui/material";
import { NavLink } from 'react-router-dom';

const menuItems = [
    { path: '/error-boundary', label: 'Error Boundary' },
    { path: '/webpack', label: 'Webpack' },
    { path: '/vite', label: 'Vite' },
    { path: '/plugins', label: 'Плагины (минификация, чанки, react.lazy)' },
    { path: '/fsd', label: 'FSD-архитектура' },
    { path: '/typescript', label: 'TypeScript: дженерики, utility types, интерфейсы' },
    { path: '/css', label: 'Верстка: псевдоэлементы, position, transform, inherit, селекторы' },
    { path: '/js-react', label: 'JS/React: массивы, HOC, типизация' },
];

  export const Sidebar  = () => {
    return (
      <List>
        {menuItems.map(item => (
          <ListItem key={item.path}  component={NavLink} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    );
  };