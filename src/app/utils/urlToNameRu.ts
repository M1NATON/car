export const urlToNameRu = (name: string) => {
    switch (name) {
        case 'catalog':
            return 'Заказать авто'
        default:
            return name;
    }
}