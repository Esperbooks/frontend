import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

// const $modalElement: HTMLElement | null = document.querySelector('#modalEl');

const modalOptions: ModalOptions = {
    // placement: 'top-right',
    backdrop: 'dynamic',
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
        console.log('modal is hidden');
    },
    onShow: () => {
        console.log('modal is shown');
    },
    onToggle: () => {
        console.log('modal has been toggled');
    }
}

export const ebModal = ($modalElement: HTMLElement | null) => {
    const modal: ModalInterface = new Modal($modalElement, modalOptions);
    return modal
}

// modal.show();