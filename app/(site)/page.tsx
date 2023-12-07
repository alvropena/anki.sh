"use client"

import { useState } from 'react';
import axios from 'axios';
import { TableDemo } from '@/components/deck-table';
import Footer from '@/components/footer';

const Home: React.FC = () => {
    const [textData, setTextData] = useState<{ slideNumber: number; text: string }[] | null>(null);

    const handleFileUpload = async (file: File) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            // Corrected endpoint to match FastAPI
            const response = await axios.post('http://127.0.0.1:8000/api/extract/', formData);

            console.log('Response Data:', response.data); // Log the response data

            setTextData(response.data);
        } catch (error: any) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <TableDemo />
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
