import React from 'react'
import { Menu,  Transition } from "@headlessui/react";
import { Button, cx, Divider } from "@vechaiui/react";


const Dropdown = () => {
  return (
    <div className="flex flex-wrap w-full p-8 space-x-4">
    <Menu as="div" className="relative inline-block">
      <Menu.Button as={Button} variant="solid" color="primary">
        Profile
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-in-out duration-150"
        enterFrom="transform opacity-0 scale-90"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-out duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-90"
      >
        <Menu.Items
          className={cx(
            "absolute left-0 z-dropdown w-56 min-w-max mt-2 origin-top-left rounded-md shadow-sm outline-none",
            "bg-white border border-gray-200",
            "dark:bg-neutral-800 dark:border-gray-700"
          )}
        >
          <div className="px-1 py-1">
            <div role="group">
              <div className="mx-3 my-2 text-sm font-semibold">Profile</div>
              <Menu.Item>
                {({ active, disabled }) => (
                  <button
                    disabled={disabled}
                    aria-disabled={disabled}
                    className={cx(
                      "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                      active && "bg-neutral-100 dark:bg-neutral-700",
                      disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                  >
                    My Account
                  </button>
                )}
              </Menu.Item>
  
              <Menu.Item>
                {({ active, disabled }) => (
                  <button
                    disabled={disabled}
                    aria-disabled={disabled}
                    className={cx(
                      "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                      active && "bg-neutral-100 dark:bg-neutral-700",
                      disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                  >
                    Payments
                  </button>
                )}
              </Menu.Item>
            </div>
            <Divider
              orientation="horizontal"
              className="border-neutral-200 dark:border-neutral-700"
            />
            <div role="group">
              <div className="mx-3 my-2 text-sm font-semibold">Help</div>
              <Menu.Item>
                {({ active, disabled }) => (
                  <button
                    disabled={disabled}
                    aria-disabled={disabled}
                    className={cx(
                      "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                      active && "bg-neutral-100 dark:bg-neutral-700",
                      disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                  >
                    Docs
                  </button>
                )}
              </Menu.Item>
  
              <Menu.Item>
                {({ active, disabled }) => (
                  <button
                    disabled={disabled}
                    aria-disabled={disabled}
                    className={cx(
                      "flex rounded items-center w-full px-3 h-8 flex-shrink-0 text-sm text-left cursor-base focus:outline-none",
                      active && "bg-neutral-100 dark:bg-neutral-700",
                      disabled &&
                      "disabled:opacity-60 disabled:cursor-not-allowed"
                    )}
                  >
                    FAQ
                  </button>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  </div>
  )
}

export default Dropdown



