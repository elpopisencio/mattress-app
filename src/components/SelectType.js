export const SelectType = ({ setType, type, mattresses }) => {
  return (
    <div>
      <h3 className="subtitle is-left" style={{ marginBottom: ".5rem" }}>
        SELECT MATTRESS TYPE
      </h3>
      <div class="field has-addons">
        {Object.keys(mattresses).map((currentType) => (
          <button
            class="button is-fullwidth"
            style={{
              backgroundColor: type === currentType && "#a6a19a",
              color: type === currentType && "white",
              borderRadius: 0,
              margin: 0,
              padding: "1.5rem",
            }}
            onClick={() => setType(currentType)}
          >
            <span>{mattresses[currentType].name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
