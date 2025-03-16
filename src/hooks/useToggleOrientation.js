import { useState } from "react";

export const useToggleOrientation = () => {
    const [orientation, setOrientation] = useState('');
  
    const toggleOrientation = () => {
      setOrientation(prev => (prev === '' ? 'vertical' : ''));
    };          

    return {
        orientation,
        toggleOrientation,
    }
};