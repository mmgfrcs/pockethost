/// <reference path="../types/types.d.ts" />

onModelBeforeUpdate((e) => {
  const newModel = /** @type {models.Record} */ (e.model)
  const oldModel = newModel.originalCopy()

  const { mkLog, enqueueNotification } = /** @type {Lib} */ (
    require(`${__hooks}/lib.js`)
  )

  const log = mkLog(`user-welcome-msg`)

  // Bail out if we aren't verified
  const isVerified = newModel.getBool('verified')
  if (!isVerified) return

  // Bail out if the verified mode flag has not changed
  if (isVerified === oldModel.getBool(`verified`)) return

  log(`user just became verified`)
  const uid = newModel.getId()

  enqueueNotification(`email`, `welcome`, uid)
  newModel.set(`welcome`, new DateTime())
}, 'users')
