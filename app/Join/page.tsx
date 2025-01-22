"use client";

// Libs
import { motion } from "framer-motion";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Icons
import { FaUserGraduate, FaUserTie } from "react-icons/fa6";
import { useState } from "react";
import { GiTeacher, GiStrongMan } from "react-icons/gi";
import { PiDevicesFill } from "react-icons/pi";
import Link from "next/link";

export default function Page() {
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center py-4 h-screen">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center mb-6">
          Créer mon profil de membre
        </h1>

        <div className="w-full flex items-center justify-center gap-4">
          <form action="" className="w-full md:w-1/2 space-y-4 p-4">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Prénom"
                className="flex-1"
                required
              />
              <Input
                type="text"
                placeholder="Nom "
                className="flex-1"
                required
              />
            </div>
            <Input
              type="text"
              placeholder="Votre numéro de téléphone"
              className="w-full"
              required
            />
            <div className="flex gap-2">
              {/* Select for status with animation */}
              <div className="flex-1">
                <Select onValueChange={(value) => setSelectedStatus(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Votre statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Choisir votre statut</SelectLabel>
                      <SelectItem value="Étudiant">
                        <div className="flex items-center gap-2">
                          <FaUserGraduate /> Étudiant
                        </div>
                      </SelectItem>
                      <SelectItem value="Formateur">
                        <div className="flex items-center gap-2">
                          <GiTeacher /> Formateur
                        </div>
                      </SelectItem>
                      <SelectItem value="Professeur">
                        <div className="flex items-center gap-2 truncate">
                          <FaUserTie /> Prof. | Assistant
                        </div>
                      </SelectItem>
                      <SelectItem value="Indépendant">
                        <div className="flex items-center gap-2">
                          <PiDevicesFill /> Indépendant
                        </div>
                      </SelectItem>
                      <SelectItem value="Entrepreneur">
                        <div className="flex items-center gap-2">
                          <GiStrongMan className="text-xl" /> Entrepreneur
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Animated options for additional fields */}
              {["Étudiant", "Formateur", "Professeur"].includes(
                selectedStatus
              ) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  {selectedStatus === "Étudiant" && (
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Promotion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Choisir votre promotion</SelectLabel>
                          <SelectItem value="bac1">BAC 1</SelectItem>
                          <SelectItem value="bac2">BAC 2</SelectItem>
                          <SelectItem value="bac3">BAC 3</SelectItem>
                          <SelectItem value="master1">Master 1</SelectItem>
                          <SelectItem value="master2">Master 2</SelectItem>
                          <SelectItem value="more">Doctorat & plus</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                  {(selectedStatus === "Formateur" ||
                    selectedStatus === "Professeur") && (
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Matière" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Choisir une matière</SelectLabel>
                          <SelectItem value="informatique">
                            Informatique
                          </SelectItem>
                          <SelectItem value="mathematiques">
                            Mathématiques
                          </SelectItem>
                          <SelectItem value="physiques">Physiques</SelectItem>
                          <SelectItem value="science_generale">
                            Science générale
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                </motion.div>
              )}
            </div>
            <Input
              type="email"
              placeholder="Votre email"
              className="w-full"
              required
            />
            <Input
              type="password"
              placeholder="Créez un mot de passe"
              className="w-full"
              required
            />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-xs text-gray-400 dark:text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                En continuant, j&apos;accepte les{" "}
                <a
                  href="#"
                  className="text-indigo-600/50 hover:underline dark:text-indigo-500/60"
                >
                  Termes et conditions d&apos;utilisation
                </a>
              </label>
            </div>

            {/* Submit Form */}
            <Button className="w-full md:w-1/2">Créer mon profil</Button>

            {/* Link to login page */}
            <p className="text-left text-sm mt-6 ">
              Déjà membre ?{" "}
              <Link
                href="/Login"
                className="text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Connectez-vous ici
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
