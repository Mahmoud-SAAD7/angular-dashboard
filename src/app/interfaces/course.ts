export interface Icourse {
    _id: string;
    Title: string;
    Description: string;
    InstructorID: string;
    CategoryID: string;
    Price: string;
    Duration: string;
    CourseMaterial: Object;
    isAccepted: boolean;
    CourseImg:string
}

// title: {
//     type: String,
//     required: [true, "course title is required"],
//     unique: [true, "course title must be unique"],
//   },
//   description: {
//     type: String,
//     required: [true, "course description is required"],
//   },
//   freelanceId: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: [true, "freelancer id is required"],
//   },
//   categoryId: {
//     type: Schema.Types.ObjectId,
//     required: [true, "course category is required"],
//   },
//   price: {
//     type: String,
//     required: [true, "course price is required"],
//   },
//   duration: {
//     type: String,
//     required: [true, "course duration is required"],
//   },
//   courseMaterial: {
//     type: Object,
//     required: [true, "course material is required"],
//   },
//   isAccepted: {
//     type: Boolean,
//     default: false,
//   },