export const ONLINE = 'ONLINE';
export const OFFLINE = 'OFFLINE';

/**
 * [online description]
 * @return {[type]} [description]
 */
export function online() {
  return {type: ONLINE};
}

/**
 * [offline description]
 * @return {[type]} [description]
 */
export function offline() {
  return {type: OFFLINE};
}
