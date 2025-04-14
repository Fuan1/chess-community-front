import { cn } from '@/lib/utils';

interface SidebarDividerProps {
    direction?: 'horizontal' | 'vertical';
    className?: string;
}

function SidebarDivider({ direction = 'horizontal', className }: SidebarDividerProps) {
    return (
        <div className={cn('h-[0.5px] bg-border-light', direction === 'horizontal' ? 'w-full' : 'w-px', className)} />
    );
}

export default SidebarDivider;
