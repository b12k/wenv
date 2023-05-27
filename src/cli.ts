#!/usr/bin/env node

import { program } from 'commander';
import { checkEnv } from './index';

program
  .option(
    '-f',
    'Terminate process with "error" exit code when conditions match',
    false,
  )
  .parse();

interface EnvVariableArgument {
  equals: Record<string, string>;
  notEquals: Record<string, string>;
}

const envVariableArguments = program.args.reduce<EnvVariableArgument>(
  (acc, next) => {
    if (next.includes('!=')) {
      const [key, value] = next.split('!=').map((item) => item.trim());
      acc.notEquals[key] = value;
    } else if (next.includes('=')) {
      const [key, value] = next.split('=').map((item) => item.trim());
      acc.equals[key] = value;
    } else {
      throw new Error(`[whenenv] Incorrect variable argument: ${next}`);
    }
    return acc;
  },
  { equals: {}, notEquals: {} },
);

const isErrorOnSuccess = program.opts<{ f: boolean }>().f;
const successExitCode = isErrorOnSuccess ? 1 : 0;
const errorExitCode = isErrorOnSuccess ? 0 : 1;

const exitCode =
  checkEnv(envVariableArguments.equals) &&
  checkEnv(envVariableArguments.notEquals, false)
    ? successExitCode
    : errorExitCode;

process.exit(exitCode);
