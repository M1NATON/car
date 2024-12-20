"use client"


import TitlePage from "@/app/components/TitlePage";
import useDeviceSize from "@/app/hooks/useDeviceSize";

const CatalogTitle = () => {


    const [width] = useDeviceSize();

    return (
        <div className="catalogTitle">

            {
                width > 820 && (
                    <TitlePage/>
                )
            }
            <main>
                <p>Автомобили с доставкой в РФ</p>
            </main>
            {
                width > 820 && (
                    <footer>
                        <p>Выберите авто</p>
                    </footer>
                )
            }
        </div>
    );
};

export default CatalogTitle;