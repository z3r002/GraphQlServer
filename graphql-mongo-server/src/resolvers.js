import {Task} from "./models/Task";

export const resolvers = {
    Query: {
        hello: () => "hi",
        tasks: () => Task.find()
    },
    Mutation: {
        toggleComplete: (_, arg) => {
            console.log(arg.id)
            const itemTotoggle = Task.findById(arg.id, function (err, item) {
                console.log(item.label);
                console.log(item._id)
                item.check = !item.check
                console.log(item.check)
                item.save();
            });
            console.log(itemTotoggle)
            return itemTotoggle;
        },
        removeTask: (_, arg) => {
          const itemDel = Task.findByIdAndDelete(arg.id, function (err,item){
              if (err){
                  console.log(err)
              }
              else{
                  console.log("Deleted : ", item);

              }
          })
        },

        createTask: async (_, {label}) => {
            const newTodo = new Task({label, check: false});
            await newTodo.save();
            return newTodo;
        }
        // addTodo: async (parent, args) => {
        //     const newTodo = {
        //         text: args.text,
        //         completed: false,
        //     }
        //     todos.push(newTodo)
        //     return newTodo
        // },
    },
    // createTask: async (_, {label, check}) => {
    //     const kitty = new Task({label, check});
    //     await kitty.save();
    //     return kitty;
    // }


};


