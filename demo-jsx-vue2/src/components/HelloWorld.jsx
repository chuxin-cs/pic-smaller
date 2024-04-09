export default {
    methods:{
        handleClick(){
            alert(1)
        }
    },
    data(){
        return {
            id:"chu-xin",
            newTodoText:""
        }
    },
    render() {
        return (
            <div>
                <input vModel={this.newTodoText} />
                <h1>{ this.newTodoText }</h1>
                <p id={this.id} vOn:click={()=>this.handleClick()}>111111hello</p>
            </div>
        )
       
    }
}