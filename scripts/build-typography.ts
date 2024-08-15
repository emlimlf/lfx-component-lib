// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT
import { typographyBase } from './helpers/base-css';
import { getPrimitiveValue } from './helpers/helper-functions';
import { primitives, lightMode } from './helpers/read-json';
import { typographyDefinitions } from './helpers/script-configs';
import { IPrimitiveObj } from './interfaces/colors';
import { IStyleKeys } from './interfaces/common';

function buildTypography() {
  const { writeFile } = require('fs');

  const targetPath = `./projects/lfx-component-lib/src/lib/styles/typography.scss`;
  const cssOutput =
    typographyBase + typographyDefinitions.map(generateStyle).join('\n');

  console.log('Building typography...');

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
  const fontSize: IPrimitiveObj | undefined = getPrimitiveValue(
    key.dimensionKey,
    lightMode,
    primitives,
  );
  const colorVal: IPrimitiveObj | undefined = getPrimitiveValue(
    key.colorKey,
    lightMode,
    primitives,
  );
  let styleOutput = `
  ${prefix}${key.name} {`;

  if (fontSize) {
    styleOutput += `
    font-size: ${fontSize?.value};`;
  }

  if (colorVal) {
    styleOutput += `
    color: ${colorVal?.value};`;
  }

  return fontSize || colorVal ? styleOutput + '\n}\n' : '';
}

buildTypography();
