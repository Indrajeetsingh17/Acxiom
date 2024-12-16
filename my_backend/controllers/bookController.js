const addBook = (req, res) => {
    res.status(200).json({ message: 'Book added successfully' });
};

const updateBook = (req, res) => {
    res.status(200).json({ message: 'Book updated successfully' });
};

const issueBook = (req, res) => {
    res.status(200).json({ message: 'Book issued successfully' });
};

module.exports = { addBook, updateBook, issueBook };
