/* This example requires Tailwind CSS v2.0+ */
import React, {FC, Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

interface CartModalProps {
  children: any;
  open: boolean;
  setOpen: any;
}

const CartModal: FC<CartModalProps> = ({open, setOpen, children}) => {
  return (
    <Transition.Root as={Fragment} show={open}>
      <Dialog as="div" className="fixed inset-0" onClose={setOpen}>
        <div className="absolute inset-0 overscroll-contain overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed top-0 right-0 max-w-full">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-full md:max-w-4xl bg-black">
                <div className="flex flex-col shadow-xl">
                  <div className="flex-1">{children}</div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartModal;
