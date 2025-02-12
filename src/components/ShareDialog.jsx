import { Copy } from "lucide-react"
import share from '../assets/share.svg'
import cat from '../assets/cat-2.gif'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ShareDialog() {

    let url = window.location.origin;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-[#e52b5db7] hover:bg-[#e52b5d] hover:text-white text-white relative text-lg share-btn z-1">
                    Send to your crush
                    <div className="absolute h-20  bottom-0 overflow-hidden w-40">
                        <img src={cat} alt="" className="h-20 w-fit left-0 right-0 mx-auto absolute bottom-[-100%] transition-all z-[-2] " />
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Who is that lucky person?</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue={`${url}/`}
                            readOnly
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3">
                        <span className="sr-only">Copy</span>
                        <Copy />
                    </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
