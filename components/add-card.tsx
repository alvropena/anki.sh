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
import { Textarea } from '@/components/ui/textarea';

function TextareaFront() {
    return <Textarea placeholder="" />
}
function TextareaBack() {
    return <Textarea placeholder="" />
}

export function AddCard() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new card</DialogTitle>
                    <DialogDescription>
                        Create a new card. Click save when you&apos;re done.
                    </DialogDescription>
                </DialogHeader>

                <div>
                    <div className="flex flex-row items-center">
                        <Label>Type</Label>
                        <Button variant={'outline'}>Basic</Button>
                        <Label>Deck</Label>
                        <Button variant={'outline'}>Economics</Button>
                    </div>
                    <div className="mb-4">
                        <Label>Front</Label>
                        <TextareaFront />
                    </div>

                    <div className="mb-4">
                        <Label className='mb-4'>Back</Label>
                        <TextareaBack />
                    </div>

                    <div>
                        <Label htmlFor='tags'>Tags</Label>
                        <Input id="tags" value="" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <div className='flex flex-row justify-between mt-4'>
                        <div className='flex flex-row gap-4'>
                            <Button type="reset" variant={"outline"}>Help</Button>
                            <Button type="submit" variant={"outline"}>Add</Button>
                            <Button type="submit" variant={"outline"}>History</Button>
                        </div>
                        <Button type="submit" variant={"outline"}>Close</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
