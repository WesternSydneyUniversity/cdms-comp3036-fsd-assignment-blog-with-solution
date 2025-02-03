// mocks/next/link.js
import React from "react";

const Link = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a {...props}>{children}</a>;
};

export default Link;
