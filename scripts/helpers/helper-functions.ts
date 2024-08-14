// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT
import { map, filter, get } from 'lodash';

export const findKeyValue = (key: string, object: any) => {
  const foundKeys = map(object, key);
  if (foundKeys && foundKeys.length > 0) {
    return filter(foundKeys, (k) => k !== undefined)[0];
  }
  return undefined;
};

export const getKeyValue = (key: string, object: any) => {
  return get(object, key);
};
