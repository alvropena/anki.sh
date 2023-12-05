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
import { Textarea } from "@/components/ui/textarea"

export function DescriptionDeck() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Description</DialogTitle>
                    <DialogDescription>
                        Please, explain what this deck is about.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <Textarea placeholder="Type your message here." />
                </div>
                <DialogFooter>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
