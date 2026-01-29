"use client";

import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { Gamepad2, Pencil, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    // Check if app is running as PWA
    const isPWAMode = window.matchMedia("(display-mode: standalone)").matches ||
      ((window.navigator as unknown) as { standalone?: boolean }).standalone === true;
    setIsPWA(isPWAMode);

    // Check online status
    setIsOnline(navigator.onLine);
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <PWAInstallPrompt />

      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WQ</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  WordQuest Isle
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Firebase Studio App
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isPWA && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                  PWA Mode
                </span>
              )}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  isOnline
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                    : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                }`}
              >
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Welcome to WordQuest Isle
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            An interactive word game with multiple game modes. Play offline, install as an app, and enjoy anytime!
          </p>
        </div>

        {/* Game Modes Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Classic Mode */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Gamepad2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Classic Mode
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Test your word knowledge with challenging puzzles and word games.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Start Game
            </button>
          </div>

          {/* Creative Mode */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <Pencil className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Creative Mode
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Create your own word categories and share them with friends.
            </p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Create Category
            </button>
          </div>

          {/* Frenzy Mini-Games */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Frenzy Mini-Games
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Fast-paced mini-games to test your reflexes and word skills.
            </p>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Play
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Why Choose WordQuest Isle?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Works Offline
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Play anytime, anywhere - even without internet connection
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Install as App
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Install directly on your device for quick access
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Fast & Responsive
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Lightning-fast performance on all devices
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Dark Mode Support
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Comfortable gaming experience in any lighting condition
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Play?</h3>
          <p className="text-lg mb-6 opacity-90">
            Install WordQuest Isle now and start your word adventure!
          </p>
          <button className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transition-colors">
            Install Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2026 WordQuest Isle. Built with Next.js and PWA Technology.</p>
            <p className="text-sm mt-2">
              This is a Progressive Web App - works offline and can be installed on your device.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
