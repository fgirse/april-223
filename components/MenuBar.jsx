'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import {
  BookOpenIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  UserGroupIcon,
  UserAddIcon,
  ViewListIcon,
} from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'
import LogoNeu from '../public/LogoNeu.png'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
    
}
const navigation = [
  {
  
    name: 'Home',
    href: '/',
    current: true,
  },
  { name: 'Über uns', href: '#section-about', current: false },
  { name: 'Team', href: '#section-team', current: false },
  { name: 'Drinks', href: '#section-drinks', current: false },
  { name: 'Sportarena', href: '#section-sportarena', current: false },
  { name: 'Events', href: '#section-events', current: false },
  { name: 'Wohin ?', href: '#section-wohin', current: false },

]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure
      as="header"
      className="bg-slate-800 top-0 left-0 z-[20] w-full lg:block lg:bg-[url('/Wood4.svg')] lg:bg-content lg:bg-cover lg:bg-no-repeat"
    >
      {({ open }) => (
        <>
          <div className="relative top-[0vh] max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-yellow-50 lg:px-8">
            <div className="relative h-16 flex justify-between">
              <div className="relative z-10 px-2 flex lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-8 w-auto"
                    src="/LogoNeu.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon
                        className="h-5 w-5 text-gray-50"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-yellow-600 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-200 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-blue-500-900 focus:placeholder-gray-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="rounded-md p-2 inline-flex items-center justify-center text-yellow-50 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  className="bg-gray-800/25 flex-shrink-0 rounded-full p-1 text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="flex-shrink-0 relative ml-4">
                  <div>
                    <Menu.Button className="bg-blue-600/90 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                      
                    </Menu.Button>

                  </div>
               
                  
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block py-2 px-4 text-sm text-gray-700',
                              )}
                            >
                             
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <nav
              className="hidden lg:py-2 lg:flex lg:space-x-8"
              aria-label="Global"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}  
                  className={classNames(
                    item.current
                      ? 'bg-gray-900/30 uppercase text-white font-extrabold'
                      : 'uppercase bg-gray-900/20 text-gray-300 hover:bg-yellow-600 hover:text-white font-extrabold',
                    'rounded-md py-2 px-2 inline-flex items-center text-[1.0rem] font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Image src="/Bulleye.svg" width="40" height="40" alt="Bulleye" className="hover:transform scale-150"/>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

            <div class="flow-root">
  <nav aria-label="Main Nav" class="flex flex-col space-y-2">
    <div>
      <strong class="block text-xs font-medium uppercase text-gray-400">
        General
      </strong>

      <ul class="mt-2 space-y-1">
        <li>
          <a
            href=""
            class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            Profile
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Team
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Meetings
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Calendar
          </a>
        </li>
      </ul>
    </div>

    <div>
      <strong class="block text-xs font-medium uppercase text-gray-400">
        Support
      </strong>

      <ul class="mt-2 space-y-1">
        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Update
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Help
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Settings
          </a>
        </li>
      </ul>
    </div>

    <div>
      <strong class="block text-xs font-medium uppercase text-gray-400">
        Profile
      </strong>

      <ul class="mt-2 space-y-1">
        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Details
          </a>
        </li>

        <li>
          <a
            href=""
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Subscription
          </a>
        </li>

        <li>
          <form action="/logout">
            <button
              type="submit"
              class="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
            >
              Logout
            </button>
          </form>
        </li>
      </ul>
    </div>
  </nav>
</div>



          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="mt-[6vh] pt-2 pb-3 px-2 space-y-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-red-700/60 text-white border border-gray-300 hover:bg-red-600'
                      : 'border border-gray-300 py-3 text-gray-300 hover:bg-gray-700 hover:text-yellow-400',
                    'block rounded-md py-2 px-3 text-[1.2bbbbb       rem] font-black md:text-[2.0rem]',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <div className='w-full flex flex-row justify-start gap-x-3 items-end'>
                     <Image  src="/Bulleye.svg" width="40" height="40" alt="Bulleye" className="hover:transform scale-110"/>
                  {  item.name}
                  </div>
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-yellow-500 pt-4 pb-3">
              <div className="px-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-gray-800 rounded-full p-1 text-gray-400 hover:text- white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                       <Image src="/Bulleye.svg" width="40" height="40" alt="Bulleye"/>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
