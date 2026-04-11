import PopupBackgroundSVG from "@/icons/popup-background";
import PopupIconSVG from "@/icons/popup-icon";
import type { PropsWithChildren } from "react";

export function Popup({ children }: PropsWithChildren) {
  return (
    <div className="max-w-popup-w max-h-popup-h w-full h-full fixed left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2">
      <PopupBackgroundSVG className="absolute w-full h-full" />
      <PopupIconSVG className="absolute left-[50%] -translate-x-1/2 translate-y-popup-icon-inset-top w-popup-icon-w h-popup-icon-h" />
      {children}
    </div>
  );
}
