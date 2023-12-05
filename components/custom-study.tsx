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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function RadioGroupDemo() {
    return (
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Increase today&apos;s new card limit</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Increase today&apos;s review card limit</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Review forgotten cards</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Review ahead</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Preview new cards</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Study by card or tag</Label>
            </div>
        </RadioGroup>
    )
}


export function CustomStudy() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Custom Study</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Custom Study</DialogTitle>
                    <DialogDescription>
                       
                    </DialogDescription>
                </DialogHeader>
                <div className="">
                    <RadioGroupDemo />
                    <p>Available new cards: 13 (416 in subdecks)</p>
                    <p>Increase today&apos;s new card limit by cards</p>
                </div>
                <DialogFooter>
                    <Button variant={'secondary'}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
