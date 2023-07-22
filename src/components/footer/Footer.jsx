import { Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

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
                <Mail className="w-4 h-4 inline-block mr-1" />
                info@sccsrm.com
              </button>
              <span className="mx-1.5 select-none">·</span>
              <button
                onClick={handleCopy}
                className="hover:text-white outline-none focus-within:text-white"
                data-text="+919929294949">
                <Phone className="w-4 h-4 inline-block mr-1" />
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
