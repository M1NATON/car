// export const splitPathToArray = (path: string): string[] => {
//     const trimmedPath = path.replace(/^\/|\/$/g, '');
//
//
//     const parts = trimmedPath.split('/');
//
//     if (parts.length > 1) {
//         parts[1] = parts[1].replace(/-/g, ' ');
//     }
//
//     return parts;
// }

export const splitPathToArray = (path: string): string => {
    const trimmedPath = path.replace(/^\/|\/$/g, ''); // Удаляем начальные и конечные "/"
    const parts = trimmedPath.split('/'); // Разделяем строку на части по "/"
    return parts[0]; // Возвращаем первую часть — "catalog"
};
