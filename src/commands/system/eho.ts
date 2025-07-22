import { getState, updateState } from '../../state/state.js'
import {MAX_LENGTH_INFOSCREEN} from "../../constants.ts";

export function Eho (text: string):void {
  const infoScreen = getState('infoScreen')
  if (infoScreen.length > MAX_LENGTH_INFOSCREEN) updateState('infoScreen', [
      text,
      ...infoScreen.slice(0, -1)
  ])
  else updateState('infoScreen', [text, ...infoScreen])
}