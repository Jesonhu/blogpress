/**
 * 环境判断.
 * 
 * @update 2019/04/07.
 */

export const environment = process.env.NODE_ENV
export const isDevMode = Object.is(environment, 'development');
export const isProMode = Object.is(environment, 'production');
export const isTestMode = Object.is(environment, 'test');

export default {
  environment,
  isDevMode,
  isProMode,
  isTestMode
}