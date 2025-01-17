import { getEnvObj, envError } from '../../../common/js'

const ENV_OBJ = getEnvObj()

const onWindowResize = ENV_OBJ.onWindowResize || envError('onWindowResize')

const offWindowResize = ENV_OBJ.offWindowResize || envError('offWindowResize')

export {
  onWindowResize,
  offWindowResize
}
