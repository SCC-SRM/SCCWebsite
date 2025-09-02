import React, { useEffect, useRef, useState } from "react";

function RecruitmentForm() {
  const iframeRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // inject script if missing
    const existing = document.getElementById("tally-embed-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "tally-embed-script";
      script.async = true;
      script.src = import.meta.env.VITE_SCRIPT_URL;
      document.body.appendChild(script);
    }

    // iframe load handler with delay
    const handleIframeLoad = () => {
      console.log('Iframe loaded!');
      // delay state update
      setTimeout(() => {
        setIsLoaded(true);
      }, 550);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      // bind load event
      iframe.addEventListener('load', handleIframeLoad);
      console.log('Event listener added to iframe');
    }
    // add overlay style
    const style = document.createElement("style");
    style.id = "tally-overlay-style";
    style.textContent = `
      .tally-overlay {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 200px;
        height: 80px;
        background: #FFFFFF !important;
        z-index: 1001;
        pointer-events: auto;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: default;
      }
      
      /* Mobile styles - cover full bottom row */
      @media (max-width: 768px) {
        .tally-overlay {
          width: 100%;
          height: 60px;
          right: 0;
          left: 0;
        }
      }
    `;
    document.head.appendChild(style);
    console.log('Initial white overlay style added');

    // cleanup style and event listener on unmount
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  // update overlay background based on load state
  useEffect(() => {
    const style = document.getElementById('tally-overlay-style');
    if (style) {
      const backgroundColor = isLoaded ? import.meta.env.VITE_OVERLAY_BG_COLOR : '#FFFFFF';
      style.textContent = `
        .tally-overlay {
          position: fixed;
          bottom: 0;
          right: 0;
          width: 200px;
          height: 80px;
          background: ${backgroundColor} !important;
          z-index: 1001;
          pointer-events: auto;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          cursor: default;
        }
        
        /* mobile styles */
        @media (max-width: 768px) {
          .tally-overlay {
            width: 100%;
            height: 60px;
            right: 0;
            left: 0;
          }
        }
      `;
    }
  }, [isLoaded]);
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
