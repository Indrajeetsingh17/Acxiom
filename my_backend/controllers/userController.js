const manageUser = (req, res) => {
    res.status(200).json({ message: 'User managed successfully' });
};

module.exports = { manageUser };
