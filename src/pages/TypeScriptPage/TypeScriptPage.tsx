import Card from '@/shared/ui/Card';
import { PageLayout } from '@/widgets';

const TypeScriptPage = ({ title }: { title?: string }) => {
    const codeSnippet = `
type Orientation = "top" | "bottom" | "right";

function setOrientation(orientation: Orientation) {
  console.log("Выбрана ориентация: " + orientation);
}

setOrientation("top"); // ✅ Работает
setOrientation("left"); // ❌ Ошибка, "left" не входит в список разрешённых значений
`;
    return (
        <PageLayout title={title}>
            <Card title="Union Types (Объединение типов)">
                <p>
                    Объединение типов (union types) позволяет задавать
                    переменной несколько возможных значений.
                </p>
                <pre>{codeSnippet}</pre>
            </Card>

            <Card title="Дженерики (Generics)">
                <p>
                    Дженерики позволяют создавать универсальные компоненты и
                    функции, работающие с разными типами данных.
                </p>
                <h3>Простая функция с дженериком</h3>
                <pre>
                    {`
function identity<T>(arg: T): T {
  return arg;
}
const result = identity<number>(42);
const result2 = identity<string>("Hello");
                    `}
                </pre>
                <h3>Дженерики в классах</h3>
                <pre>
                    {`
class DataStorage<T> {
  private storage: T[] = [];
  addItem(item: T) {
    this.storage.push(item);
  }
  removeItem(item: T) {
    this.storage = this.storage.filter(i => i !== item);
  }
  getItems(): T[] {
    return this.storage;
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("Hello");
                    `}
                </pre>
            </Card>

            <Card title="Утилити-тайпы (Utility Types)">
                <p>
                    Утилити-тайпы упрощают работу с типами, предоставляя готовые
                    инструменты.
                </p>
                <h3>Partial</h3>
                <p>Делает все поля объекта необязательными.</p>
                <pre>
                    {`
interface User {
  id: number;
  name: string;
  email: string;
}
const partialUser: Partial<User> = { name: "Alice" };
                    `}
                </pre>
                <h3>Readonly</h3>
                <p>Запрещает изменять поля объекта.</p>
                <pre>
                    {`
const user: Readonly<User> = { id: 1, name: "Alice", email: "alice@example.com" };
// user.name = "Bob"; // ❌ Ошибка, поля нельзя изменять
                    `}
                </pre>
                <h3>Pick</h3>
                <p>Выбирает только указанные поля из типа.</p>
                <pre>
                    {`
type UserPreview = Pick<User, "id" | "name">;
const userPreview: UserPreview = { id: 1, name: "Alice" };
                    `}
                </pre>
                <h3>Omit</h3>
                <p>Удаляет указанные поля из типа.</p>
                <pre>
                    {`
type UserWithoutEmail = Omit<User, "email">;
const userWithoutEmail: UserWithoutEmail = { id: 1, name: "Alice" };
                    `}
                </pre>
            </Card>

            <Card title="Интерфейсы (Interfaces)">
                <p>
                    Интерфейсы используются для определения структуры объекта и
                    могут расширяться друг другом.
                </p>
                <pre>
                    {`
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  position: string;
}
                    `}
                </pre>
            </Card>

            <Card title="Сравнение интерфейсов и типов">
                <p>
                    Оба способа позволяют описывать структуры данных, но у них
                    есть различия:
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Функция</th>
                            <th>Interface</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Расширяемость</td>
                            <td>✅ Поддерживает extends</td>
                            <td>✅ Можно объединять с &</td>
                        </tr>
                        <tr>
                            <td>Применение</td>
                            <td>✅ Используется для объектов и классов</td>
                            <td>✅ Подходит для любых типов</td>
                        </tr>
                        <tr>
                            <td>Переопределение</td>
                            <td>✅ Можно расширять</td>
                            <td>⚠️ Не изменяется после определения</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </PageLayout>
    );
};

export default TypeScriptPage;
