import React, { memo } from 'react';
import { useCurrentRoom } from '../../../context/context-room.context';
import { ButtonToolbar, Icon } from 'rsuite';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';

const Top = () => {
  const name = useCurrentRoom(v => v.name);
  const isMobile = useMediaQuery('(max-width:992px)');
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h4>
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
        <ButtonToolbar className="white-sapce:no-wrap">todo</ButtonToolbar>
        <div className="d-flex justify-content-between align-items-center">
          <span>todo</span>
          <RoomInfoBtnModal />
        </div>
      </div>
    </div>
  );
};
export default memo(Top);
