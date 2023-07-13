import { Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  const handleCopy = (e) => {
    e.stopPropagation();
    const element = e.currentTarget;
    const svg = e.currentTarget.firstElementChild;
    const textToCopy = e.currentTarget.dataset.text;
    navigator.clipboard.writeText(textToCopy);
    e.currentTarget.textContent = "copied!";
    setTimeout(() => {
      element.innerHTML = `${svg.outerHTML}${textToCopy}`;
    }, 3000);
  };

  return (
    <div className="py-6 sm:py-16 pb-10 text-white px-4">
      <div className="container mx-auto">
        <p className="flex font-medium flex-col gap-0 justify-center mb-8 sm:flex-row sm:gap-4 sm:mb-16 text-gray-400 items-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              document.body.firstElementChild.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="hover:text-white py-1.5 px-2 sm:border-b-0 sm:px-0 sm:py-0 transition-colors border-b border-b-gray-700 outline-none focus-within:text-white">
            Back to Home
          </a>
        </p>
        <div
          className="flex justify-center items-center flex-row sm:flex-row text-center px-2
        ">
          <div className="max-w-[600px]">
            <p className="flex justify-center items-center text-md">
              <a
                href="/"
                className="inline-flex items-center font-medium hover:text-gray-400 text-lg text-white transition-colors outline-none focus-within:text-gray-400">
                <img
                  src={"/swift.svg"}
                  alt="sccsrm"
                  height={30}
                  width={30}
                  className="rounded-lg"
                />
                <span className="ml-2">Swift Coding Club</span>
              </a>
              <span className="mx-2 text-gray-400">-</span>
              <a
                href="https://instagram.com/sccsrm"
                className="px-1.5 bg-[#DD524C] font-regular py-1 rounded-md text-sm outline-none focus:ring"
                target="_blank">
                <span className="hidden sm:inline">@sccsrm</span>
                <span className="inline sm:hidden">Swift Coding Club</span>
              </a>
            </p>
            <div className="my-4 flex justify-center items-center gap-4">
              <a
                href="http://instagram.com/sccsrm"
                target="_blank"
                rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-white hover:text-gray-400 transition-colors" />
              </a>
              <a
                href="http://linkedin.com/in/company/apple-developers-group-srm"
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-white hover:text-gray-400 transition-colors" />
              </a>
            </div>
            <p className="my-4 text-slate-300/60">
              Join the Swift Coding Club to master Apple's technologies, enhance
              your skills, and collaborate with like-minded students to build
              amazing apps.
            </p>
            <div className="text-sm text-gray-400">
              <button
                onClick={handleCopy}
                className="hover:text-white outline-none focus-within:text-white"
                data-text="info@sccsrm.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block mr-1">
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
                info@sccsrm.com
              </button>
              <span className="mx-1.5">·</span>
              <button
                onClick={handleCopy}
                className="hover:text-white outline-none focus-within:text-white"
                data-text="+919929294949">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block mr-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                +91 99292 94949
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
