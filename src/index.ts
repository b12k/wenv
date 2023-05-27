export const checkEnv = (env: Record<string, string>, shouldMatch = true) => {
  for (const key in env) {
    if (shouldMatch) {
      if (process.env[key] !== env[key]) return false;
    } else if (process.env[key] === env[key]) {
      return false;
    }
  }

  return true;
};
export default checkEnv;
