
const Route =( { path, children } ) => {
    return window.location.pathname === path ? children : null
}

export default Route;


//Notes:
//use children to pass in a component as a prop