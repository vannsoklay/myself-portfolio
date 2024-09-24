import { Link as MyLink, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Image } from "@nextui-org/react"

export const QrCode = ({ qr_name, isOpen, onOpenChange }: { qr_name: string | null, isOpen: boolean, onOpenChange: () => void }) => {

    const qr_code = [
        { qr_name: "facebook", qr_code: null, link: "https://web.facebook.com/soklay512" },
        { qr_name: "github", qr_code: null, link: "https://github.com/vannsoklay" },
        { qr_name: "instagram", qr_code: "/qr/ins_vann_soklay_qr.png", link: "https://www.instagram.com/vann_soklay" }
    ]

    const qr = qr_code.find((q) => q.qr_name === qr_name);

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            size="sm"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 capitalize">{qr_name}</ModalHeader>
                        <ModalBody>
                            {qr?.qr_code ? <Image src={qr?.qr_code} alt={qr?.qr_name} /> : <div className="flex items-center justify-center h-32">No QR-CODE</div>}

                        </ModalBody>
                        <ModalFooter>
                            <MyLink isExternal href={qr?.link} color="primary" onPress={onClose} className="w-full flex justify-center bg-primary text-white rounded-xl py-3" size="lg">
                                Visit
                            </MyLink>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}