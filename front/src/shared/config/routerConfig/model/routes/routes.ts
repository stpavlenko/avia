import type { PageTitle } from '../types/page-title';

export interface AppRoute {
  route: string;
  label: PageTitle;
}

export const routes: AppRoute[] = [];
