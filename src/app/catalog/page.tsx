"use client"


import CatalogTitle from "@/app/catalog/CatalogTitle";
import CatalogCarBody from "@/app/catalog/CatalogCarBody";
import CatalogFilters from "@/app/catalog/CatalogFilters";
import CatalogFilterList from "@/app/catalog/CatalogFilterList";
import CatalogCarList from "@/app/catalog/CatalogCarList";

const Page = () => {

    return (
        <div className={'catalog'}>
            <CatalogTitle/>
            {
                window.screen.width > 820 && (<CatalogCarBody/>)
            }

            <section>
                <aside>
                    {
                        window.screen.width > 820 && <CatalogFilters/>
                    }

                </aside>
                <main>
                    <CatalogFilterList/>
                    <CatalogCarList/>
                </main>
            </section>
        </div>
    );
};

export default Page;