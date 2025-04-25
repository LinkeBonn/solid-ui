/// <reference types="vite/client" />

interface SelectOption {
    label: string;
    value: string;
}

interface Bezirk {
    text: string;
}

interface BezirkList {
    [key: string]: Bezirk;
}