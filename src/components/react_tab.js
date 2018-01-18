import React, {Component} from 'react';

class TabsControl extends Component{
    constructor(  ){
        super(  );
        this.state = {
            currentIndex : 0
        };
    }

    check_title_index( index ){
        return index === this.state.currentIndex ? "active" : "";
    }

    check_item_index( index ){
        return index === this.state.currentIndex ? "tab_item1 show" : "tab_item1";
    }

    render(  ){
        let _this = this;
        return(
            <div className="strategy-tab">
                { /* 动态生成Tab导航 */ }
                <div className="strategy-tab-title clearfix">
                    {
                        React.Children.map( this.props.children, ( element, index ) => {
                            return(
                                <div className="col-sm-3">
                                    <span onClick={ () => { this.setState({ currentIndex : index }); } } className={ this.check_title_index( index ) }>{ element.props.name }</span>
                                </div>

                            );
                        })
                    }
                </div>
                { /* Tab内容区域 */ }
                <div className="strategy-tab-item">
                    {
                        React.Children.map(this.props.children, (element, index )=>{
                            return(
                                <div className={ this.check_item_index( index ) }>{ element }</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TabsControl;