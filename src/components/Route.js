import { useEffect, useState } from 'react';

export const Route = ({ path, children }) => {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentpath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    // cleanup function (to cleanup the eventListerer if we decide to stop showing the route component on the screen)
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};
