

const App=()=>{
    const [product,setProduct]=React.useState([]);
    const [form,upDateForm]=React.useState({
        'name':'',
        'price':''
    })

    React.useEffect(()=>{
   fetchProduct()
    },[])

    function fetchProduct()
    {
        fetch('/api/product')
        .then((res)=>res.json())
        .then((data)=>{
            console.log('data',data);
            setProduct(data)
        })
        .catch((err)=>{
            console.log('err',err);
        })
    }

    function handleSubmit(e)
    {
e.preventDefault();
if(!form.name || !form.price)
{
    return
}

fetch('/api/product',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(form)
})
.then((res)=>res.json())
.then((data)=>{
    fetchProduct()
    setForm({'name':'','price':''})
})
.catch((err)=>console.log(err))
    }

    function setForm(e,type)
    {
        if(type==="name")
        {
            upDateForm({
                ...form,
                name:e.target.value
            })
        }
        else if(type==="price")
        {
            upDateForm({
                ...form,
                price:e.target.value
            })
        }
    }

    function deletProduct(productid)
    {
        fetch(`/api/product/${productid}`,{
            method:'DELETE',
        })
        .then((res)=>res.json())
        .then((data)=>{
            fetchProduct()
           // setForm({'name':'','price':''})
        })
        .catch((err)=>console.log(err))
    }
    return(<>
    <div className="mt-10 mb-10">
    <form onClick={handleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Productname" value={form.name} onChange={(e)=>{setForm(e,'name')}} />
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Price" value={form.price} onChange={(e)=>{setForm(e,'price')} }/>
  </div>
  
  <button type="submit" className="btn btn-secondary mt-4">Submit</button>
</form>
    </div>
    
    <ul className="list-group mt-4">
        {
            product.map(product=> {
                return(<li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                    <div><strong>{product.name}</strong> ${product.price}</div>
                    <button className="btn btn-primary" style={{cursor:'pointer'}} onClick={()=>deletProduct(product.id)} >Delete</button>
                    </li>)
            } )
        }
  
  </ul></>)
}

ReactDOM.render(<App />, document.getElementById('root'));
