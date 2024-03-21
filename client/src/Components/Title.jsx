import { useEffect } from 'react';

const DocTitle = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
};

export default DocTitle;
