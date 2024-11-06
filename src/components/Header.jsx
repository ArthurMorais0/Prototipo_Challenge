import { useState } from "react"; // Importa o hook useState para controlar o estado do componente
import {
  // Importa ícones de navegação e ação
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

function Header() {
  // Define o estado para controlar a visibilidade do menu lateral
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 bg-gray-800 text-white flex items-center justify-between">
      {/* Barra de Pesquisa */}
      <div className="relative flex-1 mx-4 max-w-md flex">
        <input
          type="text"
          placeholder="Buscar produtos..." // Placeholder para a barra de pesquisa
          className="px-4 py-2 pl-10 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        {/* Ícone de lupa para indicar a barra de pesquisa */}
        <MagnifyingGlassIcon className="absolute top-2.5 left-3 w-5 h-5 text-gray-400" />
      </div>

      {/* Botão de Menu para abrir a Sidebar no mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {/* Alterna entre o ícone de abrir e fechar o menu */}
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Sidebar que aparece quando menuOpen é true */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 p-6 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Botão para fechar a Sidebar */}
        <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className="absolute top-4 right-4">
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        {/* Navegação da Sidebar com Ícones */}
        <nav className="mt-8 space-y-4">
          <a href="#computadores" className="flex items-center hover:text-gray-400">
            <ComputerDesktopIcon className="w-6 h-6 mr-2" /> Computadores
          </a>
          <a href="#celulares" className="flex items-center hover:text-gray-400">
            <DevicePhoneMobileIcon className="w-6 h-6 mr-2" /> Celulares
          </a>
          <a href="#perifericos" className="flex items-center hover:text-gray-400">
            <CubeIcon className="w-6 h-6 mr-2" /> Periféricos
          </a>
          <a href="#ofertas" className="flex items-center hover:text-gray-400">
            <TicketIcon className="w-6 h-6 mr-2" /> Ofertas
          </a>
        </nav>

        {/* Itens de Ação na Sidebar */}
        <div className="mt-8 space-y-4">
          <a href="#login" className="flex items-center hover:text-gray-400">
            <UserIcon className="w-6 h-6 mr-2" /> Login
          </a>
          <a href="#favoritos" className="flex items-center hover:text-gray-400">
            <HeartIcon className="w-6 h-6 mr-2" /> Favoritos
          </a>
          <a href="#carrinho" className="flex items-center hover:text-gray-400">
            <ShoppingCartIcon className="w-6 h-6 mr-2" /> Carrinho
          </a>
        </div>
      </div>

      {/* Menu de Navegação e Ícones de Ação para telas maiores */}
      <div className="hidden md:flex space-x-8 items-center">
        <nav className="space-x-8">
          <a href="#computadores" className="hover:text-gray-400">Computadores</a>
          <a href="#celulares" className="hover:text-gray-400">Celulares</a>
          <a href="#perifericos" className="hover:text-gray-400">Periféricos</a>
          <a href="#ofertas" className="hover:text-gray-400">Ofertas</a>
        </nav>
        {/* Ícones de ação */}
        <div className="flex space-x-6 items-center">
          <a href="#login" className="flex items-center hover:text-gray-400">
            <UserIcon className="w-6 h-6 mr-2" /> Login
          </a>
          <a href="#favoritos" className="flex items-center hover:text-gray-400">
            <HeartIcon className="w-6 h-6 mr-2" /> Favoritos
          </a>
          <a href="#carrinho" className="flex items-center hover:text-gray-400">
            <ShoppingCartIcon className="w-6 h-6 mr-2" /> Carrinho
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header; // Exporta o componente para ser usado em outros lugares do projeto
