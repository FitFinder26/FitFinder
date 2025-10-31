import { toast } from 'react-hot-toast';

export const Notifier = {
    notifySuccess: (message) => {
        toast.success(message);
    },

    notifyError: (message) => {
        toast.error(message);
    }
}