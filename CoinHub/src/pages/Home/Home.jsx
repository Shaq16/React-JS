import './Home.css'

export function Home(){
    return(
        <div className='home'>
            <div className='hero'>
                <h1>Largest <br />Crypto Exchange Market</h1>
                <p>Welcome ot the world's largest cryptocurrency marketplace. Sign up to explore more about crypto</p>
                <form >
                    <input type="text" placeholder='Search Crypto' />
                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{textAlign:"center"}}>24H Change</p>
                    <p className='market-cap'>Market Cap</p>
                </div>
            </div>

        </div>
    );
}