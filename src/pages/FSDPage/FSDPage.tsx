import Card from '@/shared/ui/Card';

import { PageLayout } from '@/widgets';

const FSDPage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="FSD">
                Feature-Sliced Design (FSD) – это методология, которая помогает
                структурировать фронтенд-приложение, делая его масштабируемым,
                понятным и удобным в поддержке. Она основана на разделении
                проекта на логические слои, каждый из которых выполняет свою
                функцию.
            </Card>

            <Card title="Зачем нужна FSD?">
                <ul>
                    <li>
                        Упрощает масштабирование – можно легко добавлять новые
                        фичи без хаоса в коде.
                    </li>
                    <li>
                        Повышает читаемость кода – разработчики быстрее понимают
                        структуру проекта.
                    </li>
                    <li>
                        Уменьшает связность между модулями – изменение одной
                        части приложения не ломает другие.
                    </li>
                </ul>
            </Card>

            <Card
                title="Архитектура проекта"
                subtitle="Проект организован по принципу FSD и включает следующие слои:"
            >
                <ul>
                    <li>
                        App – точка входа, инициализация конфигурации и
                        провайдеров.
                    </li>
                    <li>
                        Pages – страницы приложения, объединяющие несколько фич.
                    </li>
                    <li>
                        Features – независимые модули с логикой конкретных фич.
                    </li>
                    <li>Widgets – крупные составные блоки интерфейса.</li>
                    <li>Entities – базовые бизнес-сущности.</li>
                    <li>
                        Shared – переиспользуемые утилиты, стили, компоненты.
                    </li>
                </ul>
            </Card>

            <Card
                title="Архитектура ПЕТ Проекта проекта"
                subtitle="Проект организован по принципу FSD и включает следующие слои:"
            >
                <pre>
                    {`
📂 pet-project
├── 📁 app         # Главный слой приложения (инициализация, провайдеры)
│   ├── 📄 App.tsx  # Точка входа в приложение
│   ├── 📁 providers # Провайдеры контекста (темы, стейта и т. д.)
│
├── 📁 features    # Фичи (отдельные модули функционала)
│   ├── 📁 navigation # Управление навигацией внутри приложения
│
├── 📁 pages       # Страницы приложения (комбинируют несколько фич)
│   ├── 📁 page    # Пример страницы с логикой и UI
│
├── 📁 shared      # Общие переиспользуемые компоненты, утилиты, стили
│   ├── 📁 ui      # Базовые UI-компоненты (кнопки, модалки и т. д.)
│
├── 📁 widgets     # Крупные составные UI-блоки
│   ├── 📁 ErrorButton  # Кнопка для тестирования Error Boundary
│   │   └── 📁 ui       # UI-компоненты кнопки
│   ├── 📁 PageLayout  # Основной лэйаут страницы
│   │   └── 📁 ui       # UI компоненты лэйаута
│   ├── 📁 Sidebar     # Боковое меню
│       └── 📁 ui       # UI компоненты бокового меню
│
└── 📁 configs      # Конфигурационные файлы проекта
                    `}
                </pre>
            </Card>
        </PageLayout>
    );
};
export default FSDPage;
