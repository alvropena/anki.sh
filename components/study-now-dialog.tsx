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

export function StudyNowDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Study Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Economics</DialogTitle>
                    <DialogDescription>{ }</DialogDescription>
                </DialogHeader>
                <div className="">
                    <div className="">
                        <p>
                            What are the ten ways to evaluate a market?
                        </p>
                    </div>
                </div>
                <DialogFooter className="flex flex-col">
                    <div>
                        <Label>
                            47 + 10 + 53
                        </Label>
                    </div>
                    <div>
                        <Button>Edit</Button>
                        <Button>Show Answer</Button>
                        <Button>More</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
