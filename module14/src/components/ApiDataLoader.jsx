import { useState, useCallback, useMemo, Suspense } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from "./Loading";

const ApiDataLoader = ({ apiEndpoint, Component }) => {
    const [loading, setLoading] = useState(true);

    const data = useMemo(() => {
        return fetchData();
    }, [fetchData]);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(apiEndpoint);
            const result = await response.json();
            setLoading(false);
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
            throw error;
        }
    }, [apiEndpoint]);

    return (
        <Suspense fallback={<LoadingSpinner />}>
            {loading && <LoadingSpinner />}
            {!loading && data && <Component data={data} />}
        </Suspense>
    );
};

ApiDataLoader.propTypes = {
    apiEndpoint: PropTypes.string.isRequired,
    Component: PropTypes.func.isRequired,
};

export default ApiDataLoader;
