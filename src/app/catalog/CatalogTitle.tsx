"use client"


const CatalogTitle = () => {


    return (
        <div className="catalogTitle">

            {
                window.screen.width > 820 && (
                    <header className={'catalogTitleHeader'}>
                        <p>Главная</p>
                        <p>—</p>
                        <p>Заказать авто</p>
                    </header>
                )
            }
            <main>
                <p>Автомобили с доставкой в РФ</p>
            </main>
            {
                window.screen.width > 820 && (
                    <footer>
                        <p>Выберите авто</p>
                    </footer>
                )
            }
        </div>
    );
};

export default CatalogTitle;