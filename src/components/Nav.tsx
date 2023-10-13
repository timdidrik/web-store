'use client'

// Needed for <link> & usePathname
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
    {label: 'Home', href: '/'},
    {label: 'Products', href: '/products'},
    {label: 'API', href: '/api/products'},
]

export default function Nav() {
    const pathName = usePathname()

    const checkActivePath = (path: string) => {
        return path === pathName
    }

    return (
        <nav className='flex gap-4'>
            {navigation.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={checkActivePath(item.href) ? 'underline' : ''}
                >
                {/* To show it for frontend */}    
                {item.label}
                </Link>
            ))}
        </nav>
    )
}
