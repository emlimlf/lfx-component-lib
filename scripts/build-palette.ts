// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT
import { primitives } from './helpers/read-json';
import {
  IOutputPalette,
  IPrimitiveObj,
  ISubColorOutput,
} from './interfaces/colors';

function buildPalette() {
  const { writeFile } = require('fs');

  const targetPath = `./projects/lfx-component-lib/src/lib/configs/color-palette.json`;

  const colors = primitives.colors;
  const outputPalette: IOutputPalette = {};

  if (colors) {
    Object.keys(colors).forEach((color: string) => {
      outputPalette[color] = generateSubColors(colors[color]);
    });
  }

  // write the content to the respective file
  writeFile(targetPath, JSON.stringify(outputPalette), (err: any) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Wrote variables to ${targetPath}`);
    }
  });
}

function generateSubColors(
  colorObj: Record<string, IPrimitiveObj>,
): ISubColorOutput {
  const tmp = Object.keys(colorObj).map((subColor: string) => ({
    [subColor]: colorObj[subColor].value,
  }));

  return tmp.reduce((acc, curr) => {
    const key = Object.keys(curr)[0];
    acc[key] = curr[key];
    return acc;
  });
}

buildPalette();
