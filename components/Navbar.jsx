import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src='./logo.svg' alt='apple logo'/>
            <ul>
                {
                    [
                        {label: 'Store'},
                        {label: 'Mac'},
                        {label: 'iPad'},
                        {label: 'iPhone'},
                        {label: 'Watch'},
                        {label: 'AirPods'},
                        
                    ].map(({label}) => (
                        <li key={label}>
                        <a href='label'>{label}</a>
                            </li>
                        
                    )

                    )
                }
            </ul>
            <div className='flex-center gap-3'>
                <button>
                    <img src='./search.svg' alt='search'/>
                </button>
                <button>
                    <img src='./cart.svg' alt='cart'/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar