"use client";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import { Dialog, Transition } from "@headlessui/react";
import Section from "../Leaf/Section";
import { Fragment } from "react";
import Tooltip from "../../utils/SimpleTooltip";
import React, { useState,  } from "react";
import GetDataSCF from "../GetDataSCF";

export default function Modale15() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [tabelle, setTabelle] = useState([]);
  var [loading, setLoading] = useState(true);

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <div className="example-wrapper">
          <Tooltip content="SC Freiburg Info" direction="right">
            <button
              type="button"
              onClick={openModal}
              className="mx-auto mb-[3vw] w-[70px] h-[70px] rounded-[24px] bg-[#edc513] text-[1.66rem] font-medium text-white hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <div className="flex flex-col items-center">
                <img
                  src="/Fussball.svg"
                  alt="icon"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </button>
          </Tooltip>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-slate-800/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="border-yellow-600 w-full max-w-7xl bg-[url('/sportarena.jpg')] bg-cover bg-no-repeat transform overflow-hidden rounded-2xl border-8 bg-[#0C0C0C] p-2 text-left align-middle shadow-xl transition-all">
                  <Section>
                    <section className="mx-auto max-w-screen xl:px-4 py-1 sm:px-6 sm:py-2 lg:px-2 lg:py-1">
                      <h1 className="mb-5 text-yellow-600 headingA text-center text-3xl md:text-7xl lg:text-[6rem] lg:leading-8">
                        Die Bundesliga
                      </h1>{" "}
                      <h2 className="py-5 mx-auto text-2xl font-bold text-center text-gray-300 sm:text-3xl">
                        Hier findest Du alle Daten, Fakten über den aktuellen
                        Tabellenstand des SC Freiburgs.{" "}
                      </h2>
                      <article className="flex flex-col items-center low-hidden mb-2 h-full w-[100v]  flex flex-col justify-center items-center ">
                        <GetDataSCF className=""></GetDataSCF>
                      </article>
                    </section>
                  </Section>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      zurück
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
