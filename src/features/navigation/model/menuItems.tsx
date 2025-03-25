import {
    ErrorBoundaryPage,
    InitialPage,
    WebpackPage,
    VitePage,
    FSDPage,
    PluginsPage,
    TypeScriptPage,
    CSSLayoutPage,
    ReactReduxArray,
    CalendarPage,
} from '@/pages';

export const menuItems = [
    {
        path: '/',
        label: 'Pet-Project',
        title: 'Главная страница',
        page: InitialPage,
    },
    {
        path: '/fsd',
        label: 'FSD-архитектура',
        title: 'FSD-архитектура',
        page: FSDPage,
    },
    {
        path: '/webpack',
        label: 'Webpack',
        title: 'Проект на Webpack',
        page: WebpackPage,
    },
    { path: '/vite', label: 'Vite', title: 'Проект на Vite', page: VitePage },
    {
        path: '/plugins',
        label: 'Плагины (минификация, чанки, react.lazy)',
        title: 'Плагины и оптимизация',
        page: PluginsPage,
    },

    {
        path: '/error-boundary',
        label: 'Error Boundary',
        title: 'Ошибки в приложении',
        page: ErrorBoundaryPage,
    },

    {
        path: '/typescript',
        label: 'TypeScript: дженерики, utility types, интерфейсы',
        title: 'TypeScript',
        page: TypeScriptPage,
    },
    {
        path: '/css',
        label: 'Верстка: псевдоэлементы, position, transform, inherit, селекторы',
        title: 'CSS: стили и верстка',
        page: CSSLayoutPage,
    },
    {
        path: '/js-react',
        label: 'JS/React: массивы, HOC, типизация',
        title: 'JS/React',
        page: ReactReduxArray,
    },
    {
        path: '/calendar',
        label: 'Тот самый календарь',
        title: 'Календарь',
        page: CalendarPage,
    },
];
