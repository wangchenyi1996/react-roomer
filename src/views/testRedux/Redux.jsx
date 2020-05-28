// import React, { Component } from 'react'
// import store from '../../store'
// // import axios from 'axios'
// import {changInputAction, changWorkAction, addItemAction, delItemAction, getTodoList} from '../../store/action'

// import { NavBar, Icon, Button } from 'antd-mobile'
// import "./index.scss"

// export default class Redux extends Component {
//     constructor(props) {
//         super(props)
//         this.state = store.getState()
//         store.subscribe(this.storeChange) //订阅Redux的状态
//     }

//     componentDidMount(){
//         // axios.post('http://rap2.taobao.org:38080/app/mock/234046/api/home_my_channel').then((res)=>{
//         //     const list = []
//         //     res.data.data.mylist.forEach ((item)=>{
//         //         list.push(item.name1)
//         //     })
//             // console.log(list)
//         //     const action = getListAction(list)
//         //     store.dispatch(action)
//         // })

//         //异步方式
//         const action = getTodoList()
//         store.dispatch(action)

//     }

//     goback(){
//         // console.log(this)
//         let { history } = this.props
//         history.goBack()
//     }

//     changeInputValue (e){
//         // const action ={
//         //     type:'changeInput',
//         //     value:e.target.value
//         // }
//         // store.dispatch(action)

//         store.dispatch(
//             changInputAction(e.target.value)
//         )
//     }
//     changework (e){
//         store.dispatch(
//             changWorkAction(e.target.value)
//         )
//     }
//     storeChange = ()=>{
//         this.setState(store.getState())
//     }
//     //添加记录
//     add(){
//         store.dispatch(addItemAction())
//     }
//     //删除
//     deleteItem(index){
//         // console.log(index)
//         store.dispatch(delItemAction(index))
//     }

//     render() {
//         const {list} = this.state
//         return (
//             <div>
//                 <nav>
//                     <NavBar
//                         mode="dark"
//                         icon={<Icon type="left" />}
//                         onLeftClick={ () => this.goback() }
//                     >
//                         redux测试使用
//                     </NavBar>
//                 </nav>

//                 <div style={{margin:10}}>
//                     <span>任务1：</span>
//                     <input type="text" 
//                     onChange={(e)=>this.changework(e)} 
//                     // value={this.state.works}
//                     placeholder={this.state.works}
//                     className="c_input" />
//                 </div>

//                 <div style={{margin:10}}>
//                     <span>任务2：</span>
//                     <div className="add">
//                         <input type="text" 
//                             onChange={(e)=>this.changeInputValue(e)} 
//                             placeholder={this.state.inputValue}
//                                 // value={this.state.inputValue}
//                             className="c_input1" />
//                         <Button type="warning" className="c_input2" onClick={ ()=> this.add() }>添加</Button>
//                     </div>
//                 </div>
               
//                <ul className="list_ul">
//                     { 
//                         list.map((item,index)=>{
//                             return (
//                                 <li className="list_li" key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>
//                             )
//                         }) 
//                     }
                  
//                </ul>
                
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export default class Redux extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
