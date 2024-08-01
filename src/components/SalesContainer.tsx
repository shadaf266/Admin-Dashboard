import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

export type SalesContainerType = {
  className?: string;
};

const SalesContainer: FunctionComponent<SalesContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[26px] box-border gap-6 max-w-full text-left text-lg text-darkslategray font-montserrat mq925:flex-wrap ${className}`}
    >
      <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-white border-whitesmoke border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] pl-[23px] pr-[22px] gap-9 max-w-full gap-[18px] mq700:pt-5 mq700:pb-5 mq700:box-border mq700:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq700:flex-wrap">
          <div className="w-[79px] flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-5 box-border">
            <b className="relative leading-[28px] inline-block min-w-[49px]">
              Sales
            </b>
          </div>
          <div className="flex flex-col items-start justify-start pt-16 px-0 pb-0 text-sm text-gray-100 font-inter">
            <div className="flex flex-row items-start justify-start gap-[19px] mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-1">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="w-4 h-4 relative rounded-[50%] bg-darkturquoise" />
                </div>
                <div className="relative leading-[22px] inline-block min-w-[74px]">
                  Veniam dol
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-1">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="w-4 h-4 relative rounded-[50%] bg-mediumslateblue" />
                </div>
                <div className="relative leading-[22px] inline-block min-w-[74px]">
                  Veniam dol
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-1">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="w-4 h-4 relative rounded-[50%] bg-royalblue" />
                </div>
                <div className="relative leading-[22px] inline-block min-w-[74px]">
                  Veniam dol
                </div>
              </div>
            </div>
          </div>
          <FormControl
            className="h-[35px] w-[77px] font-inter text-sm text-gray-100"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#f3f4f6",
              borderRadius: "6px",
              width: "77px",
              height: "35px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "35px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "35px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "35px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "35px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#171a1f",
                fontSize: 14,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "12px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="14px"
                  height="14px"
                  src="/chevron-down-large.svg"
                  style={{ marginRight: "11px" }}
                />
              )}
            >
              <MenuItem>2022</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-center text-sm text-lightslategray font-inter">
          <div className="self-stretch flex flex-row items-start justify-start pt-[18.3px] px-0 pb-[18.4px] box-border relative max-w-full">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group.svg"
            />
            <img
              className="h-[330.3px] flex-1 relative max-w-full overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq700:flex-wrap">
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[1]">
                Jan
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0">
                Feb
              </div>
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <div className="ml-[-1px] w-[63px] relative leading-[22px] inline-block shrink-0 z-[1]">
                  Mar
                </div>
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[2]">
                Apr
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[3]">
                May
              </div>
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <div className="ml-[-1px] w-[63px] relative leading-[22px] inline-block shrink-0 z-[4]">
                  Jun
                </div>
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[5]">
                Jul
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[6]">
                Aug
              </div>
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <div className="ml-[-1px] w-[63px] relative leading-[22px] inline-block shrink-0 z-[7]">
                  Sep
                </div>
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[8]">
                Oct
              </div>
              <div className="flex-1 relative leading-[22px] inline-block min-w-[21px] shrink-0 z-[9]">
                Nov
              </div>
              <div className="flex flex-col items-start justify-start py-0 px-0">
                <div className="ml-[-1px] w-[63px] relative leading-[22px] inline-block shrink-0 z-[10]">
                  Dec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[575px] w-72 flex flex-col items-start justify-start gap-6 min-w-[288px] text-gray-100 font-epilogue mq925:flex-1">
        <div className="self-stretch flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded-md bg-white flex flex-col items-start justify-start py-6 pl-6 pr-[23px] gap-5">
          <b className="relative leading-[28px] inline-block min-w-[90px]">
            Statistics
          </b>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-7 text-sm font-inter">
            <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[16.6px]">
              <div className="h-[112.4px] flex flex-col items-start justify-start">
                <div className="w-[24.8px] flex-1 relative bg-mediumslateblue" />
                <div className="w-[24.8px] flex-1 relative bg-darkturquoise" />
              </div>
              <div className="h-[138px] w-[24.8px] relative">
                <div className="absolute top-[74.9px] left-[0px] bg-darkturquoise w-[24.8px] h-[63.1px]" />
                <div className="absolute top-[0px] left-[0px] bg-mediumslateblue w-[24.8px] h-[74.9px] z-[1]" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="w-[24.8px] h-[83.6px] relative bg-mediumslateblue" />
                <div className="w-[24.8px] flex-1 relative bg-darkturquoise" />
              </div>
              <div className="h-[116.7px] flex flex-col items-start justify-start">
                <div className="w-[24.8px] h-[41.5px] relative bg-mediumslateblue" />
                <div className="w-[24.8px] flex-1 relative bg-darkturquoise" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[61.5px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-3 h-3 relative rounded-[50%] bg-darkturquoise" />
                  </div>
                  <div className="relative leading-[22px] inline-block min-w-[42px]">
                    Data 1
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-3 h-3 relative rounded-[50%] bg-mediumslateblue" />
                  </div>
                  <div className="relative leading-[22px] inline-block min-w-[44px]">
                    Data 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-white border-whitesmoke border-[1px] border-solid flex flex-col items-start justify-start pt-[22px] pb-[35px] pl-[23px] pr-[22px] gap-[36.5px] font-montserrat gap-[18px]">
          <div className="flex flex-col items-start justify-start gap-0.5">
            <b className="relative leading-[28px] inline-block min-w-[87px]">
              Statistics
            </b>
            <div className="relative text-sm leading-[22px] font-inter text-lightslategray">
              From 1-15 June, 2022
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-7 text-sm font-inter">
            <img
              className="h-[123px] w-[123px] relative"
              loading="lazy"
              alt=""
              src="/chart.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-4">
                <div className="flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-3 h-3 relative rounded-[50%] bg-cornflowerblue" />
                  </div>
                  <div className="relative leading-[22px] inline-block min-w-[73px]">
                    Segment A
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-3 h-3 relative rounded-[50%] bg-limegreen" />
                  </div>
                  <div className="relative leading-[22px] inline-block min-w-[73px]">
                    Segment B
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-1">
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="w-3 h-3 relative rounded-[50%] bg-goldenrod" />
                  </div>
                  <div className="relative leading-[22px] inline-block min-w-[74px]">
                    Segment C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesContainer;
