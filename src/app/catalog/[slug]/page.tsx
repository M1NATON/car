
import CarTitle from "@/app/catalog/[slug]/CarTitle";
import CarSlider from "@/app/catalog/[slug]/CarSlider";
import {carListData} from "@/app/bd";
import CarInfo from "@/app/catalog/[slug]/CarInfo";

type Props = {
    params: Promise<{ slug: string }>
}

const Page = async ({ params }: Props) => {

    const slug = (await params).slug
    const data = carListData.filter((item) => +slug === item.id)

    const car = data[0]

    return (
        <div className={'carContainer'}>
            <CarTitle />
            <CarSlider images={data[0].images}/>
            <CarInfo car={car} />
        </div>
    );
};

export default Page;