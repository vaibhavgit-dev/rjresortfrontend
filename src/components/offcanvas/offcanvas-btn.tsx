"use client";
import React from "react";
import ModalProvider from "../provider/modal-provider";
import OffcanvasArea from "./offcanvas-area";

type IProps = {
  lines?: number;
};
export default function OffcanvasBtn({lines=3 }: IProps) {
  const [openOffcanvas, setOpenOffcanvas] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpenOffcanvas(!openOffcanvas)}
        className="tp-offcanvas-open-btn"
      >
        {lines === 3 ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <>
            <span></span>
            <span></span>
          </>
        )}
      </button>

      <ModalProvider>
        <OffcanvasArea
          open={openOffcanvas}
          onClose={() => setOpenOffcanvas(false)}
        />
      </ModalProvider>
    </>
  );
}
