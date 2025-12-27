'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <FontAwesomeIcon icon={faCube} className="h-8 w-8" />
            <span className="text-xl font-bold">MineNepal Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-green-200 transition-colors">
              Home
            </Link>
            <Link href="/tools/status" className="hover:text-green-200 transition-colors">
              Server Status
            </Link>
            <Link href="/tools/uuid" className="hover:text-green-200 transition-colors">
              Player Lookup
            </Link>
            <Link href="/tools/motd" className="hover:text-green-200 transition-colors">
              MOTD Editor
            </Link>
            <Link href="/tools/crafting" className="hover:text-green-200 transition-colors">
              Crafting Guide
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-green-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tools/status"
              className="block py-2 hover:text-green-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Server Status
            </Link>
            <Link
              href="/tools/uuid"
              className="block py-2 hover:text-green-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Player Lookup
            </Link>
            <Link
              href="/tools/motd"
              className="block py-2 hover:text-green-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              MOTD Editor
            </Link>
            <Link
              href="/tools/crafting"
              className="block py-2 hover:text-green-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Crafting Guide
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
