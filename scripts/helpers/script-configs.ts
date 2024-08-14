// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT
import { IStyleKeys } from 'scripts/interfaces/common';

export const typographyDefinitions: IStyleKeys[] = [
  {
    name: 'page-title',
    type: 'class',
    dimensionKey: 'page-title',
    colorKey: '',
  },
  {
    name: 'section-title',
    type: 'class',
    dimensionKey: 'section-title',
    colorKey: '',
  },
];

export const defaultBodyColorKey = 'primary';
export const colorDefinitions: IStyleKeys[] = [
  {
    name: 'primary',
    type: 'class',
    dimensionKey: '',
    colorKey: 'primary',
  },
  {
    name: 'secondary',
    type: 'class',
    dimensionKey: '',
    colorKey: 'secondary',
  },
];
