import { Popup } from "@/components/popup";
import ArrowSVG from "@/icons/arrow";
import PopupIconSVG from "@/icons/popup-icon";
import { useState, type ReactNode } from "react";

export function WelcomePopup() {
  const [contents, setContents] = useState<WelcomeContent[]>([
    {
      innerContentBuilder: () => <ThinkContent />,
      description: "я диспетчер",
    },
    {
      innerContentBuilder: () => <MeanContent />,
      description: "а что это значит?",
    },
  ]);
  const [currentContent, setContent] = useState<WelcomeContent>(contents[0]);
  const [showInnerContent, setShowInnerContent] = useState(false);

  return (
    <Popup>
      <div className="absolute w-full h-full">
        <div className="flex flex-col items-center pt-[37px]">
          <PopupIconSVG className="w-popup-icon-w h-popup-icon-h" />
          <h1 className="font-header text-header text-text">Добрый вечер</h1>
          <p className="font-text text-p pb-[33px]">
            {currentContent.description}
          </p>
          <div className="flex flex-row gap-[24px] items-center">
            <button className="btn-control relative">
              <div className="left-[50%] top-[50%] -translate-x-1/2 -translate-1/2 absolute ">
                <ArrowSVG />
              </div>
            </button>
            <button className="btn-primary">выбрать</button>
            <button className="btn-control relative">
              <div className="rotate-180 left-[50%] top-[50%] -translate-x-1/2 -translate-1/2 absolute ">
                <ArrowSVG />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Popup>
  );
}

interface WelcomeContent {
  innerContentBuilder: () => ReactNode;
  description: string;
}

const ThinkContent = () => {
  return (
    <>
      <PopupIconSVG className="w-popup-icon-w h-popup-icon-h" />
    </>
  );
};

const MeanContent = () => {
  return (
    <>
      <PopupIconSVG className="w-popup-icon-w h-popup-icon-h" />
    </>
  );
};
