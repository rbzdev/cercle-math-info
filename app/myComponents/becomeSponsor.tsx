"use client";

// Components
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function BecomeSponsor() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsDialogOpen(false); // Ferme le Dialog
    setIsAlertVisible(true); // Affiche l'alerte
  };

  useEffect(() => {
    if (isAlertVisible) {
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 5000);
    }
  }, [isAlertVisible]);

  return (
    <>
      {isAlertVisible && (
        <div className="fixed z-30 flex top-0 left-1/2 w-full md:w-fit -translate-x-1/2 justify-center p-4 sm:p-6 lg:p-8">
          <Alert className="bg-indigo-200/50 dark:bg-blue-900/50 text-indigo-500 dark:text-indigo-300 backdrop-blur-sm">
            <AlertTitle>Merci</AlertTitle>
            <AlertDescription>
              Vous serez contacté par mail pour la validation de votre demande.
            </AlertDescription>
          </Alert>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button className="px-4 py-1 border rounded-full hover:scale-95 transition-all duration-300 text-indigo-700 border-indigo-500  hover:bg-indigo-500 hover:text-white">
            <AnimatedShinyText className="">Devenir sponsor</AnimatedShinyText>
          </button>
        </DialogTrigger>
        <DialogContent className="w-[95%] sm:max-w-[425px] rounded-2xl">
          <DialogHeader>
            <DialogTitle>Dévenir sponsor</DialogTitle>
            <DialogDescription>
              Veuillez remplir les informations ci-dessous pour devenir un
              sponsor.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-right">
                Votre nom
              </Label>
              <Input
                id="name"
                defaultValue=""
                placeholder="Exemple : John Doe"
                className="col-span-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-right">
                Votre email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue=""
                placeholder="exemple@domain.com"
                className="col-span-3"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                defaultValue=""
                placeholder="Quelles sont vos intérêts, projets et objectifs pour le cercle Math Info ?"
                className="h-32"
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit">Soumettre</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
