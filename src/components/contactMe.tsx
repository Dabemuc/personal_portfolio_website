/*
 
Copyright - 2024 andrew-demchenk0 
Copyright - 2024 andrew-demchenk0 (A) 
Copyright - 2024 ayyjayy2 (Alayna Johnston) on https://uiverse.io/ayyjayy2/sour-dog-94 
Copyright - 2024 Dabemuc 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 
 
*/

import { Linkedin, Github, Mail } from "lucide-react";

export default function ContactMe() {
  return (
    <div className="min-w-[50vw] h-full max-h-[90%] m-5 flex flex-col items-start p-5 bg-blue-200 gap-5 rounded border-2 border-black shadow-[4px_4px_black]">
      <div className="text-black font-bold text-3xl mb-3">Contact Me</div>

      <input
        className="w-full rounded border-2 border-black bg-background shadow-[4px_4px_black] text-black font-semibold text-base p-2 outline-none placeholder:text-gray-600 placeholder:opacity-80 focus:border-2 focus:border-[#2d8cf0]"
        name="name"
        placeholder="Your Name"
        type="text"
        required
      />
      <input
        className="w-full rounded border-2 border-black bg-background shadow-[4px_4px_black] text-black font-semibold text-base p-2 outline-none placeholder:text-gray-600 placeholder:opacity-80 focus:border-2 focus:border-[#2d8cf0]"
        name="email"
        placeholder="Your Email"
        type="email"
        required
      />

      <textarea
        className="w-full h-full rounded border-2 border-black bg-background shadow-[4px_4px_black] text-black font-semibold text-base p-2 outline-none placeholder:text-gray-600 placeholder:opacity-80 focus:border-2 focus:border-[#2d8cf0]"
        name="message"
        placeholder="Your Message"
        required
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-5 mr-4">
          <div className="cursor-pointer w-[40px] h-[40px] rounded-full border-2 border-black shadow-[4px_4px_black] text-black flex justify-center items-center">
            {/* Social Icon 1 */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div className="cursor-pointer w-[40px] h-[40px] rounded-full border-2 border-black shadow-[4px_4px_black] text-black flex justify-center items-center">
            {/* Social Icon 2 */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
          <div className="cursor-pointer w-[40px] h-[40px] rounded-full border-2 border-black shadow-[4px_4px_black] text-black flex justify-center items-center">
            {/* Social Icon 3 */}
            <a
              href="mailto:Dabemuc@gmail.com" // TODO
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
            </a>
          </div>
        </div>
        <button
          className="px-2 py-1 rounded border-2 border-black bg-background shadow-[4px_4px_black] text-black font-semibold text-lg cursor-pointer"
          onClick={() => alert("Not yet implemented")} //TODO
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
