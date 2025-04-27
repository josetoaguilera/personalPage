import React from 'react';
import About from '@/components/sections/About';
import BackButton from '@/components/common/BackButton';
import Footer from '@/components/layout/Footer';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-800 flex flex-col min-h-screen ">
                <div className='flex-grow'>
                    <BackButton />
                    <About to={navigate} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default AboutPage;