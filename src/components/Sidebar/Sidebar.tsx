import Link from 'next/link'
import Image from 'next/image'

import { Avatar } from '../Avatar'
import { Icon } from '../Icon'

import bgImg from '@/assets/imgs/bg.png'
import avatarImg from '@/assets/imgs/user.jpeg'

export function Sidebar() {
    return (
        <aside className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
                className="w-full h-[72px] object-cover"
                width={72}
                height={72}
                src={bgImg}
                alt=""
            />

            <div className="flex flex-col items-center mt-[calc(0px_-_1.5rem_-_0.375rem)]">
                <Avatar src={avatarImg} />

                <strong className="text-gray-100 leading-[1.6] mt-4">
                    Matheus Ramalho
                </strong>

                <span className="text-sm text-gray-400 leading-[1.6]">
                    Web Developer
                </span>
            </div>

            <footer className="border-t-gray-600 mt-6 pt-6 pb-8 px-8 border-t border-solid">
                <Link
                    href="#"
                    className="h-[3.125rem] bg-transparent border-green-500 rounded-lg font-bold text-green-500 no-underline flex items-center justify-center gap-3 transition-colors duration-200 delay-200 px-4 py-0 border border-solid hover:bg-green-500 hover:text-white"
                >
                    <Icon name="pencil-line" customClass="size-5" />
                    Editar seu perfil
                </Link>
            </footer>
        </aside>
    )
}
