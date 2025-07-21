import { getState, updateState } from '../../state/state.js'

export function Eho (text?: string):void {
  const infoScreen = getState('infoScreen')
  if (infoScreen.length > 31) updateState('infoScreen', [
      text,
      ...infoScreen.slice(0, infoScreen.length - 1)
  ])
  else updateState('infoScreen', [text, ...infoScreen])
}