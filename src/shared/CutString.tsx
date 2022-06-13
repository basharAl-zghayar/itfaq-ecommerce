import { Tooltip } from "antd";
export interface ICutStringProps {
  text: string;
  limit: number;
}
const CutString = ({ text, limit }: ICutStringProps) => {
  return (
    <div>
      {text?.length < limit ? (
        <span>{text}</span>
      ) : (
        <Tooltip placement="topLeft" title={text}>
          <span>
            {text.length > limit ? text?.substring(0, limit - 1) + "..." : text}
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export default CutString;
