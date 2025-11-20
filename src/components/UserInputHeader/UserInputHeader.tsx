import formatRelativeTime from "../../helpers/formatRelativeTime";
import formatDate from "../../helpers/formatDate";

import userInputCss from './styles';

type UserInputHeaderProps = {
  createdAt: string,
  name: string,
  avatar: string,
  isBig?: boolean,
};

const UserInputHeader = ({
  createdAt,
  name,
  avatar,
  isBig = false,
}: UserInputHeaderProps) => (
  <div css={userInputCss.header}>
    <img
      src={avatar}
      alt={`${name} avatar`}
      css={userInputCss.avatar(isBig)}
    />
    <div css={userInputCss.name}>{name}</div>
    <div>•</div>
    <time
      dateTime={createdAt}
      title={formatDate(createdAt)}
      css={userInputCss.time}
    >
      {formatRelativeTime(createdAt)}
    </time>
  </div>
);

export default UserInputHeader;
