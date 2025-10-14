"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>

      <div className="w-full px-4 pt-16">
        {/* FAQ 1 */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>How can I contact Growthhub?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  You can reach us via phone at <strong>9203293567 | 9588693271</strong> or
                  email us at{" "}
                  <a
                    href="mailto:Growthhub527@gmail.com"
                    className="text-blue-600 underline"
                  >
                    Growthhub527@gmail.com
                  </a>
                  . You can also visit our center at <br />
                  <strong>
                    Near New Kolkata Sweets, Above Arogya Pharmacy, Borsi Road,
                    Durg, Chhattisgarh – 491001.
                  </strong>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        {/* FAQ 2 */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>What courses and training do you offer?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  We offer <strong>English Coaching (Online & Offline)</strong>,
                  <strong> Job Placement Training</strong>, and{" "}
                  <strong>Career Counseling</strong>. <br />
                  Our programs are designed to improve communication skills,
                  boost confidence, and prepare students for real-world job
                  interviews and professional success.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        {/* FAQ 3 */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>Do you provide job placement support?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Yes! Growthhub provides dedicated{" "}
                  <strong>job placement training and career guidance</strong> to
                  help you prepare for interviews, build resumes, and connect
                  with potential employers. <br />
                  We focus on improving employability through skill-based
                  learning and mentorship.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
