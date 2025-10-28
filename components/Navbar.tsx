"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { cn } from "../lib/utils"
import LogoNeu from "../public/LogoNeu"
import Image from "next/image"

const menuItems = [
  { label: "home", href: "/" },
  {
    label: "über uns",
    href: "/about",
    submenu: [
      { label: "geschichte", href: "/about/geschichte" },
      { label: "eam", href: "/about/team" },
    ],
  },
  {
    label: "Drinks & Snacks",
    href: "/drinks",
    submenu: [
      { label: "biere", href: "/drinks/biere" },
      { label: "weine", href: "/drinks/weine" },
      { label: "longdrinks", href: "/drinks/longdrinks" },
      { label: "kurze", href: "/drinks/kurze" },
      { label: "softdrinks", href: "/drinks/softdrinks" },
      { label: "snacks", href: "/drinks/snacks" },
    ],
  },
  { label: "sportarena", href: "/sportarena" },
  { label: "wohin?", href: "/wohin" },
   { label: "bloq", href: "/bloq" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:bg-[url('/wood4.svg')] lg:bg-cover bg-no-repeat bg-center">
      <div className="container h-20 mx-auto flex lg:h-36 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          
		  <div className="w-12 -h-8 lg:w-24 lg:h-16 lg:mr-12">
		  <Image src="/LogoNeu.png" alt="LogoNeu" width={150} height={80}/>
		  </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex rounded-lg: hover:bg-amber-500 text-center w-[20vw] items-center gap-1 text-[2.0rem] font-medium transition-colors hover:text-primary">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild>
                      <Link href={subItem.href} className="cursor-pointer">
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[1.333rem] text-white hover:bg-amber-500 px-2 py-1 uppercase font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <div className="flex h-full flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between border-b border-border p-4">
                <span className="text-lg font-bold">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            {item.label}
                            <ChevronDown
                              className={cn("h-4 w-4 transition-transform", openSubmenu === item.label && "rotate-180")}
                            />
                          </button>
                          {openSubmenu === item.label && (
                            <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-border pl-3">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
export default Navbar