import React from 'react'; //theres no jsx here so we don't actually need this import

const Route = ({ path, children }) => {
  return window.location.path
    ? children
    : null;
}

export default Route