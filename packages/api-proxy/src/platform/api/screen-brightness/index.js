import { getEnvObj, envError } from '../../../common/js'

const ENV_OBJ = getEnvObj()

const setScreenBrightness = ENV_OBJ.setScreenBrightness || envError('setScreenBrightness')

const getScreenBrightness = ENV_OBJ.getScreenBrightness || envError('getScreenBrightness')

export {
  setScreenBrightness,
  getScreenBrightness
}
