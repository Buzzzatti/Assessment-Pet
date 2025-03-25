import Card from '@/shared/ui/Card';
import { PageLayout } from '@/widgets';

const CSSLayoutPage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="Псевдоэлементы">
                <p>
                    Псевдоэлементы используются для стилизации частей элементов,
                    например, ::before и ::after.
                </p>
                <pre>
                    {`
.button::before {
  content: "★";
  color: gold;
}
                    `}
                </pre>
            </Card>

            <Card title="Position">
                <p>
                    Свойство position определяет, как элемент будет расположен в
                    документе.
                </p>
                <h3>Примеры</h3>
                <pre>
                    {`
.fixed {
  position: fixed;
  top: 0;
  left: 0;
}
.absolute {
  position: absolute;
  top: 50px;
  left: 50px;
}
                    `}
                </pre>
            </Card>

            <Card title="Transform">
                <p>
                    Свойство transform позволяет изменять элементы с помощью
                    поворота, масштабирования и других эффектов.
                </p>
                <h3>Примеры</h3>
                <pre>
                    {`
.rotate {
  transform: rotate(45deg);
}
.scale {
  transform: scale(1.5);
}
                    `}
                </pre>
            </Card>

            <Card title="Селекторы">
                <p>
                    В CSS есть множество селекторов, позволяющих выбирать
                    элементы по разным критериям.
                </p>
                <h3>Примеры</h3>
                <pre>
                    {`
button:hover {
  background-color: lightblue;
}
input:focus {
  border-color: red;
}
                    `}
                </pre>
            </Card>

            <Card title="Position: inherit">
                <p>
                    Значение inherit заставляет элемент наследовать position от
                    родителя.
                </p>
                <h3>Пример</h3>
                <pre>
                    {`
.parent {
  position: relative;
}
.child {
  position: inherit;
}
                    `}
                </pre>
            </Card>
        </PageLayout>
    );
};

export default CSSLayoutPage;
