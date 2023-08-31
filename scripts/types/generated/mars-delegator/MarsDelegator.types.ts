// @ts-nocheck
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  bond_denom: string;
  ending_time: number;
}
export type ExecuteMsg = {
  unbond: {};
} | {
  refund: {};
};
export type QueryMsg = {
  config: {};
};
export interface MigrateMsg {
  [k: string]: unknown;
}
export type SudoMsg = {
  bond: {};
} | {
  force_unbond: {};
};
export interface Config {
  bond_denom: string;
  ending_time: number;
}