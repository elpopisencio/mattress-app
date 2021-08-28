export const Rating = ({ mattresses, type }) => (
  <div style={{ position: "relative" }}>
    <div style={{ position: "absolute", width: "7rem" }}>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
      <i className="far fa-star"></i>
    </div>
    <div
      style={{
        position: "absolute",
        width: `${(mattresses[type].reviewRating * 5.8) / 5}rem`,
        overflow: "hidden",
      }}
    >
      <div style={{ width: "7rem" }}>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
    </div>
  </div>
);
