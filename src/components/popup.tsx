import PopupBackgroundSVG from "@/icons/popup-background";
import type { PropsWithChildren } from "react";

export function Popup({ children }: PropsWithChildren) {
  return (
    <div className="max-w-popup-w max-h-popup-h w-full h-full fixed left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2">
      <PopupBackgroundSVG className="absolute w-full h-full" />
      {children}
    </div>
  );
}
