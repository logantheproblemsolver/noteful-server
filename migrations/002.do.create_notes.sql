CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    folderId INTEGER REFERENCES folders(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    modified TIMESTAMP NOT NULL DEFAULT now(),
    content TEXT
);