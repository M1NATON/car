export const splitPathToArray = (path: string): string[] => {
    const trimmedPath = path.replace(/^\/|\/$/g, '');


    const parts = trimmedPath.split('/');

    if (parts.length > 1) {
        parts[1] = parts[1].replace(/-/g, ' ');
    }

    return parts;
}