// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT
import { typographyBase } from './helpers/base-css';
import { getKeyValue, findKeyValue } from './helpers/helper-functions';
import { primitives, lightMode } from './helpers/read-json';
import { typographyDefinitions } from './helpers/script-configs';
import { IPrimitiveObj } from './interfaces/colors';
import { IStyleKeys } from './interfaces/common';

function buildTypography() {
  const { writeFile } = require('fs');

  const targetPath = `./projects/lfx-component-lib/src/lib/styles/typography.scss`;
  const cssOutput =
    typographyBase + typographyDefinitions.map(generateStyle).join('\n');

  console.log(
    'Building typography...',
    getKeyValue('colors.grey.1000', primitives),
  );

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
  const fontSizePrimitive: IPrimitiveObj | undefined = findKeyValue(
    key.dimensionKey,
    lightMode,
  );
  const fontSize: IPrimitiveObj | undefined = fontSizePrimitive
    ? getKeyValue(
        fontSizePrimitive.value.replace('{', '').replace('}', ''),
        primitives,
      )
    : undefined;
  const colorPrimitive: IPrimitiveObj | undefined = findKeyValue(
    key.colorKey,
    lightMode,
  );
  const colorVal: IPrimitiveObj | undefined = colorPrimitive
    ? getKeyValue(
        colorPrimitive.value.replace('{', '').replace('}', ''),
        primitives,
      )
    : undefined;
  let styleOutput = `
  ${prefix}${key.name} {`;

  if (fontSize) {
    styleOutput += `
    font-size: ${fontSize?.value};`;
  }

  if (colorVal) {
    styleOutput += `color: ${colorVal?.value};
    `;
  }

  return fontSize || colorVal ? styleOutput + '\n}\n' : '';
}

buildTypography();
