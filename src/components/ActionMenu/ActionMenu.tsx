import { MenuTrigger, Popover, Menu, MenuItem } from 'react-aria-components';
import { Ellipsis } from 'lucide-react';

import Button from '../Button/Button';

import actionMenuCss from './styles';

type MenuItem = {
  text: string,
  onAction: () => void,
};
type ActionMenuProps = {
  menuItems: MenuItem[],
  dataName: string,
  ariaLabel?: string,
};

const ActionMenu = ({
  menuItems,
  dataName,
  ariaLabel,
}: ActionMenuProps) => (
  <MenuTrigger>
    <Button
      variant='icon'
      ariaLabel={ariaLabel}
      dataName={dataName}
    >
      <Ellipsis />
    </Button>
    <Popover placement="bottom end">
      <Menu css={actionMenuCss.menu}>
        {menuItems.map((menuItem, index) => {
          const isFirstItem = index === 0;
          const isLastItem = index + 1 === menuItems.length;

          return (
            <MenuItem 
              key={index}
              onAction={menuItem.onAction}
              css={actionMenuCss.menuItem({ isFirstItem, isLastItem })}
            >
              {menuItem.text}
            </MenuItem>
        )})}
      </Menu>
    </Popover>
  </MenuTrigger>          
);

export default ActionMenu;
