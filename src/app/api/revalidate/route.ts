import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { readAllActualities } from "@/features/actuality/repository";

import { readCategories } from "@/features/team/repository";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { paths } = body;

        if (!Array.isArray(paths)) {
            return NextResponse.json({ message: 'Missing or invalid paths' }, { status: 400 });
        }


        for (const path of paths) {
            revalidatePath(path);
        }


        const actualities = await readAllActualities();
        if (actualities.success && Array.isArray(actualities.data)) {
            for (const a of actualities.data) {
                revalidatePath(`/actuality/${a.id}`);
            }
        } else {
            console.warn("Aucune actualité trouvée ou erreur.");
        }


        const teams = await readCategories();
        if (teams.success && Array.isArray(teams.data)) {
            for (const team of teams.data) {
                revalidatePath(`/team/${team.id}`);
            }
        } else {
            console.warn("Aucune équipe trouvée ou erreur.");
        }

        return NextResponse.json({ revalidated: true });

    } catch (err) {
        console.error("Erreur de revalidation :", err);
        return NextResponse.json({ message: 'Error during revalidation' }, { status: 500 });
    }
}
