import { type ReactNode, useState } from 'react';

import Dialog from '../Dialog/Dialog';
import TextField from '../TextField/TextField';
import TextArea from '../TextArea/TextArea';
import postDialogCss from './styles';
import type { Post } from '../../types';

type PostDialogProps = {
  trigger: ReactNode,
  onSubmit: (data: { title: string; content: string }) => void,
  postToEdit?: Post,
};

const PostDialog = ({
  trigger,
  onSubmit,
  postToEdit,
}: PostDialogProps) => {
  const isCreation = !postToEdit;
  const [title, setTitle] = useState(postToEdit?.title ?? '');
  const [content, setContent] = useState(postToEdit?.content ?? '');

  const handleConfirm = () => {
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Dialog
      title={`${isCreation ? 'Crear nuevo' : 'Editar'} Post`}
      cancelText='Cancelar'
      confirmText={`${isCreation ? '¡Crear Post!' : 'Editar'}`}
      onConfirm={handleConfirm}
      trigger={trigger}
      width={600}
    >
      <div css={postDialogCss.container}>
        <TextField
          label='Título'
          value={title}
          onChange={setTitle}
        />
        <TextArea
          label='Contenido del Post'
          value={content}
          onChange={setContent}
          isLabelVisible
        />
      </div>
    </Dialog>
  );
};

export default PostDialog;
