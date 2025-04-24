/// <reference types="vite/client" />

interface SelectOption {
    label: string;
    value: string;
}

interface Bezirk {
    url: string;
    text: string;
}

interface BezirkList {
    [key: string]: Bezirk;
}