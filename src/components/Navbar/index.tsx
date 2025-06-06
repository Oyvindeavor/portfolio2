'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Github } from 'lucide-react'
import { Separator } from '../ui/separator'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Guestbook', href: '/guestbook' }
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="top-0 z-50 mx-auto max-w-4xl border px-4 py-2 md:px-6">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg shadow-[0_0_8px_#c084fc] shadow-purple-600 transition-all duration-300 hover:shadow-[0_0_40px_#c084fc] hover:shadow-purple-400">
            <span className="text-lg font-bold text-white">Ø</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden items-center md:flex">
          <NavigationMenuList className="flex items-center gap-4">
            {navigation.map((item) => (
              <NavigationMenuItem className="active:transparent" key={item.name}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={
                      'ac px-3 py-2 text-purple-400 transition-colors hover:bg-transparent hover:text-purple-200 hover:shadow-[0_0_10px_#c084fc]'
                    }
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA - Github logo */}
        <div className="hidden md:block">
          <a href="www.github.com/oyvindriisnes" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-white-400 border hover:text-purple-200 hover:shadow-[0_0_6px_#c084fc]"
            >
              <Menu width={10} height={10} />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-background/60 w-[260px] p-6 backdrop-blur-sm sm:w-[320px]"
          >
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation</SheetTitle>
            </VisuallyHidden>

            <div className="flex h-full flex-col">
              {/* Mobile Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="shadow-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-[0_0_8px_#c084fc] transition-all duration-300 hover:shadow-[0_0_40px_#c084fc] hover:shadow-purple-400">
                  <span className="text-lg font-bold text-white">Ø</span>
                </div>
              </Link>
              <Separator className="my-4" />

              {/* Mobile Links */}
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:text-foreground text-base transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
