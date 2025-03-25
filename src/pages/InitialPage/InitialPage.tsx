import Card from '@/shared/ui/Card';

import { PageLayout } from '@/widgets';

import { Box } from '@mui/material';
import { InitialPageContent } from './constatns';

const InitialPage = ({ title }: { title?: string }) => {
    return (
        <PageLayout title={title}>
            <Card title="О проекте">
                Этот пет-проект создан для углубленного изучения и отработки
                ключевых тем фронтенд-разработки, которые были выявлены после
                прохождения ассессмента. Основная цель проекта – не просто
                повторить теорию, но и применить знания на практике, создавая
                рабочее приложение с использованием современных инструментов и
                подходов.
            </Card>

            <Box mb={3}>Что изучается в рамках проекта: </Box>

            {InitialPageContent.map(({ title, content, link }, index) => (
                <Card title={`${index + 1}. ${title}`} link={link} key={index}>
                    <ul>
                        {content.map((el) => (
                            <li>{el}</li>
                        ))}
                    </ul>
                </Card>
            ))}
        </PageLayout>
    );
};
export default InitialPage;
