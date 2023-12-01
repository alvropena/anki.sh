import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"

export function MenubarDemo() {
    return (
        <Menubar>
            <MenubarMenu>
                <Link href={'/'}>
                    <MenubarTrigger>Decks</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href={'/add'}>
                    <MenubarTrigger>Add</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href={'/browse'}>
                    <MenubarTrigger>Browse</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>
                <Link href={'/browse'}>
                    <MenubarTrigger>Stats</MenubarTrigger>
                </Link>
            </MenubarMenu>
            <MenubarMenu>

                <MenubarTrigger>
                    
                    Sync

                </MenubarTrigger>

            </MenubarMenu>
        </Menubar>
    )
}
