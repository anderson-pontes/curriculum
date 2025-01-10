import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export const UserDropdown = () => {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='w-full gap-2 justify-start px-2'>
                    <Avatar className='w-7 h-7 block'>
                        <AvatarImage src="https://github.com/anderson-pontes.png" />
                        <AvatarFallback>AP</AvatarFallback>
                    </Avatar>
                    <p>Anderson Pontes</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>


    )
}