// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

export interface ISubColorOutput {
  [key: string]: string;
}

export interface IOutputPalette {
  [key: string]: ISubColorOutput;
}

export interface IPrimitiveObj {
  value: string;
  type: string;
  parent: string;
}
