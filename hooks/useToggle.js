'use client'

import { useState } from 'react';

/**
 * useToggle: Toggle a boolean value.
 * @param {boolean} initialValue - Initial state.
 * @returns {Array} - [value, toggleValue]
 */
const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => setValue((prev) => !prev);
    return [value, toggleValue];
};

export default useToggle;
