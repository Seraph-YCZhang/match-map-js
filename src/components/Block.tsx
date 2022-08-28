import { ReactNode } from "react";
import "./Block.css";

type Props = {
  content: ReactNode;
  isWin?: boolean;
};

const Block = ({ content, isWin = false }: Props) => {
  return (
    <div className="block-container">
      {content} {isWin ? <span className="block-winner-tag">Winner</span> : ""}
    </div>
  );
};

export default Block;
