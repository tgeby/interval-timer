interface DarkModeProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DarkModeToggle ({ isDark, setIsDark }: DarkModeProps) {
return (

    <button
        onClick={() => setIsDark(!isDark)}
        className={`
        relative inline-flex h-5 w-8 sm:h-8 sm:w-14 items-center rounded-full 
        transition-colors duration-150 cursor-pointer
        ${isDark ? "bg-gray-900" : "bg-gray-300"}
        `}
    >
        {/* Circle */}
        <span
        className={`
            inline-block h-3 w-3 sm:h-6 sm:w-6 transform rounded-full bg-white shadow-md transition-transform duration-300
            ${isDark ? "translate-x-4 sm:translate-x-7" : "translate-x-1"}
        `}
        />
    </button>);
}