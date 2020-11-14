const notificationStatus = {
  granted: 'granted',
  denied: 'denied',
};

function hasSupportToNotification() {
  if (!('Notification' in window)) {
    console.warn('O Browser não possui suporte a notificações');
    return false;
  }

  return true;
}

async function requestPermission() {
  if (!hasSupportToNotification()) return;

  if (Notification.permission in notificationStatus) return;

  Notification.requestPermission();
}

async function notify(message) {
  if (!hasSupportToNotification()) return;

  await Notification.requestPermission();

  try {
    // eslint-disable-next-line no-new
    new Notification(message);
  } catch (e) {
    console.error('error', e);
  }
}

export default {
  requestPermission,
  notify,
};
