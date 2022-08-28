import "./Connect.css";

const Connect = () => {
  return (
    <div style={{ display: "flex", width: "40px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: "1",
          height: "100%"
          // borderRight: "1px solid black"
        }}
        className="connect-left"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            flex: "1"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              borderTop: "1px solid black",
              width: "100%"
            }}
          >
            {/* 123 */}
          </div>
        </div>
        <div style={{ position: "relative", width: "100%", flex: "1" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              borderTop: "1px solid black",
              width: "100%"
            }}
          >
            {/* 123 */}
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid black",
          width: "50%",
          alignSelf: "center"
        }}
      />
    </div>
  );
};

export default Connect;
