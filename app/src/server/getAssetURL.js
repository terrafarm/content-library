import hashString from './hashString';

// DISABLED but worth considering in the future
/*
const CDN_HOSTS = [
  'd3ogqji57fkqg9.cloudfront.net',
  'd19zmavcjzsuj4.cloudfront.net',
  'djfaa0bz60cz6.cloudfront.net',
  'd2tdr4rkgjw2gh.cloudfront.net',
];
*/
/**
 * In production returns a CDN URL; otherwise returns the URL as is.
 */
export default function getAssetURL(asset: string): string {
  return asset;
/*
  if (__DEV__) {
    return asset;
  } else if (asset.startsWith('/')) {
    const host = CDN_HOSTS[Math.abs(hashString(asset)) % CDN_HOSTS.length];
    return '//' + host + asset;
  } else {
    return asset;
  }
*/
}
