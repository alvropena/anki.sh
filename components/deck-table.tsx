"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { SettingsDropdown } from "./settings-dropdown"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { useDeckStore } from '@/app/context/store'

export function TableDemo() {
    const decks = useDeckStore((state) => state.decks);

    return (
        <Table className="mt-4">
            <TableCaption>Studied 0 cards in 0 seconds today (0s/card).</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Deck</TableHead>
                    <TableHead>New</TableHead>
                    <TableHead>Learn</TableHead>
                    <TableHead>Due</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {decks.map((deck) => (
                    <TableRow key={deck.id}>
                        <TableCell>
                            <button>
                                <Plus size={16} strokeWidth={1.5} />
                            </button>
                        </TableCell>
                        <TableCell className="font-medium">
                            <Link href={`/deck/${deck.id}`}>
                                <Button variant={'link'}>
                                    {deck.name}
                                </Button>
                            </Link>
                        </TableCell>
                        {/* Placeholder values for New, Learn, and Due until we update the store */}
                        <TableCell>0</TableCell> {/* Placeholder for 'New' */}
                        <TableCell>0</TableCell> {/* Placeholder for 'Learn' */}
                        <TableCell className="text-right">0</TableCell> {/* Placeholder for 'Due' */}
                        <TableCell className="text-right">
                            <button>
                                <SettingsDropdown />
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}