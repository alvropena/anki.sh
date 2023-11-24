import { useState, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';

interface FileUploaderProps {
    onFileUpload: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            onFileUpload(selectedFile);
        } else {
            console.error('No file selected.');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />            
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    );
};

export default FileUploader;
