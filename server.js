const express = require('express');
const app = express();

// Middleware supaya server bisa membaca data JSON yang kita kirim
app.use(express.json());

// Database sementara (Array)
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// [GET ALL] - Menampilkan semua data
app.get('/users', (req, res) => {
    res.json(users);
});

// [GET SATUAN] - Menampilkan satu data berdasarkan ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
    res.json(user);
});

// [POST] - Tambah data baru
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// [PUT] - Update data berdasarkan ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    user.name = req.body.name;
    res.json({ message: "Data berhasil diupdate", user });
});

// [DELETE] - Hapus data berdasarkan ID
app.delete('/users/:id', (req, res) => {
    const initialLength = users.length;
    users = users.filter(u => u.id !== parseInt(req.params.id));
    
    if (users.length === initialLength) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.json({ message: "User berhasil dihapus" });
});

// Jalankan Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});