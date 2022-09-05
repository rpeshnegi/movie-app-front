import { Modal } from '@mui/material';
import { Box } from '@mui/system';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '8px',
    p: 4,
};

interface IAppModalProps {
    children: JSX.Element,
    open: boolean
    onClose: React.Dispatch<React.SetStateAction<boolean>>
}
const AppModal = ({ children, open, onClose }: IAppModalProps) => {
    return (
        <Modal
            open={open}
            onClose={() => onClose(false)}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}

export default AppModal
