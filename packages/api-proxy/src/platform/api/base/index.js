import { getEnvObj, envError } from '../../../common/js'

const ENV_OBJ = getEnvObj()

const base64ToArrayBuffer = ENV_OBJ.base64ToArrayBuffer || envError('base64ToArrayBuffer')

const arrayBufferToBase64 = ENV_OBJ.arrayBufferToBase64 || envError('arrayBufferToBase64')

export {
  base64ToArrayBuffer,
  arrayBufferToBase64
}
