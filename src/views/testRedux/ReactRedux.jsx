// import React, { Component } from 'react'
// import store from '../../store'
// import {connect} from 'react-redux'  //引入连接器
// // import axios from 'axios'
// import {changInputAction, addItemAction, delItemAction, getTodoList} from '../../store/action'

// import { NavBar, Icon, Button } from 'antd-mobile'
// import "./index.scss"

// class ReactRedux extends Component {
//     constructor(props) {
//         super(props)
//         this.state=store.getState()
//         this.storeChange = this.storeChange.bind(this)  //转变this指向
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
//         let { history } = this.props
//         history.goBack()
//     }

//     // changeInputValue (e){
//     //     store.dispatch(
//     //         changInputAction(e.target.value)
//     //     )
//     // }
//     storeChange(){
//         this.setState(store.getState())
//     }
//     // //添加记录
//     // add(){
//     //     store.dispatch(addItemAction())
//     // }
//     // //删除
//     // deleteItem(index){
//     //     store.dispatch(delItemAction(index))
//     // }

//     render() {
//         const {list} = this.props
//         return (
//             <div>
//                 <nav>
//                     <NavBar
//                         mode="light"
//                         icon={<Icon type="left" />}
//                         onLeftClick={ () => this.goback() }
//                     >
//                         redux测试使用
//                     </NavBar>
//                 </nav>

//                 <div style={{margin:10}}>
//                     <div className="add">
//                         <input type="text" 
//                             onChange={(e)=>this.props.changeInputValue(e)} 
//                             placeholder={this.props.inputValue1}
//                             className="c_input1" />
//                         <Button type="warning" className="c_input2" onClick={ ()=> this.props.add() }>添加</Button>
//                     </div>
//                 </div>
               
//                <ul className="list_ul">
//                     { 
//                         list.map((item,index)=>{
//                             return (
//                                 <li className="list_li" key={index} onClick={(index)=>this.props.deleteItem(index)}>{item}</li>
//                             )
//                         }) 
//                     }
                  
//                </ul>
                
//             </div>
//         )
//     }
// }

// const stateToProps = (state)=>{
//     return {
//         inputValue1 : state.inputValue,
//         list: state.list
//     }
// }

// const dispatchToProps = () =>{
//     return {
//         changeInputValue (e){
//             store.dispatch(
//                 changInputAction(e.target.value)
//             )
//         },
//          //添加记录
//         add(){
//             store.dispatch(addItemAction())
//         },
//         //删除
//         deleteItem(index){
//             store.dispatch(delItemAction(index))
//         }
//     }
// }

// export default connect(stateToProps,dispatchToProps)(ReactRedux);



import React, { Component } from 'react'

export default class ReactRedux extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
