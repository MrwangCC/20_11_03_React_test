import Counter from '../components/counter';
import { createIncrementAction, createDecrementAction } from '../redux/action_creators'
import { connect } from 'react-redux';

// 完整写法
// function mapStateToProps(state) {
//     return { count: state }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         increment: (value) => {
//             dispatch(createIncrementAction(value));
//         },
//         decrement: (value) => {
//             dispatch(createDecrementAction(value));
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// 简写方式
// let mapStateToProps = state => ({ count: state })

// let mapDispatchToProps = dispatch => ({
//     increment: (value) => { dispatch(createIncrementAction(value)); },
//     decrement: (value) => { dispatch(createDecrementAction(value)); }
// })

export default connect(
    state => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction
    }
)(Counter);

// 如果connect函数的第二个参数接收的是mapDispatchToProps
// 那么UI组件接收到的increment是：(value) => { dispatch(createIncrementAction(value)); }
// 那么UI组件接收到的decrement是：(value) => { dispatch(createDecrementAction(value)); }

// 按照新的写法：
// 如果connect函数的第二个参数传递的是{ increment: createIncrementAction }
// 那么UI组件接收到的increment是：(value) => { dispatch(createIncrementAction(value)); }