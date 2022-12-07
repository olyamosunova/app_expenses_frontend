import { createEvent, createEffect, createStore } from 'effector'

import { TSnackInit, TSnackItem } from '../types'

export const snackTrigger = createEvent<TSnackInit>()
export const add = createEvent<TSnackItem>()
export const hide = createEvent<{ id: string }>()
export const forceHide = createEvent<{
  id: string
}>()

export const addSnackFx = createEffect<TSnackInit, void, Error>()

export const $snacks = createStore<TSnackItem[]>([])
