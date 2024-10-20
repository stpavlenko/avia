import type { FC, ReactNode } from 'react';
import { memo } from 'react';

import { useDocumentTitle } from 'usehooks-ts';

import styles from './AppLayout.module.scss';

interface Props {
  children: ReactNode;
  title: string;
  withLayout?: boolean;
}

const AppLayout: FC<Props> = memo(({ children, title, withLayout }) => {
  useDocumentTitle(title);

  const content = (
    <main>
      <div>{children}</div>
    </main>
  );

  if (withLayout) {
    return (
      <div>
        <header></header>
        {content}
      </div>
    );
  }

  return content;
});

AppLayout.displayName = 'AppLayout';

export { AppLayout };
