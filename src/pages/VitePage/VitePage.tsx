import Card from '@/shared/ui/Card';
import { PageLayout } from '@/widgets';

const VitePage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="Что такое Vite?">
                <p>
                    <strong>Vite</strong> – это современный инструмент для
                    сборки фронтенд-приложений, разработанный для повышения
                    скорости и удобства разработки. В отличие от Webpack, Vite
                    использует <strong>ES-модули</strong> в браузере и{' '}
                    <strong>быстрое обновление</strong> кода.
                </p>
            </Card>

            <Card title="Преимущества Vite перед Webpack">
                <ul>
                    <li>
                        <strong>Мгновенный запуск</strong> – нет необходимости
                        собирать весь проект перед запуском.
                        <p>
                            В отличие от Webpack, который при запуске проект
                            должен собрать все файлы в бандлы, Vite использует
                            ES-модули и работает с ними напрямую в браузере. Это
                            позволяет минимизировать время на стартап, так как
                            каждый файл загружается по мере необходимости, без
                            предварительной сборки всего проекта.
                        </p>
                    </li>
                    <li>
                        <strong>Горячая перезагрузка (HMR)</strong> – изменения
                        в коде применяются моментально.
                        <p>
                            В Webpack процесс горячей перезагрузки может занять
                            некоторое время, так как Webpack пересобирает
                            большие части проекта. Vite, напротив, применяет
                            изменения моментально, отправляя обновления через
                            веб-сокеты и обновляя только те части, которые были
                            изменены. Это обеспечивает максимально быстрый
                            отклик и улучшенную разработку.
                        </p>
                    </li>
                    <li>
                        <strong>Меньшее потребление ресурсов</strong> – Vite
                        использует ES-модули без необходимости создания бандлов
                        во время разработки.
                        <p>
                            В Webpack каждый модуль должен быть обработан и
                            объединен в бандл, что требует значительных ресурсов
                            и времени. Vite же использует нативные возможности
                            браузера для работы с модулями, что позволяет не
                            собирать весь проект и ускорить работу на этапе
                            разработки. Это также снижает нагрузку на процессор.
                        </p>
                    </li>
                    <li>
                        <strong>Поддержка TypeScript, JSX, Vue, Svelte</strong>{' '}
                        из коробки.
                        <p>
                            В отличие от Webpack, где для поддержки различных
                            технологий могут потребоваться дополнительные
                            плагины и конфигурации, Vite поставляется с готовыми
                            решениями для TypeScript, JSX, Vue и Svelte. Это
                            упрощает настройку проекта и ускоряет процесс
                            разработки.
                        </p>
                    </li>
                    <li>
                        <strong>Оптимизированная сборка</strong> – на продакшене
                        Vite использует <code>esbuild</code> для более быстрой
                        компиляции.
                        <p>
                            Webpack использует более медленные инструменты,
                            такие как Terser и Babel, для минимизации и
                            трансформации кода. Vite использует{' '}
                            <code>esbuild</code>, который написан на Go и
                            значительно быстрее благодаря параллельной
                            обработке, что ускоряет сборку проекта для
                            продакшена.
                        </p>
                    </li>
                </ul>
            </Card>

            <Card title="Установка и запуск Vite">
                <p>Создать новый проект с Vite можно всего одной командой:</p>
                <pre>
                    {`
npm create vite@latest my-project --template react
                    `}
                </pre>
                <p>Далее устанавливаем зависимости и запускаем проект:</p>
                <pre>
                    {`
cd my-project
npm install
npm run dev
                    `}
                </pre>
                <p>
                    Проект будет доступен по <code>http://localhost:5173</code>.
                </p>
            </Card>

            <Card title="Основные настройки Vite">
                <p>
                    Конфигурация Vite находится в файле{' '}
                    <code>vite.config.ts</code>:
                </p>
                <pre>
                    {`
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Устанавливаем порт для локального сервера
    open: true,   // Автоматически открывать в браузере
  },
  build: {
    outDir: 'dist',  // Директория для сборки
    sourcemap: true,  // Подключение source maps
  },
});
                    `}
                </pre>
            </Card>

            <Card title="Разбиение кода в Vite">
                <p>
                    Как и Webpack, Vite поддерживает **разбиение кода** (Code
                    Splitting). Он автоматически делит код на **чанки** для
                    более быстрой загрузки.
                </p>
                <pre>
                    {`
import { lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));
                    `}
                </pre>
                <p>
                    В этом примере <code>LazyComponent</code> будет загружаться
                    только тогда, когда он действительно нужен.
                </p>
            </Card>

            <Card title="Продакшен-сборка">
                <p>Для сборки проекта в продакшен достаточно выполнить:</p>
                <pre>
                    {`
npm run build
                    `}
                </pre>
                <p>
                    Итоговые файлы окажутся в папке <code>dist/</code>. В
                    отличие от Webpack, Vite использует **esbuild**, который
                    работает значительно быстрее.
                </p>
            </Card>

            <Card title="Сравнение Vite и Webpack">
                <table>
                    <thead>
                        <tr>
                            <th>Функция</th>
                            <th>Vite</th>
                            <th>Webpack</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Скорость запуска</td>
                            <td>✅ Мгновенно</td>
                            <td>❌ Медленный старт из-за бандлинга</td>
                        </tr>
                        <tr>
                            <td>Горячая перезагрузка</td>
                            <td>✅ Практически мгновенная</td>
                            <td>❌ Может быть медленной</td>
                        </tr>
                        <tr>
                            <td>Использование ресурсов</td>
                            <td>✅ Минимальное</td>
                            <td>❌ Тяжелый процесс компиляции</td>
                        </tr>
                        <tr>
                            <td>Поддержка TypeScript</td>
                            <td>✅ Из коробки</td>
                            <td>❌ Требуется настройка</td>
                        </tr>
                        <tr>
                            <td>Сборка в продакшен</td>
                            <td>✅ Быстрая (esbuild)</td>
                            <td>❌ Медленнее (Terser, Babel)</td>
                        </tr>
                        <tr>
                            <td>Настройка проекта</td>
                            <td>✅ Простая, из коробки</td>
                            <td>
                                ❌ Часто требует множества настроек и плагинов
                            </td>
                        </tr>
                        <tr>
                            <td>Скорость работы с большими проектами</td>
                            <td>❌ Может снижаться при масштабировании</td>
                            <td>
                                ✅ Лучше работает с крупными проектами за счет
                                более зрелой экосистемы
                            </td>
                        </tr>
                        <tr>
                            <td>Поддержка старых браузеров</td>
                            <td>
                                ❌ Не поддерживает старые браузеры так хорошо,
                                как Webpack
                            </td>
                            <td>✅ Поддерживает старые браузеры через Babel</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </PageLayout>
    );
};

export default VitePage;
