export default function MarkdownSVG(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={72}
            height={72}
            viewBox="-15 -10 200 200"
            {...props}
        >
            <g
                fill="none"
                strokeMiterlimit={10}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{
                    mixBlendMode: 'normal',
                }}
            >
                <path d="M0 172V0h172v172z" />
                <path
                    d="M13.76 34.4C6.195 34.4 0 40.595 0 48.16v82.56c0 7.565 6.195 13.76 13.76 13.76h144.48c7.565 0 13.76-6.195 13.76-13.76V48.16c0-7.565-6.195-13.76-13.76-13.76zm0 6.88h144.48c3.843 0 6.88 3.037 6.88 6.88v82.56c0 3.843-3.037 6.88-6.88 6.88H13.76c-3.843 0-6.88-3.037-6.88-6.88V48.16c0-3.843 3.037-6.88 6.88-6.88zm13.76 20.64v55.04h13.76V80.303l17.2 22.897 17.2-22.897v36.657h13.76V61.92H75.68l-17.2 23.113-17.2-23.113zm92.88 0v27.52h-17.2l24.08 27.52 24.08-27.52h-17.2V61.92z"
                    fill="#ffffff"
                />
            </g>
        </svg>
    );
}
