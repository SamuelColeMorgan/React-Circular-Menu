function CircularMenuItem({ color, rotation, menuIsOpen }) {
    return (
        <div
            className="menu-item"
            style={{
              backgroundColor: color,
              transform: `rotate(${rotation}deg) translate(${menuIsOpen ? 175 : 0}%)`
            }}
        >

        </div>
    );
}

export default CircularMenuItem;