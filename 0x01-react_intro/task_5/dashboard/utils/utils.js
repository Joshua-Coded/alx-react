export const getFullYear = () => {
    return new Date().getFullYear();
}

export const getFooterCopy = (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export const getLatestNotification = () => "<strong> Urgent requirements</strong> - complete by EOD";