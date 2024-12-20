export function SiteOffcanvas({ setShowSiteClickAlart }) {
    return (
        <div id="hs-offcanvas-right-sites"
            className=" bg-gray-900 border border-l-4 border-[rgba(75,85,99,0.5)] hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full w-[700px] z-[80] border-s dark:bg-neutral-800 dark:border-neutral-700"
            role="dialog" tabIndex="-1" aria-labelledby="hs-offcanvas-right-label">
            <div className="p-4 bg-gray-900">
                <div className="container bg-gray-900 mx-auto rounded-md px-3 mt-3">
                    <div className="mx-auto max-w-7xl px-2">
                        <div className='rounded-lg bg-gray-800'>
                            <div className="relative flex justify-between h-16 w-[600px]">
                                <div className="flex items-center space-x-2">
                                    <h1 className="text-white pl-3 ml-4">Сайти</h1>
                                </div>
                                <div className='p-3'>
                                    <input type="text" className="py-2 px-20 rounded-lg bg-gray-900 w-[450px]"
                                        placeholder="Пошук" readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="pt-2 w-full ml-4">
                            <table className="w-full text-xs">
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-3">STATUS</th>
                                        <th className="p-3">DOMAIN</th>
                                        <th className="p-3">VERSION</th>
                                        <th className="p-3">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-700">
                                        <td className="p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                strokeWidth="1.5" stroke="currentColor" className="size-4 text-green-700">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5" />
                                            </svg>
                                        </td>
                                        <td className="p-3">stage.reachhold.com</td>
                                        <td className="p-3">1.2</td>
                                        <td className="p-3">
                                            <button type="button"
                                                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                                                onClick={() => setShowSiteClickAlart(true)}>Змінити стан
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
