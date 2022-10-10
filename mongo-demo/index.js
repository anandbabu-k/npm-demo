const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/playground",{
    useCreateIndex: true,
    useNewUrlParser: true
  })
.then(() => console.log("Connected to MongoDb..."))
.catch(err => console.error("error", err))



const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ["web", "mobile", "network"],
        lowercase: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback){
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000)
            },
            message: "A course should have at least 1 time"
        }
    },
    date: {type: Date, default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function(){
            return this.isPublished
        },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
})

const Course = mongoose.model("Course", courseSchema);


async function createCourse(){
    const course = new Course({
        name: "Angular Course",
        category: "Web",
        author: "Anand",
        tags: null,
        isPublished: true,
        price: 15
    })
    try{
        const result = await course.save();
        console.log(result);
    }catch (ex){
        for(field in ex.errors){
            console.log(ex.errors[field].message)
        }
    }
}

async function getCourses(){

    const pageNumber = 2, pageSize = 10;

    const courses = await Course
    .find({_id: "633d37c1e0129491e34ac6ee", isPublished: true})
    // .find({price: {$gte: 10, $lte: 20}})
    // .find({price: {$in: [10, 15, 20]}})
    // .find({author: /^Anand/})
    // .skip((pageNumber - 1) * pageSize)
    // .find({author: /Hamedani$/i})
    // .find({author: /.*Anand.*/i})
    // .or([{author: "Anand"}, {isPublished: true}])
    // .limit(pageSize)
    .sort({name: 1})
    .count()
    // .select({name: 1, tags: 1});
    console.log(courses)
}


async function updateCourse(id){
    const result = await Course.findByIdAndUpdate(id, {
        $set: {
            author: "jack1",
            isPublished: true
        }
    }, {new: true}); 

    console.log(result)
}

async function removeCourse(id){
    const result = await Course.findByIdAndRemove(id)
    console.log(result)
}




// createCourse()
// getCourses()