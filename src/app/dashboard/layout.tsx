import { ReactNode } from 'react';
import Logo from '@/assets/logo.svg'
import { NavItems } from '@/app/components/pages/dashboard/nav-items';

type DashboardLayoutProps = {
    children: ReactNode;
}
export default function DashboardLayout({ children } : DashboardLayoutProps) {
    return (
        <div className='w-full h-screen overflow-hidden grid grid-cols-[300px,1fr]'>
            <aside className='w-full h-full flex flex-col items-center border-r border-muted'>

                <div className='w-full p-6 border-b border-muted'>
                    <Logo className='max-w-[100px] mx-auto' />

                </div>

                <NavItems/>

            </aside>

            <main>
                {children}
            </main>
        </div>
    )
}