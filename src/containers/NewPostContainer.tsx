import { MessageSquarePlus } from 'lucide-react';

import useUpdatePost from '../hooks/useUpdatePost';
import PostDialog from '../components/PostDialog/PostDialog';
import Button from '../components/Button/Button';

const NewPostContainer = () => {
  const {
    createNewPost,
  } = useUpdatePost();

  return (
    <PostDialog
      onSubmit={createNewPost}
      trigger={(
        <div>
          <Button
            variant='ghost'
            ariaLabel='Crear Post'
          >
            <MessageSquarePlus />
            Crear
          </Button>
        </div>
      )}
    />
  );
};

export default NewPostContainer;
