import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'green-300': ' #00b37e',
                'green-500': '#00875f',
                'green-700': '#015f43',

                'red-300': ' #F86976',
                'red-500': '#F75A68',
                'red-700': '#E1525F',

                'gray-50': '#E6E6EA',
                'gray-100': '#E4E4E8',
                'gray-200': '#e1e1e6',
                'gray-300': '#c4c4cc',
                'gray-400': '#7c7c8a',
                'gray-500': '#323238',
                'gray-600': '#29292e',
                'gray-700': '#202024',
                'gray-800': '#121214',
                'gray-900': '#101012',
                'gray-950': '#0F0F10',
            },
        },
    },
    plugins: [],
}

export default config
