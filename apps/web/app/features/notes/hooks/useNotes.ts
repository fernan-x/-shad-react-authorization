import { useMemo } from "react";
import { Note } from "../entities/note.entity";
import { NoteFactory } from "../entities/note.factory";

export const useNotes = (): Note[] => {
    return useMemo(() => [
        NoteFactory.create({ id: '1', title: 'Note 1', description: 'Description 1' }),
        NoteFactory.create({ id: '2', title: 'Note 2', description: 'Description 2' }),
        NoteFactory.create({ id: '3', title: 'Note 3', description: 'Description 3' }),
    ], []);
};