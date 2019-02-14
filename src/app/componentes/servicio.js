class Servicio {
    
    constructor (){
        const url = 'https://jsonplaceholder.typicode.com/'
        const todos = 'todos/'
        const posts = 'posts/'
        const users = 'users/'
       
        // var usuarios = []
        // fetch(url+users)
        // .then(response => response.json())
        // .then( json =>  {
        //     usuarios = json
        //     console.log(usuarios)
        // })

        var usuarios = []
        fetch(url + users)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {

                let usuariotmp = {
                    name: element.name,
                    username: element.username,
                    mail: element.email
                }
                 
                usuarios.push(usuariotmp)
           
            });
            console.log(usuarios)
        })



    }
}
export default Servicio
