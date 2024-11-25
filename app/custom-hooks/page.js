'use client'

import { useFetch, useLocalStorage, useToggle, useWindowSize } from '../../hooks';

const CustomHooks = () => {
    // useFetch example
    const { data, loading, error } = useFetch('https://api.example.com/data');

    // useLocalStorage example
    const [name, setName] = useLocalStorage('name', 'John Doe');

    // useToggle example
    const [isToggled, toggle] = useToggle();

    // useWindowSize example
    const { width, height } = useWindowSize();

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Data: {JSON.stringify(data)}</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Name in localStorage: {name}</p>
            <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
            <div>
                <h1>Window Size</h1>
                <p>Width: {width}px</p>
                <p>Height: {height}px</p>
            </div>
        </div>
    );
};

export default CustomHooks;
