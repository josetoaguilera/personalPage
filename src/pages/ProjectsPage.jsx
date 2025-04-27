import React from 'react';
import Projects from '@/components/sections/Projects';
import BackButton from '@/components/common/BackButton';
import Footer from '@/components/layout/Footer';

function ProjectsPage() {
    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-800 flex flex-col min-h-screen">
                <div className='flex-grow'>
                    <BackButton />
                    <Projects />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default ProjectsPage;