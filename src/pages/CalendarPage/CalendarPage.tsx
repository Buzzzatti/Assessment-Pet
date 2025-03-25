import { useState, useMemo } from 'react';
import { PageLayout } from '@/widgets';
import Card from '@/shared/ui/Card';

const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const yearRange = 30;

const CalendarPage = ({ title }: { title?: string }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());

    const changeMonth = (offset: number) => {
        setCurrentDate(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1),
        );
    };

    const changeYear = (year: number) => {
        setCurrentDate((prev) => new Date(year, prev.getMonth(), 1));
    };

    const { daysInMonth, firstDayOfMonth } = useMemo(() => {
        const firstDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1,
        ).getDay();
        return {
            daysInMonth: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                0,
            ).getDate(),
            firstDayOfMonth: firstDay === 0 ? 6 : firstDay - 1,
        };
    }, [currentDate]);

    return (
        <PageLayout title={title}>
            <Card title="Календарь">
                <div className="calendar-controls">
                    <button onClick={() => changeMonth(-1)}>←</button>
                    <span>
                        <select
                            value={currentDate.getFullYear()}
                            onChange={(e) => changeYear(Number(e.target.value))}
                        >
                            {Array.from(
                                { length: yearRange },
                                (_, i) =>
                                    today.getFullYear() -
                                    Math.floor(yearRange / 2) +
                                    i,
                            ).map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <select
                            value={currentDate.getMonth()}
                            onChange={(e) =>
                                changeMonth(
                                    Number(e.target.value) -
                                        currentDate.getMonth(),
                                )
                            }
                        >
                            {monthNames.map((month, index) => (
                                <option key={month} value={index}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </span>
                    <button onClick={() => changeMonth(1)}>→</button>
                </div>
                <table className="calendar">
                    <thead>
                        <tr>
                            {weekdays.map((day) => (
                                <th key={day}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(
                            {
                                length: Math.ceil(
                                    (daysInMonth + firstDayOfMonth) / 7,
                                ),
                            },
                            (_, week) => (
                                <tr key={week}>
                                    {Array.from({ length: 7 }, (_, day) => {
                                        const date =
                                            week * 7 +
                                            day -
                                            firstDayOfMonth +
                                            1;
                                        const isToday =
                                            date === today.getDate() &&
                                            currentDate.getMonth() ===
                                                today.getMonth() &&
                                            currentDate.getFullYear() ===
                                                today.getFullYear();
                                        return (
                                            <td
                                                key={day}
                                                className={
                                                    isToday ? 'today' : ''
                                                }
                                            >
                                                {date > 0 && date <= daysInMonth
                                                    ? date
                                                    : ''}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ),
                        )}
                    </tbody>
                </table>
            </Card>
        </PageLayout>
    );
};

export default CalendarPage;
