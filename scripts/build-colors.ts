// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT
import { colorBase } from './helpers/base-css';
import {
  getKeyValue,
  findKeyValue,
  getPrimitiveValue,
} from './helpers/helper-functions';
import { primitives, lightMode } from './helpers/read-json';
import {
  colorDefinitions,
  defaultBodyColorKey,
} from './helpers/script-configs';
import { IPrimitiveObj } from './interfaces/colors';
import { IStyleKeys } from './interfaces/common';

function buildColors() {
  const { writeFile } = require('fs');

  const targetPath = `./projects/lfx-component-lib/src/lib/styles/colors.scss`;
  // get base color for body first
  const primaryColorKey = getPrimitiveValue(
    defaultBodyColorKey,
    lightMode,
    primitives,
  );
  let cssOutput = '';

  if (primaryColorKey) {
    cssOutput +=
      colorBase.replace('[[colorValue]]', primaryColorKey.value) +
      colorDefinitions.map(generateStyle).join('\n');
  }

  console.log('Building colors...');

  // write the content to the respective file
  writeFile(targetPath, cssOutput, (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Wrote variables to ${targetPath}`);
    }
  });
}

function generateStyle(key: IStyleKeys) {
  const prefix = key.type === 'class' ? '.' : key.type === 'id' ? '#' : '';
  const colorVal: IPrimitiveObj | undefined = getPrimitiveValue(
    key.colorKey,
    lightMode,
    primitives,
  );
  let styleOutput = `
  ${prefix}${key.name} {`;

  if (colorVal) {
    styleOutput += `
    color: ${colorVal?.value};`;
  }

  return colorVal ? styleOutput + '\n}\n' : '';
}

buildColors();
