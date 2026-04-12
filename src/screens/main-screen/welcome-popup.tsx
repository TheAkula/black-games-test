import { Popup } from "@/components/popup";
import { ScrollText } from "@/components/scroll-text";
import { Stars } from "@/components/stars";
import ArrowSVG from "@/icons/arrow";
import PopupIconSVG from "@/icons/popup-icon";
import XSVG from "@/icons/x";
import { useState, type ReactNode } from "react";

export function WelcomePopup() {
  const [contents, setContents] = useState<WelcomeContent[]>([
    {
      innerContentBuilder: () => (
        <ThinkContent
          onClose={() => {
            setShowInnerContent(false);
          }}
        />
      ),
      description: "я диспетчер",
    },
    {
      innerContentBuilder: () => (
        <MeanContent
          onClose={() => {
            setShowInnerContent(false);
          }}
        />
      ),
      description: "а что это значит?",
    },
  ]);
  const [currentContent, setContent] = useState<WelcomeContent>(contents[0]);
  const [showInnerContent, setShowInnerContent] = useState(false);

  const selectPrevContent = () => {
    const currentContentIndex = contents.indexOf(currentContent);
    if (currentContentIndex > 0) {
      setContent(contents[currentContentIndex - 1]);
    }
  };

  const selectNextContent = () => {
    const currentContentIndex = contents.indexOf(currentContent);
    if (
      currentContentIndex != -1 &&
      currentContentIndex < contents.length - 1
    ) {
      setContent(contents[currentContentIndex + 1]);
    }
  };

  const showInnerContentHandler = () => {
    setShowInnerContent(true);
  };

  return (
    <Popup>
      <div className="absolute w-full h-full">
        <div className="flex flex-col items-center pt-[37px]">
          {!showInnerContent ? (
            <>
              <PopupIconSVG className="w-popup-icon-w h-popup-icon-h" />
              <h1 className="font-header leading-tight text-header text-text">
                Добрый вечер
              </h1>
              <p className="font-text text-p pb-[33px]">
                {currentContent.description}
              </p>
              <div className="flex flex-row gap-[24px] items-center">
                <button
                  className="btn-control relative btn-effects"
                  onClick={selectPrevContent}
                >
                  <div className="left-[50%] top-[50%] -translate-x-1/2 -translate-1/2 absolute ">
                    <ArrowSVG />
                  </div>
                </button>
                <button
                  className="btn-primary btn-effects"
                  onClick={showInnerContentHandler}
                >
                  выбрать
                </button>
                <button
                  className="btn-control relative btn-effects"
                  onClick={selectNextContent}
                >
                  <div className="rotate-180 left-[50%] top-[50%] -translate-x-1/2 -translate-1/2 absolute ">
                    <ArrowSVG />
                  </div>
                </button>
              </div>
            </>
          ) : (
            currentContent.innerContentBuilder()
          )}
        </div>
      </div>
    </Popup>
  );
}

interface WelcomeContent {
  innerContentBuilder: () => ReactNode;
  description: string;
}

const ThinkContent = ({ onClose }: { onClose: VoidFunction }) => {
  return (
    <>
      <PopupIconSVG className="w-popup-icon-w h-popup-icon-h rotate-180 mb-[7px]" />
      <Stars rating={0} />
      <h1 className="font-header leading-tight text-header text-text mt-[6px]">
        Добрый вечер
      </h1>
      <p className="text-text font-text text-p">вот и думайте</p>
      <button
        className="btn-control flex justify-center items-center mt-[63px] btn-effects"
        onClick={onClose}
      >
        <XSVG />
      </button>
    </>
  );
};

const MeanContent = ({ onClose }: { onClose: VoidFunction }) => {
  return (
    <>
      <PopupIconSVG className="w-popup-icon-w h-popup-icon-h rotate-180 mb-[7px]" />
      <Stars rating={3} />
      <h1 className="font-header leading-tight text-header text-text mt-[6.5px] mb-[10px]">
        Добрый вечер
      </h1>
      <div className="max-w-scroll-text-max-width h-scroll-text-height mb-[16px]">
        <ScrollText
          text={
            <div className="pl-[20px] pr-[20px] py-[12px] text-text font-paragraph text-paragraph">
              <p>Почему вообще люди ждут конца света?</p>
              <p>
                И почему, если таковой предстоит, он обязательно должен быть для
                большинства человеческого рода ужасным?..
              </p>
              <p>
                Ответ на первый вопрос состоит, по-видимому, в том, что
                существование мира, как подсказывает людям разум, имеет ценность
                лишь постольку, поскольку разумные существа соответствуют в нем
                конечной цели своего бытия; если же последняя оказывается
                недостижимой, то сотворенное бытие теряет в их глазах смысл, как
                спектакль без развязки и замысла.
              </p>
              <p>
                Ответ на второй вопрос основывается на мнении о безнадежной
                испорченности человеческого рода, ужасный конец которого
                представляется подавляющему большинству людей единственно
                соответствующим высшей мудрости и справедливости.
              </p>
            </div>
          }
        />
      </div>
      <button
        className="btn-control flex justify-center items-center btn-effects"
        onClick={onClose}
      >
        <XSVG />
      </button>
    </>
  );
};
