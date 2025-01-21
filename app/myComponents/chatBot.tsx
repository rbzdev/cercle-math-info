"use client";

// Libs
import { Mistral } from "@mistralai/mistralai";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Icons
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import { GoScreenFull, GoScreenNormal } from "react-icons/go";

const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;
const client = new Mistral({ apiKey: apiKey });

async function generateResponse(prompt: string) {
  try {
    const chatResponse = await client.chat.complete({
      model: "mistral-large-latest",
      messages: [{ role: "user", content: prompt }],
    });

    if (chatResponse.choices && chatResponse.choices[0]) {
      return chatResponse.choices[0].message.content;
    } else {
      console.error("Aucune réponse valide du chatbot.");
    }
  } catch (error) {
    console.error("Erreur lors de la génération de la réponse :", error);
    return "Désolé, une erreur est survenue. Veuillez réessayer plus tard.";
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<{ user: string; bot: string }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsThinking(true);

    const responseText = await generateResponse(message);

    setHistory((prevHistory) => [
      ...prevHistory,
      {
        user: message,
        bot:
          typeof responseText === "string"
            ? responseText
            : "Pas de réponse disponible.",
      },
    ]);

    setMessage("");
    setIsThinking(false);
  };

  return (
    <>
      {/* Bouton pour ouvrir/fermer le chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-gray-500/50 text-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition"
        style={{ position: "relative" }}
      >
        {isOpen ? (
          <IoClose className="text-3xl" />
        ) : (
          <IoChatbubbleEllipsesOutline className="text-3xl" />
        )}
      </button>

      {/* Chatbot UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Animation initiale : commence depuis le coin inférieur droit
            // Si plein écran, y et x partent de "100%". Sinon, un léger décalage est appliqué pour donner l'effet.
            initial={{
              opacity: 0, // L'opacité commence à 0 pour un effet de fondu
              y: 20, // Position verticale (bottom-right pour plein écran)
              // x: isFullScreen ? "100%" : "20px", // Position horizontale (bottom-right pour plein écran)
              width: isFullScreen ? "400px" : "80px", // Largeur initiale (petit mode)
            }}
            // Animation lorsque le composant est monté
            // Se déplace vers le coin supérieur gauche (0, 0) tout en ajustant la largeur et la hauteur
            animate={{
              opacity: 1, // L'opacité atteint 1 pour devenir complètement visible
              y: 0, // Aligne verticalement en haut
              // x: 0, // Aligne horizontalement à gauche
              width: isFullScreen ? "100%" : "320px", // Largeur finale (plein écran ou mode normal)
              height: isFullScreen ? "100%" : "375px", // Hauteur finale (plein écran ou mode normal)
            }}
            // Animation lorsque le composant est démonté
            // Repart vers le coin inférieur droit avec une transition fluide
            exit={{
              opacity: 0, // Disparaît progressivement
              y: 20, // Retourne à la position verticale d'origine
              x: isFullScreen ? "100%" : "20px", // Retourne à la position horizontale d'origine
              width: isFullScreen ? "480px" : "80px", // Reprend la largeur initiale
            }}
            // Transition pour rendre les animations fluides
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // Classes CSS dynamiques : gère la position et le style selon l'état plein écran ou non
            className={`fixed bg-white dark:bg-gray-800 shadow-xl border overflow-hidden flex flex-col ${
              isFullScreen
                ? "z-50 top-0 rounded-none" // Plein écran : occupe tout l'écran
                : "bottom-2 right-2 w-80 rounded-2xl" // Mode normal : positionné en bas à droite
            }`}
          >
            {/* Header */}
            <div className="bg-blue-800/50 dark:bg-slate-700 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Chatbot</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="text-2xl hover:text-gray-300 transition"
                >
                  {isFullScreen ? (
                    <GoScreenNormal className="text-lg" />
                  ) : (
                    <GoScreenFull />
                  )}
                </button>
                <IoClose
                  className="text-2xl cursor-pointer hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            {/* Historique des messages */}
            <div className="p-4 flex-1 overflow-y-auto thin-scrollbar">
              {history.length === 0 ? (
                <div className="relative h-full flex flex-col justify-center items-center">
                  <p className="text-gray-600 text-center">
                    Posez-moi une question sur le cercle scientifique !
                  </p>
                  <span className="text-xs text-gray-300 dark:text-gray-700 mt-2">
                    Ce chatbot utilise l&apos;API de Mistral AI.
                  </span>
                </div>
              ) : (
                history.map((entry, index) => (
                  <div key={index} className="mb-4 text-sm">
                    {/* Message utilisateur */}
                    <div className="bg-indigo-100 p-2 rounded-lg mb-2 text-indigo-800 w-[90%] ml-auto">
                      <p>{entry.user}</p>
                    </div>

                    {/* Réponse du chatbot */}
                    <div className="bg-gray-100 dark:bg-transparent p-2 rounded-lg text-gray-700 dark:text-gray-300 border w-[90%] mr-auto text-left">
                      <p>{entry.bot}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Formulaire */}
            <form
              onSubmit={handleSubmit}
              className="border-t p-2 flex items-center"
            >
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre question..."
                className="flex-1"
              />
              <Button type="submit" className="ml-2" disabled={isThinking}>
                {isThinking ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-4 border-t-gray-300 border-b-gray-300 border-l-gray-300"></div>
                ) : (
                  "Envoyer"
                )}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
