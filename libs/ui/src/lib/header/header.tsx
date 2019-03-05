import * as React from 'react';
import './header.scss';

interface HeaderProps {
  children?: React.ReactNode;
}

export const Header = (props: HeaderProps) => {
  return <h1 className="header">{props.children}</h1>;
};
