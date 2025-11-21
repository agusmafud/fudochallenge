import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';

import editActionButtonsCss from './styles';

type EditActionButtonsProps = {
  handleOnCreate: () => void,
  handleOnDelete: () => void,
  isCreateDisabled?: boolean,
  isDeleteDisabled?: boolean,
  cancelTitle: string,
  cancelMessage: string,
  createText: string,
  cancelText?: string,
  confirmCancelText?: string,
};

const EditActionButtons = ({ 
  handleOnCreate,
  handleOnDelete,
  isCreateDisabled = false,
  isDeleteDisabled = false,
  cancelTitle,
  cancelMessage,
  createText,
  cancelText = 'Cancelar',
  confirmCancelText = 'Descartar',
}: EditActionButtonsProps) => (
  <div css={editActionButtonsCss.buttonRow}>
    <Dialog
      isAlert
      title={cancelTitle}
      cancelText={cancelText}
      confirmText={confirmCancelText}
      onConfirm={handleOnDelete}
      trigger={(
        <Button
          isDisabled={isDeleteDisabled}
          variant='secondary'
          ariaLabel={cancelTitle}
        >
          {cancelText}
        </Button>
      )}
    >
      {cancelMessage}
    </Dialog>
    <Button
      isDisabled={isCreateDisabled}
      variant='primary'
      ariaLabel={createText}
      onClick={handleOnCreate}
    >
      {createText}
    </Button>
  </div>
);

export default EditActionButtons;
