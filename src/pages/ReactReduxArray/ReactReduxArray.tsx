import { useState, useMemo, useEffect } from 'react';
import Card from '@/shared/ui/Card';
import { useMiddlewares } from '@/store/actions';
import { useTypedSelector } from '@/store/reducers';
import { PageLayout } from '@/widgets';

const ReactReduxArray = ({ title }: { title?: string }) => {
    const { getMW } = useMiddlewares();
    const {
        something: { data: data, status: status },
    } = useTypedSelector(({ exampleSlice }) => exampleSlice);

    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'asc',
    });
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = useMemo(() => {
        return data.filter(
            (item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.body.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }, [data, searchQuery]);

    const sortedData = useMemo(() => {
        if (!sortConfig.key) return filteredData;
        return [...filteredData].sort((a, b) => {
            //@ts-ignore
            if (a[sortConfig.key] < b[sortConfig.key])
                return sortConfig.direction === 'asc' ? -1 : 1;
            //@ts-ignore
            if (a[sortConfig.key] > b[sortConfig.key])
                return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
    }, [filteredData, sortConfig]);

    const itemsPerPage = 10;
    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
    );
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    useEffect(() => {
        getMW();
    }, []);

    return (
        <PageLayout title={title}>
            <Card title="Данные с API">
                {status === 'loading' ? (
                    'ЗАгружаем'
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <table>
                            <thead>
                                <tr>
                                    {['userId', 'id', 'title', 'body'].map(
                                        (key) => (
                                            <th
                                                key={key}
                                                onClick={() =>
                                                    setSortConfig({
                                                        //@ts-ignore
                                                        key,
                                                        direction:
                                                            sortConfig.key ===
                                                                key &&
                                                            sortConfig.direction ===
                                                                'asc'
                                                                ? 'desc'
                                                                : 'asc',
                                                    })
                                                }
                                            >
                                                {key}{' '}
                                                {sortConfig.key === key
                                                    ? sortConfig.direction ===
                                                      'asc'
                                                        ? '↑'
                                                        : '↓'
                                                    : ''}
                                            </th>
                                        ),
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((p) => p - 1)}
                            >
                                Назад
                            </button>
                            <span>
                                {' '}
                                {currentPage} из {totalPages}{' '}
                            </span>
                            <button
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage((p) => p + 1)}
                            >
                                Вперед
                            </button>
                        </div>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSortConfig({ key: null, direction: 'asc' });
                                setCurrentPage(1);
                            }}
                        >
                            Сбросить
                        </button>
                    </>
                )}
            </Card>
        </PageLayout>
    );
};

export default ReactReduxArray;
