function CircularMenuItem({ color, rotation }) {
    return (
        <div
            className="menu-item"
            style={{
              backgroundColor: color,
              transform: `rotate(${rotation}deg) translate(175%)`
            }}
        >

        </div>
    );
}

export default CircularMenuItem;