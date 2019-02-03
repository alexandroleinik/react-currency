
import React, { Component } from 'react';


class Currencies extends Component {

    render() { 
        if(!this.props.error){
            return ( 
                <div className="row">
                {this.props.currencies.map((currency)=>{
                    return  <div key={currency.ccy} className="col-md-3">
                    <div className="card">
                        <div className="card-title">Валюта: <span>{currency.ccy}</span></div>
                        <hr/>
                        <div className="card-text">Покупка: {currency.buy}{currency.base_ccy}</div>
                        <div className="card-text">Продажа: {currency.sale}{currency.base_ccy}</div>
                    </div>
               </div>
            })}
        </div>
             );
        }
        else{
            return(
                <div class="alert alert-warning" role="alert">
  Please select the another bank!
</div>
            );
        }
        
    }
}

export default Currencies