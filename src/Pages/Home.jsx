import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([])
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [filter,setFilter]= useState('')
    const [sort,setSort]= useState('')
    const [search,setSearch] =useState('')
    const [searchText,setSearchText] = useState('')


    useEffect(() => {
        fetch(`https://jwt-practice-server.vercel.app/dataall?page=${currentPage}&size=${itemPerPage}&filter=${filter}&sort=${sort}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [currentPage,itemPerPage,filter,sort,search])

    useEffect(() => {
        fetch(`https://jwt-practice-server.vercel.app/alldatacount?filter=${filter}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
            })
    }, [filter,search])

    const numberOfPages = Math.ceil(count / itemPerPage)

    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

const handlePaginationButton =(value) =>{
   console.log(value)
   setCurrentPage(value)
}

const handleReset = () =>{
setFilter('')
setSort('')
setSearch('')
setSearchText('')
}
const handleSearch = e =>{
    e.preventDefault()
    // const text = e.target.search.value
    // setSearch(text)
    setSearch(searchText)

    
}



    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                        onChange={e => {
                            setFilter(e.target.value)
                            setCurrentPage(1)
                        }}
                            name='category'
                            id='category'
                            value={filter}
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='T Shirt'>T Shirt</option>
                            <option value='Genji'>Genji</option>
                            <option value='Pant'>Pant</option>
                            <option value='Paijama'>Paijama</option>
                        </select>
                    </div>

                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                         onChange={e => {
                            setSort(e.target.value)
                            setCurrentPage(1)
                        }}
                            name='sort'
                            value={sort}
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Price</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <button onClick={handleReset} className='btn'>Reset</button>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        data.map(card => <div className=" mt-9 border-2 p-9 border-green-700" key={card._id}>
                            <h1>{card.name}</h1>
                            <h1>{card.price}</h1>
                            <h1>{card.color}</h1>
                            <h1>{card.description}</h1>

                        </div>)
                    }
                </div>
            </div>

            <div className='flex justify-center mt-12'>
                <button
                disabled = {currentPage === 1}
                onClick={()=>handlePaginationButton(currentPage -1)}
                className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>


                        <span className='mx-1'>previous</span>


                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        onClick={() =>handlePaginationButton(btnNum)}
                        key={btnNum}
                        className={`hidden ${currentPage ===btnNum ? 'bg-red-700':''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button
                  disabled = {currentPage === numberOfPages}
                 onClick={()=>handlePaginationButton(currentPage +1)}
                className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                    </div>
                </button>
            </div>
        </div>
    );
};

export default Home;