import { type ReactNode } from 'react';
import { DialogTrigger, Modal, Dialog as ReactAriaDialog, Heading } from 'react-aria-components';
import { X } from 'lucide-react';

import Button from '../Button/Button';

import dialogCss from './styles';
import ClickAwayOverlay from './ClickAwayOverlay';

type DialogProps = {
  trigger: ReactNode,
  title: string,
  children: string,
  cancelText?: string,
  confirmText: string,
  isAlert?: boolean,
  onConfirm: () => void,
};

const Dialog = ({ 
  trigger,
  title,
  children,
  cancelText = 'Cancelar',
  confirmText,
  isAlert = false,
  onConfirm,
}: DialogProps) => {
  return (
    <DialogTrigger>
      {trigger}
      <ClickAwayOverlay>
        <Modal>
          <div 
            onClick={e => e.stopPropagation()}
            css={dialogCss.dialogCentered} 
          >
            <ReactAriaDialog 
              css={dialogCss.dialogBox} 
              onClick={e => e.stopPropagation()}
              role={isAlert ? 'alertdialog' : 'dialog'}
            >
              {({close}) => {
                const handleConfirm = () => {
                  close();
                  onConfirm();
                };

                return (
                  <>
                    <Heading 
                      slot='title'
                      css={dialogCss.header}
                    >
                      {title}
                      <div css={dialogCss.spacer} />
                      <Button
                        variant='icon'
                        ariaLabel={cancelText}
                        onClick={close}
                      >
                        <X />
                      </Button>
                    </Heading>
                    <p css={dialogCss.children}>{children}</p>
                    <div css={dialogCss.buttons}>
                      <Button
                        variant='cancel'
                        ariaLabel={cancelText}
                        onClick={close}
                      >
                        {cancelText}
                      </Button>
                      <Button
                        variant='alertConfirm'
                        ariaLabel={confirmText}
                        onClick={handleConfirm}
                      >
                        {confirmText}
                      </Button>
                    </div>
                  </>
              )}}
            </ReactAriaDialog>
          </div>
        </Modal>
      </ClickAwayOverlay>
    </DialogTrigger>
  );
};

export default Dialog;
