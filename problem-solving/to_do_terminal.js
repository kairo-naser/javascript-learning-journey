
// import readline to take inputs from users
const  readline= require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

})

// empty array to store the tasks
let tasks =[]

// function to append tasks that is being added to empty array
function addTask(task){
  return tasks.push(task)
}

// to check if the task already ther in tasks list
function tastExist(task){
  for(let i=0; i< tasks.length; i++){
    if(tasks[i].toLowerCase()=== task.toLowerCase()){
      return true
    }
   
  }
  return false

}

// clear all tasks
function clearTasks(){
   tasks.length =0
   console.log("All the tasks is being deleted")
}
// delete specific task
function deleteSpecificTask(index){
  tasks.splice(index-1,1)
  console.log("This is the tasks after deleting the select task: ")
  for (let i=0; i< tasks.length; i++){
    console.log(`${i+1}. ${tasks[i]}`)
    
 }
}


// find the longest task
function longestTask(task){
  let maxTask = task[0]
  for (let i=0; i< task.length; i++){
    if( maxTask < task[i]){
      maxTask = task[i]
    }
  }
 return maxTask
}


// mark tasks as done and not done
function markTasks(task){
  let doneTasks=[]
  let nonDoneTasks =[]
  rl.question("Do you wanna to check any tasks? (yes or no)", (check)=>{
    if(check.toLowerCase()==="yes"){
      console.log(`ALL TODAY'S TAKS:`)
      for(let i=0; i< task.length; i++){
        console.log(`${i+1}.${task[i]}`)
      }
      rl.question("Enter number of task you wanna mark as done? ", (index)=>{
         for(let i=0; i<task.lenght; i++){
          if(index.toLowerCase()=== (i+1)){
            doneTasks.push(i)
          }
          else{
            nonDoneTasks.push(i)
          }
         }

         console.log(`Done Tasks::`)
  for(let i=0; i< doneTasks.length; i++){
    console.log(`${i+1}.${doneTasks[i]}`)
  }
  console.log(`Not-done Tasks::`)
  for(let i=0; i< doneTasks.length; i++){
    console.log(`${i+1}.${nonDoneTasks[i]}`)
  }
      })gi
    }
    else{
      console.log("Goodbye for today")
     
    }
  })
  
  
}
// the rl question and prints the new tasks added
function askTask(){
  rl.question("Enter a task (or type 'done' to finish or 'delete' to delete or tasks): ", (input)=>{
    if( input.toLowerCase()==="done"){
    
      console.log("\nAll tasks for today:");
      for (let i=0; i< tasks.length; i++){
         console.log(`${i+1}. ${tasks[i]}`)
         
         
      }
      console.log(`This is the lenght of today's to do lis: ${tasks.length}`)
      console.log(`This is sorted tasks of today: ${tasks.sort()}`)
      console.log(`This is the longest task in length in today's task: ${longestTask(tasks)}`)
      markTasks(tasks)
     rl.close()
    
    }
    else if(input.toLowerCase()==="delete"){
      
      // clearTasks()
      // askTask()
     rl.question("Do you wanna delete all task or specific one? (if all write 'all' or if specific one write 'one') : " , (inputDelete)=>{
      if(input.toLowerCase()==="all"){
        clearTasks()
        askTask()
      }
      else{
        for (let i=0; i< tasks.length; i++){
          console.log(`${i+1}. ${tasks[i]}`)
          
       }
       rl.question("Write the index of the task you wanna delete? (e.g 1, 2,3 ) : ", (index)=>{
        deleteSpecificTask(index)
        
        askTask()

       })
      }
     })
      
    }
    else{

      if(tastExist(input)){
       console.log("This task is already exists.ENter another task")
      }
      else{
        addTask(input)
      }
      
      askTask()
    }
    
    
  })
}


askTask()



