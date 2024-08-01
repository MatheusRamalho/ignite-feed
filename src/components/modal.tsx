interface ModalProps {
    title: string
    description: string

    isOpenModal: boolean
    onModalClose: () => void
    onModalDeleteComment: (id: string) => void
    commentId: string
}

export function Modal({
    title,
    description,
    isOpenModal = false,
    onModalClose,
    onModalDeleteComment,
    commentId,
}: ModalProps) {
    const handleDeleteComment = () => {
        onModalDeleteComment(commentId)
    }

    return (
        <div
            className={`z-[999] fixed bg-black/70 items-center justify-center hidden inset-0 ${
                isOpenModal && '!flex'
            }`}
        >
            <div className="w-[27rem] h-60 rounded-lg bg-gray-700 text-center flex flex-col items-center justify-center p-8">
                <h3 className="font-bold leading-[1.4] text-gray-100">
                    {title}
                </h3>

                <p className="leading-[1.6] text-gray-200 mx-0 my-6">
                    {description}
                </p>

                <div className="flex items-center justify-center gap-2">
                    <button
                        className="cursor-pointer h-12 rounded-lg bg-gray-700 font-bold leading-[1.6] text-white flex justify-center items-center gap-2 transition-colors duration-1000 px-8 py-3 border-none hover:bg-gray-600"
                        type="button"
                        onClick={onModalClose}
                    >
                        Cancelar
                    </button>

                    <button
                        className="cursor-pointer h-12 rounded-lg bg-red-500 font-bold leading-[1.6] text-white flex justify-center items-center gap-2 transition-colors duration-1000 px-8 py-3 border-none hover:bg-red-300"
                        type="button"
                        onClick={handleDeleteComment}
                    >
                        Sim, excluir
                    </button>
                </div>
            </div>
        </div>
    )
}
