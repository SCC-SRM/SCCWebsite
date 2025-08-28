import React, { useEffect, useRef } from "react";

function RecruitmentForm() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // inject tally script if missing
    const existing = document.getElementById("tally-embed-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "tally-embed-script";
      script.async = true;
      script.src = import.meta.env.VITE_SCRIPT_URL;
      document.body.appendChild(script);
    }

    // add overlay style to hide badge
    const style = document.createElement("style");
    style.textContent = `
      .tally-overlay {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 200px;
        height: 80px;
        background: ${import.meta.env.VITE_OVERLAY_BG_COLOR};
        z-index: 1001;
        pointer-events: auto;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: default;
      }
    `;
    document.head.appendChild(style);

    // cleanup style on unmount
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] bg-white">
      {/* form iframe */}
      <iframe
        ref={iframeRef}
        data-tally-src={import.meta.env.VITE_FORM_URL}
        width="100%"
        height="100%"
        title="Join the Swift Coding Club – SRM"
        className="absolute inset-0 w-full h-full border-0"
        style={{ backgroundColor: "white" }}
      />
      {/* overlay to hide badge */}
      <div className="tally-overlay"></div>
    </div>
  );
}

export default RecruitmentForm;
