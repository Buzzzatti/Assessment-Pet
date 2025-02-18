import Card from '@/shared/ui/Card';

import { PageLayout } from '@/widgets';

const InitialPage = ({ title }: { title?: string }) => {
  return (
    <PageLayout title={title}>
      <Card title="О проекте">
        Этот пет-проект создан для углубленного изучения и отработки ключевых тем фронтенд-разработки, которые были
        выявлены после прохождения ассессмента. Основная цель проекта – не просто повторить теорию, но и применить
        знания на практике, создавая рабочее приложение с использованием современных инструментов и подходов.
      </Card>
    </PageLayout>
  );
};
export default InitialPage;
