import Card from '@/shared/ui/Card';
import { PageLayout } from '@/widgets';

const ErrorBoundaryPage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="Что такое Error Boundary?">
                <p>
                    <strong>Error Boundary</strong> – это компонент React,
                    который отлавливает ошибки внутри дочерних компонентов и
                    предотвращает их распространение на весь React-дерево.
                </p>
            </Card>

            <Card title="Как работает Error Boundary?">
                <ul>
                    <li>
                        Использует методы <code>getDerivedStateFromError</code>{' '}
                        и <code>componentDidCatch</code>.
                    </li>
                    <li>
                        Позволяет отлавливать ошибки только в
                        компонентах-классах.
                    </li>
                    <li>
                        Не обрабатывает ошибки в асинхронном коде, событиях,
                        серверах и эффектах.
                    </li>
                </ul>
            </Card>

            <Card title="Пример использования Error Boundary">
                <pre>
                    {`
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так.</h1>;
        }
        return this.props.children;
    }
}
                    `}
                </pre>
            </Card>

            <Card title="Когда срабатывает Error Boundary?">
                <ul>
                    <li>При рендере компонента.</li>
                    <li>При вызове метода жизненного цикла.</li>
                    <li>При обработке дочернего компонента.</li>
                </ul>
            </Card>

            <Card title="Ограничения Error Boundary">
                <ul>
                    <li>Не ловит ошибки в обработчиках событий.</li>
                    <li>
                        Не перехватывает ошибки в асинхронных вызовах (например,{' '}
                        <code>setTimeout</code>).
                    </li>
                    <li>Не работает с серверными ошибками.</li>
                </ul>
            </Card>
        </PageLayout>
    );
};

export default ErrorBoundaryPage;
