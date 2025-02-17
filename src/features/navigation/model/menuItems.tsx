import { ErrorBoundaryPage, InitialPage, WebpackPage, VitePage } from "@/pages";

export const menuItems = [
    { path: '/', label: 'Pet-Project', title: 'Главная страница', page: InitialPage },
    { path: '/error-boundary', label: 'Error Boundary', title: 'Ошибки в приложении', page: ErrorBoundaryPage },
    { path: '/webpack', label: 'Webpack', title: 'Проект на Webpack', page: WebpackPage },
    { path: '/vite', label: 'Vite', title: 'Проект на Vite', page: VitePage },
    { path: '/plugins', label: 'Плагины (минификация, чанки, react.lazy)', title: 'Плагины и оптимизация', page: InitialPage },
    { path: '/fsd', label: 'FSD-архитектура', title: 'FSD-архитектура', page: InitialPage },
    { path: '/typescript', label: 'TypeScript: дженерики, utility types, интерфейсы', title: 'TypeScript', page: InitialPage },
    { path: '/css', label: 'Верстка: псевдоэлементы, position, transform, inherit, селекторы', title: 'CSS: стили и верстка', page: InitialPage },
    { path: '/js-react', label: 'JS/React: массивы, HOC, типизация', title: 'JS/React', page: InitialPage },
];
