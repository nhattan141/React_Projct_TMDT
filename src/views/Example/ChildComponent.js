import React from 'react';
import './Demo.scss'
/* 
    JSX => return block, 1 phan tu html
    Muon in nhieu th html nhung ko boc 1 lop div ben ngoai thi ta dung 
    tag <></> hoac fragment
*/
class ChildComponent extends React.Component {
    state = {
        showJobs: false,

    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete:', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        //so sanh biến showJobs với đk true
        //nếu đúng lấ phần từ đầu tiên
        //2 phần tử cách nhau bới giấu :
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className='Job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
/*const ChildComponent = (props) => { // chỉ dùng function component khi kết hợp với hook
    let { arrJobs } = props;
    return (
        <>
            <div className='Job-lists'>
                {
                    arrJobs.map((item, index) => {
                        if (item.salary >= 500) {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} $
                                </div>
                            )

                        }
                    })
                }
            </div>
        </>
    )
}*/
export default ChildComponent;