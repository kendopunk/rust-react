/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * src/lib/async/genericGetPromise.ts
 * HTTP GET
 */
import { AxiosResponse } from 'axios'
import axiosCfg from './axiosConfig'

export default function genericGetPromise(url: string): Promise<AxiosResponse<any>> {
  return axiosCfg.get(url)
}
