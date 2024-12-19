
export const splitPathToArray = (path: string): string => {
    const trimmedPath = path.replace(/^\/|\/$/g, '');
    const parts = trimmedPath.split('/');
    return parts[0];
};
