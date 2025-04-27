import React from 'react';
import Contact from '@/components/sections/Contact';
import BackButton from '@/components/common/BackButton';
import Footer from '@/components/layout/Footer';

function ContactPage() {
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-800 flex flex-col min-h-screen">
                <div className='flex-grow'>
                    <BackButton />
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ContactPage;