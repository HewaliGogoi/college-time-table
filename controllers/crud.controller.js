const timeSlot = (model1, model2) => {
    return async (req, res) => {
        try {

            let slot = await model1.find({});
            // console.log(req.body.start)
            let flag = true;
            for(let i = 0; i < slot.length; i++){
                if(req.body.start > slot[i].start && req.body.start < slot[i].end){
                    flag = false;
                    break;
                }
            }
            if(flag){
                var newSlot = await model1.insertMany([req.body]);
                res.send(newSlot);
            }else{
                res.send('time slot is occupied!')
            }
        } catch (error) {
            console.log(error);
        }
    };
};

const allSlots = (model1) => {
    return async (req, res) => {
        try {
            let slots = await model1.findOne({});
            res.send(slots);
        } catch (error) {
            console.log(error);
        }
    };
};

module.exports = (model1, model2) => {
    return {
        timeSlot : timeSlot(model1, model2),
        allSlots : allSlots(model1)
    }
}