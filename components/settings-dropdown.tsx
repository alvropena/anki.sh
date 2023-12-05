import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings } from "lucide-react"

export function SettingsDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Settings size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-30">

                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Options
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Export
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
