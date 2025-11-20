import { useEffect } from 'react';

import { queue } from '../../toastQueue';

type UseToastNotificationParams = {
  isActive: boolean;
  title: string;
  timeout?: number;
};

const useToastNotification = ({
  isActive,
  title,
  timeout = 3000,
}: UseToastNotificationParams) => {
  useEffect(() => {
    if (isActive) {
      queue.add({ title }, { timeout });
    }
  }, [isActive, title, timeout]);
};

export default useToastNotification;

