import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

// import { useEffect, useState } from 'react';

// const Route = ({ path, children }) => {
//   const [currentPath, setCurrentPath] = useState(window.location.pathname);

//   useEffect(() => {
//     const onLocationChange = () => {
//       setCurrentPath(window.location.pathname);
//     };

//     window.addEventListener('popstate', onLocationChange);

//     return () => {
//       window.removeEventListener('popstate', onLocationChange);
//     };
//   }, []);

//   return currentPath === path ? children : null;
// };

// export default Route;



//Notes:
//use children to pass in a component as a prop

//Each Route component is a function & instance that accepts widgets components
//So when a header link is clicked, the URL pathname will change
//Then the route instances will render the matching route with current pathname.
//In other words:
 //when a link is clicked, the change in the pathname will be sent to all routes
 //when each route receives the pathname, routes will know URL has changed
 //routes will check URL and only show the URL that matches the clicked link
 