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
import { useState } from "react"
import { useRef } from "react"
import ribbon from '../assets/ribbon.svg'

export default function ShareDialog() {
    const linkInput = useRef()

    const copyToClipBoard = () => {
        const text = linkInput.current.value;
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Text copied to clipboard");
            })
            .catch(err => {
                console.error("Error copying text: ", err);
            });
    }

    let url = window.location.origin;

    const [theLuckyPersonImSoFuckingJealous, setTheLuckyPersonImSoFuckingJealous] = useState("")


    console.log(theLuckyPersonImSoFuckingJealous)
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
            <DialogContent className="sm:max-w-md bg-[#FFF3F5]">
                <div className="absolute left-[-2rem] top-[-2rem]">
                    <img src={ribbon} className="h-20 rotate-[-45deg] " alt="" />
                </div>
                <DialogHeader>
                    <DialogTitle className="text-[#662929]">Share the Love: Customize Your Invitation</DialogTitle>
                    <DialogDescription className="text-[#662929]">
                        Add your crush’s name and create a one-of-a-kind invitation link for them.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <Label htmlFor="name" className="sr-only">
                        Name
                    </Label>
                    <Input
                        id="name"
                        className="focus:!outline-[#EC678B] text-[#662929]"
                        value={theLuckyPersonImSoFuckingJealous}
                        onChange={(e) => setTheLuckyPersonImSoFuckingJealous(e.target.value.trim())}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            readOnly
                            value={`${url}/${theLuckyPersonImSoFuckingJealous}`}
                            className=" text-[#662929] focus:!outline-[#EC678B]"
                            ref={linkInput}
                        />
                    </div>
                    <Button type="submit" size="sm" className="px-3 bg-[#EC678B] hover:bg-[#ec678ac4]" onClick={copyToClipBoard}>
                        <span className="sr-only">Copy</span>
                        <Copy color="white" />
                    </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                    <p className="text-sm text-[#662929]">
                        Made with ❤️ by{" "}
                        <a
                            href="https://www.linkedin.com/in/jesse-onyekwelu-4a8982275/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Onyekwelu Jesse
                        </a>
                        . Follow me on{" "}
                        <a
                            href="https://github.com/d3uceY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            GitHub
                        </a>{" "}
                        and{" "}
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Twitter
                        </a>
                        {" "}
                        and,
                        {" "}

                        <a
                            href="https://www.tiktok.com/@deuce.exe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            Tiktok
                        </a>
                        .
                    </p>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
