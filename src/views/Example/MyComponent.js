import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
/* 
    JSX => return block, 1 phan tu html
    Muon in nhieu th html nhung ko boc 1 lop div ben ngoai thi ta dung 
    tag <></> hoac fragment
*/
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcjob1', title: 'Developer', salary: '500' },
            { id: 'abcjob2', title: 'Tester', salary: '400' },
            { id: 'abcjob3', title: 'Manager', salary: '1000' }
        ]
    }
    addNewJob = (job) => {
        console.log('>>> check job from parent: ', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // dấu ... là toán tử copy
            // copy các phần tử của arrJobs ở state
            // sau đó tạo thêm phần tử job
            // arrJobs: currentJobs
        })
    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        //lặp tất cả các phần tử trong mảng
        //chỉ trả về các phần tử có id khác với id của job vừa tải lên
        this.setState({
            arrJobs: currentJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run did update: prev State:', prevState, ' currtent state: ', this.state)
    }
    componentDidMount() {
        console.log('>>> Run component did mount')
    }
    render() {
        console.log('>>> call render', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;