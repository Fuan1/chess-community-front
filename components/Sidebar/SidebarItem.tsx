import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AlarmClockPlus } from 'lucide-react';

interface SidebarItemProps {
    href: string;
    label?: string;
    className?: string;
}

function SidebarItem({ href = '/', label = '', className }: SidebarItemProps) {
    return (
        <Link href={href}>
            <div
                className={cn(
                    'flex items-center py-2 px-4 rounded-md hover:bg-border-light text-text-normal font-light text-sm hover:text-text-light transition-colors',
                    className
                )}
            >
                <AlarmClockPlus className="h-4 w-4 flex-shrink-0 mr-2" />
                {label}
            </div>
        </Link>
    );
}

export default SidebarItem;
