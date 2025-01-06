import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import "preline/preline";
import { CreatePanelModal } from "./Components/CreatePanelModal";
import { SiteClickAlart } from './Components/SiteClickAlart';
import { UserOffcanvas } from "./Components/UserOffcanvas";
import { SiteOffcanvas } from "./Components/SiteOffcanvas";

function App() {
  const location = useLocation();
  const [panels, setPanels] = useState('');
  const [showCreatePanelModal, setShowCreatePanelModal] = useState(false);

  const [showSiteClickAlart, setShowSiteClickAlart] = useState(false);

  useEffect(() => {
    fetch('http://reachhold.com:8080/panelEntities?page=0&size=100', {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Basic ' + btoa('dashboard:qwe565656')
      })
    })
        .then(response => response.json())
        .then(data => setPanels(data))
        .then(() => window.HSStaticMethods.autoInit())
        .catch(er => console.log(er))
  }, [])

  useEffect(() => {
    if (window.HSStaticMethods) {
    }
  }, [location.pathname]);

  return (
      <div className="bg-gray-900 text-white">
        {/* Header */}
        <header className="container bg-gray-800 mx-auto rounded-md px-3 mt-6">
          <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="/img/mdimg.jpg" alt="Logo" className="w-10 h-10 rounded-md" />
                <h1 className="text-white pl-3">Админка Админок</h1>
              </div>
              {/* Search */}
              <div>
                <input type="text" className="py-2 px-20 rounded-lg bg-gray-900" placeholder="Пошук" readOnly />
              </div>
              {/* Button */}
              <div className="relative ml-3">
                <div>
                  <button type="button"
                          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-focus-management-modal"
                          onClick={() => setShowCreatePanelModal(true)}>+Створити</button>
                  {showCreatePanelModal && <CreatePanelModal onClose={() => setShowCreatePanelModal(false)} />}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="pt-4 px-20 mx-auto">
          <table className="w-full text-xs">
            <thead>
            <tr className="text-left">
              <th className="p-3">STATUS</th>
              <th className="p-3">URL</th>
              <th className="p-3">VERSION</th>
              <th className="p-3">ACTIONS</th>
            </tr>
            </thead>
            <tbody>
            {panels && panels['_embedded']['panelEntities'].map((panel, index) => {
              return (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           strokeWidth="1.5" stroke="currentColor" className="size-4 text-green-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </td>

                    <td className="p-3">{panel['url']}</td>
                    <td className="p-3">{panel['version']}</td>
                    <td className="p-3">
                      <div className="hs-dropdown relative inline-flex">
                        <button id={panel['id']} type="button" className="hs-dropdown-toggle flex justify-center items-center size-9 text-sm font-semibold  text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-white dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                          <svg className="flex-none size-4 text-gray-600 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg></button>
                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 bg-gray-900 shadow-md rounded-lg mt-2 dark:bg-neutral-800 border border-white" role="menu" aria-orientation="vertical" aria-labelledby={panel['id']}>
                          <div className="p-2 space-y-0.5">
                            {/* Кнопка для открытия offcanvas */}
                            <button type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" aria-controls="hs-offcanvas-right-users" data-hs-overlay="#hs-offcanvas-right-users">Користувачі</button>
                            <button type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" aria-controls="hs-offcanvas-right-sites" data-hs-overlay="#hs-offcanvas-right-sites">Сайти</button>
                            <button type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" aria-controls="hs-offcanvas-right-settings" data-hs-overlay="#hs-offcanvas-right-settings">Налаштування</button>
                            <button type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sx text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700" aria-controls="hs-offcanvas-right-changes" data-hs-overlay="#hs-offcanvas-right-changes">Змінити стан</button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>)
            })}
            </tbody>
          </table>
        </main>
        {/* Offcanvas */}
        <SiteOffcanvas setShowSiteClickAlart={(bool) => setShowSiteClickAlart(bool)}></SiteOffcanvas>
        <UserOffcanvas setShowSiteClickAlart={(bool) => setShowSiteClickAlart(bool)}></UserOffcanvas>


        {showSiteClickAlart && <SiteClickAlart onClose={() => setShowSiteClickAlart(false)} />}
      </div>
  );
}
export default App;
