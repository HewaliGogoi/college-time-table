const timeSlot = (model1, model2) => {
    return async (req, res) => {
        try {

            let slot = await model1.find({});
            // console.log(req.body.start)
            let flag = true;
            for(let i = 0; i < slot.length; i++){
                if(req.body.start >= slot[i].start && req.body.start <= slot[i].end){
                    flag = false;
                    break;
                }
            }
            if(flag){
                let newSlot = await model1.insertMany([req.body]);
                // let allSlot = await model2.insertMany([newSlot])
                res.send(newSlot);
                // res.send(allSlot);
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
            res.send(error);
        }
    };
};

const instructor = (model1) => {
    return async (req, res) => {
        try {
            let teacher = await model1.find({});
            let flag = true;
            for(let i = 0; i < teacher.length; i++){
                if(teacher[i].id == req.body.id){
                    flag = false;
                    var slotFlag = true;
                    for(let j = 0; j < teacher[i].slots.length; j++){
                        if(req.body.slots[0].start >= teacher[i].slots[j].start && req.body.slots[0].start <= teacher[i].slots[j].end){
                            slotFlag = false;
                            break;
                        }
                    }
                    if(!slotFlag){
                        res.send('No slots available!')
                    }if(slotFlag){
                        teacher[i].slots = teacher[i].slots.push(req.body.slots[0])
                        let newSlot = await model1.updateOne({id : req.body.id},{$set : teacher[i].slots})
                        res.send(newSlot);
                    }
                }
            }
            if(flag){
                let newInstructor = await model1.insertMany([req.body]);
                res.send(newInstructor);
            }
        } catch (error) {
            res.send(error);
        }
    }
}

module.exports = (model1, model2) => {
    return {
        timeSlot : timeSlot(model1, model2),
        allSlots : allSlots(model1),
        instructor : instructor(model1)
    }
}