/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/lib/async/asyncWrapper.ts
 * A hook-like function for processing promises
 */
export default async function asyncWrapper(promise: Promise<any>) {
  return promise
    .then((data) => [null, data])
    .catch((err) => [
      {
        status: err?.response?.status || '',
        statusText: err?.response?.statusText || 'unknown',
        data: err?.response?.data || 'no error data'
      },
      null
    ])
}
