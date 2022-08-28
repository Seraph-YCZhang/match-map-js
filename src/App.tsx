import Block from "./components/Block";
import Connect from "./components/Connect";
import PairCtn from "./components/PairCtn";
import "./styles.css";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <PairCtn>
        <div style={{ display: "flex" }}>
          <PairCtn>
            <Block content="Wings" />
            <Block content="Alliance " />
          </PairCtn>
          <Connect />
          <div style={{ alignSelf: "center" }}>
            <Block content="Wings" isWin={true} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <PairCtn>
            <Block content="Fantic" />
            <Block content="EG " />
          </PairCtn>
          <Connect />
          <div style={{ alignSelf: "center" }}>
            <Block content="EG" isWin={true} />
          </div>
        </div>
      </PairCtn>

      <Connect />
      <div style={{ alignSelf: "center" }}>
        <Block content="Wings" isWin={true} />
      </div>
    </div>
  );
}
