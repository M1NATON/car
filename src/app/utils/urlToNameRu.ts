export const urlToNameRu = (name: string) => {
    switch (name) {
        case 'catalog':
            return 'Заказать авто'
        case 'frequentlyAskedQuestions':
            return 'Часто задаваемые вопросы'
        case 'feedback':
            return 'Отзывы'
        default:
            return name;
    }
}