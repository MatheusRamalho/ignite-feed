import Image, { StaticImageData } from 'next/image'

interface AvatarProps {
    hasBorder?: boolean
    src: StaticImageData | string
}

export function Avatar({ hasBorder = true, src }: AvatarProps) {
    return (
        <Image
            width={48}
            height={48}
            className={`
                rounded-lg
                ${
                    hasBorder
                        ? 'size-[calc(3rem_+_0.75rem)] p-1 border border-gray-800 outline-2 outline outline-green-500'
                        : 'size-12'
                }
            `}
            src={src}
            alt=""
        />
    )
}
