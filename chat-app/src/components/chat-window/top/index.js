import React, { memo } from 'react';
import { useCurrentRoom } from '../../../context/context-room.context';
import { ButtonToolbar, Icon } from 'rsuite';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  const isAdmins = useCurrentRoom(v => v.isAdmins);
  const isMobile = useMediaQuery('(max-width:992px)');
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="text-disappear d-flex align-items-center">
          <Icon
            componentClass={Link}
            to="/"
            icon="arrow-circle-left"
            size="2x"
            className={
              isMobile
                ? 'd-inline-block p-0 mr-2 text-blue link-unstyled'
                : 'd-none'
            }
          />
          <span className="text-disappwar">{name}</span>
        </h4>
        <ButtonToolbar className="white-sapce:no-wrap">
          {isAdmins && <EditRoomBtnDrawer />}
        </ButtonToolbar>
        <div className="d-flex justify-content-between align-items-center">
          <span>todo</span>
          <RoomInfoBtnModal />
        </div>
      </div>
    </div>
  );
};
export default memo(Top);
