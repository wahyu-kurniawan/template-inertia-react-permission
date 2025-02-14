export default function CustomButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-md border border-transparent bg-green-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700 transition duration-150 ease-in-out hover:bg-green-500 hover:text-white focus:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
