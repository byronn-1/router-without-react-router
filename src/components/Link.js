import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //prevent a full page reload
    event.preventDefault();

    //change the URL without reloading entire page
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a
      onClick={onClick}
      className={className} href={href}>{children}</a>
  )
}

export default Link