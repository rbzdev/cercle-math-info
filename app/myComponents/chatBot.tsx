"use client";

// Libs
import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

// Components
import { Input } from "@/components/ui/input";

// icons
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5"; // Icone pour fermer
import { Button } from "@/components/ui/button";

const MISTRAL_API_KEY = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;
// const MISTRAL_API_URL =
//   "https://cors-anywhere.herokuapp.com/https://api.mistral.ai/v1/generate";
const MISTRAL_API_URL = "https://api.mistral.ai/v1/generate";

async function generateResponse(prompt: string) {
  try {
    const response = await axios.post(
      MISTRAL_API_URL,
      {
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${MISTRAL_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Erreur lors de la génération de la réponse :", error);
    return "Désolé, une erreur est survenue. Veuillez réessayer plus tard.";
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<{ user: string; bot: string }[]>([]); // Historique des messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return; // Ignorer si le message est vide

    const responseText = await generateResponse(message);

    // Ajouter le message et la réponse à l'historique
    setHistory((prevHistory) => [
      ...prevHistory,
      { user: message, bot: responseText },
    ]);

    setMessage(""); // Réinitialiser le champ d'entrée
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Bouton pour ouvrir/fermer le chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-gray-500/50 text-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-800/50 dark:bg-slate-700 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Chatbot</h3>
              <IoClose
                className="text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Historique des messages */}
            <div className="p-4 h-64 overflow-y-auto">
              {history.length === 0 ? (
                <div className="relative h-full">
                  <p className="text-gray-600 text-center">
                    Posez-moi une question sur le cercle scientifique !
                  </p>
                  <span className="text-xs text-gray-300 dark:text-gray-700 absolute bottom-0 left-0">
                    {" "}
                    Ce chatbot n&apos;est pas un plugin, il utilise l&apos;API
                    de Mistral AI pour répondre à vos questions. Par ailleurs,
                    nous pourrions le finetuner pour qu&apos;il réponde
                    uniquement aux questions sur le cercle scientifique
                    Math-info.
                  </span>
                </div>
              ) : (
                history.map((entry, index) => (
                  <div key={index} className="mb-4">
                    {/* Message utilisateur */}
                    <div className="bg-indigo-100 p-2 rounded-lg mb-1 self-end text-indigo-800">
                      <p>{entry.user}</p>
                    </div>

                    {/* Réponse du chatbot */}
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-800">
                      <p>{entry.bot}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Formulaire */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center border-t p-2"
            >
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre question..."
                className="flex-1"
              />
              <Button type="submit" className="ml-2">
                Envoyer
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
