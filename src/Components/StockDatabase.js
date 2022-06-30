import React, { useEffect, useState } from 'react'
import Product from '../Shared/StockInfo'

function StockDatabase(){

    //const {transcations} = Product;


    const [searchResult, setSearchResult] = useState(Product)


    const [searchTerm, setSearchTerm] = useState('');
    //const [searchResult, setSearchResult] = useState(people);

    const handleChange = event =>{
        setSearchTerm(event.target.value)
    }


    useEffect(()=>{
        const result = Product.filter(person => person.name.toLowerCase().includes(searchTerm)
        );
        setSearchResult(result)
    }, [searchTerm])



    //Stock
    const sortByLow = () =>{
        setSearchResult((Product)=>{
            const dataToSort = [...Product];

            dataToSort.sort((a, b)=> (a.stock) - (b.stock))
            return dataToSort;
        })
    }
    
    //Stock
    const sortByHigh = () =>{
        setSearchResult((Product)=>{
            const dataToSort = [...Product];

            dataToSort.sort((a, b)=> (b.stock) - (a.stock))
            return dataToSort;
        })
    }


    //Cost

    const sortLowCost = () =>{
        setSearchResult((Product)=>{
            const dataToSortCost = [...Product];

            dataToSortCost.sort((a, b)=> (a.price) - (b.price));
            return dataToSortCost
        })
    }

    //Cost 

    const sortHighCost = ()=>{
        setSearchResult((Product)=>{
            const dataToSortCost = [...Product];

            dataToSortCost.sort((a,b)=> (b.price) - (a.price));
            return dataToSortCost
        })
    }



   
    const stockAmount = searchResult.map(transcation => transcation.totalCost)

    const stockQty = searchResult.map(transcation => transcation.stock)

    const totalStockCost = stockAmount.filter(transcation => transcation > 0)
    .reduce((acc, transcation)=> (acc += parseInt(transcation)),0);

    const totalQuantity = stockQty.filter(transcation => transcation > 0)
    .reduce((acc, transcation)=> (acc += parseInt(transcation)),0);



    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>INVENTORY DATABASE</h1>

                        

                        <div className="row">
                        <div className="col-md-8 mt-3">
                        
                        

                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Search......."
                            value={searchTerm}
                            onChange={handleChange}
                            />
                        <table class="table mt-4">
                            <thead>
                            <tr>
                                <th>SKU</th>
                                <th>Description</th>
                                <th>Product</th>
                                <th>Cost</th>
                                <th>QTY</th>
                                <th>Re-Order</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                {searchResult.map((item, index)=>(
                                <tr>
                                    <td>{item.sku}</td>
                                    <td>{item.description}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.stock}.00</td>
                                    <td>{item.reorderPoint}.00</td>
                                    <td>${item.totalCost}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>

                        <div className="col-md-4 mt-4">
                            <h4><strong>FILTERS</strong></h4>
                            <div className="filter">
                        
                            <span className="heading">
                               <div className="qty">SORT BY QTY </div> 

                                <button className="btn btn-info lowstock" onClick={sortByLow}>
                                    <i class="fas fa-arrow-down"></i> Low
                                </button>

                                <button className="btn btn-info highstock" onClick={sortByHigh}>
                                    <i class="fas fa-arrow-up"></i> High
                                </button>
                            </span>

                            <span className="heading mb-3">
                                <div className="cost">SORT BY COST</div>

                                <button className="btn btn-info lowstock" onClick={sortLowCost}>
                                    <i class="fas fa-arrow-down"></i> Low
                                </button>

                                <button className="btn btn-info highstock" onClick={sortHighCost}>
                                    <i class="fas fa-arrow-up"></i> High
                                </button>
                            </span>

                            <span className="dashboard">
                                <div className="totalInv mt-5">
                                    <p style={{fontWeight: 'bolder'}}>Total Inventory</p>
                                <p>{totalQuantity} Units</p>
                                </div>

                                <div className="totalVal mt-3">
                                  <p style={{fontWeight: 'bolder'}}>Total Inventory Value</p>  
                                <p>$ {totalStockCost}</p>
                                </div>
                            </span>
                            

                            </div>
                            
                            

                            
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default StockDatabase