import CatalogFilter from "@/app/catalog/CatalogFilter";

const CatalogFilters = () => {

    const filterData:{title: string, value: string[]}[] = [
        {
            title: 'Тип кузова',
            value: ['Седан', 'Хетчбек', 'Кроссовер', 'Джип', 'Минивен']
        },
        {
            title: 'Двигатель',
            value: ['Атмосферный', 'Турбированный']
        },
        {
            title: 'КПП',
            value: ['Автоматическая', 'Механическая', 'Вариатор', 'Роботизированная']
        },
        {
            title: 'Привод',
            value: ['Передний', 'Задний', 'Полный']
        },
        {
            title: 'Цвет',
            value: ['Белый', 'Черный', 'Серый']
        },
    ]

    return (
        <div className={'catalogFilters'}>
            {
                filterData.map((item, index) => (
                    <CatalogFilter title={item.title} value={item.value} key={index} />
                ))
            }

            <button>Сбросить</button>
        </div>
    );
};

export default CatalogFilters;