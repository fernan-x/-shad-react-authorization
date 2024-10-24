import { Note } from "./note.entity";

export const NoteFactory = {
    create(data: Partial<Note>): Note {
        return {
            id: '',
            title: '',
            description: '',
            createdAt: new Date(),
            updatedAt: new Date(),
            ...data,
        };
    },
}