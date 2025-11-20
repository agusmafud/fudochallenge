import { useState } from 'react';
import { TextField, TextArea, Label } from 'react-aria-components';

import Button from '../Button/Button';
import Dialog from '../Dialog/Dialog';
import type { Comment as TComment } from '../../types';

import newCommentCss from './styles';

type NewCommentProps = {
  onCreate: (comment: Partial<TComment>) => void,
  parentId: string | null,
};

const NewComment = ({ 
  onCreate,
  parentId,
}: NewCommentProps) => {
  const [commentText, setCommentText] = useState('');
  const handleOnCreate = () => {
    onCreate({
      content: commentText,
      parentId,
    });
    setCommentText('');
  }
  const handleOnDelete = () => {
    setCommentText('');
  }

  const areButtonsDisabled = commentText === '';

  return (
    <TextField css={newCommentCss.textField}>
      <Label css={newCommentCss.visuallyHidden}>Nuevo comentario</Label>
      <TextArea
        css={newCommentCss.textArea}
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
        aria-label='Nuevo Comentario'
      />
      <div css={newCommentCss.buttonRow}>
        <Dialog
          isAlert
          title='¿Descartar comentario?'
          cancelText='Cancelar'
          confirmText='Descartar'
          onConfirm={handleOnDelete}
          trigger={(
            <Button
              isDisabled={areButtonsDisabled}
              variant='secondary'
              ariaLabel='Cancelar comentario'
            >
              Cancelar
            </Button>
          )}
        >
          Tienes un comentario en curso, ¿estás seguro de que quieres descartarlo?
        </Dialog>
        <Button
          isDisabled={areButtonsDisabled}
          variant='primary'
          ariaLabel='Crear comentario'
          onClick={handleOnCreate}
        >
          Comentar
        </Button>
      </div>
    </TextField>
  );
};

export default NewComment;
