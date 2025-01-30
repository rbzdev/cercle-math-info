"use client";

// Libs
import { Mistral } from "@mistralai/mistralai";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

import AnimatedShinyText from "@/components/ui/animated-shiny-text";

// Icons
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

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
    <div className="fixed bottom-2 right-2 z-30">
      {/* Bouton pour ouvrir/fermer le chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center  bg-gray-500/50 text-gray-800 rounded-full shadow-lg hover:bg-gray-700 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "w-10 h-10" : "w-14 h-14"
        } transition`}
      >
        {isOpen ? (
          <IoClose className="text-xl dark:text-gray-200" />
        ) : (
          <div>
            <BsStars className="text-2xl absolute -top-1 -left-1 dark:text-white" />
            <IoChatbubbleEllipsesOutline className="text-3xl dark:text-gray-400" />
          </div>
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
            className="absolute bottom-12 right-0 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-800/50 dark:bg-slate-700 text-white p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Chatbot</h3>
              <div className="flex gap-2">
                <IoClose
                  className="text-2xl cursor-pointer hover:text-gray-300 transition"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            {/* Historique des messages */}
            <div className="p-4 h-64 flex-1 overflow-y-auto thin-scrollbar">
              {history.length === 0 ? (
                <div className="relative h-full flex flex-col justify-center items-center">
                  <AnimatedShinyText className="text-sm text-gray-600 text-center font-bold mb-6">
                    Posez-moi une question sur le cercle scientifique !
                  </AnimatedShinyText>

                  <span className="text-xs text-gray-300 dark:text-gray-700 mt-2 absolute bottom-0">
                    Ce chatbot a été codé manuellement et utilise l&apos;API de
                    Mistral AI pour répondre aux questions. Nous pouvons le{" "}
                    <span className=" font-semibold text-gray-500">
                      finetuner
                    </span>{" "}
                    pour qu&apos;il réponde uniquement aux questions sur le
                    cercle scientifique Math-info.
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
                className="flex-1 dark:border-indigo-300"
              />
              <Button type="submit" className="ml-2" disabled={isThinking}>
                {isThinking ? <Loader /> : "Envoyer"}
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
