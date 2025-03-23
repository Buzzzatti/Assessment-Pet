import Card from '@/shared/ui/Card';
import { PageLayout } from '@/widgets';

const PluginsPage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="Плагины в Vite и Webpack">
                <p>
                    Webpack и Vite используют плагины для расширения
                    функциональности. Однако в Vite многие возможности уже
                    встроены, тогда как Webpack требует дополнительной
                    настройки.
                </p>
            </Card>

            <Card title="Минификация (Minification)">
                <p>
                    Минификация уменьшает размер файлов, удаляя лишние пробелы,
                    комментарии и сокращая код.
                </p>
                <h3>Vite</h3>
                <p>
                    Vite использует <code>esbuild</code> для минификации из
                    коробки, что делает процесс быстрее, чем в Webpack.
                </p>
                <pre>
                    {`
// Минификация включена по умолчанию в Vite
export default defineConfig({
  build: {
    minify: 'esbuild',
  }
});
                    `}
                </pre>
                <h3>Webpack</h3>
                <p>
                    В Webpack минификация выполняется с помощью{' '}
                    <code>TerserPlugin</code>, который нужно настроить вручную.
                </p>
                <pre>
                    {`
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
                    `}
                </pre>
            </Card>

            <Card title="Разбиение кода (Code Splitting)">
                <p>
                    Разбиение кода позволяет загружать модули только по мере их
                    необходимости, уменьшая размер бандла.
                </p>
                <h3>Vite</h3>
                <p>
                    Vite автоматически использует ES-модули для динамического
                    импорта.
                </p>
                <pre>
                    {`
const LazyComponent = lazy(() => import('./LazyComponent'));
                    `}
                </pre>
                <h3>Webpack</h3>
                <p>
                    Webpack тоже поддерживает динамический импорт, но требует
                    дополнительной настройки.
                </p>
                <pre>
                    {`
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
                    `}
                </pre>
            </Card>

            <Card title="Подключение плагинов">
                <p>
                    В Vite плагины подключаются через{' '}
                    <code>vite.config.ts</code>, а в Webpack через{' '}
                    <code>webpack.config.js</code>.
                </p>
                <h3>Vite</h3>
                <pre>
                    {`
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
                    `}
                </pre>
                <h3>Webpack</h3>
                <pre>
                    {`
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
                    `}
                </pre>
            </Card>

            <Card title="Сравнение плагинов Vite и Webpack">
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
                            <td>Минификация</td>
                            <td>✅ Встроена (esbuild)</td>
                            <td>❌ Требуется TerserPlugin</td>
                        </tr>
                        <tr>
                            <td>Разбиение кода</td>
                            <td>✅ Автоматически</td>
                            <td>⚠️ Требуется настройка</td>
                        </tr>
                        <tr>
                            <td>Подключение React</td>
                            <td>✅ @vitejs/plugin-react</td>
                            <td>⚠️ Babel + настройки Webpack</td>
                        </tr>
                        <tr>
                            <td>Быстродействие</td>
                            <td>✅ Быстрее (esbuild)</td>
                            <td>❌ Медленнее (Babel, Webpack)</td>
                        </tr>
                        <tr>
                            <td>Гибкость</td>
                            <td>⚠️ Ограниченные возможности</td>
                            <td>✅ Больше настроек</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </PageLayout>
    );
};

export default PluginsPage;
