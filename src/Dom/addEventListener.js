
import addDomEventListener from 'add-dom-event-listener';
import ReactDOM from 'react-dom';

export default function addEventListener(target, eventType, cb, option) {
  const callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;
  return addDomEventListener(target, eventType, callback, option);
}
