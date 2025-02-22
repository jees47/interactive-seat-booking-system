import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white text-center py-4 text-xl font-semibold">
            <Link href="/">
                Just Watch
            </Link>
        </header>
    );
}
