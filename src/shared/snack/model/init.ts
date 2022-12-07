import { forward } from 'effector'
import { delay } from 'lib/delay'

import { snackTrigger, add, hide, forceHide, addSnackFx, $snacks } from '.'

$snacks
  .on(add, (state, snack) => [snack, ...state])
  .on([hide, forceHide], (state, { id }) =>
    state.filter(item => item.id !== id),
  )

forward({
  from: snackTrigger,
  to: addSnackFx,
})

addSnackFx.use(async ({ message, type, timeout = 3000 }) => {
  const id = `${Date.now()}`

  add({
    id,
    message,
    visible: true,
    type,
  })

  await delay(timeout)

  hide({ id })
})
