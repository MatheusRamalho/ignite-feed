import Image from 'next/image'

import igniteLogo from '@/assets/svgs/ignite-logo-simbol.svg'

export function Header() {
    return (
        <div className="bg-gray-800 flex items-center justify-center px-0 py-5">
            <Image
                width={40}
                height={40}
                className="h-10"
                src={igniteLogo}
                alt="Ignite simbol"
            />

            <strong className="font-bold text-base ml-4 text-white">
                {' '}
                Ignite feed{' '}
            </strong>
        </div>
    )
}
