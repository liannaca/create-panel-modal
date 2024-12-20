export function UserOffcanvas({ setShowSiteClickAlart }) {
    return (
        <div id="hs-offcanvas-right-users"
            className=" bg-gray-900 border border-l-4 border-[rgba(75,85,99,0.5)] hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full w-[700px] z-[80] border-s dark:bg-neutral-800 dark:border-neutral-700"
            role="dialog" tabIndex="-1" aria-labelledby="hs-offcanvas-right-label">
            <div className="p-4 bg-gray-900">
                <div className="container bg-gray-900 mx-auto rounded-md px-3 mt-3">
                    <div className="mx-auto max-w-7xl px-2">
                        <div className='rounded-lg bg-gray-800'>
                            <div className="relative flex justify-between h-16 w-[600px]">
                                <div className="flex items-center space-x-2">
                                    <h1 className="text-white pl-3 ml-4">Користувачі</h1>
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 w-full ml-4">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-left" >
                                        <th className="p-3">E-MAIL</th>
                                        <th className="p-3">ROLES</th>
                                        <th className="p-3">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-700">
                                        <td>
                                            <div className="pb-3">
                                                <input id="input-search"
                                                    name='search'
                                                    className="py-1 px-4 block w-[150px] bg-gray-900 text-white border border-gray-600 rounded-lg text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 "
                                                    placeholder="Пошук" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="pb-3">
                                                <input id="input-search"
                                                    name='search'
                                                    className="py-1 px-4 block w-[150px] bg-gray-900 text-white border border-gray-600 rounded-lg text-sm dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-500 "
                                                    placeholder="Пошук" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-700">
                                        <td className="p-3">dima@gmail.com</td>
                                        <td className="p-3">08gt-y7uht578-0ghj-tr</td>
                                        <td className="p-3">
                                            <button type="button"
                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx  text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                                aria-controls="hs-offcanvas-right"
                                                data-hs-overlay="#hs-offcanvas-right">DELETE</button></td>
                                        <td className="p-3">
                                            <button type="button"
                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                                onClick={() => setShowSiteClickAlart(true)}>RESET PASSWORD
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of the Modal */}
        </div>
    )
}
