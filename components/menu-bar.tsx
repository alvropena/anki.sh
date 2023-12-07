"use client"

import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"
import { AddCard } from "@/components/add-card"
import { SyncDialog } from "@/components/sync-dialog"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

function AvatarDemo() {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/alvropena.png" alt="@alvropena" />
            <AvatarFallback>AP</AvatarFallback>
        </Avatar>
    )
}


export function MenubarDemo() {
    return (
        <Menubar>
            <MenubarMenu>
                <Link href={'/'}>
                    <MenubarTrigger>Decks</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <AddCard />
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <Link href={'/browse'}>
                    <MenubarTrigger>Browse</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href={'/stats'}>
                    <MenubarTrigger>Stats</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>
                    <SyncDialog />
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}
