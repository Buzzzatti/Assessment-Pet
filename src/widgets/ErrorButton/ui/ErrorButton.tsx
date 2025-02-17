import { Button } from '@mui/material';

interface ErrorButtonProps {
    onClick: () => void;
}

export const ErrorButton: React.FC<ErrorButtonProps> = ({ onClick }) => {
    return (
        <Button onClick={onClick} style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 20px', backgroundColor: '#f44336', color: '#fff', borderRadius: '5px' }}>
            Создать ошибку
        </Button>
    );
};