"use client";

import style from "./revalidateButton.module.css"
import { useState } from "react";
import {toast} from "react-toastify";


export default function RevalidateButton() {
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

    const handleClick = async () => {
        setStatus("loading");


        try {
            const res = await fetch("/api/revalidate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    paths: [
                        "/",
                        "/actualites",
                        "/club",
                        "/equipes",
                        "/partners",
                        '/admin/modifyMember',
                        '/admin/modifyActuality',
                        '/admin/modifyHistory',
                        '/admin/modifyPartner',
                        '/admin/modifyTeam',
                        '/admin/addMember'
                    ],
                }),
            });

            if (!res.ok) {
                toast.error("Erreur revalidation")
            }

            setStatus("done");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <button className={style.button} onClick={handleClick} disabled={status === "loading"}>
            {status === "idle" && "🔁 Revalider le site"}
            {status === "loading" && "⏳ Mise à jour..."}
            {status === "done" && "✅ Mis à jour !"}
            {status === "error" && "❌ Erreur"}
        </button>
    );
}
