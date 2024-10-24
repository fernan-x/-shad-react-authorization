import { useNotes } from "@/features/notes";

export default function Notes() {
    const notes = useNotes();

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.description}</p>
                </div>
            ))}
        </div>
    )
}