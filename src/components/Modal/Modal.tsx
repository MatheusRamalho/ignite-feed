import styles from './Modal.module.css'

type ModalProps = {
    title: string;
    description: string;

    isOpenModal: boolean;
    onModalClose: () => void;
    onModalDeleteComment: (content: string) => void;
    contentComment: string;
}

export const Modal = ({ title, description, isOpenModal = false, onModalClose, onModalDeleteComment, contentComment }: ModalProps) => {
    const handleDeleteComment = () => {
        onModalDeleteComment(contentComment);
    }

    return (
        <div className={`${styles.modal} ${isOpenModal && styles.modalOpen}`}>
            <div className={styles.modalContent}>
                <h3> {title} </h3>
                <p> {description} </p>

                <div>
                    <button
                        type="button"
                        onClick={onModalClose}
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        onClick={handleDeleteComment}
                    >
                        Sim, excluir
                    </button>
                </div>
            </div>
        </div>
    );
}
