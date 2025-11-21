import { useState } from 'react';

import EditActionButtons from '../EditActionButtons/EditActionButtons';
import TextField from '../TextArea/TextArea';
import type { Comment as TComment } from '../../types';


type NewCommentProps = {
  onCreate: (comment: Partial<TComment>) => void,
  parentId: string | null,
  onCancel?: () => void,
};

const NewComment = ({ 
  onCreate,
  parentId,
  onCancel,
}: NewCommentProps) => {
  const [commentText, setCommentText] = useState('');
  const handleOnCreate = () => {
    const newComment = {
      content: commentText,
      parentId,
    };
    onCreate(newComment);
    setCommentText('');
  }
  const handleOnDelete = () => {
    setCommentText('');
    if (onCancel) onCancel();
  }

  const isCreateDisabled = commentText === '';
  const isDeleteDisabled = onCancel
    ? false
    : commentText === '';

  return (
    <TextField
      label='Nuevo Comentario'
      value={commentText}
      onChange={(value) => setCommentText(value)}
    >
      <EditActionButtons
        handleOnCreate={handleOnCreate}
        handleOnDelete={handleOnDelete}
        isCreateDisabled={isCreateDisabled}
        isDeleteDisabled={isDeleteDisabled}
        cancelTitle='¿Descartar comentario?'
        cancelMessage='Tienes un comentario en curso, ¿estás seguro de que quieres descartarlo?'
        createText='Comentar'
      />
    </TextField>
  );
};

export default NewComment;
