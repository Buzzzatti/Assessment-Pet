import Card from '@/shared/ui/Card';
import { PageLayout } from '@/widgets';

const WebpackPage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="Что такое Webpack?">
                <p>
                    Webpack — это мощный инструмент для сборки
                    фронтенд-приложений. Он позволяет объединять файлы (JS, CSS,
                    изображения и т. д.), оптимизировать их и улучшать
                    производительность проекта.
                </p>
            </Card>

            <Card title="Зачем нужен Webpack?">
                <ul>
                    <li>
                        Автоматизирует сборку проекта и улучшает структуру кода.
                    </li>
                    <li>Минифицирует файлы, уменьшая их размер.</li>
                    <li>
                        Разбивает код на чанки, загружая их по необходимости.
                    </li>
                    <li>
                        Поддерживает современные стандарты JS, TypeScript, CSS,
                        JSX.
                    </li>
                    <li>
                        Позволяет настроить Hot Module Replacement (HMR) для
                        быстрого обновления.
                    </li>
                </ul>
            </Card>

            <Card title="Разбиение кода на чанки (Code Splitting)">
                <p>
                    Webpack позволяет разбивать код на отдельные чанки, что
                    улучшает загрузку страницы и производительность. Вместо
                    загрузки одного большого файла, браузер загружает только
                    необходимые части кода.
                </p>
                <ul>
                    <li>
                        <strong>Lazy Loading</strong> – загружает код только при
                        необходимости.
                    </li>
                    <li>
                        <strong>SplitChunksPlugin</strong> – автоматически делит
                        код на чанки.
                    </li>
                    <li>
                        <strong>Dynamic Imports</strong> – позволяет загружать
                        модули динамически.
                    </li>
                </ul>
            </Card>

            <Card title="Пример настройки чанков в Webpack">
                <pre>
                    {`
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
                    `}
                </pre>
                <p>
                    В этом примере Webpack разбивает код на два чанка:{' '}
                    <code>main.js</code> и <code>vendor.js</code>. В{' '}
                    <code>vendor.js</code> попадут библиотеки из{' '}
                    <code>node_modules</code>, а остальной код — в{' '}
                    <code>main.js</code>.
                </p>
            </Card>

            <Card title="Динамический импорт (Lazy Loading)">
                <p>
                    Динамический импорт позволяет загружать модули только тогда,
                    когда они нужны. Это особенно полезно для больших библиотек,
                    страниц и компонентов.
                </p>
                <pre>
                    {`
import("./math").then((math) => {
  console.log(math.add(2, 3));
});
                    `}
                </pre>
                <p>
                    В этом примере модуль <code>math</code> загружается только
                    при вызове <code>import()</code>, а не при старте
                    приложения.
                </p>
            </Card>

            <Card title="Команды для запуска Webpack">
                <ul>
                    <li>
                        <code>npm start</code> — запустить dev-сервер
                    </li>
                    <li>
                        <code>npm run build</code> — собрать проект для
                        продакшена
                    </li>
                </ul>
            </Card>
        </PageLayout>
    );
};

export default WebpackPage;
