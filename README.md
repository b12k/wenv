# **<div align="center">WENV</div>**

A stupid simple utility that checks environment variables and exists...

## Install

```shell
# NPM
npm i wenv
# Yarn
yarn add wenv
# PNPM
pnpm i wenv
```

## Use

```shell
wenv
```

## Example

```shell
# install globally to use it as shell command

npm i @b12k/wenv -g

export ENV_VAR=banana
export ANOTHER_ENV_VAR=apple

wenv ENV_VAR=banana ANOTHER_ENV_VAR=apple && echo "✅ - bananas and apples"
wenv ENV_VAR!=banana ANOTHER_ENV_VAR!=orange && echo "❌ - this will not be echoed"

# -f - "Success Fail" mode. To prevent erroring on failed condition
wenv ENV_VAR!=grape ANOTHER_ENV_VAR!=peach -f || echo "✅ - Successfully failed: no grapes and no peaches"
wenv ENV_VAR=grape ANOTHER_ENV_VAR=peach -f || echo "❌ - this will not be echoed"
```
