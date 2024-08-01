import { FunctionComponent } from "react";
import LayoutDropdownItem from "../components/LayoutDropdownItem";
import ProfileDetails from "../components/ProfileDetails";
import SalesContainer from "../components/SalesContainer";

const AdminDashboard: FunctionComponent = () => {
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-white overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-2.5 box-border gap-9 leading-[normal] tracking-[normal] text-left text-lg text-gray-100 font-inter gap-[18px] mq925:pl-5 mq925:pr-5 mq925:box-border">
      <div className="h-[933px] w-64 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] bg-white flex flex-col items-start justify-start pt-4 pb-[344px] pl-4 pr-[13px] box-border gap-[63px] gap-[31px] mq925:hidden mq925:pt-5 mq925:pb-56 mq925:box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-4">
          <div className="self-stretch shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-white overflow-hidden flex flex-row items-start justify-start p-4 gap-2">
            <img
              className="h-10 w-10 relative rounded overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/image-1.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <a className="[text-decoration:none] relative leading-[28px] font-bold text-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[100px]">
                Brand Logo
              </a>
            </div>
          </div>
          <div className="self-stretch flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-whitesmoke flex flex-col items-start justify-start pt-0 px-0 pb-[7px] relative gap-[23px] text-sm text-dimgray">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-2 shrink-0">
              <div className="self-stretch h-10 relative rounded bg-gray-200 overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_11px)] left-[48px] leading-[22px] hidden w-40">
                  Dashboard
                </div>
                <img
                  className="absolute top-[calc(50%_-_12px)] left-[16px] w-6 h-6 overflow-hidden hidden"
                  alt=""
                  src="/layout-12.svg"
                />
                <div className="absolute top-[0px] left-[0px] rounded bg-slateblue w-full overflow-hidden flex flex-row items-start justify-start pt-2 px-4 pb-1.5 box-border gap-2 z-[1] text-white">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/insert-chart-outlined.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <a className="[text-decoration:none] self-stretch relative leading-[22px] font-bold text-[inherit]">
                      Dashboard
                    </a>
                  </div>
                </div>
                <img
                  className="absolute top-[11px] left-[191px] w-[18px] h-[18px] overflow-hidden z-[1]"
                  alt=""
                  src="/downcircleoutlined.svg"
                />
              </div>
              <LayoutDropdownItem
                board="Analytics"
                inbox="Review and rating"
                inbox1="Company and brands"
              />
            </div>
            <div className="w-full h-10 !m-[0] absolute top-[194px] left-[0px] rounded bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-2 px-4 pb-1.5 box-border gap-2 z-[1]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/file-article.svg"
              />
              <div className="h-[22px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <a className="[text-decoration:none] self-stretch relative leading-[22px] text-[inherit]">
                  Post
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[244px] flex flex-col items-start justify-start gap-[26px] text-sm text-dimgray">
          <div className="self-stretch flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-mini bg-whitesmoke flex flex-col items-end justify-start pt-0 px-0 pb-[7px] gap-2">
            <div className="self-stretch rounded bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-0.5">
              <div className="h-0 w-40 relative leading-[22px] hidden shrink-0">
                Dashboard
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/layout-12.svg"
              />
              <div className="flex-1 rounded bg-slateblue overflow-x-auto flex flex-row items-start justify-start pt-2 pb-1.5 pl-4 pr-[15px] z-[1] text-white">
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/insert-chart-outlined.svg"
                  />
                </div>
                <div className="w-[143px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <b className="self-stretch relative leading-[22px]">
                    Reports
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[18px] h-[18px] relative overflow-hidden shrink-0"
                    alt=""
                    src="/downcircleoutlined.svg"
                  />
                </div>
              </div>
            </div>
            <LayoutDropdownItem
              board="Consolidate report"
              propWidth="120px"
              inbox="Trend report"
              propDisplay="unset"
              propMinWidth="unset"
              propAlignSelf="stretch"
              propWidth1="147px"
              inbox1="Performance report"
              propAlignSelf1="stretch"
            />
          </div>
          <div className="h-10 flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border">
            <div className="self-stretch w-56 bg-gray-200 overflow-x-auto shrink-0 flex flex-row items-start justify-start pt-2 pb-1.5 pl-4 pr-[15px] box-border z-[1]">
              <div className="w-56 shrink-0 flex flex-col items-start justify-start">
                <img
                  className="self-stretch h-[0.5px] relative max-w-full overflow-hidden shrink-0"
                  alt=""
                  src="/line-1.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/settings-gear.svg"
                />
              </div>
              <div className="h-[22px] w-40 shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[22px]">
                  Settings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_292px)] mq925:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <ProfileDetails />
          <SalesContainer />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
