import React, { useContext, useState } from "react";
import styled from "styled-components";
import {FilterProductContext} from "../Context/FilterProduct";
import FormatePrice from "../Helper/FormatePrice"

const Wrapper = styled.div`
    margin: 2rem 0;

    .search {
        width: 70%;
        outline: none;
        background-color: ${({theme}) => theme.colors.back};
        box-shadow : ${({theme}) => theme.colors.shadow};
        color: white;
        padding: .3rem .5rem;
        border: none;
        border-radius: .5rem;
    }

    .category , .price{
        margin: 2rem 0;
        
        
        .cathead , .pricehead {
            margin: 1.5rem 0;
            font-weight: bold;
            font-size: 1.5rem;
        }

        .catprop , .priprop  {
            font-size: 1.4rem;
            margin: .5rem 0;
            cursor: pointer;
            display: flex;
            background-color: transparent;
            border: none;
            color: ${({theme}) => theme.colors.color};

            &:hover {
                color: ${({theme}) => theme.colors.hover};
                text-decoration: underline;
            }
        }

        .priprop {
            font-size: 1.2rem;
        }
    }

    .company {
        margin: 2rem 0;

        .cpyhead {
            margin: 1.5rem 0;
            font-weight: bold;
            font-size: 1.5rem;
        }

        .cpyselect {
            background-color: transparent;
            border: .2rem solid;
            border-radius: .5rem;
            color: ${({theme}) => theme.colors.color};

            option{
                background-color: ${({theme}) => theme.colors.bg} ;
            }
        }
    }

    .colors {
        margin: 2rem 0;

        .cpyhead {
            margin: 1.5rem 0;
            font-weight: bold;
            font-size: 1.5rem;
        }

        .colbtn {
            height: 1.2rem;
            width: 1.2rem;
            border-radius: 1rem;
            border: none;
            margin: 0 .3rem;
            color: transparent;
        }

        .colbtnall {
            background-color: transparent;
            border: none;
            color: ${({theme}) => theme.colors.color};
            margin: 0 .5rem;
        }
    }

    .reset {
        background-color: transparent;
        border: .2rem solid ${({theme}) => theme.colors.color} ;
        color:  ${({theme}) => theme.colors.color} ;
        border-radius: .5rem;
        padding: .2rem 3rem;
    }

    @media (max-width: ${({theme}) => theme.media.tab}) {
        width: 30%;
        margin: 0 auto;
        margin-bottom: 10rem;

        .search {
            width: 100%;
        }
    }
`

const Filter = () => {

    const [color , setColor] = useState(3);

    const {filterState , searchFunc} = useContext(FilterProductContext);
    
    const getdata = (data , props) => {
        let newval = data.map((curr) => curr[props] )

        if(props === "colors"){
            return ["ALL" , ...new Set([].concat(...newval))]
        }else {
            return ["ALL" , ...new Set(newval)]
        }
    }

    const getCtydata = getdata(filterState.isallData , "category");
    const getComdata = getdata(filterState.isallData , "company");
    const getColdata = getdata(filterState.isallData , "colors");

    
    return(
        <Wrapper>
        <form>
            <input type={"text"} onChange={(eve) => searchFunc(eve)} value={filterState.filter.text} name={"text"} className="search" placeholder="Search" />
        </form>

        <div className="category">
            <p className="cathead">Category</p>
            {
                getCtydata.map((curr , i) => <button className="catprop" key={i}
                value={curr} name="category" onClick={(eve) => searchFunc(eve)}
                >{curr}</button>)
            }
        </div>

        <div className="company">
            <p className="cpyhead">Company</p>
            <select className="cpyselect" name="company" onChange={(eve) => searchFunc(eve)}>
                {
                    getComdata.map((curr , i) => <option value={curr} key={i}>{curr}</option>)
                }
            </select>
        </div>

        <div className="colors">
            <p className="cpyhead">Colors</p>
            {
                getColdata.map((cuur , i) => {
                    if(cuur === "ALL") {
                        return <button className="colbtnall" key={i} style={{backgroundColor : cuur}}
                        onClick={(eve) => {searchFunc(eve); setColor(i);}} name="colors" value={cuur}
                        > {cuur} </button>
                    }else {
                        return <button className="colbtn" key={i} style={{backgroundColor : cuur}}
                        onClick={(eve) => {searchFunc(eve); setColor(i);}} name="colors" value={cuur}
                        >{i === color ? "_" : null}</button>
                    }
                })
            }
        </div>

        <div className="price"> 
            <p className="pricehead"> Price </p>
            <button name="price" value={100000} onClick={(eve) => searchFunc(eve)} className="priprop">Under <FormatePrice price={"100000"} /></button>
            <button name="price" value={1000000} onClick={(eve) => searchFunc(eve)} className="priprop">
                <FormatePrice price={"100000"}/> to <FormatePrice price={"1000000"}/>
            </button>
            <button name="price" value={5000000} onClick={(eve) => searchFunc(eve)} className="priprop">
                <FormatePrice price={"1000000"}/> to <FormatePrice price={"5000000"}/>
            </button>
            <button name="price" value={5000001} onClick={(eve) => searchFunc(eve)} className="priprop">Up to <FormatePrice price={"5000000"} /></button>
        </div>

        <button name="reset" className="reset" value={0} onClick={(eve) => searchFunc(eve)}>Reset</button>
        </Wrapper>
    )
}

export default Filter;