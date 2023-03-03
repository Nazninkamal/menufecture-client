export const DisableButton = ({ children }) => {
    return (
        <button className="flex items-center justify-center w-full text-slate-50 font-extrabold latter tracking-wider p-2 border bg-gradient-to-r from-gray-500 to-gray-200 rounded-md focus:ring-2 focus:ring-offset-1 focus:from-gray-500 cursor-not-allowed  " disabled>
            {children}
        </button>
    )
}