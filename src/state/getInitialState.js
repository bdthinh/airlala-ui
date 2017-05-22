/* @flow */
import uuid from 'uuid';

const DEVICE_ID_KEY = 'appName::deviceId';

const getDeviceId = () => {
  const deviceId = localStorage.getItem(DEVICE_ID_KEY) || uuid();
  localStorage.setItem(DEVICE_ID_KEY, deviceId);
  return deviceId;
};

export default function getInitialState() {
  const deviceId = getDeviceId();
  return {
    session: {
      deviceId,
    },
  };
}
