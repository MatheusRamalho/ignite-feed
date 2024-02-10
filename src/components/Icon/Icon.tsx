'use client'

import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
    customClass?: string
}

export function Icon({ name, customClass, ...props }: IconProps) {
    const LucideIcon = dynamic(dynamicIconImports[name])

    return <LucideIcon strokeWidth={1} className={customClass} {...props} />
}
