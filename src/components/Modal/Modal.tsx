import styles from './Modal.module.css'

type ModalProps = {
    title: string;
    description: string;

    isOpenModal: boolean;
    onModalClose: () => void;
    onModalDeleteComment: (id: string) => void;
    commentId: string;
}

export const Modal = ({ title, description, isOpenModal = false, onModalClose, onModalDeleteComment, commentId }: ModalProps) => {
    const handleDeleteComment = () => {
        onModalDeleteComment(commentId);
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
