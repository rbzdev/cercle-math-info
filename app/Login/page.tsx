"use client";

// Libs
import { useState } from "react";
import { useRouter } from "next/navigation"; // Utilisez next/navigation pour les actions client
import Link from "next/link";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "@/components/ui/loader";

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      router.push("/Profil"); // Redirection
    }, 4000);
  };

  return (
    <div className="w-[90%] md:w-1/2 mx-auto h-screen flex flex-col justify-center items-center space-y-6">
      <IoIosArrowBack
        className="text-2xl md:text-4xl fixed left-2 top-2 border rounded-full backdrop-blur-sm"
        onClick={() => router.back()}
      />

      <div className="flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-semibold">Connexion</h2>
        <h2 className="text-xs text-gray-500">
          Connectez-vous pour accéder à l&apos;espace membre
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="exemple@email.com"
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="w-full flex justify-between">
            <Label htmlFor="password">Mot de passe</Label>
            <Link
              href="/"
              className="text-xs text-indigo-500 dark:text-indigo-500/70 hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <Input
            id="password"
            placeholder="Saisissez votre mot de passe"
            type="password"
            required
          />
        </div>
        <Button
          disabled={submitting}
          className="flex items-center justify-center"
        >
          {submitting ? <Loader /> : "Accéder à mon profil"}
        </Button>
      </form>
      <p className="text-left text-sm mt-6 w-full">
        Pas de profil ?{" "}
        <Link
          href="/Join"
          className="text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Créer mon profil ici
        </Link>
      </p>
    </div>
  );
}
