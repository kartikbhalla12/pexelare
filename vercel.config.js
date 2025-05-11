module.exports = async () => {
  const noCache = process.env.NO_CACHE === 'true';

  return {
    headers: noCache
      ? [
          {
            source: '/(.*)',
            headers: [
              { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
              { key: 'Pragma', value: 'no-cache' },
              { key: 'Expires', value: '0' },
              { key: 'Surrogate-Control', value: 'no-store' }
            ]
          }
        ]
      : []
  };
};