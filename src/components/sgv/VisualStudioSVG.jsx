export default function VisualStudioSVG(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={72}
            height={72}
            viewBox="0 0 50 50"
            {...props}
        >
            <path
                fill="#6a1b9a"
                d="M36 5 17 21.5 7 14l-3 1.25v17.5L7 34l10-7.5L36 43l8-3V8l-8-3zM8 20l5 4-5 4v-8zm16 4 10-7v14l-10-7z"
            />
        </svg>
    );
}
