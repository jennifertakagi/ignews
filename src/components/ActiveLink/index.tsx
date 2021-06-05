import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface ActiveLink extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLink): JSX.Element {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : '';

  return <Link {...props}>{cloneElement(children, { className })}</Link>;
}
