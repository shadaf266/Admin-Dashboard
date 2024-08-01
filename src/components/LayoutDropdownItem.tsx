import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LayoutDropdownItemType = {
  className?: string;
  board?: string;
  inbox?: string;
  inbox1?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const LayoutDropdownItem: FunctionComponent<LayoutDropdownItemType> = ({
  className = "",
  board,
  propWidth,
  inbox,
  propDisplay,
  propMinWidth,
  propAlignSelf,
  propWidth1,
  inbox1,
  propAlignSelf1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const inboxStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay, propMinWidth, propAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const inbox1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-col items-start justify-start py-0 pl-2 pr-0 relative gap-[3px] text-left text-sm text-dimgray font-inter ${className}`}
    >
      <div className="w-[216px] h-10 !m-[0] absolute top-[0px] left-[8px] rounded bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-2 pb-1.5 pl-4 pr-2 box-border gap-2 z-[1]">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/layout-12.svg"
        />
        <div className="h-[22px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <a className="[text-decoration:none] self-stretch relative leading-[22px] text-[inherit]">
            {board}
          </a>
        </div>
      </div>
      <div className="self-stretch h-20 flex flex-col items-start justify-start relative mq450:h-20">
        <div className="w-full h-10 !m-[0] absolute top-[0px] left-[0px] rounded bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-2 px-4 pb-1.5 box-border gap-2 z-[1]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/file-article.svg"
          />
          <div
            className="h-[22px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border"
            style={frameDivStyle}
          >
            <a
              className="[text-decoration:none] relative leading-[22px] text-[inherit] inline-block min-w-[120px]"
              style={inboxStyle}
            >
              {inbox}
            </a>
          </div>
        </div>
        <div className="w-full h-10 !m-[0] absolute top-[40px] left-[0px] rounded bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-2 px-4 pb-1.5 box-border gap-2 z-[1]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/file-article.svg"
          />
          <div
            className="h-[22px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border"
            style={frameDiv1Style}
          >
            <a
              className="[text-decoration:none] relative leading-[22px] text-[inherit]"
              style={inbox1Style}
            >
              {inbox1}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutDropdownItem;
