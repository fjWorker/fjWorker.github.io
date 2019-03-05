import React from 'react';
import srxc from '../../images/gedan.jpg';
import '../../style/gedan.css'
class Bannier extends React.Component {
    change(e) {
        console.log(e)
    }
    render() {
        return (
            <div className="gedanTop">
                我是歌单页
                <select name="" id="">
                    <option value="选择分类">选择分类</option>
                </select>
                <ul>
                    <li>5555</li>
                    <li>6666</li>
                    <li>7777</li>
                    <li>8888</li>
                </ul>
                <input type="file" onChange={this.change.bind(this)}/>
            </div>
        )
    }
}
class gedan extends React.Component {
    render() {
        return (
            <div className='friend'>
                <Bannier />
                <img src={srxc} alt=""/>
            </div>
        )
    }
}

export default gedan;
