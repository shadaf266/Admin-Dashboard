import { FunctionComponent } from "react";

export type ProfileDetailsType = {
  className?: string;
};

const ProfileDetails: FunctionComponent<ProfileDetailsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[282px] relative max-w-full text-left text-xs text-limegreen font-inter ${className}`}
    >
      <div className="absolute top-[120px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(235,_253,_255,_0.12)_inset,_0px_8px_17px_rgba(235,_253,_255,_0.15)_inset] rounded bg-azure w-[251px] flex flex-col items-start justify-start py-4 pl-4 pr-3.5 box-border gap-4">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <img
            className="h-11 w-11 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/profile-1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-1.5">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-3 h-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-up-large-1.svg"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[27px]">
                65%
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5 text-gray-100 font-epilogue">
          <b className="relative leading-[20px] inline-block min-w-[62px]">
            Data label
          </b>
          <b className="relative text-13xl leading-[48px] inline-block min-w-[109px] mq450:text-lgi mq450:leading-[29px] mq925:text-7xl mq925:leading-[38px]">
            23,423
          </b>
        </div>
      </div>
      <div className="absolute top-[120px] left-[275px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(245,_242,_253,_0.12),_0px_8px_17px_rgba(245,_242,_253,_0.15)] rounded bg-ghostwhite-100 w-[251px] flex flex-col items-start justify-start py-4 pl-4 pr-3.5 box-border gap-4">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <img
            className="h-11 w-11 relative overflow-hidden shrink-0"
            alt=""
            src="/chart-line-up-1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-1.5">
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-3 h-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-up-large-1.svg"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[27px]">
                25%
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5 text-gray-100 font-epilogue">
          <b className="relative leading-[20px] inline-block min-w-[62px]">
            Data label
          </b>
          <b className="relative text-13xl leading-[48px] inline-block min-w-[118px] mq450:text-lgi mq450:leading-[29px] mq925:text-7xl mq925:leading-[38px]">
            $23.3m
          </b>
        </div>
      </div>
      <a className="[text-decoration:none] absolute top-[62px] left-[3px] text-mini leading-[48px] font-bold font-montserrat text-gray-100 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">{`Dashboard / Report `}</a>
      <div className="absolute top-[120px] left-[549px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(241,_244,_253,_0.12),_0px_8px_17px_rgba(241,_244,_253,_0.15)] rounded bg-ghostwhite-200 w-[251px] flex flex-col items-start justify-start py-4 pl-4 pr-3.5 box-border gap-4 text-crimson">
        <div className="self-stretch flex flex-row items-start justify-between py-0 pl-0 pr-[7px] gap-5">
          <img
            className="h-11 w-11 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/smiley-1.svg"
          />
          <div className="h-5 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
            <div className="flex flex-row items-start justify-start gap-1.5">
              <div className="h-3 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <img
                  className="w-3 h-3 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevron-down-large-1.svg"
                />
              </div>
              <div className="relative leading-[20px] inline-block min-w-[19px]">
                5%
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5 text-gray-100 font-epilogue">
          <b className="relative leading-[20px] inline-block min-w-[62px]">
            Data label
          </b>
          <b className="relative text-13xl leading-[48px] inline-block min-w-[118px] mq450:text-lgi mq450:leading-[29px] mq925:text-7xl mq925:leading-[38px]">
            4,533.5
          </b>
        </div>
      </div>
      <div className="absolute top-[35px] left-[822px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-whitesmoke w-[165px] flex flex-col items-start justify-start pt-9 px-[5px] pb-2.5 box-border text-sm text-dimgray">
        <div className="self-stretch rounded bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-1 px-4 pb-[3px] gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/layout-12.svg"
          />
          <div className="w-40 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border shrink-0">
            <div className="self-stretch relative leading-[22px] shrink-0">
              Billing
            </div>
          </div>
        </div>
        <div className="self-stretch rounded bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-1 px-[17px] pb-[3px] gap-[7px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/settings-gear.svg"
          />
          <div className="w-40 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border shrink-0">
            <div className="self-stretch relative leading-[22px] shrink-0">
              Setting
            </div>
          </div>
        </div>
        <div className="self-stretch rounded bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-[5px] pb-1 pl-12 pr-0">
          <div className="w-40 relative leading-[22px] inline-block shrink-0">
            Logout
          </div>
        </div>
        <img
          className="w-8 h-8 absolute !m-[0] bottom-[3px] left-[25px] overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/loginoutlined.svg"
        />
        <div className="w-full !m-[0] absolute top-[5px] right-[-10px] rounded bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-1 px-4 pb-[3px] box-border gap-2 z-[2]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/layout-12.svg"
          />
          <div className="w-40 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border shrink-0">
            <div className="self-stretch relative leading-[22px] shrink-0">
              Profile
            </div>
          </div>
        </div>
      </div>
      <header className="absolute top-[0px] left-[1px] w-full flex flex-row items-start justify-between gap-5 max-w-full text-left text-13xl text-gray-100 font-montserrat">
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <a className="[text-decoration:none] relative leading-[48px] font-bold text-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[115px] whitespace-nowrap">
            Report
          </a>
        </div>
        <div className="flex flex-row items-start justify-start gap-[19px] text-xs text-whitesmoke font-inter">
          <div className="w-[113px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-mediumslateblue overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0.5 pb-0 pl-1 pr-0 box-border gap-1.5">
            <div className="w-[113px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border shrink-0">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[11px] shrink-0">
                <a className="[text-decoration:none] flex-1 relative leading-[22px] font-semibold text-[inherit] whitespace-nowrap">
                  Select country
                </a>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 ml-[-23px]">
                  <img
                    className="w-3 h-3 relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/downcircleoutlined-2.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="h-3 w-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/downcircleoutlined-3.svg"
            />
          </div>
          <div className="flex flex-row items-end justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
              <div className="w-[45px] h-6 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/search.svg"
                />
                <img
                  className="absolute top-[3px] left-[27px] w-[18px] h-[18px] overflow-hidden"
                  alt=""
                  src="/downcircleoutlined-4.svg"
                />
              </div>
            </div>
            <img
              className="h-7 w-7 relative rounded-lg overflow-hidden shrink-0 object-cover min-h-[28px]"
              loading="lazy"
              alt=""
              src="/avatar-1@2x.png"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default ProfileDetails;
