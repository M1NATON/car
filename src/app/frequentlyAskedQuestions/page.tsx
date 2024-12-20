"use client"

import TitlePage from "@/app/components/TitlePage";
import FrequentQuestionsAccordion from "@/app/frequentlyAskedQuestions/FrequentQuestionsAccordion";

const Page = () => {

    return (
        <div className={'frequentQuestions'}>
            <header className={'headerTitlePage'}>
                <TitlePage/>
                <h1>Часто задаваемые вопросы</h1>
            </header>
            <section>
                <FrequentQuestionsAccordion />
            </section>
        </div>
    );
};

export default Page;