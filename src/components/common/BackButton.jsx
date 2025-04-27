import React from 'react';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    return (
        <Button variant="link" onClick={() => navigate("/")} className={"cursor-pointer dark:text-amber-50"}>
            <MoveLeft />
            back
        </Button>
    );
}

export default BackButton;