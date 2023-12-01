import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateDeck() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create Deck</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a new deck</DialogTitle>
                    <DialogDescription>
                        Create a new deck. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="items-center ">
                        <Label htmlFor="deck-name">
                            New deck name
                        </Label>
                        <Input id="deck-name" value="" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="reset" variant={"outline"}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
