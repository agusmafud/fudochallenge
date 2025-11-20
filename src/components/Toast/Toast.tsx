import {
  Text,
  UNSTABLE_Toast as ReactAriaToast,
  UNSTABLE_ToastContent as ToastContent,
  UNSTABLE_ToastRegion as ToastRegion,
  Button,
} from 'react-aria-components';
import { X } from 'lucide-react';

import { queue } from '../../toastQueue';

import { toastCss } from './styles';

const Toast = () => {
  return (
    <ToastRegion queue={queue} css={toastCss.region}>
      {({ toast }) => (
        <ReactAriaToast toast={toast} css={toastCss.toast}>
          <ToastContent css={toastCss.content}>
            <Text slot='title' css={toastCss.title}>
              {toast.content.title}
            </Text>
            <Text slot='description'>{toast.content.description}</Text>
          </ToastContent>
          <Button slot='close' css={toastCss.closeButton}>
            <X size={16} css={toastCss.closeIcon} />
          </Button>
        </ReactAriaToast>
      )}
    </ToastRegion>
  );
};

export default Toast;

