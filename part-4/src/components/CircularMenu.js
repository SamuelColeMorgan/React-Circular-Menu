import { useState } from 'react';
import CircularMenuItem from './CircularMenuItem';

function CircularMenu({ pages }) {
    // state variables

    const [isOpen, setIsOpen] = useState(false);

    // ------------------------------

    // handle set isOpen

    const handleSetIsOpen = () => {
      setIsOpen(prevBool => !prevBool);
    };

    // ------------------------------

    return (
        <div className="circular-menu">
        <div className="menu-button" onClick={handleSetIsOpen}></div>
        {
          pages.map(([page, color], index) => (
            <CircularMenuItem
                key={page}
                color={color}
                rotation={(360 / pages.length) * index}
                menuIsOpen={isOpen}
            />
          ))
        }
      </div>
    );
}

export default CircularMenu;