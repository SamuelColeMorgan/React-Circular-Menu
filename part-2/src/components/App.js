function App() {
  return (
    <div className="page-container">
      <div className="circular-menu">
        <div className="menu-button"></div>
        {
          [
            ["About", "#3E84E6"],
            ["Contact", "#15AB88"],
            ["Portfolio", "#eb5089"],
            ["LinkedIn", "#AFD91A"],
            ["Dribbble", "#F27127"],
            ["Facebook", "#07C7F2"],
            ["Twitter", "#9768D1"],
            ["Instagram", "#F2B705"],
          ].map(([page, color], index) => (
            <div
              key={page}
              className="menu-item"
              style={{
                backgroundColor: color,
                transform: `rotate(${(360 / 8) * index}deg) translate(175%)`
              }}
            >
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
