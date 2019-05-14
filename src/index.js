
import addEventListener from './Dom/addEventListener';
import { getClientSize, getOffset } from './Dom/css';
import { requestAnimationFrame, cancelAnimationFrame } from './Dom/animation';

const util = {
  addEventListener,
  requestAnimationFrame,
  cancelAnimationFrame,
  getClientSize,
  getOffset
};

export default util;
