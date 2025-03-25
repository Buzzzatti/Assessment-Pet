import { Route, Routes } from 'react-router-dom';
import { menuItems } from '@/features/navigation';
import React from 'react';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {menuItems.map(({ path, page: Page, title }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Page title={title} />}
                />
            ))}
        </Routes>
    );
};
export default React.memo(AppRouter);
