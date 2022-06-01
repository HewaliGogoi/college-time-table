const timeSlot = (model) => {
    return async (req, res) => {
        try {
            let slot = await model.insertMany([req.body]);
            res.send(slot);
        } catch (error) {
            console.log(error);
        }
    };
};

const allSlots = (model) => {
    return async (req, res) => {
        try {
            let slots = await model.findOne({});
            res.send(slots);
        } catch (error) {
            console.log(error);
        }
    };
};

module.exports = (model) => {
    return {
        timeSlot : timeSlot(model),
        allSlots : allSlots(model)
    }
}