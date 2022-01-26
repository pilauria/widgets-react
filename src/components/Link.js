import React from 'react';

export const Link = ({ className, href, children }) => {
  const onClick = event => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    //prevent the page to refresh
    window.history.pushState({}, '', href);
    //change the URL
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};
