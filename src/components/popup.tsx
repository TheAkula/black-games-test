import type { PropsWithChildren, ReactNode } from "react";

export function Popup({ children, icon }: PropsWithChildren<PopupProps>) {
  return (
    <div className="max-w-popup-w-sm max-h-popup-h-sm sm:max-w-popup-w sm:max-h-popup-h w-full h-full fixed left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 p-[10px] sm:p-[20px]">
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-secondary rounded-[50px] border-primary border-[10px] sm:border-[20px]">
        <div className="rounded-full z-10 w-popup-circle-w aspect-square position absolute bg-secondary -translate-y-1/3 top-0 left-[50%] -translate-x-1/2 border-primary border-[10px] sm:border-[20px]"></div>
        <div className="z-15 w-full h-full absolute bg-secondary sm:rounded-[30px] rounded-[40px] left-0 top-0"></div>
        <div className="absolute z-15 top-0 left-[50%] -translate-y-7/11 -translate-x-1/2 w-popup-icon-w aspect-square">
          {icon}
        </div>
        <div className="relative z-20 w-full h-full overflow-hidden pt-[40px] sm:pt-[57px] pb-[20px] px-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
}

interface PopupProps {
  icon: ReactNode;
}
