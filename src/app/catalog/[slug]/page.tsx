"use client"

import CarTitle from "@/app/catalog/[slug]/CarTitle";
import {usePathname} from "next/navigation";


const Page = ({ params,}: {params: Promise<{ slug: string }>
}) => {


    const patchname = usePathname()
    console.log('patchname', patchname);

    return (
        <div>
            <CarTitle />
        </div>
    );
};

export default Page;