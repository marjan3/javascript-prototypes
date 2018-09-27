var repo = function(){
    var db = {};
    var get = function(id){
        console.log("Getting task: " + id);
        return {
            name: "New task with id " + id 
        }
    };
    var save = function(task){
        console.log("Saving task: " + task.name + " into db");
    };
    
    return {
        get: get,
        save: save
    }
}

module.exports = repo();