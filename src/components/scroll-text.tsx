import ArrowSVG from "@/icons/arrow";
import {
  OverlayScrollbarsComponent,
  type OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import { useRef, type ReactNode } from "react";

const scrollOffset = 50;

export const ScrollText = ({ text }: ScrollTextProps) => {
  const osRef = useRef<OverlayScrollbarsComponentRef>(null);
  const scroll = (offset: number) => {
    const viewport = osRef.current?.osInstance()?.elements().viewport;
    viewport?.scrollBy({ top: offset, behavior: "smooth" });
  };
  const scrollBottom = () => {
    scroll(scrollOffset);
  };
  const scrollTop = () => {
    scroll(-scrollOffset);
  };

  return (
    <div className="overlay-scrollbar rounded-[10px] h-full">
      <div className="overlay-scrollbar-track-back"></div>
      <button
        onClick={scrollTop}
        className="btn-effects overlay-scrollbar-control overlay-scrollbar-control-top bg-primary"
      >
        <ArrowSVG className="rotate-90 w-[7.5px] h-[7.5px]" />
      </button>
      <button
        onClick={scrollBottom}
        className="btn-effects overlay-scrollbar-control bg-primary overlay-scrollbar-control-bottom"
      >
        <ArrowSVG className="rotate-270 w-[7.5px] h-[7.5px]" />
      </button>
      <OverlayScrollbarsComponent
        defer
        ref={osRef}
        className="flex-1 border-3 rounded-[10px] h-full"
        options={{
          scrollbars: {
            theme: "os-theme-custom",
            autoHide: "never",
          },
        }}
      >
        <div className="pr-[20px]">{text}</div>
      </OverlayScrollbarsComponent>
    </div>
  );
};

interface ScrollTextProps {
  text: ReactNode;
}
