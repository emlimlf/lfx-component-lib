// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import { primitives } from './helpers/read-json';
import { IPrimitiveObj } from './interfaces/colors';

function buildColors() {
  console.log('Building colors...');
  const colors = primitives.colors;
  let output: string[] = [];

  if (colors) {
    Object.keys(colors).forEach((color: string) => {
      output = output.concat(generateSubColors(color, colors[color]));
    });
  }

  return output;
}

function buildDimensions() {
  console.log('Building dimensions...');
  const dimensions = primitives.dimensions;
  let output: string[] = [];

  if (dimensions) {
    Object.keys(dimensions).forEach((dim: string) => {
      output.push(`$${dim}: ${dimensions[dim].value};`);
    });
  }

  return output;
}

function generateSubColors(
  colorKey: string,
  colorObj: Record<string, IPrimitiveObj>,
): string[] {
  return Object.keys(colorObj).map(
    (subColor: string) =>
      '$' + colorKey + '-' + subColor + ': ' + colorObj[subColor].value + ';',
  );
}

function buildConstants() {
  const { writeFile } = require('fs');

  const targetPath = `./projects/lfx-component-lib/src/lib/styles/constants.scss`;

  const colorOuput = buildColors();
  const dimOutput = buildDimensions();

  const output = colorOuput.join('\n') + '\n\n' + dimOutput.join('\n');

  // write the content to the respective file
  writeFile(targetPath, output, (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Wrote variables to ${targetPath}`);
    }
  });
}

buildConstants();
