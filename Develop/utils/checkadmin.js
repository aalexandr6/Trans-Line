checkEmail = async (email) => {
    const adminData = await admin.findOne({ where: { email: email } });
    if (adminData) {
        return true;
    }
    const driverData = await drivers.findOne({ where: { email: email } });
    if (driverData) {
        return true;
    }
    return false;
};

module.exports=checkEmail
