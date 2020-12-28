import CircularMenuItem from './CircularMenuItem';

function CircularMenu({ pages }) {
    return (
        <div className="circular-menu">
        <div className="menu-button"></div>
        {
          pages.map(([page, color], index) => (
            <CircularMenuItem
                key={page}
                color={color}
                rotation={(360 / pages.length) * index}
            />
          ))
        }
      </div>
    );
}

export default CircularMenu;